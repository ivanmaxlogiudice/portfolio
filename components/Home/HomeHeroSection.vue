<template>
    <section id="hero" class="relative grid grid-cols-1 lg:grid-cols-3">
        <div class="lg:col-span-2">
            <p
                v-motion
                :initial="{ opacity: 0, x: -30 }"
                :visible="{ opacity: 1, x: 0 }"

                class="text-xl font-semibold text-primary md:text-2xl"
            >
                Hey there!, I'm
            </p>
            <h1
                v-motion
                :initial="{ opacity: 0, x: -30 }"
                :visible="{ opacity: 1, x: 0, transition: { delay: 100 } }"

                class="text-5xl font-bold md:text-7xl dark:text-white"
            >
                Iván Máximiliano<br> Lo Giudice
            </h1>

            <p
                v-motion
                :initial="{ opacity: 0, x: -30 }"
                :visible="{ opacity: 1, x: 0, transition: { delay: 125 } }"

                class="mt-4 text-balance text-xl dark:text-gray-300"
            >
                A self-taught <b class="dark:text-white">full-stack</b> web developer. I am thrilled to share with you the projects I have created through my self-directed learning journey.
            </p>

            <div class="grid grid-cols-2 mt-8 gap-4 md:flex">
                <a
                    v-for="(social, index) in socials"
                    :key="index"
                    v-motion="{
                        initial: {
                            scale: 0,
                            opacity: 0,
                        },
                        visible: {
                            scale: 1,
                            opacity: 1,
                            transition: {
                                delay: 125 + index * 50,
                            },
                        },
                    }"
                    :href="social.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center gap-2 rounded-md bg-gray-100 px-4 py-2 font-semibold transition duration-250 ease dark:bg-gray-800 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700"
                >
                    <i :class="social.icon" class="h-5 w-5 text-primary" />

                    {{ social.name }}
                </a>
            </div>
        </div>
    </section>
</template>
