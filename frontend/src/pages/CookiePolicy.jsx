import { LegalLayout, LegalSection } from "@/components/LegalLayout";
import { useConsent } from "@/context/ConsentContext";

export default function CookiePolicy() {
  const { reopenBanner } = useConsent();
  return (
    <LegalLayout
      eyebrow="Cookie Policy"
      title="Informativa sui cookie"
      updated="Settembre 2026"
      seoPath="/cookie-policy"
      seoDescription="Cookie policy di Outdoor Apartments: tipologie di cookie utilizzati, finalità, durata e gestione delle preferenze secondo le linee guida del Garante Privacy."
    >
      <p>
        Questo sito utilizza cookie e tecnologie affini in conformità con la{" "}
        <strong className="text-white">Direttiva ePrivacy</strong>, il{" "}
        <strong className="text-white">GDPR</strong> e le{" "}
        <strong className="text-white">Linee Guida del Garante Privacy italiano
        del 10 giugno 2021</strong>.
      </p>

      <LegalSection n="1" title="Cos'è un cookie">
        <p>
          Un cookie è un piccolo file di testo depositato sul dispositivo dell'utente
          da un sito web che consente di riconoscere il dispositivo alle successive
          visite e di raccogliere informazioni sulla navigazione.
        </p>
      </LegalSection>

      <LegalSection n="2" title="Cookie utilizzati">
        <p className="mb-4">Le tabelle sottostanti verranno aggiornate in caso di attivazione di nuovi servizi.</p>

        <h3 className="text-white text-lg mt-8 mb-3">Cookie tecnici / necessari</h3>
        <p>Non richiedono consenso. Indispensabili al funzionamento del sito.</p>
        <div className="overflow-x-auto mt-3">
          <table className="w-full text-xs border border-white/10">
            <thead className="bg-white/5 text-white/60 uppercase tracking-widest text-[10px]">
              <tr>
                <th className="p-3 text-left">Nome</th>
                <th className="p-3 text-left">Finalità</th>
                <th className="p-3 text-left">Durata</th>
                <th className="p-3 text-left">Fornitore</th>
              </tr>
            </thead>
            <tbody className="text-white/80">
              <tr className="border-t border-white/10">
                <td className="p-3 font-mono">oa_consent_v1</td>
                <td className="p-3">Memorizza le preferenze di consenso ai cookie</td>
                <td className="p-3">12 mesi</td>
                <td className="p-3">Prima parte</td>
              </tr>
              <tr className="border-t border-white/10">
                <td className="p-3 font-mono">connect.sid / session</td>
                <td className="p-3">Gestione sessione di navigazione</td>
                <td className="p-3">Sessione</td>
                <td className="p-3">Prima parte</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-white text-lg mt-10 mb-3">Cookie analitici <span className="text-white/40 text-xs uppercase tracking-widest ml-2">non ancora attivi</span></h3>
        <p>
          Attualmente il sito non installa cookie analitici. In futuro potrà essere
          integrato <strong className="text-white">Google Analytics 4</strong> o
          strumenti equivalenti; in tal caso saranno inseriti in questa sezione con
          nome, durata e finalità, e attivati solo previo consenso.
        </p>

        <h3 className="text-white text-lg mt-10 mb-3">Cookie di terze parti / marketing <span className="text-white/40 text-xs uppercase tracking-widest ml-2">non ancora attivi</span></h3>
        <p>
          Al momento non sono installati cookie di terze parti. Al momento dell'attivazione
          del <strong className="text-white">widget di prenotazione Octorate</strong> e di
          eventuali strumenti di remarketing (Meta Pixel, Google Ads) i relativi cookie
          saranno elencati in questa sezione e attivati solo previo consenso esplicito.
        </p>
      </LegalSection>

      <LegalSection n="3" title="Gestione delle preferenze">
        <p>
          L'utente può in ogni momento modificare le proprie preferenze cliccando il
          link "Gestisci preferenze cookie" presente nel footer del sito o utilizzando
          il pulsante qui sotto.
        </p>
        <button
          type="button"
          onClick={reopenBanner}
          className="mt-3 inline-flex items-center gap-3 border border-white/25 hover:border-white text-white transition-colors px-6 py-3 text-[11px] tracking-[0.22em] uppercase"
        >
          Riapri preferenze cookie
        </button>
        <p className="mt-6">
          Inoltre è sempre possibile bloccare o cancellare i cookie tramite le
          impostazioni del proprio browser (Chrome, Firefox, Safari, Edge). Il blocco
          totale dei cookie tecnici potrebbe compromettere l'usabilità del sito.
        </p>
      </LegalSection>

      <LegalSection n="4" title="Riferimenti normativi">
        <ul className="list-disc list-inside space-y-2">
          <li>Regolamento (UE) 2016/679 (GDPR)</li>
          <li>D.Lgs. 196/2003 come modificato dal D.Lgs. 101/2018</li>
          <li>Provvedimento del Garante Privacy del 10 giugno 2021 sulle linee guida cookie</li>
        </ul>
      </LegalSection>
    </LegalLayout>
  );
}
