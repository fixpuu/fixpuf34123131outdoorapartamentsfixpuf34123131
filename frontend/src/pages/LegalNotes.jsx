import { LegalLayout, LegalSection } from "@/components/LegalLayout";
import { SITE } from "@/lib/siteConfig";

export default function LegalNotes() {
  return (
    <LegalLayout
      eyebrow="Note legali"
      title="Termini e condizioni di utilizzo e di soggiorno"
      updated="Settembre 2026"
      seoPath="/note-legali"
      seoDescription="Note legali e termini di utilizzo del sito Outdoor Apartments: dati ditta, proprietà intellettuale, regole di casa, caparra, cancellazioni e foro competente."
    >
      <p>
        L'utilizzo del sito <strong className="text-white">outdoorapartments.it</strong>{" "}
        e la prenotazione delle strutture gestite implicano l'accettazione integrale dei presenti termini e condizioni.
      </p>

      <LegalSection n="1" title="Dati aziendali e identificativi">
        <ul className="list-disc list-inside space-y-2">
          <li>Ragione sociale: <strong className="text-white">{SITE.legalName}</strong></li>
          <li>Sede legale: <strong className="text-white">{SITE.legalAddress}</strong></li>
          <li>Partita IVA: <strong className="text-white">{SITE.vatId}</strong></li>
          <li>Codice fiscale: <strong className="text-white">{SITE.fiscalCode}</strong></li>
          <li>Iscrizione R.E.A.: <strong className="text-white">{SITE.rea} (Camera di Commercio di Aosta)</strong></li>
          <li>PEC: <strong className="text-white">{SITE.pec}</strong></li>
          <li>Email: <strong className="text-white">{SITE.email}</strong> / <strong className="text-white">{SITE.contactEmail}</strong></li>
          <li>Telefono: <strong className="text-white">{SITE.phone}</strong></li>
        </ul>
      </LegalSection>

      <LegalSection n="2" title="Trasparenza locazioni brevi — Codice CIN e CIR">
        <p>
          In ottemperanza all'art. 13-ter del D.L. 145/2023 (Codice Identificativo Nazionale - CIN) e alle disposizioni della Regione Autonoma Valle d'Aosta (Codice Identificativo Regionale - CIR), ciascuna unità immobiliare destinata a locazione turistica riporta chiaramente il proprio codice identificativo sia nelle schede descrittive del presente sito web sia in qualsiasi annuncio di promozione turistica.
        </p>
      </LegalSection>

      <LegalSection n="3" title="Condizioni di prenotazione, caparra e cancellazioni">
        <p className="mb-3">
          Le prenotazioni dirette ed il soggiorno presso le strutture gestite da <strong className="text-white">{SITE.legalName}</strong> sono soggetti alle seguenti condizioni:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong className="text-white">Caparra confirmatoria:</strong> Per le prenotazioni dirette si richiede il versamento di una caparra pari al <strong className="text-white">40% dell'importo totale</strong> preventivato al momento della conferma.</li>
          <li><strong className="text-white">Politica di cancellazione:</strong> In caso di cancellazione della prenotazione, la caparra verrà rimborsata esclusivamente se la disdetta perviene entro <strong className="text-white">30 giorni prima</strong> della data di arrivo prevista.</li>
          <li><strong className="text-white">Orari Check-in:</strong> Dalle ore <strong className="text-white">16:00</strong> del giorno di arrivo.</li>
          <li><strong className="text-white">Orari Check-out:</strong> Entro le ore <strong className="text-white">10:00</strong> del giorno di partenza.</li>
          <li><strong className="text-white">Imposta di soggiorno:</strong> L'imposta di soggiorno è dovuta secondo le tariffe stabilite dai Comuni di Charvensod, Gressan o Aosta in base all'ubicazione e al periodo di permanenza dell'ospite.</li>
        </ul>
      </LegalSection>

      <LegalSection n="4" title="Regole della casa">
        <p>
          In tutte le strutture è severamente vietato organizzare feste ed eventi ed è in vigore il divieto assoluto di fumo. Gli animali domestici sono ammessi previa richiesta esclusivamente per alcune strutture selezionate e con il pagamento del relativo supplemento indicato nella scheda dell'alloggio.
        </p>
      </LegalSection>

      <LegalSection n="5" title="Proprietà intellettuale">
        <p>
          Tutti i contenuti presenti sul sito — testi, immagini, logo, grafica, layout — sono di proprietà esclusiva di <strong className="text-white">{SITE.legalName}</strong> o dei rispettivi titolari e sono protetti dalle vigenti leggi sul diritto d'autore. Ogni riproduzione o utilizzo non autorizzato è vietato.
        </p>
      </LegalSection>

      <LegalSection n="6" title="Limitazioni di responsabilità">
        <p>
          Il Titolare cura l'esattezza delle informazioni pubblicate sul sito. Le prenotazioni effettuate tramite il sistema di gestione / widget Octorate o canali terzi sono regolate dalle specifiche condizioni contrattuali comunicate al momento dell'acquisto.
        </p>
      </LegalSection>

      <LegalSection n="7" title="Legge applicabile e foro competente">
        <p>
          I presenti termini sono regolati dalla legge italiana. Per ogni controversia relativa all'interpretazione ed esecuzione dei presenti termini sarà competente in via esclusiva il <strong className="text-white">Foro di Aosta</strong>, fatto salvo il foro inderogabile del consumatore ai sensi del Codice del Consumo.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
