/**
 * Dizionario completo delle traduzioni per l'interfaccia utente (IT / EN / FR).
 */
export const TRANSLATIONS = {
  it: {
    // Navigazione
    nav: {
      home: "Home",
      apartments: "Appartamenti",
      hostWithUs: "Affidaci il tuo immobile",
      contact: "Contatti",
      checkAvailability: "Verifica disponibilità",
      call: "Chiama",
      openMenu: "Apri menu",
      closeMenu: "Chiudi menu"
    },

    // Lingue
    lang: {
      it: "Italiano",
      en: "English",
      fr: "Français",
      chooseLang: "Lingua"
    },

    // Azioni Comuni
    common: {
      scroll: "Scorri",
      bookNow: "Prenota ora",
      callForAvailability: "Chiama per disponibilità",
      whatsapp: "WhatsApp",
      checkAvailability: "Verifica disponibilità",
      viewDetails: "Visualizza dettagli",
      fromPrice: "Da",
      perNight: "a notte",
      guests: "ospiti",
      maxGuests: "fino a {n} ospiti",
      comingSoon: "Prossima Apertura",
      backToHome: "Torna alla home",
      backToApartments: "Torna agli appartamenti",
      loading: "Caricamento…",
      notFound: "Appartamento non trovato."
    },

    // Booking Widget
    booking: {
      directBooking: "Prenotazione diretta",
      title: "Verifica disponibilità",
      checkin: "Check-in",
      checkout: "Check-out",
      adults: "Adulti",
      children: "Bambini",
      search: "Cerca disponibilità"
    },

    // Home
    home: {
      heroSub: "Pila — Valle d'Aosta — 1800 m",
      heroClaim: "Rifugi autentici, viste alpine e piste da sci a pochi passi.",
      bookStay: "Prenota il tuo soggiorno",
      exploreApartments: "Scopri gli appartamenti",

      aboutTag: "Chi siamo",
      aboutTitle: "Ospitalità autentica nel cuore delle Alpi.",
      aboutP1: "Outdoor Apartments nasce dalla passione per la Valle d'Aosta e per la montagna vissuta con lentezza e rispetto. Selezioniamo e gestiamo con cura appartamenti e chalet a Pila, offrendo agli ospiti un'esperienza accogliente e ai proprietari una gestione affidabile e trasparente.",
      aboutP2: "Dallo ski-in ski-out direttamente sulle piste da sci alla quiete dei borghi alpini con vista sul Monte Bianco e sul Monte Emilius: ogni alloggio è curato nei minimi dettagli.",
      aboutLink: "Scopri i nostri alloggi",

      featuredTag: "I nostri alloggi",
      featuredTitle: "Una selezione per ogni stile di vacanza.",
      viewAllApartments: "Vedi tutti gli appartamenti",

      pillarsTag: "Perché sceglierci",
      pillarsTitle: "La garanzia di un soggiorno senza pensieri.",
      pillar1Title: "Posizione Imbattibile",
      pillar1Desc: "Alloggi selezionati nel cuore di Pila, a pochi passi dagli impianti o con accesso diretto sci ai piedi alle piste del comprensorio.",
      pillar2Title: "Ospitalità & Cura",
      pillar2Desc: "Check-in personalizzato, pulizie professionali di standard alberghiero e assistenza locale continua durante tutta la durata del soggiorno.",
      pillar3Title: "Prenotazione Diretta",
      pillar3Desc: "Miglior tariffa garantita senza costi di intermediazione dei portali. Comunicazione diretta e condizioni chiare e trasparenti.",

      pilaTag: "Il comprensorio di Pila",
      pilaTitle: "Pila, una terrazza naturale sui quattromila.",
      pilaDesc: "Con oltre 70 km di piste da sci che arrivano fino a 2.700 metri, Pila è una delle mete più spettacolari e panoramiche della Valle d'Aosta. Raggiungibile comodamente in soli 18 minuti dal centro storico di Aosta con la telecabina panoramica, offre un panorama a 360° che abbraccia il Monte Bianco, il Cervino, il Monte Rosa e il Gran Paradiso.",
      pilaStat1Val: "1.800 – 2.750 m",
      pilaStat1Label: "Altitudine comprensorio",
      pilaStat2Val: "70 km",
      pilaStat2Label: "Piste da sci perfettamente battute",
      pilaStat3Val: "18 min",
      pilaStat3Label: "Telecabina diretta da Aosta centro",
      pilaStat4Val: "360°",
      pilaStat4Label: "Vista su Bianco, Cervino, Rosa, Gran Paradiso",

      faqTag: "Domande frequenti",
      faqTitle: "Tutto quello che c'è da sapere.",
      faqs: [
        {
          q: "Dove si trovano gli appartamenti di Outdoor Apartments?",
          a: "Gli appartamenti e chalet gestiti da Outdoor Apartments si trovano a Pila, frazione del comune di Gressan in Valle d'Aosta (AO), a circa 1800 metri di altitudine, e nelle immediate vicinanze come Charvensod. Pila è un comprensorio sciistico collegato ad Aosta tramite telecabina."
        },
        {
          q: "Gli appartamenti hanno lo sci ai piedi?",
          a: "Diversi appartamenti come White Relax, Pila 63 e Pila 64 offrono l'accesso sci ai piedi (ski-in ski-out), permettendo di raggiungere le piste direttamente dall'alloggio. Ogni scheda appartamento indica i servizi disponibili."
        },
        {
          q: "Come si prenota un appartamento a Pila?",
          a: "È possibile verificare disponibilità e prenotare direttamente dal sito tramite il sistema di prenotazione diretta, senza intermediari e senza commissioni aggiuntive dei portali."
        },
        {
          q: "Quali servizi sono inclusi negli appartamenti?",
          a: "A seconda della struttura, gli appartamenti includono WiFi gratuito, parcheggio gratuito, camere non fumatori, terrazze panoramiche e in molti casi l'accesso sci ai piedi. Tutti gli alloggi sono seguiti da un team locale con ospitalità curata."
        },
        {
          q: "Sono un proprietario: posso affidare il mio appartamento in gestione?",
          a: "Sì. Outdoor Apartments offre un servizio di gestione professionale per i proprietari di immobili a Pila: promozione, gestione prenotazioni, check-in, pulizie, manutenzione e rendicontazione trasparente. È possibile richiedere informazioni dalla pagina 'Affidaci il tuo immobile'."
        }
      ],

      ctaHostTag: "Sei un proprietario?",
      ctaHostTitle: "Affidaci la gestione del tuo immobile a Pila.",
      ctaHostDesc: "Massimizza la rendita del tuo appartamento senza pensieri. Gestiamo noi promozione, prenotazioni, check-in, pulizie e manutenzione con la massima trasparenza.",
      ctaHostBtn: "Scopri i servizi per proprietari"
    },

    // Lista Appartamenti
    apartmentsList: {
      tag: "La collezione",
      title: "Appartamenti e Chalet a Pila",
      subtitle: "Scopri la nostra selezione di chalet e appartamenti in affitto a Pila (Valle d'Aosta) a 1800m sulle piste. Ambienti accoglienti, viste spettacolari sui quattromila, sci ai piedi e prenotazione diretta garantita senza commissioni.",
      filterAll: "Tutti",
      filterPila: "Pila",
      filterAosta: "Aosta",
      filterCharvensod: "Charvensod"
    },

    // Scheda Dettaglio Appartamento
    apartmentDetail: {
      back: "Torna agli appartamenti",
      cin: "CIN",
      cir: "CIR",
      specsTitle: "Caratteristiche e dettagli tecnici",
      typology: "Tipologia",
      floors: "Disposizione / N° Piani",
      beds: "Posti Letto",
      rooms: "Composizione Vani",
      amenitiesTitle: "Servizi principali",
      touristTaxTitle: "Imposta di Soggiorno",
      touristTaxFallback: "Secondo regolamento comunale locale.",
      petsTitle: "Politica Animali",
      houseRulesTitle: "Orari & Condizioni di Soggiorno",
      checkInOut: "Check-in & Check-out",
      checkIn: "Check-in:",
      checkOut: "Check-out:",
      depositRefund: "Caparra & Cancellazioni",
      deposit: "Caparra:",
      cancellation: "Rimborso:",
      hospitalityTitle: "Ospitalità curata e trasparente",
      hospitalityDesc: "Ogni soggiorno è seguito dal nostro team locale: check-in personalizzato, pulizia impeccabile e assistenza durante tutta la permanenza.",
      bookingBoxTitle: "Trova le date perfette.",
      bookingBoxSub: "Verifica disponibilità e tariffe in tempo reale direttamente su Octorate.",
      comingSoonTitle: "Apertura imminente.",
      comingSoonSub: "L'alloggio è in fase di ultimazione arredi. Puoi verificare le prossime disponibilità o contattarci per qualsiasi informazione in anteprima.",
      directCallPrompt: "Vuoi prenotare proprio {name}?",
      directCallBtn: "Chiama per la disponibilità"
    },

    // Servizi / Amenities
    amenities: {
      wifi_free: "Wifi gratuito",
      parking_free: "Parcheggio gratuito",
      parking_short: "Parcheggio",
      ski_in_ski_out: "Sci ai piedi",
      non_smoking: "Camere non fumatori",
      non_smoking_short: "Non fumatori",
      family_rooms: "Camere familiari",
      family_friendly: "Adatto a famiglie",
      panoramic_terrace: "Terrazzo panoramico",
      terrazzino_panoramico: "Terrazzino panoramico"
    },

    // Regole della Casa
    houseRules: {
      checkIn: "Dalle 16:00",
      checkOut: "Entro le 10:00",
      events: "No feste ed eventi",
      smoking: "Divieto di fumo in tutte le strutture",
      deposit: "Per le prenotazioni dirette si richiede il versamento di una caparra pari al 40% dell'importo totale preventivato.",
      cancellation: "In caso di cancellazione della prenotazione la caparra verrà rimborsata solo se la disdetta perviene entro 30 giorni dalla data di arrivo prevista."
    },

    // Affidaci il tuo immobile
    hostWithUs: {
      tag: "Proprietari",
      title: "Affidaci il tuo immobile.",
      subtitle: "Gestione completa e professionale per seconde case a Pila e dintorni. Massimizziamo la rendita del tuo immobile liberandoti da ogni pensiero operativo.",
      introTag: "I nostri servizi",
      introTitle: "Una gestione chiavi in mano, trasparente e accurata.",
      introDesc: "Dalla creazione degli annunci sui principali canali alla gestione dei prezzi dinamici, dall'accoglienza calorosa degli ospiti alla manutenzione programmata: pensiamo a tutto noi.",
      pillars: [
        {
          title: "Massima Visibilità & Revenue Management",
          desc: "Pubblicazione ottimizzata sui migliori portali internazionali e prenotazione diretta sul nostro sito. Algoritmi di pricing dinamico per ottimizzare occupazione e ricavi in alta e bassa stagione."
        },
        {
          title: "Accoglienza & Assistenza Ospiti",
          desc: "Gestione completa dei contatti, check-in e check-out di persona, adempimenti burocratici (Alloggiati Web, ISTAT, imposta di soggiorno) e assistenza continuativa in loco durante il soggiorno."
        },
        {
          title: "Pulizia & Manutenzione Impeccabile",
          desc: "Standard alberghieri di pulizia e fornitura biancheria igienizzata a ogni cambio. Monitoraggio periodico dell'immobile e interventi tempestivi di manutenzione ordinaria."
        },
        {
          title: "Trasparenza & Rendicontazione Chiara",
          desc: "Accesso al calendario delle prenotazioni in tempo reale, possibilità di riservare l'immobile per il proprio uso personale e report periodici dettagliati con pagamenti puntuali."
        }
      ],
      formTag: "Contattaci",
      formTitle: "Richiedi una valutazione gratuita.",
      formDesc: "Compila il modulo per ricevere senza impegno una stima del potenziale di rendita del tuo appartamento e scoprire come possiamo valorizzarlo al meglio.",
      nameLabel: "Nome e cognome *",
      namePlaceholder: "Mario Rossi",
      phoneLabel: "Telefono *",
      phonePlaceholder: "+39 346 161 5188",
      emailLabel: "Email *",
      emailPlaceholder: "mario.rossi@email.com",
      addressLabel: "Indirizzo / Località dell'immobile *",
      addressPlaceholder: "Es. Frazione Pila, Gressan (AO)",
      descLabel: "Note o dettagli sull'immobile (opzionale)",
      descPlaceholder: "Tipologia, metratura, numero posti letto o altre caratteristiche...",
      privacyNotice: "Dichiaro di aver preso visione dell'informativa privacy e acconsento al trattamento dei dati personali per ricevere la valutazione richiesta.",
      submitBtn: "Invia richiesta di contatto",
      submitting: "Invio in corso…",
      successTitle: "Richiesta inviata con successo!",
      successDesc: "Ti ricontatteremo entro 24 ore lavorative per approfondire la tua richiesta."
    },

    // Contatti
    contact: {
      tag: "Contatti",
      title: "Restiamo in contatto.",
      subTitle: "Pila & Aosta, Valle d'Aosta.",
      desc: "Il nostro team è a disposizione per ogni informazione sui soggiorni, disponibilità degli appartamenti o collaborazioni per la gestione immobiliare.",
      headquarters: "Sede Legale",
      hours: "Orari di Contatto",
      hoursDesc: "Tutti i giorni: 09:00 - 20:00. Per gli ospiti in soggiorno garantiamo assistenza continuativa.",
      directCall: "Chiamaci direttamente",
      whatsappUs: "Scrivici su WhatsApp",
      emailUs: "Inviaci un'email",
      pecLabel: "PEC (Posta Elettronica Certificata)"
    },

    // Footer
    footer: {
      desc: "Gestione professionale di appartamenti e chalet in affitto turistico a Pila, Valle d'Aosta. Ospitalità curata per gli ospiti, tranquillità garantita per i proprietari.",
      navTitle: "Naviga",
      contactTitle: "Contatti",
      legalTitle: "Legale",
      privacy: "Privacy Policy",
      cookie: "Cookie Policy",
      legalNotes: "Note Legali",
      manageCookies: "Gestisci preferenze cookie",
      copyright: "Tutti i diritti riservati."
    },

    // Cookie Banner
    cookieBanner: {
      tag: "Cookie & Privacy",
      title: "Rispettiamo la tua privacy.",
      desc: "Utilizziamo cookie tecnici indispensabili al funzionamento del sito e, previo consenso, cookie statistici e di personalizzazione. Puoi accettare tutti, rifiutarli o gestire le preferenze in ogni momento.",
      acceptAll: "Accetta tutti",
      rejectAll: "Rifiuta tutti",
      customize: "Personalizza",
      save: "Salva preferenze",
      cookiePolicy: "Cookie Policy",
      privacyPolicy: "Informativa Privacy"
    }
  },

  en: {
    // Navigation
    nav: {
      home: "Home",
      apartments: "Apartments",
      hostWithUs: "Host with us",
      contact: "Contact",
      checkAvailability: "Check availability",
      call: "Call",
      openMenu: "Open menu",
      closeMenu: "Close menu"
    },

    // Languages
    lang: {
      it: "Italiano",
      en: "English",
      fr: "Français",
      chooseLang: "Language"
    },

    // Common Actions
    common: {
      scroll: "Scroll",
      bookNow: "Book now",
      callForAvailability: "Call for availability",
      whatsapp: "WhatsApp",
      checkAvailability: "Check availability",
      viewDetails: "View details",
      fromPrice: "From",
      perNight: "per night",
      guests: "guests",
      maxGuests: "up to {n} guests",
      comingSoon: "Opening Soon",
      backToHome: "Back to home",
      backToApartments: "Back to apartments",
      loading: "Loading…",
      notFound: "Apartment not found."
    },

    // Booking Widget
    booking: {
      directBooking: "Direct booking",
      title: "Check availability",
      checkin: "Check-in",
      checkout: "Check-out",
      adults: "Adults",
      children: "Children",
      search: "Search availability"
    },

    // Home
    home: {
      heroSub: "Pila — Aosta Valley — 1800 m",
      heroClaim: "Authentic alpine shelters, mountain vistas and ski slopes just steps away.",
      bookStay: "Book your stay",
      exploreApartments: "Discover apartments",

      aboutTag: "About us",
      aboutTitle: "Authentic hospitality in the heart of the Alps.",
      aboutP1: "Outdoor Apartments was born from our love for the Aosta Valley and mountains lived with slow rhythm and genuine care. We select and manage premier apartments and chalets in Pila, offering guests a memorable stay and owners a reliable, transparent service.",
      aboutP2: "From ski-in ski-out access directly on the slopes to the peacefulness of alpine hamlets facing Mont Blanc and Mount Emilius: every home is curated with passion.",
      aboutLink: "Discover our residences",

      featuredTag: "Our residences",
      featuredTitle: "A curated collection for every style of stay.",
      viewAllApartments: "View all apartments",

      pillarsTag: "Why choose us",
      pillarsTitle: "The certainty of a seamless, worry-free stay.",
      pillar1Title: "Unbeatable Location",
      pillar1Desc: "Handpicked apartments in the heart of Pila, moments from the ski lifts or with direct ski-in/ski-out access to the slopes.",
      pillar2Title: "Hospitality & Care",
      pillar2Desc: "Personalized check-in, hotel-grade professional cleaning, and local support throughout your stay in the mountains.",
      pillar3Title: "Direct Booking",
      pillar3Desc: "Best rate guaranteed with zero portal booking fees. Direct communication and transparent, straightforward terms.",

      pilaTag: "The Pila ski resort",
      pilaTitle: "Pila, a natural balcony overlooking 4,000m peaks.",
      pilaDesc: "With over 70 km of ski slopes reaching up to 2,700 meters, Pila is one of the most scenic destinations in the Aosta Valley. Conveniently reached in just 18 minutes from Aosta's historic center via panoramic cable car, it features a 360° panorama encompassing Mont Blanc, the Matterhorn, Monte Rosa, and Gran Paradiso.",
      pilaStat1Val: "1,800 – 2,750 m",
      pilaStat1Label: "Resort altitude",
      pilaStat2Val: "70 km",
      pilaStat2Label: "Groomed ski slopes",
      pilaStat3Val: "18 min",
      pilaStat3Label: "Direct gondola from Aosta center",
      pilaStat4Val: "360°",
      pilaStat4Label: "Panoramic views of 4,000m peaks",

      faqTag: "FAQ",
      faqTitle: "Everything you need to know.",
      faqs: [
        {
          q: "Where are Outdoor Apartments located?",
          a: "Our apartments and chalets are situated in Pila (municipality of Gressan, Aosta Valley) at around 1,800 meters altitude, as well as picturesque nearby hamlets like Charvensod. Pila is a premier ski resort seamlessly connected to Aosta via cable car."
        },
        {
          q: "Do the apartments have ski-in / ski-out access?",
          a: "Several properties such as White Relax, Pila 63, and Pila 64 offer direct ski-in/ski-out access, allowing you to hit the slopes directly from your door. Each apartment page details available amenities."
        },
        {
          q: "How can I book an apartment?",
          a: "You can check live availability and book directly on our website through our secure booking engine, without intermediaries or third-party commission fees."
        },
        {
          q: "What amenities are included?",
          a: "Depending on the property, accommodations include free Wi-Fi, private or free parking, non-smoking rooms, panoramic terraces, and in many cases direct slope access. All properties are cared for by our dedicated local team."
        },
        {
          q: "I am a property owner: can I entrust my apartment to you?",
          a: "Yes. Outdoor Apartments provides a full-service professional management program for property owners in Pila: marketing, reservation management, check-in, cleaning, maintenance, and transparent reporting. Visit our 'Host with us' page for details."
        }
      ],

      ctaHostTag: "Are you a property owner?",
      ctaHostTitle: "Entrust us with your property in Pila.",
      ctaHostDesc: "Maximize your rental income with total peace of mind. We handle marketing, guest management, cleaning, and maintenance with complete transparency.",
      ctaHostBtn: "Explore owner management services"
    },

    // Apartments List
    apartmentsList: {
      tag: "The collection",
      title: "Apartments & Chalets in Pila",
      subtitle: "Explore our curated collection of vacation apartments and chalets for rent in Pila (Aosta Valley) at 1,800m on the slopes. Ski-in ski-out access, panoramic views, and direct booking guarantee.",
      filterAll: "All",
      filterPila: "Pila",
      filterAosta: "Aosta",
      filterCharvensod: "Charvensod"
    },

    // Apartment Detail
    apartmentDetail: {
      back: "Back to apartments",
      cin: "CIN",
      cir: "CIR",
      specsTitle: "Specifications & Technical Details",
      typology: "Typology",
      floors: "Layout / Floors",
      beds: "Sleeping Capacity",
      rooms: "Room Composition",
      amenitiesTitle: "Main amenities",
      touristTaxTitle: "Tourist Tax",
      touristTaxFallback: "According to local municipality regulations.",
      petsTitle: "Pet Policy",
      houseRulesTitle: "Hours & Stay Conditions",
      checkInOut: "Check-in & Check-out",
      checkIn: "Check-in:",
      checkOut: "Check-out:",
      depositRefund: "Deposit & Cancellations",
      deposit: "Deposit:",
      cancellation: "Refund:",
      hospitalityTitle: "Thoughtful and transparent hospitality",
      hospitalityDesc: "Every stay is supported by our local team: personal check-in, spotless cleaning, and assistance throughout your stay.",
      bookingBoxTitle: "Find your dates.",
      bookingBoxSub: "Check live availability and rates directly on Octorate.",
      comingSoonTitle: "Opening soon.",
      comingSoonSub: "The property is currently being furnished. You can check future availability or contact us for early details.",
      directCallPrompt: "Looking to book {name} specifically?",
      directCallBtn: "Call for availability"
    },

    // Amenities
    amenities: {
      wifi_free: "Free Wi-Fi",
      parking_free: "Free Parking",
      parking_short: "Parking",
      ski_in_ski_out: "Ski-in / Ski-out",
      non_smoking: "Non-smoking rooms",
      non_smoking_short: "Non-smoking",
      family_rooms: "Family rooms",
      family_friendly: "Family-friendly",
      panoramic_terrace: "Panoramic terrace",
      terrazzino_panoramico: "Panoramic balcony"
    },

    // House Rules
    houseRules: {
      checkIn: "From 16:00",
      checkOut: "By 10:00",
      events: "No parties or events",
      smoking: "Non-smoking accommodation",
      deposit: "For direct bookings, a deposit of 40% of the total estimated amount is required.",
      cancellation: "In case of cancellation, the deposit will be refunded only if cancellation is received at least 30 days before scheduled arrival date."
    },

    // Host with us
    hostWithUs: {
      tag: "Property Owners",
      title: "Host with us.",
      subtitle: "Complete and professional property management for second homes in Pila and surroundings. Maximize your rental income while freeing yourself from operational hassle.",
      introTag: "Our Services",
      introTitle: "Turnkey management, transparent and meticulous.",
      introDesc: "From multi-channel listing optimization to dynamic pricing, from warm in-person guest greetings to scheduled maintenance: we take care of everything.",
      pillars: [
        {
          title: "Maximum Visibility & Revenue Management",
          desc: "Optimized publication across major international channels and direct booking on our platform. Dynamic pricing algorithms to maximize occupancy and revenue."
        },
        {
          title: "Guest Greeting & Concierge Support",
          desc: "End-to-end guest communications, in-person check-in/check-out, legal filings (Alloggiati Web, ISTAT, tourist tax), and local assistance throughout each stay."
        },
        {
          title: "Hotel-Grade Cleaning & Care",
          desc: "High hospitality cleaning standards with sanitized linen service at every turnover. Regular property inspections and prompt handling of maintenance."
        },
        {
          title: "Total Transparency & Clear Reporting",
          desc: "Real-time access to your property calendar, freedom to reserve personal dates, and comprehensive monthly performance statements with prompt payouts."
        }
      ],
      formTag: "Get in touch",
      formTitle: "Request a free property valuation.",
      formDesc: "Fill in the form to receive a free, non-binding rental projection for your property and discover how we can optimize its value.",
      nameLabel: "Full Name *",
      namePlaceholder: "John Smith",
      phoneLabel: "Phone Number *",
      phonePlaceholder: "+39 346 161 5188",
      emailLabel: "Email *",
      emailPlaceholder: "john.smith@email.com",
      addressLabel: "Property Address / Location *",
      addressPlaceholder: "e.g. Frazione Pila, Gressan (AO)",
      descLabel: "Property details or notes (optional)",
      descPlaceholder: "Typology, square meters, number of beds or special features...",
      privacyNotice: "I have read and agree to the privacy policy and consent to the processing of personal data to receive the requested valuation.",
      submitBtn: "Submit valuation request",
      submitting: "Submitting…",
      successTitle: "Request submitted successfully!",
      successDesc: "We will contact you within 24 business hours to discuss your property in detail."
    },

    // Contact
    contact: {
      tag: "Contact",
      title: "Let's connect.",
      subTitle: "Pila & Aosta, Aosta Valley.",
      desc: "Our team is at your complete disposal for information regarding accommodations, availability, or property management partnerships.",
      headquarters: "Registered Office",
      hours: "Office Hours",
      hoursDesc: "Every day: 09:00 - 20:00. In-house guest support is guaranteed continuously during active stays.",
      directCall: "Call us directly",
      whatsappUs: "Chat on WhatsApp",
      emailUs: "Send an email",
      pecLabel: "PEC (Certified Email)"
    },

    // Footer
    footer: {
      desc: "Professional management of vacation apartments and chalets in Pila, Aosta Valley. Curated hospitality for guests, complete peace of mind for owners.",
      navTitle: "Explore",
      contactTitle: "Contact",
      legalTitle: "Legal",
      privacy: "Privacy Policy",
      cookie: "Cookie Policy",
      legalNotes: "Legal Notes",
      manageCookies: "Manage cookie preferences",
      copyright: "All rights reserved."
    },

    // Cookie Banner
    cookieBanner: {
      tag: "Cookie & Privacy",
      title: "We value your privacy.",
      desc: "We use essential cookies for website operation and, subject to consent, analytics and personalization cookies. You can accept all, reject all, or manage preferences anytime.",
      acceptAll: "Accept all",
      rejectAll: "Reject all",
      customize: "Customize",
      save: "Save preferences",
      cookiePolicy: "Cookie Policy",
      privacyPolicy: "Privacy Policy"
    }
  },

  fr: {
    // Navigation
    nav: {
      home: "Accueil",
      apartments: "Appartements",
      hostWithUs: "Confiez-nous votre bien",
      contact: "Contact",
      checkAvailability: "Vérifier la disponibilité",
      call: "Appeler",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu"
    },

    // Langues
    lang: {
      it: "Italiano",
      en: "English",
      fr: "Français",
      chooseLang: "Langue"
    },

    // Actions Communes
    common: {
      scroll: "Défiler",
      bookNow: "Réserver",
      callForAvailability: "Appeler pour disponibilités",
      whatsapp: "WhatsApp",
      checkAvailability: "Vérifier la disponibilité",
      viewDetails: "Voir les détails",
      fromPrice: "Dès",
      perNight: "par nuit",
      guests: "personnes",
      maxGuests: "jusqu'à {n} personnes",
      comingSoon: "Ouverture Prochaine",
      backToHome: "Retour à l'accueil",
      backToApartments: "Retour aux appartements",
      loading: "Chargement…",
      notFound: "Appartement non trouvé."
    },

    // Booking Widget
    booking: {
      directBooking: "Réservation directe",
      title: "Vérifier la disponibilité",
      checkin: "Arrivée",
      checkout: "Départ",
      adults: "Adultes",
      children: "Enfants",
      search: "Rechercher des disponibilités"
    },

    // Home
    home: {
      heroSub: "Pila — Vallée d'Aoste — 1800 m",
      heroClaim: "Refuges alpins authentiques, vues sur les sommets et pistes de ski à quelques pas.",
      bookStay: "Réservez votre séjour",
      exploreApartments: "Découvrir les appartements",

      aboutTag: "À propos",
      aboutTitle: "Une hospitalité authentique au cœur des Alpes.",
      aboutP1: "Outdoor Apartments est né de la passion pour la Vallée d'Aoste et pour la montagne vécue avec authenticité et sérénité. Nous sélectionnons et gérons avec soin des appartements et chalets à Pila, offrant aux hôtes un séjour chaleureux et aux propriétaires une gestion fiable et transparente.",
      aboutP2: "De l'accès skis aux pieds sur les pistes à la quiétude des hameaux alpins face au Mont-Blanc et au Mont Émilius : chaque logement est soigné dans les moindres détails.",
      aboutLink: "Découvrir nos hébergements",

      featuredTag: "Nos résidences",
      featuredTitle: "Une sélection adaptée à chaque style de séjour.",
      viewAllApartments: "Voir tous les appartements",

      pillarsTag: "Pourquoi nous choisir",
      pillarsTitle: "L'assurance d'un séjour en toute sérénité.",
      pillar1Title: "Emplacement Idéal",
      pillar1Desc: "Des logements d'exception au cœur de Pila, à deux pas des remontées mécaniques ou directement skis aux pieds sur le domaine.",
      pillar2Title: "Hospitalité & Qualité",
      pillar2Desc: "Accueil personnalisé, ménage professionnel aux normes hôtelières et assistance locale continue tout au long de votre séjour.",
      pillar3Title: "Réservation Directe",
      pillar3Desc: "Meilleur tarif garanti sans frais de commission des plateformes. Communication directe et conditions claires et transparentes.",

      pilaTag: "Le domaine skiable de Pila",
      pilaTitle: "Pila, un balcon naturel face aux 4 000 mètres.",
      pilaDesc: "Avec plus de 70 km de pistes s'élevant jusqu'à 2 700 mètres, Pila est l'une des destinations les plus spectaculaires de la Vallée d'Aoste. Accessible en seulement 18 minutes depuis le centre historique d'Aoste grâce à la télécabine panoramique, elle offre un panorama à 360° sur le Mont-Blanc, le Cervin, le Mont Rose et le Grand Paradis.",
      pilaStat1Val: "1 800 – 2 750 m",
      pilaStat1Label: "Altitude du domaine",
      pilaStat2Val: "70 km",
      pilaStat2Label: "Pistes de ski préparées",
      pilaStat3Val: "18 min",
      pilaStat3Label: "Télécabine directe depuis le centre d'Aoste",
      pilaStat4Val: "360°",
      pilaStat4Label: "Vue sur le Mont-Blanc, Cervin, Mont Rose, Grand Paradis",

      faqTag: "Questions fréquentes",
      faqTitle: "Tout ce que vous devez savoir.",
      faqs: [
        {
          q: "Où se situent les appartements Outdoor Apartments ?",
          a: "Nos appartements et chalets sont situés à Pila (commune de Gressan, Vallée d'Aoste) à environ 1 800 mètres d'altitude, ainsi que dans de charmants hameaux voisins comme Charvensod. Pila est une station réputée reliée à Aoste par télécabine."
        },
        {
          q: "Les appartements disposent-ils d'un accès skis aux pieds ?",
          a: "Plusieurs logements tels que White Relax, Pila 63 et Pila 64 offrent un accès skis aux pieds direct. Chaque fiche descriptive détaille précisément les équipements disponibles."
        },
        {
          q: "Comment réserver un hébergement ?",
          a: "Vous pouvez consulter les disponibilités et réserver en direct sur notre site sans intermédiaire ni frais de commission ajoutés."
        },
        {
          q: "Quels sont les équipements inclus ?",
          a: "Selon la résidence, nos logements comprennent le Wi-Fi gratuit, le parking gratuit, des chambres non-fumeurs, des terrasses panoramiques et souvent l'accès skis aux pieds. Tous nos hébergements bénéficient du suivi attentif de notre équipe locale."
        },
        {
          q: "Je suis propriétaire : puis-je vous confier mon bien ?",
          a: "Oui. Outdoor Apartments propose un service de gestion locative clé en main aux propriétaires de Pila : commercialisation, réservations, accueil, ménage, maintenance et transparence totale. Rendez-vous sur notre page 'Confiez-nous votre bien'."
        }
      ],

      ctaHostTag: "Vous êtes propriétaire ?",
      ctaHostTitle: "Confiez-nous la gestion de votre bien à Pila.",
      ctaHostDesc: "Optimisez la rentabilité de votre logement l'esprit tranquille. Nous prenons en charge la commercialisation, l'accueil des voyageurs, l'entretien et le ménage avec une transparence totale.",
      ctaHostBtn: "Découvrir nos services propriétaires"
    },

    // Apartments List
    apartmentsList: {
      tag: "La collection",
      title: "Appartements & Chalets à Pila",
      subtitle: "Découvrez notre sélection d'appartements et chalets en location à Pila (Vallée d'Aoste) à 1 800m au pied des pistes. Accès skis aux pieds, vues panoramiques et réservation directe sans commission.",
      filterAll: "Tous",
      filterPila: "Pila",
      filterAosta: "Aoste",
      filterCharvensod: "Charvensod"
    },

    // Apartment Detail
    apartmentDetail: {
      back: "Retour aux appartements",
      cin: "CIN",
      cir: "CIR",
      specsTitle: "Caractéristiques & Détails Techniques",
      typology: "Typologie",
      floors: "Disposition / Niveaux",
      beds: "Couchages",
      rooms: "Composition des pièces",
      amenitiesTitle: "Équipements principaux",
      touristTaxTitle: "Taxe de Séjour",
      touristTaxFallback: "Selon la réglementation municipale locale.",
      petsTitle: "Animaux de compagnie",
      houseRulesTitle: "Horaires & Conditions de Séjour",
      checkInOut: "Arrivée & Départ",
      checkIn: "Arrivée :",
      checkOut: "Départ :",
      depositRefund: "Acompte & Annulations",
      deposit: "Acompte :",
      cancellation: "Remboursement :",
      hospitalityTitle: "Une hospitalité soignée et transparente",
      hospitalityDesc: "Chaque séjour est accompagné par notre équipe locale : accueil personnalisé, propreté irréprochable et assistance continue tout au long de votre séjour.",
      bookingBoxTitle: "Trouvez vos dates.",
      bookingBoxSub: "Consultez les disponibilités et tarifs en direct sur Octorate.",
      comingSoonTitle: "Ouverture prochaine.",
      comingSoonSub: "Le logement est en cours de finition. Vous pouvez consulter les prochaines disponibilités ou nous contacter en avant-première.",
      directCallPrompt: "Vous souhaitez réserver {name} ?",
      directCallBtn: "Appelez pour les disponibilités"
    },

    // Amenities
    amenities: {
      wifi_free: "Wi-Fi gratuit",
      parking_free: "Parking gratuit",
      parking_short: "Parking",
      ski_in_ski_out: "Accès skis aux pieds",
      non_smoking: "Chambres non-fumeurs",
      non_smoking_short: "Non-fumeurs",
      family_rooms: "Chambres familiales",
      family_friendly: "Idéal pour familles",
      panoramic_terrace: "Terrasse panoramique",
      terrazzino_panoramico: "Balcon panoramique"
    },

    // House Rules
    houseRules: {
      checkIn: "À partir de 16h00",
      checkOut: "Avant 10h00",
      events: "Fêtes et événements interdits",
      smoking: "Établissement non-fumeur",
      deposit: "Pour les réservations directes, un acompte de 40% du montant total estimé est requis.",
      cancellation: "En cas d'annulation, l'acompte sera remboursé uniquement si l'annulation intervient au moins 30 jours avant la date d'arrivée prévue."
    },

    // Host with us
    hostWithUs: {
      tag: "Propriétaires",
      title: "Confiez-nous votre bien.",
      subtitle: "Gestion locative complète et professionnelle pour vos résidences secondaires à Pila et ses environs. Valorisez vos revenus sans aucune contrainte logistique.",
      introTag: "Nos prestations",
      introTitle: "Une gestion clé en main, transparente et rigoureuse.",
      introDesc: "De la visibilité internationale à la tarification dynamique, de l'accueil personnalisé à l'entretien technique : nous veillons sur votre bien avec le plus grand soin.",
      pillars: [
        {
          title: "Visibilité Maximale & Gestion Tarifaire",
          desc: "Diffusion ciblée sur les meilleures plateformes internationales et réservation directe sur notre site. Tarification dynamique pour maximiser vos revenus locatifs en toute saison."
        },
        {
          title: "Accueil & Service Conciergerie",
          desc: "Gestion complète des voyageurs, check-in et check-out sur place, formalités administratives et assistance locale permanente pendant les séjours."
        },
        {
          title: "Ménage & Entretien de Haute Qualité",
          desc: "Standards hôteliers de propreté avec linge de maison désinfecté à chaque séjour. Contrôles réguliers et interventions d'entretien réactives."
        },
        {
          title: "Transparence & Suivi en Temps Réel",
          desc: "Accès direct au calendrier des réservations, réservation libre de vos séjours personnels et comptes-rendus financiers détaillés avec versements réguliers."
        }
      ],
      formTag: "Contactez-nous",
      formTitle: "Demandez une estimation gratuite.",
      formDesc: "Remplissez le formulaire pour recevoir une estimation du potentiel locatif de votre bien et découvrir notre accompagnement sur mesure.",
      nameLabel: "Nom et prénom *",
      namePlaceholder: "Jean Dupont",
      phoneLabel: "Téléphone *",
      phonePlaceholder: "+39 346 161 5188",
      emailLabel: "E-mail *",
      emailPlaceholder: "jean.dupont@email.com",
      addressLabel: "Adresse / Situation du bien *",
      addressPlaceholder: "Ex. Frazione Pila, Gressan (AO)",
      descLabel: "Détails ou caractéristiques du bien (optionnel)",
      descPlaceholder: "Typologie, surface, nombre de couchages ou particularités...",
      privacyNotice: "J'accepte la politique de confidentialité et consens au traitement de mes données afin de recevoir l'estimation demandée.",
      submitBtn: "Envoyer ma demande",
      submitting: "Envoi en cours…",
      successTitle: "Demande envoyée avec succès !",
      successDesc: "Nous vous recontacterons sous 24 heures ouvrées pour échanger sur votre projet."
    },

    // Contact
    contact: {
      tag: "Contact",
      title: "Restons en contact.",
      subTitle: "Pila & Aoste, Vallée d'Aoste.",
      desc: "Notre équipe se tient à votre entière disposition pour tout renseignement concernant nos hébergements ou un partenariat de gestion immobilière.",
      headquarters: "Siège Légal",
      hours: "Disponibilité",
      hoursDesc: "Tous les jours : 09h00 - 20h00. Assistance garantie 24h/24 pour nos hôtes en séjour.",
      directCall: "Nous appeler",
      whatsappUs: "Écrivez-nous sur WhatsApp",
      emailUs: "Envoyer un e-mail",
      pecLabel: "PEC (Courrier Électronique Certifié)"
    },

    // Footer
    footer: {
      desc: "Gestion professionnelle d'appartements et chalets en location touristique à Pila, Vallée d'Aoste. Hospitalité soignée pour les voyageurs, sérénité absolue pour les propriétaires.",
      navTitle: "Explorer",
      contactTitle: "Contact",
      legalTitle: "Mentions",
      privacy: "Politique de confidentialité",
      cookie: "Gestion des cookies",
      legalNotes: "Mentions Légales",
      manageCookies: "Gérer les préférences de cookies",
      copyright: "Tous droits réservés."
    },

    // Cookie Banner
    cookieBanner: {
      tag: "Cookies & Confidentialité",
      title: "Nous respectons votre vie privée.",
      desc: "Nous utilisons des cookies indispensables au fonctionnement du site et, avec votre accord, des cookies analytiques et de personnalisation. Vous pouvez tout accepter, refuser ou personnaliser vos choix à tout moment.",
      acceptAll: "Tout accepter",
      rejectAll: "Tout refuser",
      customize: "Personnaliser",
      save: "Enregistrer les préférences",
      cookiePolicy: "Politique de Cookies",
      privacyPolicy: "Politique de Confidentialité"
    }
  }
};
