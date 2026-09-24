import { LegalLayout, LegalSection } from "@/components/LegalLayout";
import { SITE } from "@/lib/siteConfig";

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      eyebrow="Informativa Privacy"
      title="Informativa sul trattamento dei dati personali (GDPR)"
      updated="Settembre 2026"
      seoPath="/privacy-policy"
      seoDescription="Informativa privacy di Outdoor Apartments ai sensi degli artt. 13-14 GDPR: titolare, finalità, basi giuridiche, servizi terzi (Octorate, WhatsApp, Google Maps) e diritti dell'interessato."
    >
      <p>
        La presente informativa è resa ai sensi degli artt. 13 e 14 del Regolamento
        (UE) 2016/679 (GDPR) e del D.Lgs. 196/2003 come modificato dal D.Lgs.
        101/2018, agli utenti che interagiscono con il sito{" "}
        <strong className="text-white">outdoorapartments.it</strong> e fruiscono dei servizi di locazione turistica offerti.
      </p>

      <LegalSection n="1" title="Titolare del trattamento">
        <p>
          Titolare del trattamento dei dati personali è <strong className="text-white">{SITE.legalName}</strong>,
          con sede legale in <strong className="text-white">{SITE.legalAddress}</strong>,
          P.IVA <strong className="text-white">{SITE.vatId}</strong>, C.F.{" "}
          <strong className="text-white">{SITE.fiscalCode}</strong>, R.E.A. <strong className="text-white">{SITE.rea}</strong>.
        </p>
        <p className="mt-2">
          Contatti per la privacy: email <strong className="text-white">{SITE.email}</strong> —
          PEC <strong className="text-white">{SITE.pec}</strong> — telefono{" "}
          <strong className="text-white">{SITE.phone}</strong>.
        </p>
      </LegalSection>

      <LegalSection n="2" title="Tipologie di dati raccolti e servizi utilizzati">
        <p>
          Il Titolare raccoglie ed elabora le seguenti tipologie di dati personali:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <strong className="text-white">Dati forniti nei form di contatto o prenotazione:</strong> nome, cognome, indirizzo email, numero di telefono, indirizzo dell'immobile o preferenze di soggiorno.
          </li>
          <li>
            <strong className="text-white">Gestione prenotazioni (Octorate):</strong> il sistema di prenotazione e gestione della disponibilità si avvale della piattaforma terza <strong className="text-white">Octorate S.r.l.</strong>.
          </li>
          <li>
            <strong className="text-white">Comunicazioni operative e check-in (WhatsApp):</strong> utilizziamo l'applicazione WhatsApp per l'invio di informazioni pratiche, indicazioni stradali e video tutorial per facilitare le procedure di check-in ed il soggiorno degli ospiti.
          </li>
          <li>
            <strong className="text-white">Mappe e annunci (Google Maps / Google MyBusiness):</strong> utilizziamo i servizi di Google per la geolocalizzazione degli appartamenti ed il posizionamento delle schede attività.
          </li>
          <li>
            <strong className="text-white">Dati di navigazione:</strong> indirizzi IP, tipo di browser e parametri di navigazione raccolti ai fini del corretto funzionamento e della sicurezza del sito.
          </li>
        </ul>
      </LegalSection>

      <LegalSection n="3" title="Finalità e basi giuridiche del trattamento">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong className="text-white">Gestione richieste di contatto ed invio informazioni</strong> — base giuridica: esecuzione di misure precontrattuali su richiesta dell'interessato (art. 6.1.b GDPR).
          </li>
          <li>
            <strong className="text-white">Gestione ed esecuzione dei contratti di locazione turistica</strong> (prenotazione, accoglienza, invio video check-in via WhatsApp) — base giuridica: esecuzione del contratto (art. 6.1.b GDPR).
          </li>
          <li>
            <strong className="text-white">Adempimenti normativi, fiscali e di Pubblica Sicurezza</strong> (comunicazione schedine alloggiati alla Questura e gestione imposta di soggiorno) — base giuridica: obbligo legale (art. 6.1.c GDPR).
          </li>
          <li>
            <strong className="text-white">Manutenzione e sicurezza del sito web</strong> — base giuridica: legittimo interesse del Titolare (art. 6.1.f GDPR).
          </li>
        </ul>
      </LegalSection>

      <LegalSection n="4" title="Modalità di trattamento e conservazione">
        <p>
          Il trattamento avviene con strumenti elettronici e cartacei, adottando misure di sicurezza idonee a garantire la riservatezza ed integrità dei dati.
        </p>
        <p className="mt-2">
          I dati contrattuali e contabili vengono conservati per i termini stabiliti dalla legge (10 anni). I dati di contatto per richieste di informazioni vengono conservati per il tempo strettamente necessario a evadere la richiesta.
        </p>
      </LegalSection>

      <LegalSection n="5" title="Destinatari dei dati">
        <p>
          I dati personali potranno essere comunicati a responsabili del trattamento e terzi fornitori di servizi legati all'operatività di Outdoor Apartments:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>Fornitore del software gestionale di prenotazioni: <strong className="text-white">Octorate S.r.l.</strong></li>
          <li>Fornitori di servizi per messaggistica e invio informazioni: <strong className="text-white">WhatsApp / Meta Platforms Ireland Ltd.</strong></li>
          <li>Fornitori di servizi geografici ed elenchi: <strong className="text-white">Google Ireland Limited</strong> (Google Maps / MyBusiness)</li>
          <li>Fornitori di infrastruttura hosting: <strong className="text-white">Vercel Inc.</strong></li>
          <li>Consulenti fiscali, legali e amministratori di sistema</li>
          <li>Autorità di Pubblica Sicurezza ed enti comunali per l'imposta di soggiorno</li>
        </ul>
      </LegalSection>

      <LegalSection n="6" title="Diritti dell'interessato">
        <p>
          L'interessato ha il diritto di chiedere al Titolare l'accesso ai propri dati personali, la rettifica, la cancellazione, la limitazione del trattamento o l'opposizione allo stesso, oltre al diritto alla portabilità dei dati (artt. 15-22 GDPR).
        </p>
        <p className="mt-2">
          Per esercitare i propri diritti è possibile inviare una richiesta scritta a <strong className="text-white">{SITE.email}</strong> o via PEC a <strong className="text-white">{SITE.pec}</strong>. È sempre fatto salvo il diritto di proporre reclamo al Garante per la Protezione dei Dati Personali (www.garanteprivacy.it).
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
