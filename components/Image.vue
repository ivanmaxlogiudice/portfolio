<template>
    <div class="overflow-hidden" :class="{ 'animate-pulse': isLoading }">
        <NuxtImg
            v-bind="$attrs"

            class="transition-[scale,filter] duration-700"
            :class="{ 'scale-[1.02] blur-xl grayscale': isLoading }"

            preload
            loading="lazy"
            densities="x1 x2"
            :onload="onLoad"
            @load="onLoad"
        />
    </div>
</template>

<script lang="ts" setup>
const isLoading = ref(true)

const onLoad = () => {
    isLoading.value = false
}
</script>
