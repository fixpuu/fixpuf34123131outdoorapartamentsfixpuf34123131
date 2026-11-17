/*
 * Copies the apartment photo library into CRA's public directory and creates
 * the manifest consumed by the React gallery. HEIC source images are converted
 * to JPEG so that they work in every modern browser.
 * Follows the user curated narrative sequence:
 * 1. Panoramica stanza principale (living / camera)
 * 2. Dettagli stanza principale
 * 3. Altra stanza (cucina, seconda camera, ecc.) + dettagli
 * 4. Bagno (panoramica + dettagli)
 * 5. Terrazzo / Vista / Esterni
 */
const fs = require("fs");
const path = require("path");
const convert = require("heic-convert");

const sourceRoot = path.resolve(__dirname, "../FOTO");
const outputRoot = path.resolve(__dirname, "../public/images/apartments");
const manifestPath = path.resolve(__dirname, "../src/constants/photoManifest.js");
const webExtensions = new Set([".jpg", ".jpeg", ".png", ".webp"]);

const toSlug = (value) => value
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/(^-|-$)/g, "");

const CURATED_GALLERIES = {
  "abete-n10": [
    "principale.jpeg",
    "WhatsApp Image 2026-06-17 at 10.10.26 (4).jpeg",
    "WhatsApp Image 2026-06-17 at 10.10.25 (6).jpeg",
    "WhatsApp Image 2026-06-17 at 10.10.26.jpeg",
    "2.jpeg",
    "WhatsApp Image 2026-06-17 at 10.10.25 (2).jpeg",
    "WhatsApp Image 2026-06-17 at 10.10.25 (5).jpeg",
    "WhatsApp Image 2026-06-17 at 10.10.20 (1).jpeg",
    "WhatsApp Image 2026-06-17 at 10.10.25 (7).jpeg",
    "WhatsApp Image 2026-06-17 at 10.10.25 (3).jpeg",
    "WhatsApp Image 2026-06-17 at 10.10.25 (8).jpeg",
    "WhatsApp Image 2026-06-17 at 10.10.26 (2).jpeg",
    "WhatsApp Image 2026-06-17 at 10.10.25.jpeg",
    "WhatsApp Image 2026-06-17 at 10.10.25 (1).jpeg",
    "WhatsApp Image 2026-06-17 at 10.10.20 (2).jpeg"
  ],
  "la-tana-delle-marmotte-pila-1800": [
    "principale.jpeg",
    "WhatsApp Image 2026-11-10 at 12.32.28 (6).jpeg",
    "WhatsApp Image 2026-11-10 at 12.32.28.jpeg",
    "WhatsApp Image 2026-11-10 at 12.32.28 (2).jpeg",
    "WhatsApp Image 2026-11-10 at 12.32.28 (5).jpeg",
    "WhatsApp Image 2026-11-10 at 12.32.28 (4).jpeg",
    "WhatsApp Image 2026-11-10 at 12.32.28 (3).jpeg",
    "WhatsApp Image 2026-11-10 at 12.32.28 (1).jpeg",
    "WhatsApp Image 2026-11-10 at 12.32.27 (1).jpeg",
    "WhatsApp Image 2026-11-10 at 12.32.27.jpeg",
    "WhatsApp Image 2026-11-10 at 12.32.27 (4).jpeg",
    "WhatsApp Image 2026-11-10 at 12.32.27 (2).jpeg",
    "WhatsApp Image 2026-11-10 at 12.32.27 (3).jpeg",
    "WhatsApp Image 2026-11-10 at 12.32.28 (7).jpeg"
  ],
  "pila-1800": [
    "_DSC6724-HDR.JPG",
    "_DSC6715-HDR-2.JPG",
    "_DSC6751-HDR.JPG",
    "_DSC6786.JPG",
    "_DSC6754-HDR.JPG",
    "_DSC6745-HDR-2.JPG",
    "_DSC6763-HDR.JPG",
    "_DSC6766-HDR.JPG",
    "_DSC6790.JPG",
    "_DSC6798.JPG",
    "_DSC6800.JPG",
    "_DSC6791.JPG",
    "_DSC6792.JPG",
    "_DSC6769-HDR.JPG",
    "_DSC6775-HDR.JPG",
    "_DSC6781-HDR.JPG",
    "_DSC6778-HDR.JPG",
    "_DSC6793.JPG",
    "_DSC6795.JPG",
    "_DSC6801.JPG",
    "_DSC6935-HDR.JPG",
    "_DSC6938-HDR.JPG",
    "_DSC6941-HDR.JPG"
  ],
  "pila-29": [
    "IMG_6893.JPG",
    "IMG_6877.JPG",
    "IMG_6878.JPG",
    "IMG_6895.JPG",
    "IMG_6896.JPG",
    "IMG_6897.JPG",
    "IMG_6879.JPG",
    "IMG_6894.JPG",
    "IMG_6887.JPG",
    "IMG_6884.JPG",
    "IMG_6885.JPG",
    "IMG_6888.JPG",
    "IMG_6889.JPG",
    "IMG_6886.JPG",
    "IMG_6891.JPG",
    "IMG_6880.JPG",
    "IMG_6890.JPG",
    "IMG_6881.JPG",
    "IMG_6882.JPG",
    "IMG_6883.JPG",
    "IMG_6892.JPG"
  ],
  "pila-63": [
    "principale.JPG",
    "_DSC6821-HDR.JPG",
    "_DSC6827-HDR.JPG",
    "_DSC6815-HDR.JPG",
    "_DSC6920-HDR.JPG",
    "_DSC6911-HDR.JPG",
    "_DSC6833-HDR.JPG",
    "_DSC6836-HDR.JPG",
    "_DSC6842-HDR.JPG",
    "_DSC6851-HDR.JPG",
    "_DSC6860-HDR.JPG",
    "_DSC6863-HDR.JPG",
    "_DSC6875-HDR.JPG",
    "_DSC6866-HDR.JPG",
    "_DSC6872-HDR.JPG",
    "_DSC6898-HDR.JPG",
    "_DSC6899-HDR.JPG",
    "_DSC6886-HDR.JPG",
    "_DSC6929-HDR.JPG",
    "_DSC6932-HDR.JPG"
  ],
  "pila-64": [
    "principale.jpg",
    "IMG_2238.jpg",
    "IMG_2940.jpg",
    "IMG_2943.jpg",
    "IMG_2941.jpg",
    "IMG_2235.jpg",
    "IMG_2231.jpg",
    "IMG_2241.jpg",
    "IMG_2249.jpg",
    "IMG_2250.jpg",
    "IMG_2236.jpg",
    "IMG_2936.jpg",
    "IMG_2932.jpg",
    "IMG_2245.jpg",
    "IMG_2244.jpg"
  ],
  "saint-salod-fienile": [
    "_DSC6959-HDR 2.jpg",
    "_DSC6959-HDR.JPG",
    "_DSC6956-HDR 2.jpg",
    "_DSC6965-HDR 2.jpg",
    "_DSC6965-HDR.JPG",
    "_DSC6968-HDR.JPG",
    "_DSC6977-HDR.JPG",
    "_DSC7082.JPG",
    "_DSC6986-HDR.JPG",
    "su camere.JPG",
    "_DSC7091.JPG",
    "_DSC7055-HDR.JPG",
    "_DSC7052-HDR.JPG",
    "_DSC6995-HDR.JPG",
    "_DSC6998-HDR.JPG",
    "_DSC7007-HDR.JPG",
    "_DSC7076.JPG",
    "_DSC7079.JPG",
    "_DSC7101.JPG",
    "_DSC7019-HDR.JPG",
    "_DSC7016-HDR.JPG",
    "_DSC7028-HDR-2.JPG",
    "_DSC7061-HDR.JPG",
    "_DSC7073-HDR.JPG",
    "_DSC7070-HDR.JPG",
    "_DSC7095.JPG",
    "_DSC7133-HDR.JPG",
    "_DSC7109-HDR.JPG",
    "_DSC7112-HDR.JPG",
    "_DSC7121-HDR.JPG",
    "_DSC7124-HDR.JPG",
    "_DSC7155.JPG",
    "_DSC7156-HDR.JPG",
    "_DSC7162-HDR.JPG",
    "_DSC7168.JPG",
    "_DSC7169.JPG",
    "_DSC7180.JPG",
    "_DSC7191.JPG",
    "_DSC7194.JPG"
  ],
  "saint-salod-zia": [
    "principale.jpg",
    "Foto_10.jpg",
    "Foto_73.jpg",
    "Foto_17.jpg",
    "Foto_51 copia.jpg",
    "Foto_81 copia.jpg",
    "Foto_74.jpg",
    "Foto_52.jpg",
    "Foto_21.jpg",
    "Foto_53.jpg",
    "Foto_24 copia.jpg",
    "Foto_28 copia.jpg",
    "Foto_29.jpg"
  ],
  "ski-and-sky": [
    "principale.HEIC",
    "IMG_0180.HEIC",
    "IMG_0176.HEIC",
    "IMG_0169.HEIC",
    "IMG_0172.HEIC",
    "IMG_0165.HEIC",
    "IMG_0157.HEIC",
    "IMG_0168.HEIC",
    "IMG_0167.HEIC"
  ],
  "studio-33": [
    "001.jpg"
  ],
  "white-relax": [
    "principale.heic",
    "IMG_0236.heic",
    "IMG_0294.HEIC",
    "IMG_0293.HEIC",
    "IMG_0306.heic",
    "IMG_0298.heic",
    "IMG_0324.heic",
    "IMG_0283.HEIC",
    "IMG_0256.HEIC",
    "IMG_0268.HEIC",
    "IMG_0269.heic",
    "IMG_0250.HEIC",
    "IMG_0251.HEIC",
    "IMG_0258.HEIC",
    "IMG_0270.HEIC",
    "IMG_0280.heic",
    "IMG_0278.HEIC",
    "IMG_0290.HEIC",
    "IMG_0314.HEIC",
    "IMG_0315.HEIC",
    "IMG_0302.heic",
    "IMG_0309.HEIC",
    "IMG_0346.heic",
    "IMG_0348.heic",
    "IMG_0245.HEIC",
    "IMG_0234.heic",
    "IMG_0259.HEIC",
    "IMG_0262.HEIC",
    "IMG_0264.HEIC",
    "IMG_0265.HEIC",
    "IMG_0240.HEIC",
    "IMG_0241.heic",
    "IMG_0242.heic"
  ]
};

const copyPhoto = async (sourcePath, apartmentSlug, index) => {
  const extension = path.extname(sourcePath).toLowerCase();
  const destinationDirectory = path.join(outputRoot, apartmentSlug);
  fs.mkdirSync(destinationDirectory, { recursive: true });
  const isHeic = extension === ".heic";
  const outExt = isHeic ? ".jpg" : extension;
  const name = `${String(index + 1).padStart(3, "0")}${outExt}`;
  const destinationPath = path.join(destinationDirectory, name);

  // If already converted in /tmp/photo_inspection, we can copy from there for speed
  const baseName = path.basename(sourcePath, path.extname(sourcePath));
  const cachedTmp = path.join("/tmp/photo_inspection", apartmentSlug, baseName + (isHeic ? ".jpg" : extension));

  if (fs.existsSync(cachedTmp)) {
    await fs.promises.copyFile(cachedTmp, destinationPath);
  } else if (isHeic) {
    const input = await fs.promises.readFile(sourcePath);
    const output = await convert({ buffer: input, format: "JPEG", quality: 0.88 });
    await fs.promises.writeFile(destinationPath, output);
  } else {
    await fs.promises.copyFile(sourcePath, destinationPath);
  }

  return `/images/apartments/${apartmentSlug}/${name}`;
};

const main = async () => {
  const groups = fs.readdirSync(sourceRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && entry.name !== "PILA 1400")
    .sort((a, b) => a.name.localeCompare(b.name, "it"));
  const manifest = {};

  for (const group of groups) {
    const apartmentSlug = toSlug(group.name);
    const groupDir = path.join(sourceRoot, group.name);
    const destDir = path.join(outputRoot, apartmentSlug);

    // Clean destination directory completely
    if (fs.existsSync(destDir)) {
      fs.rmSync(destDir, { recursive: true, force: true });
    }
    fs.mkdirSync(destDir, { recursive: true });

    let files = [];
    if (CURATED_GALLERIES[apartmentSlug]) {
      files = CURATED_GALLERIES[apartmentSlug].map((f) => path.join(groupDir, f));
    } else {
      files = fs.readdirSync(groupDir)
        .filter((f) => webExtensions.has(path.extname(f).toLowerCase()) || path.extname(f).toLowerCase() === ".heic")
        .sort((a, b) => a.localeCompare(b, "it"))
        .map((f) => path.join(groupDir, f));
    }

    manifest[apartmentSlug] = [];
    for (let index = 0; index < files.length; index += 1) {
      manifest[apartmentSlug].push(await copyPhoto(files[index], apartmentSlug, index));
    }
  }

  const output = `// Generato da scripts/prepare-gallery-assets.cjs. Non modificare manualmente.\nexport const PHOTO_GALLERIES = ${JSON.stringify(manifest, null, 2)};\n`;
  fs.writeFileSync(manifestPath, output);
  console.log(`Prepared ${Object.values(manifest).flat().length} apartment photos in curated order.`);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
