<template>
    <footer class="flex flex-col items-center justify-center border-t py-8 dark:border-white/10">
        <div class="flex flex-col items-center gap-8">
            <h4 class="text-3xl font-bold md:text-5xl dark:text-white">
                Keep in touch
            </h4>

            <p class="text-center">
                Feel free to get in touch and talk more about your projects.
            </p>

            <div class="grid grid-cols-2 items-center gap-4 md:grid-cols-4">
                <a v-for="(social, index) in socials" :key="index" :href="social.url" class="flex items-center gap-2 rounded-md bg-gray-100 px-4 py-2 font-semibold transition duration-250 ease dark:bg-gray-800 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700" rel="noopener noreferrer" target="_blank">
                    <div :class="social.icon" class="h-5 w-5 text-primary" />

                    {{ social.name }}
                </a>
            </div>
        </div>

        <p class="mt-12 text-center text-sm">
            Designed and Developed by Iván M. Lo Giudice.<br>
            Build with <a class="text-primary" href="https://nuxt.com/" rel="noopener noreferrer" target="_blank">Nuxt.js</a>
            & <a class="text-primary" href="https://unocss.dev/" rel="noopener noreferrer" target="_blank">UnoCSS</a>.
            Hosted on <a class="text-primary" href="https://vercel.com/" rel="noopener noreferrer" target="_blank">Vercel</a>.
        </p>
    </footer>
</template>
