<template>
    <article class="group h-[fit-content] overflow-hidden border-2 border-gray-200 rounded-md dark:border-gray-700">
        <figure ref="$figure" class="aspect-[2/1] overflow-hidden border-b-2 border-gray-100 dark:border-gray-700">
            <Image
                :src="`images/projects/${project.image}`"
                :alt="project.title"
                :style="`--un-translate-y: -${translateY}%`"
                class="w-full object-fill transition duration-2500 group-hover:-translate-y-[0%]"
            />
            <figcaption>{{ project.title }}</figcaption>
        </figure>

        <div class="bg-white p-4 dark:bg-gray-800">
            <NuxtLink :to="project.url" class="inline-flex items-center gap-2 text-lg font-semibold dark:text-white" target="_blank" rel="noopener noreferrer">
                {{ project.title }}

                <i class="i-bx-link-external" />
            </NuxtLink>

            <div class="space-x-2">
                <span v-for="(tag, indexTag) in project.tags" :key="indexTag" class="rounded-full bg-primary/10 bg-opacity-40 px-2 py-1 text-xs font-medium text-primary dark:bg-primary/20">
                    {{ tag }}
                </span>
            </div>

            <p class="mt-6">
                {{ project.description }}
            </p>

            <div v-if="project.source" class="mt-4 -mb-2">
                <NuxtLink :to="project.source" class="group inline-flex items-center gap-2 font-medium transition duration-250 ease dark:text-white" target="_blank" rel="noopener noreferrer">
                    <div class="i-bx-bxl-github h-6 w-6" />
                    Github
                </NuxtLink>
            </div>
        </div>
    </article>
</template>

<script lang="ts" setup>
import type { Project } from '~/types'

defineProps<{
    project: Project
}>()

const $figure = ref<HTMLElement>()
const observer = ref<ResizeObserver>()
const translateY = ref(0)

const onResize = () => {
    translateY.value = (1 - $figure.value!.clientHeight / $figure.value!.children[0].clientHeight) * 50
}

onMounted(() => {
    observer.value = new ResizeObserver(onResize)
    observer.value.observe($figure.value!)
})
onBeforeUnmount(() => observer.value!.unobserve($figure.value!))
</script>
