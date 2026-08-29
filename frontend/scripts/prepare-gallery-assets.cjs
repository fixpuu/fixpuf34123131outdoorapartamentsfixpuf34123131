/*
 * Copies the apartment photo library into CRA's public directory and creates
 * the manifest consumed by the React gallery. HEIC source images are converted
 * to JPEG so that they work in every modern browser.
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

const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
  const fullPath = path.join(dir, entry.name);
  return entry.isDirectory() ? walk(fullPath) : [fullPath];
});

const copyPhoto = async (sourcePath, apartmentSlug, index) => {
  const extension = path.extname(sourcePath).toLowerCase();
  const destinationDirectory = path.join(outputRoot, apartmentSlug);
  fs.mkdirSync(destinationDirectory, { recursive: true });
  const name = `${String(index + 1).padStart(3, "0")}${extension === ".heic" ? ".jpg" : extension}`;
  const destinationPath = path.join(destinationDirectory, name);

  if (fs.existsSync(destinationPath)) {
    return `/images/apartments/${apartmentSlug}/${name}`;
  }

  if (extension === ".heic") {
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
    .filter((entry) => entry.isDirectory())
    .sort((a, b) => a.name.localeCompare(b.name, "it"));
  const manifest = {};

  for (const group of groups) {
    const apartmentSlug = toSlug(group.name);
    const files = walk(path.join(sourceRoot, group.name))
      .filter((file) => webExtensions.has(path.extname(file).toLowerCase()) || path.extname(file).toLowerCase() === ".heic")
      .sort((a, b) => a.localeCompare(b, "it"));
    manifest[apartmentSlug] = [];
    for (let index = 0; index < files.length; index += 1) {
      manifest[apartmentSlug].push(await copyPhoto(files[index], apartmentSlug, index));
    }
  }

  const output = `// Generato da scripts/prepare-gallery-assets.cjs. Non modificare manualmente.\nexport const PHOTO_GALLERIES = ${JSON.stringify(manifest, null, 2)};\n`;
  fs.writeFileSync(manifestPath, output);
  console.log(`Prepared ${Object.values(manifest).flat().length} apartment photos.`);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
