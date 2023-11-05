<template>
    <section id="featured-projects">
        <h2
            v-motion
            :initial="{ opacity: 0, x: -30 }"
            :visibleOnce="{ opacity: 1, x: 0, transition: { delay: 150 } }"

            class="text-2xl font-bold md:text-3xl dark:text-white"
        >
            Featured Projects
            <span class="text-primary">.</span>
        </h2>

        <p
            v-motion
            :initial="{ opacity: 0, x: -30 }"
            :visibleOnce="{ opacity: 1, x: 0, transition: { delay: 175 } }"

            class="mt-2"
        >
            Here are some of the projects that I'm proud of.
        </p>

        <NuxtLink to="/projects" class="group mt-2 inline-flex items-center text-sm font-semibold text-primary">
            See more

            <i class="i-bx-right-arrow-alt group-hover:i-bx-bxs-chevron-right inline-block transition group-hover:translate-x-2" />
        </NuxtLink>

        <div class="grid grid-flow-dense grid-cols-1 mt-6 gap-8 sm:grid-cols-2">
            <ProjectCard v-for="(project, index) in featuredProjects" :key="index" :project="project" />
        </div>
    </section>
</template>

<script lang="ts" setup>
import type { Project } from '~/types'

const { data: featuredProjects } = await useAsyncData('featuredProjects', () =>
    queryContent<Project>('projects')
        .where({ featured: true })
        .sort({ date: 1 })
        .limit(2)
        .find())
</script>
