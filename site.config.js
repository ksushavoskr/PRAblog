const CONFIG = {
  // profile setting (required)
  profile: {
    name: 'Innovative branding agency',
    image: '/images/logo.gif',  // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: 'Branding agency Pocket Rocket',
    bio: '',
    email: 'pocketrocket@gmail.com',
    linkedin: 'pocketrocket_agency',
    github: '',
    instagram: 'pocketrocket_agency',
    vimeo: '',
  },
  projects: [
    {
      name: `PRA Blog`,
      href: 'https://github.com/ksushavoskr/PRAblog' //https://github.com/oleg-lekhnitsky/blog
    }
  ],
  // blog setting (required)
  blog: {
    title: 'Pocket Rocket',
    description: 'Blog of branding agency Pocket Rocket',
    theme: 'auto' // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: '', //https://blogg-omega.vercel.app
  since: 2023, // If leave this empty, current year will be used.
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: 'https://og-image-korean.vercel.app', // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ['Blog', 'Website', 'Branding'],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || ''
    }
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || ''
    }
  },
  utterances: {
    enable: true,
    config: {
      repo: '', //oleg-lekhnitsky/blogg
      'issue-term': 'og:title',
      label: 'Utterances',
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
