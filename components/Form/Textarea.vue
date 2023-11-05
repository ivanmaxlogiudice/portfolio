<template>
    <div role="group">
        <label
            v-motion
            :initial="{ opacity: 0 }"
            :visibleOnce="{ opacity: 1, transition: { delay } }"

            :for="name"
            class="block text-sm font-medium"
        >
            {{ label }}
        </label>

        <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: delay + 25 } }"
            class="mt-2"
        >
            <textarea
                v-bind="$attrs"
                :id="name"
                v-model="value"
                :aria-describedby="errorMessage ? `${name}-error-helper` : undefined"
                :aria-invalid="!!errorMessage"
                :class="!!errorMessage ? 'dark:ring-red-500' : 'dark:ring-gray-700 ring-zinc-300 focus:ring-primary'"
                class="block w-full rounded-md bg-white px-4 py-2 text-sm text-gray-900 outline-none ring-2 ring-inset transition duration-250 ease-in-out dark:bg-gray-800/80 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500"
            />

            <p v-if="errorMessage" :id="`${name}-error-helper`" class="mt-2 text-sm text-red-500 dark:text-red-400">
                {{ errorMessage }}
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineOptions({
    inheritAttrs: false,
})

const props = withDefaults(defineProps<{
    delay: number
    label: string
    name: string
}>(), {
    delay: 100,
})

const { errorMessage, value } = useField<string>(() => props.name)
</script>
