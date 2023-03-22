// unocss.config.js
import { presetAttributify, presetTypography, presetUno, transformerDirectives } from 'unocss'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default({
    modules: [
        '@unocss/nuxt',
        '@nuxtjs/color-mode',
        '@nuxt/image-edge',
        '@nuxt/content',
        '@nuxtjs/i18n',
        'nuxt-icon'
    ],
    nitro: {
        compressPublicAssets: true,
        prerender: {
            crawlLinks: true,
        },
    },
    typescript: {
        shim: false
    },
    css: [
        '@unocss/reset/tailwind.css',
    ],
    content: {
        // https://content.nuxtjs.org/api/configuration
    },
    unocss: {
        uno: true,
        attributify: true,
        typography: true,
        preflight: true,

        transformers: [transformerDirectives()],

        // core options
        shortcuts: [],
        rules: [],

        presets: [
            presetAttributify(), // required if using attributify mode
            presetUno(), // required
            presetTypography({
                cssExtend: {},
            }),
          ],
    },
    colorMode: {
        preference: 'system',
        fallback: 'light',
        classSuffix: '',
    },
    app: {
        head: {
            title: 'Website',
            htmlAttrs: {
                lang: 'en'
            }
        },
    }
});