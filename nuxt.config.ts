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
    ],

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
