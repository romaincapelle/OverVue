module.exports = {
  title: 'OverVue.dev',
  description: 'A Quick Approach to Vue.JS core concepts',
  locales: {
    '/': { lang: 'en-US' },
    //'/fr/': { lang: 'Franglais' },
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-166308837-1', // UA-00000000-0
      },
    ],
  ],
  themeConfig: {
    logo: '/favicon.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about-romain-capelle' },
      { text: 'Contact', link: '/contact-romain-capelle' },
    ],
    sidebarDepth: 4,
    sidebar: [
      '/',
      '/vuejs-cli',
      '/vuejs-interpolations',
      '/vuejs-computed',
      '/vuejs-watch',
      '/vuejs-v-bind',
      '/vuejs-class',
      '/vuejs-events',
      '/vuejs-conditional',
      '/vuejs-list',
      '/vuejs-forms',
      '/vuejs-forminputvalidation',
      '/vuejs-components',
      '/vuejs-slots',
      '/vuejs-vuex',
      '/vuejs-router',
      '/vuejs-animations',
      '/vuejs-transitions',
      '/vuejs-filters',
      '/vuejs-mixins',
      '/vuejs-directives',
      '/vuejs-Axios',
      '/vuejs-Auth',
      '/vuejs-Firebase',
      '/vuejs-Deploying',
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
