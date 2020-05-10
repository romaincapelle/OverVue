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
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
    ],
    sidebarDepth: 4,
    sidebar: [
      '/',
      '/interpolations',
      '/computed',
      '/v-bind',
      '/links',
      '/class',
      '/events',
      '/conditional',
      '/list',
      '/watch',
      '/router',
      '/components',
      '/slots',
      '/vuex',
      '/forms',
      '/forminputvalidation',
      '/directives',
      '/filters',
      '/mixins',
      '/animations',
      '/transitions',
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
