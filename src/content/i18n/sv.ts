import type { IconName } from '../content.ts'

export const sv = {
  lang: 'sv',
  brand: 'Index JR',
  owner: 'Ali Ismailat',
  skipLabel: 'Hoppa till innehållet',
  logoAlt: 'Index JR, till toppen av sidan',
  footerText: 'Webbutveckling för lokala företag i Malmö',
  footerPersonal: 'Personligt',

  meta: {
    title: 'Index JR | Hemsidor för lokala företag i Malmö',
    description:
      'Webbutveckling i Malmö. Snabba, tillgängliga hemsidor med bokning och offertformulär för lokala företag.',
  },

  email: 'contact@indexjr.com',
  location: 'Malmö',

  ui: {
    toDark: 'Mörkt läge',
    toLight: 'Ljust läge',
    langCode: 'EN',
    langName: 'English',
    langAria: 'Switch to English',
    langCodeLang: 'en',
    settings: 'Inställningar',
  },

  nav: {
    label: 'Huvudmeny',
    openLabel: 'Öppna meny',
    closeLabel: 'Stäng meny',
    links: [
      { label: 'Projekt', href: '#projekt' },
      { label: 'Tjänster', href: '#tjanster' },
      { label: 'Process', href: '#process' },
      { label: 'Om mig', href: '#om-mig' },
      { label: 'Kontakt', href: '#kontakt' },
    ],
  },

  cta: {
    href: '#kontakt',
    label: 'Kontakta mig',
  },

  hero: {
    title: 'Snabba hemsidor för lokala företag.',
    highlight: 'lokala företag',
    text: 'Jag bygger snabba och tillgängliga hemsidor för lokala företag, med bokning, offertformulär och en tydlig väg till kontakt.',
    projectsLabel: 'Se mina projekt',
    proof: [
      { value: '5', label: 'egna projekt' },
      { value: '90+', label: 'i Lighthouse på demosidorna' },
      { value: '100', label: 'i tillgänglighet på alla fem' },
    ],
  },

  projects: {
    eyebrow: 'Projekt',
    title: 'Så här kan din sida se ut',
    intro:
      'Fyra demosidor för påhittade företag, var och en med eget uttryck och ett enda tydligt mål. Alla är byggda mobilen först.',
    openLabel: 'Öppna sidan',
    newTabLabel: 'öppnas i ny flik',
    liveLabel: 'Live',
    wipLabel: 'Under utveckling',
    soonLabel: 'Länk kommer när det är klart',
    noLinkLabel: 'Länk kommer snart',
    previewStep: 'Del',
    previewOf: 'av',
    previewPrev: 'Föregående del av sidan',
    previewNext: 'Nästa del av sidan',
    previewRestart: 'Tillbaka till början',
    previewGoTo: 'Gå till del',
    animationPause: 'Pausa animationen',
    animationPlay: 'Spela upp animationen',
    items: [
      {
        id: 'barber',
        name: 'Skarp Barber (Demo)',
        category: 'Barbershop',
        summary:
          'Mörk och stram sida med ett bokningsschema i bio-stil där man väljer en tid per person.',
        tags: ['Bokningsschema', 'Flera personer'],
        alt: 'Skärmbild av startsidan för Skarp Barber',
      },
      {
        id: 'pizzeria',
        name: 'Pizzeria Bella Nova (Demo)',
        category: 'Pizzeria',
        summary: 'Lekfull sida för en pizzeria där besökaren ska ringa och beställa.',
        tags: ['Ring och beställ', 'Meny', 'Karta'],
        alt: 'Skärmbild av startsidan för Pizzeria Bella Nova',
      },
      {
        id: 'cafe',
        name: 'Café Kardemumma (Demo)',
        category: 'Café',
        summary: 'Varm och modern sida för ett café, med bordsbokning som enda mål.',
        tags: ['Bordsbokning', 'Mobilen först'],
        alt: 'Skärmbild av startsidan för Café Kardemumma',
      },
      {
        id: 'nordkant',
        name: 'Nordkant Installation (Demo)',
        category: 'VVS och el',
        summary: 'Tydlig sida för ett installationsföretag, med offertformulär som enda mål.',
        tags: ['Offertformulär', 'Validering'],
        alt: 'Skärmbild av startsidan för Nordkant Installation',
      },
      {
        id: 'memory',
        name: 'Memory-spel',
        category: 'Eget sidoprojekt',
        summary: 'Ett litet webbläsarspel som jag fortfarande bygger på.',
        tags: ['React', 'TypeScript'],
        alt: 'Animation av en boll som studsar runt i ramen och mot texten Under utveckling',
      },
    ],
  },

  services: {
    eyebrow: 'Tjänster',
    title: 'Det här kan jag göra åt dig',
    items: [
      {
        icon: 'window' as IconName,
        name: 'Hemsida för ditt företag',
        text: 'En tydlig sida som visar vad du gör och leder besökaren till ett enda mål.',
      },
      {
        icon: 'calendar' as IconName,
        name: 'Bokning och formulär',
        text: 'Bordsbokning, tidsbokning eller offertformulär som är enkla att använda på mobilen.',
      },
      {
        icon: 'gauge' as IconName,
        name: 'Snabb och tillgänglig',
        text: 'Sidor som laddar fort och fungerar med tangentbord och skärmläsare.',
      },
      {
        icon: 'phone' as IconName,
        name: 'Mobilen först',
        text: 'Det mesta av trafiken kommer från telefoner, så jag bygger för dem först.',
      },
    ],
  },

  process: {
    eyebrow: 'Process',
    title: 'Så jobbar jag',
    stepLabel: 'Steg',
    steps: [
      { title: 'Samtal', text: 'Vi pratar om ditt företag, dina kunder och vad sidan ska ge dig.' },
      {
        title: 'Förslag',
        text: 'Du får ett designförslag, en tydlig omfattning och ett pris innan jag börjar bygga.',
      },
      { title: 'Bygge', text: 'Jag bygger sidan och du får se den under tiden och ge synpunkter.' },
      { title: 'Lansering', text: 'Vi går igenom sidan tillsammans, sedan går den live.' },
    ],
  },

  about: {
    eyebrow: 'Om mig',
    title: 'Jag som bygger din sida',
    paragraphs: [
      'Jag är utbildad webbutvecklare i Malmö och bygger hemsidor i React och TypeScript.',
      'Jag börjar alltid i ditt företags behov och gör dem till en hemsida som är snabb, tydlig och fungerar lika bra på mobilen som på datorn. Du pratar direkt med mig från första idé till färdig sida.',
    ],
    factsTitle: 'Kort om mig',
    facts: [
      'Bor och arbetar i Malmö',
      'React, TypeScript och Tailwind CSS',
      'Tydligt pris och omfattning i förväg',
    ],
  },

  contact: {
    eyebrow: 'Kontakt',
    title: 'Kontakta mig',
    intro: 'Berätta kort vad du behöver så hör jag av mig.',
    emailLabel: 'E-post',
    locationLabel: 'Plats',
    next: {
      title: 'Så går det till',
      items: [
        'Jag läser din förfrågan och återkommer.',
        'Vi bokar ett kort samtal om dina behov.',
        'Du får ett förslag med pris och tydlig omfattning.',
      ],
    },
    errorTitle: 'Kontrollera formuläret',
    labels: {
      name: 'Namn',
      contact: 'E-post eller telefon',
      topic: 'Vad gäller det?',
      message: 'Meddelande',
    },
    topicPlaceholder: 'Välj ämne',
    topics: ['Ny hemsida', 'Förbättra min hemsida', 'Bokning eller offertformulär', 'Annat'],
    messageHint: 'Beskriv kort ditt företag och vad du behöver.',
    submitLabel: 'Skicka',
    sendingLabel: 'Skickar...',
    sendError: 'Något gick fel. Försök igen eller mejla mig direkt.',
    honeypotLabel: 'Fyll inte i det här fältet:',
    errors: {
      name: 'Skriv ditt namn.',
      contact: 'Skriv en giltig e-postadress eller ett telefonnummer.',
      topic: 'Välj vad det gäller.',
      message: 'Skriv några rader om vad du behöver hjälp med.',
    },
    confirm: {
      title: 'Tack, jag har tagit emot din förfrågan',
      thanks: 'Tack',
      message: 'Jag återkommer så snart jag kan.',
      summary: 'Din förfrågan',
      again: 'Skicka en ny förfrågan',
    },
  },
}

export type Site = typeof sv
