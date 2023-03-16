// https://nuxt.com/docs/api/configuration/nuxt-config
import transformerDirectives from '@unocss/transformer-directives'

export default({
    modules: [
        '@unocss/nuxt',
        '@nuxtjs/color-mode',
        '@nuxt/content',
        'nuxt-icon'
    ],
    nitro: {
        compressPublicAssets: true,
        prerender: {
            crawlLinks: true,
        },
    },
    sourcemap: {
        server: true,
        client: false,
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
        preflight: true,

        transformers: [transformerDirectives()],

        // core options
        shortcuts: [],
        rules: [],
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