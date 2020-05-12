module.exports = {
  title: 'OverVue.dev',
  description: 'A Quick Approach to Vue.JS core concepts',
  locales: {
    '/': { lang: 'en-US' },
    //'/fr/': { lang: 'Franglais' },
  },
  serviceWorker: true,
  themeConfig: {
    logo: '/favicon.svg',
    search: false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
    ],
    sidebarDepth: 4,
    sidebar: [
      '/',
      '/cli',
      '/interpolations',
      '/computed',
      '/watch',
      '/v-bind',
      '/class',
      '/events',
      '/conditional',
      '/list',
      '/forms',
      '/forminputvalidation',
      '/components',
      '/slots',
      '/vuex',
      '/router',
      '/animations',
      '/transitions',
      '/filters',
      '/mixins',
      '/directives',
    ],
  },
  markdown: {
    lineNumbers: true,
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Inconsolata&display=swap',
      },
    ],
  ],
};
