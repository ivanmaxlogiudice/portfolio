<template>
    <NuxtLayout name="basic">
        <h1 class="text-8xl font-bold text-primary">
            404
        </h1>

        <h2 class="text-3xl font-semibold">
            Page not found
        </h2>

        <p class="mt-6">
            Sorry, we couldn't find the page you're looking for.
        </p>

        <NuxtLink to="/" class="mt-6 rounded-md bg-primary-500 px-4 py-2 font-semibold text-white transition duration-250 ease">
            Go Home
        </NuxtLink>
    </NuxtLayout>
</template>

<script lang="ts" setup>
useSeoMeta({
    description: 'Sorry, we couldn\'t find the page you\'re looking for.',
    title: 'Page not found',
})
</script>
