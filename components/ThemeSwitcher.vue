<template>
    <ClientOnly>
        <button
            aria-label="Theme"
            class="inline-flex items-center rounded-md p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800"
            @click="toggleColorMode"
        >
            <span aria-hidden="true" class="i-bx-moon dark:i-bx-sun h-5 w-5" />
        </button>
    </ClientOnly>
</template>

<script lang="ts" setup>
const colorMode = useColorMode()

function toggleColorMode() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>
