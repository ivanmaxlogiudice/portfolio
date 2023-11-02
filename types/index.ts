export interface Social {
    icon: string
    name: string
    url: string
}

export interface Project {
    description: string
    featured?: boolean
    image: string
    order: number
    source?: string
    status: string
    tags: string[]
    title: string
    url?: string
}
