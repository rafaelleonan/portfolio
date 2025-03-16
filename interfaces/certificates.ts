export interface Tech {
    tag: string
    name: string
}

export interface Certificates {
    link: string
    certificate_id: string
    image: string
    title: string
    description: string
    issuer: string
    issuer_date: string
    techs: Tech[]
    tags: string[]
}