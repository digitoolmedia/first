// unocss.config.js
import { presetAttributify, presetTypography, presetUno } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default({
    modules: [
        '@unocss/nuxt',
        '@nuxtjs/color-mode',
        '@nuxt/image-edge',
        '@nuxt/content',
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
            presetTypography(),
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