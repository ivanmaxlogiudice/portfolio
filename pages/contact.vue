<template>
    <Section
        title="Let's Get in Sync!"
        description="Say Hello and Let's Create Something Great!"
        class="mx-auto max-w-xl"
    >
        <form class="mt-8 md:mt-16 space-y-6" @submit.prevent="onSubmit">
            <Transition
                enter-active-class="duration-300 ease-out"
                enter-from-class="transform opacity-0 translate-y-5"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="duration-200 ease-in"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="transform opacity-0 translate-y-5"
            >
                <div v-if="isSubmitted" class="relative flex items-center justify-between rounded-md bg-primary-500 p-4 text-white transition duration-300 ease-in-out">
                    <div class="flex items-center gap-2">
                        <span class="i-bx-check-circle text-xl" />

                        <span>Your message has been sent successfully.</span>
                    </div>

                    <button class="flex rounded-full p-0.5 text-gray-800 transition duration-300 ease-in-out hover:bg-primary-600 hover:text-white" @click.prevent="isSubmitted = false">
                        <span class="i-bx-x" />
                    </button>
                </div>
            </Transition>

            <Transition
                enter-active-class="duration-300 ease-out"
                enter-from-class="transform opacity-0 translate-y-5"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="duration-200 ease-in"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="transform opacity-0 translate-y-5"
            >
                <div v-if="hasError" class="relative flex items-center justify-between rounded-md bg-red-500 p-4 text-white transition duration-300 ease-in-out">
                    <div class="flex items-center gap-4">
                        <span class="i-bx-error-circle text-xl" />

                        <p>
                            We have some problems trying to send your message. <br>Contact directly to <NuxtLink to="mailto:ivanmaxlogiudice@gmail.com" class="font-bold">
                                ivanmaxlogiudice@gmail.com
                            </NuxtLink>
                        </p>
                    </div>
                </div>
            </Transition>

            <FormTextInput name="name" label="Name" placeholder="Jon Doe" :delay="200" />

            <FormTextInput name="email" label="Email" type="email" placeholder="jon@doe.com" :delay="300" />

            <FormTextarea name="message" label="Message" placeholder="Hello, i want to ask about an ecommerce site." rows="5" :delay="400" />

            <button
                v-motion
                :initial="{ opacity: 0 }"
                :visibleOnce="{ opacity: 1, transition: { delay: 500 } }"
                :disabled="isLoading"
                class="disable:opacity-75 w-full flex items-center justify-center gap-2 rounded-md bg-primary-500 px-4 py-2 text-white"
            >
                <span v-if="isLoading" class="i-bx-loader-alt animate-spin" aria-hidden="true" />
                Send message
            </button>
        </form>

        <div
            v-motion
            class="mt-10"
            :initial="{ opacity: 0, y: 20 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 600 } }"
        >
            <h3 class="text-xl font-semibold">
                Email
            </h3>

            <div class="mt-2 flex flex-col items-center gap-2 sm:flex-row">
                <span class="w-full flex rounded-md bg-gray-100 px-3 py-1.5 text-gray-600 dark:bg-gray-800/80 dark:text-white">
                    ivanmaxlogiudice@gmail.com
                </span>

                <div class="w-full flex items-center gap-2 sm:w-auto">
                    <!-- Send email -->
                    <div class="group/tooltip relative flex flex-1">
                        <a href="mailto:ivanamxlogiudice@gmail.com" target="_blank" rel="noreferrer" class="w-full flex items-center justify-center rounded-md bg-primary-500 px-2.5 py-2 text-white">
                            <div class="i-bx-send" />
                        </a>

                        <span class="-translate-y-0 pointer-events-none absolute bottom-full left-1/2 z-20 whitespace-nowrap border border-gray-200 rounded-md bg-gray-100 px-1.5 py-1 text-sm text-gray-700 opacity-0 transition-all before:(absolute left-1/2 h-2.5 w-2.5 rotate-45 border-b border-r border-gray-200 rounded-sm bg-gray-100 content-[''] -bottom-1 -z-10 -translate-x-1/2 dark:border-gray-600 dark:bg-gray-700) -translate-x-1/2 dark:(border-gray-600 bg-gray-700 text-gray-100) group-hover/tooltip:(opacity-100 -translate-y-3)">
                            Send me email
                        </span>
                    </div>

                    <!-- Copy email -->
                    <div class="group/tooltip relative flex flex-1">
                        <button class="w-full flex items-center justify-center rounded-md bg-primary-500 px-2.5 py-2 text-white" @click="copyEmail">
                            <div class="i-bx-copy-alt" />
                        </button>

                        <span class="-translate-y-0 pointer-events-none absolute bottom-full left-1/2 z-20 whitespace-nowrap border border-gray-200 rounded-md bg-gray-100 px-1.5 py-1 text-sm text-gray-700 opacity-0 transition-all before:(absolute left-1/2 h-2.5 w-2.5 rotate-45 border-b border-r border-gray-200 rounded-sm bg-gray-100 content-[''] -bottom-1 -z-10 -translate-x-1/2 dark:border-gray-600 dark:bg-gray-700) -translate-x-1/2 dark:(border-gray-600 bg-gray-700 text-gray-100) group-hover/tooltip:(opacity-100 -translate-y-3)">
                            {{ copied ? 'Copied' : 'Copy email' }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </Section>
</template>

<script lang="ts" setup>
import { toTypedSchema } from '@vee-validate/valibot'
import { contactSchema } from '~/utils'

setMeta({
    description: 'Reach out to discuss your project or just to say hello. Fill out the form, and I\'ll get back to you soon!',
    title: 'Contact',
})

const isLoading = ref(false)
const isSubmitted = ref(false)
const hasError = ref(false)
const copied = ref(false)

const { handleSubmit } = useForm({
    initialValues: {
        email: '',
        message: '',
        name: '',
    },
    validationSchema: toTypedSchema(contactSchema),
})

const onSubmit = handleSubmit(async (values, { resetForm, setErrors }) => {
    isLoading.value = true
    hasError.value = false

    const { error } = await useLazyFetch('api/contact', {
        body: JSON.stringify(values),
        key: new Date().toString(), // To avoid request cache
        method: 'POST',
        onResponseError({ response }) {
            if (response.status === 400)
                hasError.value = true
        },
    })

    if (error.value) {
        if (error.value.statusCode === 422)
            setErrors(error.value.data)
    }
    else {
        resetForm()

        isSubmitted.value = true

        setTimeout(() => (isSubmitted.value = false), 10_000)
    }

    isLoading.value = false
})

const copyEmail = () => {
    navigator.clipboard.writeText('ivanmaxlogiudice@gmail.com')

    copied.value = true
    setTimeout(() => (copied.value = false), 2_000)
}
</script>
