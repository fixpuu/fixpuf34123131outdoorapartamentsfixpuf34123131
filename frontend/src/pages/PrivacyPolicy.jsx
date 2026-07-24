import { LegalLayout, LegalSection } from "@/components/LegalLayout";

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      eyebrow="Informativa Privacy"
      title="Informativa sul trattamento dei dati personali"
      updated="Dicembre 2025 — bozza"
      seoPath="/privacy-policy"
      seoDescription="Informativa privacy di Outdoor Apartments ai sensi degli artt. 13-14 GDPR: titolare, finalità, basi giuridiche, diritti dell'interessato."
    >
      <p>
        La presente informativa è resa ai sensi degli artt. 13 e 14 del Regolamento
        (UE) 2016/679 (GDPR) e del D.Lgs. 196/2003 come modificato dal D.Lgs.
        101/2018, agli utenti che interagiscono con il sito{" "}
        <strong className="text-white">outdoorapartments.it</strong>.
      </p>

      <LegalSection n="1" title="Titolare del trattamento">
        <p>
          Titolare del trattamento è <strong className="text-white">[Ragione sociale]</strong>,
          con sede legale in <strong className="text-white">[Indirizzo completo]</strong>,
          P.IVA <strong className="text-white">[Partita IVA]</strong>, C.F.{" "}
          <strong className="text-white">[Codice fiscale]</strong>.
        </p>
        <p>
          Contatti: email <strong className="text-white">[info@outdoorapartments.it]</strong> —
          PEC <strong className="text-white">[pec@…]</strong> — telefono{" "}
          <strong className="text-white">[+39 …]</strong>.
        </p>
      </LegalSection>

      <LegalSection n="2" title="Tipologie di dati raccolti">
        <p>
          Il Titolare raccoglie i dati personali che l'Utente fornisce volontariamente
          compilando il form "Affidaci il tuo immobile": nome e cognome, numero di
          telefono, indirizzo dell'immobile, indirizzo email, eventuale descrizione
          dell'immobile.
        </p>
        <p>
          Potrebbero inoltre essere raccolti dati di navigazione (indirizzo IP,
          browser, sistema operativo, pagine visitate) tramite cookie tecnici e —
          previo consenso — cookie analitici / di terze parti come descritto nella{" "}
          <a href="/cookie-policy" className="underline text-[#B7CFC0]">Cookie Policy</a>.
        </p>
      </LegalSection>

      <LegalSection n="3" title="Finalità e basi giuridiche">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong className="text-white">Gestione richieste di contatto</strong>{" "}
            provenienti dal form "Affidaci il tuo immobile" — base giuridica: misure
            precontrattuali su richiesta dell'interessato (art. 6.1.b GDPR).
          </li>
          <li>
            <strong className="text-white">Gestione prenotazioni</strong> tramite widget
            di terze parti (Octorate) — base giuridica: esecuzione del contratto (art.
            6.1.b GDPR).
          </li>
          <li>
            <strong className="text-white">Adempimenti di legge</strong> (fiscali,
            contabili) — base giuridica: obbligo legale (art. 6.1.c GDPR).
          </li>
          <li>
            <strong className="text-white">Comunicazioni commerciali / newsletter</strong>{" "}
            — base giuridica: consenso libero, specifico e revocabile (art. 6.1.a GDPR).
          </li>
          <li>
            <strong className="text-white">Analisi statistiche anonime</strong> del sito
            — base giuridica: consenso (art. 6.1.a GDPR).
          </li>
        </ul>
      </LegalSection>

      <LegalSection n="4" title="Modalità del trattamento e tempi di conservazione">
        <p>
          Il trattamento avviene con strumenti elettronici, con misure di sicurezza
          adeguate a prevenire perdita, accessi non autorizzati o usi illeciti dei
          dati.
        </p>
        <p>
          I dati raccolti tramite form sono conservati per il tempo strettamente
          necessario a dar seguito alla richiesta e, in caso di successiva
          contrattualizzazione, per la durata del rapporto contrattuale e per i
          termini di legge fiscali (10 anni). I dati per finalità di marketing sono
          conservati fino a revoca del consenso.
        </p>
      </LegalSection>

      <LegalSection n="5" title="Destinatari e categorie di destinatari">
        <p>
          I dati potranno essere comunicati a soggetti che svolgono per conto del
          Titolare attività strumentali, in qualità di responsabili del trattamento
          ex art. 28 GDPR, tra cui:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>fornitori di hosting e servizi cloud <strong className="text-white">[Provider]</strong>;</li>
          <li>fornitore del sistema di prenotazione <strong className="text-white">Octorate S.r.l.</strong> (per la gestione delle prenotazioni);</li>
          <li>eventuale servizio di email transazionale <strong className="text-white">[es. Resend / SendGrid]</strong>;</li>
          <li>consulenti contabili, fiscali e legali;</li>
          <li>autorità giudiziarie o pubbliche autorità, quando previsto dalla legge.</li>
        </ul>
      </LegalSection>

      <LegalSection n="6" title="Trasferimenti extra-UE">
        <p>
          Alcuni fornitori terzi potrebbero trattare i dati in Paesi extra UE. In tal
          caso il trasferimento avviene sulla base di garanzie adeguate (decisioni di
          adeguatezza della Commissione UE o Clausole Contrattuali Standard).
        </p>
      </LegalSection>

      <LegalSection n="7" title="Diritti dell'interessato">
        <p>
          L'interessato può esercitare in qualsiasi momento i diritti previsti dagli
          artt. 15-22 GDPR: accesso, rettifica, cancellazione, limitazione,
          opposizione, portabilità e revoca del consenso.
        </p>
        <p>
          Per esercitare tali diritti è sufficiente scrivere a{" "}
          <strong className="text-white">[email dedicata privacy]</strong>. Resta salvo
          il diritto di proporre reclamo al Garante per la Protezione dei Dati
          Personali (www.garanteprivacy.it).
        </p>
      </LegalSection>

      <LegalSection n="8" title="Modifiche all'informativa">
        <p>
          Il Titolare si riserva di aggiornare la presente informativa in qualsiasi
          momento, dandone comunicazione tramite il sito.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
