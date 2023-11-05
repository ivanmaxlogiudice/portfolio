/* eslint-disable perfectionist/sort-objects */
interface MetaOptions {
    description: string
    image?: string
    title: string
}

export function setMeta(options: MetaOptions) {
    // Build page meta tags
    const { title = '', description = '', image = '/images/og.webp' } = options
    const { baseURL } = useRuntimeConfig().public
    const url = new URL(useRoute().path, baseURL).toString()

    useHead({
        link: [{ href: url, rel: 'canonical' }],
    })

    useSeoMeta({
        title,
        description,

        ogTitle: title,
        ogDescription: description,
        ogUrl: url,
        ogType: 'website',
        ogImage: image,

        twitterTitle: title,
        twitterDescription: description,
        twitterImage: image,
        twitterCard: 'summary_large_image',
    })
}
