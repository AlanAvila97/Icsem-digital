// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  "~~": "/<rootDir>",
  "@@": "/<rootDir>",
  "~": "/<rootDir>",
  "@": "/<rootDir>",
  "assets": "/<rootDir>/assets",
  app: {
    head: {
        htmlAttrs: {
            lang: 'es-mx'
        },
        charset: 'utf-8',
        title: 'Instrumentación Controles y Servicios EM',
        meta: [
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'description', content: 'Instrumentación Controles y Servicios EM descripcion' },
            { name: 'keywords', content: 'Finanzas' },
            { name: 'author', content: 'Instrumentación Controles y Servicios EM' },
            { name: 'twitter:card', content: 'summary_large_imag' },
            // { name: 'twitter:site', content: '' },
            { name: 'msapplication-TileColor', content: '#ffffff' },
            { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
            { name: 'theme-color', content: '#ffffff' },
            { property: 'og:locale', content: 'es_MX' },
            { property: 'og:type', content: 'website' },
            { property: 'og:title', content: 'Instrumentación Controles y Servicios EM' },
            { property: 'og:description', content: 'Instrumentación Controles y Servicios EM descripcion' },
            { property: 'og:url', content: 'www.icsem.mx' },
            { property: 'og:site_name', content: 'Instrumentación Controles y Servicios EM' },
            // { property: 'og:image', content: '' },
            { property: 'og:image:width', content: '1346' },
            { property: 'og:image:height', content: '1346' },
            { property: 'og:image:type', content: 'image/jpeg' },
            { property: 'og:image:type', content: 'image/jpeg' },
        ],
        link: [
            { rel: 'shortlink', href: 'https://icsem.mx/'},
            { rel: 'canonical', href: 'https://icsem.mx'},
            { rel: 'dns-prefetch', href: '//www.google-analytics.com'},
            { rel: 'apple-touch-icon', sizes: '57x57', href: 'https://delicate-maamoul-70641c.netlify.app/images/logo_icsem57x57.webp'},
            { rel: 'apple-touch-icon', sizes: '60x60', href: 'https://delicate-maamoul-70641c.netlify.app/images/logo_icsem60x60.webp'},
            { rel: 'apple-touch-icon', sizes: '72x72', href: 'https://delicate-maamoul-70641c.netlify.app/images/logo_icsem72x72.webp'},
            { rel: 'apple-touch-icon', sizes: '76x76', href: 'https://delicate-maamoul-70641c.netlify.app/images/logo_icsem76x76.webp'},
            { rel: 'apple-touch-icon', sizes: '114x144', href: 'https://delicate-maamoul-70641c.netlify.app/images/logo_icsem114x114.webp'},
            { rel: 'apple-touch-icon', sizes: '120x120', href: 'https://delicate-maamoul-70641c.netlify.app/images/logo_icsem120x120.webp'},
            { rel: 'apple-touch-icon', sizes: '144x144', href: 'https://delicate-maamoul-70641c.netlify.app/images/logo_icsem144x144.webp'},
            { rel: 'apple-touch-icon', sizes: '152x152', href: 'https://delicate-maamoul-70641c.netlify.app/images/logo_icsem152x152.webp'},
            { rel: 'apple-touch-icon', sizes: '180x180', href: 'https://delicate-maamoul-70641c.netlify.app/images/logo_icsem180x180.webp'},
            { rel: 'icon', sizes: '192x192', href: 'https://delicate-maamoul-70641c.netlify.app/_ipx/f_webp&fit_cover&q_90&s_1280x634/images/logo_icsem_ch.webp'},
        ],              
        script: [
          { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-L19R8RP6KH' },
          { src: 'https://once.fabricaapps.com/js/wow/wow.min.js', tagPosition: 'bodyClose' },
        ],
        noscript: [
        ]
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  ssr: true,
  css:[
    'animate.css/animate.css',
    'bootstrap/dist/css/bootstrap.min.css',
    '@/assets/css/main.css',
    '@/assets/css/navbar.css',
    '@/assets/css/footer.css',
    '@/assets/css/btnUp.css',
    '@/assets/css/global.css',
    'swiper/css',
    'swiper/css/navigation',
    'swiper/css/pagination',
  ],
  modules: [
            'nuxt-gtag', 
            'nuxt-icon', 
            'nuxt-link-checker', 
            'nuxt-delay-hydration', 
            '@nuxt/image', 
            '@pinia/nuxt', 
            '@unlazy/nuxt', 
            '@nuxtjs/robots',
            '@nuxtjs/web-vitals', 
            '@nuxtjs/color-mode', 
            '@nuxtjs/google-fonts', 
            '@nuxtjs/partytown'
          ],
  devtools: { 
    enabled: true 
  },
  gtag: {
    id: 'G-L19R8RP6KH',
    config: {
      page_title: 'Instrumentación Controles y Servicios EM'
    }
  },
  runtimeConfig: {
    public: {
      gtagId: 'G-L19R8RP6KH',
    }
  },
  plugins: [
    '~/plugins/gtag.client.js'
  ],
  delayHydration: {
    debug: process.env.NODE_ENV === 'development',
    mode: 'init',
    replayClick: false,
  },
  image: {
    quality: 90,
    format: ['webp'],
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1200,
      'xl': 1480,
      'xxl': 1536,
      '2xl': 1836   
    },
    presets: {
        cover: {
          modifiers: {
            fit: "cover",
            format: "jpg",
            width: 250,
            height: 250,
          },
        },
        blog: {
            modifiers: {
              format: 'webp',
              fit: 'cover',
              quality: '90',
            }
        },
    },
    domains: ['https://www.icsem.mx/'],
    providers: {
      customProvider: {
        name: 'icsem', // optional value to overrider provider name
        provider: './composables/IcsemImageProvider.js', // Path to custom provider
        options: {
          // ... provider options
        }
      }
    }
    // 
  },
  webVitals: {
    // provider: '', // auto detectd
    debug: true,
    disabled: false
  },
  googleFonts: {
    // Options 
  },
  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: (req) => `https://${req.headers.host}/sitemap.xml`,
  }
})