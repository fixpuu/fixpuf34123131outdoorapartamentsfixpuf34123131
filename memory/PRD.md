# Outdoor Apartments — PRD

## Original Problem Statement
Sito web moderno per **OUTDOOR APARTMENTS**, azienda di gestione di appartamenti/bnb in affitto turistico a Pila, Valle d'Aosta (zona sciistica). Stile ispirato a lavi82.com: minimal, editorial, premium. Palette nero/bianco/grigio scuro + accento verde scuro. Font Playfair Display + Manrope.

## User Choices (First Session)
- Email delivery: **nessun invio reale** (solo DB) — Resend da integrare in futuro.
- Immagini: **stock curate** (Alps/Pila/chalet), no video background.
- Accento: **verde scuro (#2E4F3E)**.
- Font: **Playfair Display** headings + **Manrope** body.
- Widget prenotazioni: **placeholder Octorate** con dashed container + mock UI (date, ospiti, CTA).

## Personas
1. **Turista sciatore** — cerca appartamento a Pila per vacanza sulla neve.
2. **Proprietario immobile** — vuole affidare il proprio appartamento in gestione.
3. **Cliente business** (agenzia locale) — desidera un sito vetrina professionale.

## Core Requirements
- Home con hero full-screen + brand + claim "La tua vacanza in montagna a Pila".
- Sezione "Chi siamo" (placeholder editabile).
- Widget prenotazioni Octorate (placeholder dashed + mock UI date/ospiti/CTA).
- Griglia 8 appartamenti reali (dati forniti dal cliente) con pagina dettaglio.
- Pagina "Affidaci il tuo immobile" con form (nome, telefono, indirizzo immobile, email, descrizione) → MongoDB.
- Pagina "Contatti" e footer.
- Navbar sticky (Home, Appartamenti, Affidaci il tuo immobile, Contatti), responsive mobile.

## Implemented (Dec 2025)
- Backend FastAPI (`/app/backend/server.py`):
  - `GET /api/apartments` — lista 8 appartamenti (seed hard-coded, immagini Unsplash/Pexels).
  - `GET /api/apartments/{id}` — dettaglio singolo (404 se non trovato).
  - `POST /api/host-requests` — validazione Pydantic (EmailStr), persistenza in MongoDB collection `host_requests`.
  - `GET /api/host-requests` — listing (admin/futuro).
- Frontend React + Tailwind + Framer Motion:
  - Rotte: `/`, `/appartamenti`, `/appartamenti/:id`, `/affidaci-il-tuo-immobile`, `/contatti`.
  - Navbar fixed con effetto scroll + menu mobile.
  - Home: hero cinematografico, chi siamo split, booking widget, featured (4) + CTA host + sezione Octorate.
  - ApartmentsList: header immersivo + grid 3 col.
  - ApartmentDetail: hero full-screen + descrizione + amenities + sidebar sticky BookingWidget + Prenota ora.
  - HostWithUs: split copy + form validato, success state, toast (sonner).
  - Contact page + Footer con logo, contatti, social placeholder.
- Fonts: Playfair Display + Manrope via Google Fonts.
- Design guidelines: `/app/design_guidelines.json`.
- Test data-testids su tutti gli elementi principali.

## Testing
- iteration_1.json — 100% pass (backend + frontend, integration verified).

## Backlog (P1/P2)
- **P1**: Integrazione Octorate reale (incolla script embed nel div placeholder `#octorate-embed`).
- **P1**: Integrazione Resend per invio email form "Affidaci il tuo immobile" a `info@outdoorapartments.it`.
- **P1**: Sostituzione immagini stock con foto reali degli appartamenti (rendere `image_index` dinamico o caricare da CMS/S3).
- **P2**: CMS/pannello admin per aggiungere/modificare appartamenti senza toccare il codice.
- **P2**: Galleria multi-foto per singolo appartamento.
- **P2**: Pagina "Blog/News" per SEO stagionale (impianti Pila, meteo, piste).
- **P2**: Lingua EN/FR (i18n) per turismo internazionale.
- **P2**: Cookie banner + Privacy Policy / GDPR compliance.
- **P2**: Analytics (Plausible / GA4) + tracking conversioni prenotazione.

## Next Tasks
1. Fornire email reale e chiavi Resend per attivare invio form.
2. Fornire script embed Octorate per attivare prenotazioni reali.
3. Caricare foto reali appartamenti.

## Iteration 2 (Dec 2025) — GDPR / Legal Compliance
- Rimosso logo grande centrale nella hero (rimane solo in navbar). Eyebrow → titolo diretto.
- Cambiata immagine hero: Pexels 1054218 (cima alpina innevata + boschi di conifere), placeholder documentato in codice.
- **CookieBanner GDPR/Garante Privacy 2021 compliant**:
  - Compare al primo accesso, blocca cookie non tecnici finché no consenso.
  - Tre pulsanti di pari peso grafico (tutti outlined identici): Rifiuta tutti / Personalizza / Accetta tutti.
  - Modal preferenze con 4 categorie (necessary locked-on, functional/analytics/marketing off di default).
  - Stato persistito in `localStorage` chiave `oa_consent_v1` con versioning.
  - Riapribile dal footer link "Gestisci cookie".
- **Nuove rotte legali**:
  - `/privacy-policy` — Informativa Privacy art. 13 GDPR (titolare, finalità, basi giuridiche, diritti, ecc.)
  - `/cookie-policy` — con tabella cookie tecnici + sezione pronta per analytics/terze parti
  - `/note-legali` — T&C, dati societari, limitazioni responsabilità, foro
  - Tutte marcate "Bozza / placeholder" con banner di avviso in evidenza.
- **Host form** — aggiunta checkbox obbligatoria non preselezionata "Ho letto e accetto l'Informativa Privacy" con link cliccabile alla pagina. Blocca invio se non spuntata.
- Footer: link Privacy / Cookie Policy / Note Legali + "Gestisci cookie".
- Consent Mode ready: Octorate, GA e altri script di terze parti devono controllare `useConsent().choices.marketing` (o `.analytics`) prima di caricarsi.

## Testing
- iteration_2.json — 17/17 pass. Fix polish: tre pulsanti banner ora identici (outlined, no fill preferenziale).
