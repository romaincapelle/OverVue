module.exports = {
  title: 'OverVue.dev',
  description:
    'OverVue.dev is a collection of snippets covering the core concepts of Vue.js',
  locales: {
    '/': { lang: 'en-US' }
    //'/fr/': { lang: 'Franglais' },
  },
  plugins: [
    [
      [
        '@limdongjin/vuepress-plugin-simple-seo',
        {
          default_image: '/overvue-card.jpg',
          root_url: 'https://overvue.dev',
          default_site_name: 'OverVue.dev'
        }
      ],
      '@vuepress/google-analytics',
      {
        ga: 'UA-166308837-1' // UA-00000000-0
      }
    ]
  ],
  themeConfig: {
    logo: '/favicon.svg',
    nav: [
      { text: 'Javascript', link: '/javascript/' },
      { text: 'VueJs', link: '/' },
      { text: 'About', link: '/about-romain-capelle' },
      { text: 'Contact', link: '/contact-romain-capelle' }
    ],
    sidebarDepth: 1,
    sidebar: {
      '/javascript/': [
        {
          title: 'Javascript', // required
          path: '/javascript/', // optional, link of the title, which should be an absolute path and must exist
          collapsable: false,
          sidebarDepth: 1, // optional, defaults to 1
          children: [
            '' /* /foo/ */,
            'arrays.md',
            'objects.md' /* /foo/two.html */
          ]
        }
      ],
      // fallback
      '/': [
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
        //'/vuejs-forminputvalidation',
        '/vuejs-components',
        '/vuejs-slots',
        '/vuejs-vuex',
        '/vuejs-router',
        '/vuejs-transitions',
        //'/vuejs-animations',
        //'/vuejs-filters',
        //'/vuejs-mixins',
        //'/vuejs-directives',
        '/vuejs-Axios',
        //'/vuejs-Auth',
        '/vuejs-env-variables',
        //'/vuejs-Firebase',
        '/vuejs-Vuepress',
        '/vuejs-tailwindcss.md',
        '/vuejs-vscode'
      ]
    },
    searchPlaceholder: 'Press "S" to focus on Search bar'
  },
  markdown: {
    lineNumbers: true
  },
  head: [
    ['link', { rel: 'icon', href: '/icon.png' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Inconsolata&display=swap'
      }
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Caveat&display=swap'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      }
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      }
    ],
    [
      'link',
      { rel: 'mask-icon', color: '#f00a0', href: '/safari-pinned-tab.svg' }
    ],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      {
        property: 'twitter:image',
        content: 'https://overvue.dev/overvue-card.jpg'
      }
    ],
    [
      'meta',
      {
        property: 'og:image',
        content: 'https://overvue.dev/overvue-card.jpg'
      }
    ],
    [
      'meta',
      {
        property: 'og:url',
        content: 'https://overvue.dev/'
      }
    ],
    [
      'meta',
      {
        property: 'og:type',
        content: 'website'
      }
    ],
    [
      'meta',
      {
        property: 'og:image:type',
        content: 'image/jpg'
      }
    ],
    [
      'meta',
      {
        property: 'og:image:width',
        content: '1600'
      }
    ],
    [
      'meta',
      {
        property: 'og:image:height',
        content: '630'
      }
    ],
    [
      'meta',
      {
        property: 'og:image:alt',
        content: 'OverVue.dev / Vue.JS snippets site'
      }
    ],
    [
      'meta',
      {
        name: 'twitter:card',
        content: 'https://overvue.dev/overvue-card.jpg'
      }
    ]
  ]
}
