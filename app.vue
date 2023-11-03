<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script lang="ts" setup>
useHead({
    bodyAttrs: {
        class: 'scrollbar scrollbar-w-2 scrollbar-thumb:(rounded) scrollbar-track-color-gray-100 scrollbar-thumb-color-gray-300 dark:scrollbar-track-color-gray-700 dark:scrollbar-thumb-color-gray-600',
    },
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity .2s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
