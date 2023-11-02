<template>
    <Section
        title="Projects"
        description="Check some of the things that i've worken on."
    >
        <div class="grid mt-8 gap-8 lg:grid-cols-4 md:mt-16">
            <div class="lg:col-span-1">
                <div class="top-24 lg:sticky">
                    <h3 class="text-xl font-bold">
                        Technology
                    </h3>

                    <div class="mt-4 flex flex-col items-start gap-2">
                        <button
                            v-for="(count, tag) in tagsCount"
                            :key="tag"
                            :class="[selectedTag === tag ? 'bg-primary/20 ring-2 ring-primary' : 'hover:bg-gray/10 focus:bg-gray/10']"
                            class="block rounded-md px-2 py-1 text-sm font-medium text-white outline-none transition"

                            @click="selectedTag = tag"
                        >
                            {{ tag }}

                            <span class="ml-1 opacity-60">{{ count }}</span>
                        </button>
                    </div>
                </div>
            </div>

            <div class="lg:col-span-3">
                <div class="mb-4 flex items-center justify-between border-b-2 border-gray-700 pb-2 font-medium">
                    <span v-if="selectedTag" class="h-fit inline-flex items-center gap-x-1 whitespace-nowrap rounded-md bg-gray-100 px-2 py-1 text-sm font-medium dark:bg-gray-800">
                        <span>{{ selectedTag }}</span>

                        <button class="inline-block rounded-full bg-gray-200 outline-none transition dark:bg-gray-700 focus:bg-gray-400 hover:bg-gray-300 dark:hover:bg-gray-500" @click="selectedTag = undefined">
                            <i class="i-bx-x block" />
                        </button>
                    </span>
                    <span v-else class="py-1 text-sm">Viewing all projects</span>
                </div>

                <TransitionGroup
                    tag="div"
                    class="grid gap-y-8 lg:grid-cols-2 sm:gap-8"

                    enter-active-class="transition-opacity ease-linear duration-300"
                    enter-class="opacity-0"
                    enter-to-class="opacity-100"
                    leave-active-class="transition-opacity ease-linear duration-300"
                    leave-class="opacity-100"
                    leave-to-class="opacity-0"
                >
                    <ProjectCard
                        v-for="project in filteredProjects"
                        :key="project.title"
                        :project="project"
                    />
                </TransitionGroup>
            </div>
        </div>
    </Section>
</template>

<script lang="ts" setup>
import type { Project } from '~/types'

const selectedTag = ref()
const { data: projects } = await useAsyncData('projects', () =>
    queryContent<Project>('projects')
        .sort({ date: 1 })
        .find())

const tagsCount = projects.value?.reduce((acc, project) => {
    project.tags.forEach(tag => (acc[tag] = (acc[tag] || 0) + 1))
    return acc
}, {} as Record<string, number>)

const filteredProjects = computed(() =>
    selectedTag.value
        ? projects.value?.filter(project => project.tags.includes(selectedTag.value))
        : projects.value,
)
</script>
