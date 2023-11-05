/* eslint-disable perfectionist/sort-objects */

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },

    typescript: {
        strict: true,
    },

    modules: [
        '@unocss/nuxt',
        '@nuxtjs/color-mode',
        '@vueuse/motion/nuxt',
        '@nuxt/content',
        '@nuxt/image',
        '@vee-validate/nuxt',
        'nuxt-security',
    ],

    runtimeConfig: {
        resendApiKey: '',

        public: {
            baseURL: process.env.BASE_URL || 'https://ivanlogiudice.com/',
        },
    },

    security: {
        enabled: process.env.NODE_ENV !== 'development',
        headers: {
            contentSecurityPolicy: {
                'upgrade-insecure-requests': process.env.NODE_ENV !== 'development',
            },
        },
    },

    css: [
        '@unocss/reset/tailwind.css',
    ],

    colorMode: {
        classSuffix: '',
        preference: 'system',
        fallback: 'dark',
    },

    app: {
        head: {
            htmlAttrs: {
                lang: 'en',
            },
            titleTemplate: '%s - Iván M. Lo Giudice',
            bodyAttrs: {
                class: 'scrollbar scrollbar-w-2 scrollbar-thumb:(rounded) scrollbar-track-color-gray-100 scrollbar-thumb-color-gray-300 dark:scrollbar-track-color-gray-700 dark:scrollbar-thumb-color-gray-600',
            },
            link: [
                { rel: 'icon', type: 'image/webp', href: '/favicon.webp' },
                { rel: 'icon', type: 'image/webp', sizes: '16x16', href: '/favicon-16x16.webp' },
                { rel: 'icon', type: 'image/webp', sizes: '32x32', href: '/favicon-32x32.webp' },
                { rel: 'icon', type: 'image/webp', sizes: '192x192', href: '/android-chrome-192x192.webp' },
                { rel: 'icon', type: 'image/webp', sizes: '512x512', href: '/android-chrome-512x512.webp' },
                { rel: 'apple-touch-icon', type: 'image/webp', sizes: '180x180', href: '/apple-touch-icon.webp' },
            ],
        },
        pageTransition: {
            name: 'fade',
            mode: 'out-in',
        },
    },
})
