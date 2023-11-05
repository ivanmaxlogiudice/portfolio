<template>
    <section>
        <h2
            v-motion
            :initial="{ opacity: 0, x: -30 }"
            :visibleOnce="{ opacity: 1, x: 0 }"

            class="text-2xl font-bold -translate-x-2 md:text-3xl dark:text-white"
        >
            {{ title }}
            <span class="text-primary">.</span>
        </h2>

        <p
            v-motion
            :initial="{ opacity: 0, x: -30 }"
            :visibleOnce="{ opacity: 1, x: 0, transition: { delay: 100 } }"

            class="mt-2"
        >
            {{ description }}
        </p>

        <slot />
    </section>
</template>

<script lang="ts" setup>
defineProps<{
    description: string
    title: string
}>()
</script>
