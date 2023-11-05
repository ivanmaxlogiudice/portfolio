/* eslint-disable perfectionist/sort-objects */

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },

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
    },

    security: {
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
        pageTransition: {
            name: 'fade',
            mode: 'out-in',
        },
    },
})
