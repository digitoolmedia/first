// import UnoCSS
import {
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
    presetWebFonts,
    transformerDirectives,
    transformerVariantGroup,
} from 'unocss'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@unocss/nuxt',
        '@nuxtjs/color-mode',
        '@nuxt/image-edge',
        '@nuxt/content',
        '@nuxtjs/i18n',
        '@nuxt/devtools',
        '@vueuse/nuxt',
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
    unocss: {
        presets: [
            presetUno(),
            presetAttributify(),
            presetIcons({
              cdn: 'https://esm.sh/',
              scale: 1.2,
              extraProperties: {
                'display': 'inline-block',
                'vertical-align': 'middle',
                // ...
              },
            }),
            presetTypography(),
            presetWebFonts({
              fonts: {
                sans: 'DM Sans',
                serif: 'DM Serif Display',
                mono: 'DM Mono',
              },
            }),
          ],
          transformers: [
            transformerDirectives(),
            transformerVariantGroup(),
        ],
    },
    content: {
        // https://content.nuxtjs.org/api/configuration
        highlight: {
            theme: {
              // Default theme (same as single string)
              default: 'github-light',
              // Theme used if `html.dark`
              dark: 'github-dark',
            },
            prelaod: [
                'diff',
                'json',
                'js',
                'ts',
                'css',
                'shell',
                'html',
                'md',
                'yaml',
                'vue',
            ],
        },
    },
    image: {
        provider: 'ipx',
        ipx: {
            maxAge: 2592000,
        },
        // The screen sizes predefined by `@nuxt/image`:
        screens: {
            xs: 320,
            sm: 640,
            md: 1024,
            lg: 1280,
            xl: 1920,
            xxl: 2560,
        },
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
    },
});