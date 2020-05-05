module.exports = {
  title: 'OverVue.dev',
  description: 'A Quick Approach to Vue.JS core concepts',
  locales: {
    '/': { lang: 'en-US' },
    '/fr/': { lang: 'fr-FR' },
  },
  serviceWorker: true,
  themeConfig: {
    logo: '/favicon.svg',
    nav: [{ text: 'Home', link: '/' }],
    sidebar: [
      '/',
      '/cli',
      '/interpolations',
      '/computed',
      '/v-bind',
      '/links',
      '/events',
      '/style',
      '/conditional',
      '/list',
      '/watch',
      '/components',
      '/slots',
      '/vuex',
      '/forms',
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
