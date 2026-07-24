import { LegalLayout, LegalSection } from "@/components/LegalLayout";

export default function LegalNotes() {
  return (
    <LegalLayout
      eyebrow="Note legali"
      title="Termini e condizioni di utilizzo"
      updated="Dicembre 2025 — bozza"
      seoPath="/note-legali"
      seoDescription="Note legali e termini di utilizzo del sito Outdoor Apartments: dati societari, proprietà intellettuale, limitazioni di responsabilità e foro competente."
    >
      <p>
        L'utilizzo del sito <strong className="text-white">outdoorapartments.it</strong>{" "}
        implica l'accettazione dei presenti termini. Se non si concorda, si prega di
        non utilizzare il sito.
      </p>

      <LegalSection n="1" title="Dati societari">
        <ul className="list-disc list-inside space-y-2">
          <li>Ragione sociale: <strong className="text-white">[Ragione sociale]</strong></li>
          <li>Sede legale: <strong className="text-white">[Indirizzo completo]</strong></li>
          <li>Partita IVA: <strong className="text-white">[P.IVA]</strong></li>
          <li>Codice fiscale: <strong className="text-white">[C.F.]</strong></li>
          <li>Iscrizione R.E.A.: <strong className="text-white">[N. REA]</strong></li>
          <li>Email: <strong className="text-white">[info@outdoorapartments.it]</strong></li>
          <li>PEC: <strong className="text-white">[pec@…]</strong></li>
        </ul>
      </LegalSection>

      <LegalSection n="2" title="Proprietà intellettuale">
        <p>
          Tutti i contenuti presenti sul sito — testi, immagini, logo, grafica,
          layout — sono di proprietà di{" "}
          <strong className="text-white">[Ragione sociale]</strong> o dei rispettivi
          titolari e sono protetti dalle vigenti leggi sul diritto d'autore. Ogni
          riproduzione, anche parziale, senza autorizzazione scritta è vietata.
        </p>
      </LegalSection>

      <LegalSection n="3" title="Condizioni di utilizzo">
        <p>
          L'utente si impegna a utilizzare il sito in modo lecito, senza recare danni
          o intralci a terzi. È vietato utilizzare il sito per attività contrarie
          alla legge o lesive dei diritti altrui.
        </p>
      </LegalSection>

      <LegalSection n="4" title="Prenotazioni e contratti di soggiorno">
        <p>
          Le prenotazioni effettuate tramite il widget di terze parti presente sul
          sito (Octorate) sono regolate dai termini e condizioni comunicati durante
          il processo di prenotazione. Al momento della conferma della prenotazione
          si instaura un contratto di locazione turistica secondo la normativa
          vigente in Regione Valle d'Aosta.
        </p>
      </LegalSection>

      <LegalSection n="5" title="Limitazioni di responsabilità">
        <p>
          Il Titolare si adopera affinché le informazioni pubblicate siano corrette e
          aggiornate, ma non garantisce l'assenza di errori o omissioni. È esclusa
          ogni responsabilità per eventuali danni diretti o indiretti derivanti
          dall'utilizzo del sito, dei suoi contenuti o dall'impossibilità di accesso,
          nei limiti consentiti dalla legge.
        </p>
        <p>
          Il sito può contenere link a siti terzi: il Titolare non è responsabile dei
          loro contenuti né delle relative politiche.
        </p>
      </LegalSection>

      <LegalSection n="6" title="Legge applicabile e foro competente">
        <p>
          I presenti termini sono regolati dalla legge italiana. Per ogni
          controversia relativa all'interpretazione ed esecuzione delle presenti
          condizioni sarà competente in via esclusiva il Foro di{" "}
          <strong className="text-white">[Aosta]</strong>, salvo il diritto del
          consumatore all'applicazione del foro del proprio domicilio ai sensi
          dell'art. 66-bis del Codice del Consumo.
        </p>
      </LegalSection>

      <LegalSection n="7" title="Modifiche">
        <p>
          Il Titolare si riserva di modificare in qualsiasi momento le presenti
          condizioni. Le modifiche saranno efficaci dalla pubblicazione sul sito.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
