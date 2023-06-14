import mathjax3 from 'markdown-it-mathjax3';
import { defineConfig } from 'vitepress'
import Unocss from 'unocss/vite'
const customElements = ['mjx-container'];
export default defineConfig({
  base: '/English/',
  title: 'English Note',
  description: 'English Note.',
  appearance: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['script', { async: '', src: "//finicounter.eu.org/finicounter.js" }]
  ],
  markdown: {
    config: (md) => {
      md.use(mathjax3);
    },
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag),
      },
    },
  },
  vite: {
    plugins: [
      Unocss()
    ],
  },
  themeConfig: {
    outline: 'deep',
    search: {
      provider: 'local'
    },
    siteTitle: 'English Note',
    logo: 'img/logo.png',
    nav: [
    ],
    sidebar: [
      {
        text: 'CET6',
        items: [
          {
            text: 'article 1',
            link: '/CET6/article-1.md'
          }, {
            text: 'article 2',
            link: '/CET6/article-2.md'
          }, {
            text: 'article 3',
            link: '/CET6/article-3.md'
          }
        ]
      }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Casper Huang.'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/howcasperwhat/English' }
    ]
  },
})