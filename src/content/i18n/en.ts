import type { Site } from './sv'

export const en: Site = {
  lang: 'en',
  brand: 'Index JR',
  owner: 'Ali Ismailat',
  skipLabel: 'Skip to content',
  logoAlt: 'Index JR, back to top of page',
  footerText: 'Web development for local businesses in Malmö',

  meta: {
    title: 'Index JR | Websites for local businesses in Malmö',
    description:
      'Web development in Malmö. Fast, accessible websites with booking and quote forms for local businesses.',
  },

  email: 'contact@indexjr.com',
  location: 'Malmö, Sweden',

  ui: {
    toDark: 'Dark mode',
    toLight: 'Light mode',
    langCode: 'SV',
    langName: 'Svenska',
    langAria: 'Byt till svenska',
    langCodeLang: 'sv',
    settings: 'Settings',
  },

  nav: {
    label: 'Main menu',
    openLabel: 'Open menu',
    closeLabel: 'Close menu',
    links: [
      { label: 'Projects', href: '#projekt' },
      { label: 'Services', href: '#tjanster' },
      { label: 'Process', href: '#process' },
      { label: 'About', href: '#om-mig' },
      { label: 'Contact', href: '#kontakt' },
    ],
  },

  cta: {
    href: '#kontakt',
    label: 'Contact me',
  },

  hero: {
    eyebrow: 'Web development in Malmö',
    title: 'Websites that make more people get in touch.',
    highlight: 'get in touch',
    text: 'I build fast, accessible websites for local businesses, with booking, quote forms and a clear path to contact.',
    projectsLabel: 'See my projects',
    proof: [
      { value: '5', label: 'projects of my own' },
      { value: '90+', label: 'Lighthouse score on the demo sites' },
      { value: '100', label: 'accessibility score on all four' },
    ],
  },

  projects: {
    eyebrow: 'Projects',
    title: 'This is what your site could look like',
    intro:
      'Four demo sites for fictional businesses, each with its own look and one clear goal. All are built mobile first.',
    openLabel: 'Open site',
    newTabLabel: 'opens in a new tab',
    liveLabel: 'Live',
    wipLabel: 'In development',
    soonLabel: 'Link coming when it is done',
    noLinkLabel: 'Link coming soon',
    previewStep: 'Part',
    previewOf: 'of',
    previewPrev: 'Previous part of the page',
    previewNext: 'Next part of the page',
    previewRestart: 'Back to the start',
    previewGoTo: 'Go to part',
    animationPause: 'Pause the animation',
    animationPlay: 'Play the animation',
    items: [
      {
        id: 'barber',
        name: 'Skarp Barber (Demo)',
        category: 'Barbershop',
        summary:
          'A dark, sharp site with a cinema-style booking schedule where you pick one time per person.',
        tags: ['Booking schedule', 'Multiple people'],
        alt: 'Screenshot of the Skarp Barber home page',
      },
      {
        id: 'pizzeria',
        name: 'Pizzeria Bella Nova (Demo)',
        category: 'Pizzeria',
        summary: 'A playful site for a pizzeria where the visitor should call and order.',
        tags: ['Call to order', 'Menu', 'Map'],
        alt: 'Screenshot of the Pizzeria Bella Nova home page',
      },
      {
        id: 'cafe',
        name: 'Café Kardemumma (Demo)',
        category: 'Café',
        summary: 'A warm, modern site for a café, with table booking as its single goal.',
        tags: ['Table booking', 'Mobile first'],
        alt: 'Screenshot of the Café Kardemumma home page',
      },
      {
        id: 'nordkant',
        name: 'Nordkant Installation (Demo)',
        category: 'Plumbing and electrical',
        summary: 'A clear site for an installation company, with a quote form as its single goal.',
        tags: ['Quote form', 'Validation'],
        alt: 'Screenshot of the Nordkant Installation home page',
      },
      {
        id: 'memory',
        name: 'Memory game',
        category: 'Side project',
        summary: 'A small browser game that I am still working on.',
        tags: ['React', 'TypeScript'],
        alt: 'Animation of a hammer driving a nail, showing that the project is under construction',
      },
    ],
  },

  services: {
    eyebrow: 'Services',
    title: 'What I can do for you',
    items: [
      {
        icon: 'window',
        name: 'A website for your business',
        text: 'A clear site that shows what you do and leads the visitor to one single goal.',
      },
      {
        icon: 'calendar',
        name: 'Booking and forms',
        text: 'Table booking, appointment booking or quote forms that are easy to use on mobile.',
      },
      {
        icon: 'gauge',
        name: 'Fast and accessible',
        text: 'Pages that load quickly and work for everyone, including keyboard and screen reader users.',
      },
      {
        icon: 'phone',
        name: 'Mobile first',
        text: 'Most traffic comes from phones, so I build for them first.',
      },
    ],
  },

  process: {
    eyebrow: 'Process',
    title: 'How I work',
    stepLabel: 'Step',
    steps: [
      { title: 'Talk', text: 'We discuss your business, your customers and what the site should do for you.' },
      { title: 'Proposal', text: 'You get a design proposal and a fixed price before I start building.' },
      { title: 'Build', text: 'I build the site and you can follow along and give feedback.' },
      { title: 'Launch', text: 'The site goes live and I show you how to change texts and images yourself.' },
    ],
  },

  about: {
    eyebrow: 'About',
    title: 'The person building your site',
    paragraphs: [
      'I am a web developer in Malmö, building websites in React and TypeScript. (!)',
      'I like taking a small business and its needs and turning them into a site that is fast, clear and easy to use.',
    ],
    factsTitle: 'In short',
    facts: ['Based in Malmö, Sweden', 'React, TypeScript and Tailwind CSS', 'Fixed price on smaller sites'],
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Contact me',
    intro:
      'Tell me briefly what you need and I will get back to you. This form is a demo, so nothing is actually sent.',
    emailLabel: 'Email',
    locationLabel: 'Location',
    next: {
      title: 'What happens next',
      items: [
        'I read your request and get back to you.',
        'We book a short call about your needs.',
        'You get a proposal with a fixed price.',
      ],
    },
    errorTitle: 'Please check the form',
    labels: {
      name: 'Name',
      contact: 'Email or phone',
      topic: 'What is it about?',
      message: 'Message',
    },
    topicPlaceholder: 'Choose a topic',
    topics: ['New website', 'Improve my website', 'Booking or quote form', 'Other'],
    messageHint: 'Briefly describe your business and what you need.',
    submitLabel: 'Send',
    demoNote: 'Demo: nothing is sent and no data is saved.',
    errors: {
      name: 'Enter your name.',
      contact: 'Enter a valid email address or phone number.',
      topic: 'Choose what it is about.',
      message: 'Write a few lines about what you need help with.',
    },
    confirm: {
      title: 'Thank you, I have received your request',
      thanks: 'Thank you',
      message: 'I will get back to you as soon as I can.',
      summary: 'Your request',
      again: 'Send another request',
    },
  },
}