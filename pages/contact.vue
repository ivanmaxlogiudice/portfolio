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
            :initial="{ opacity: 0, y: 20 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 600 } }"
            class="mt-10 border border-gray-500/20 rounded-md bg-gray-500/10 p-8 text-center"
        >
            <span class="md:text-xl">or Email me at</span>

            <NuxtLink to="mailto:ivanmaxlogiudice@gmail.com" class="mt-2 block text-lg font-bold text-primary-500 md:text-3xl">
                ivanmaxlogiudice@gmail.com
            </NuxtLink>
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
</script>
