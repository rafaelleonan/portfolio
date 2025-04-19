export interface Image {
    src: string
    alt: string
}

export interface ComponentMedia {
    id: number
    title: string
    text: string
    url: string
}

export interface Instruction {
    title: string
    type: string
    content: string
}

export interface ComponentInstructions {
    title: string
    instructions: Instruction[]
}

export interface ComponentCarousel {
    current_index: number
    items: ComponentMedia[]
}

export interface ExternalLink {
    label: string
    url: string
}

export interface Technology {
    name: string
    version: string
    icon_url: string
}

export interface Component {
    id: number
    type: string
    content: string | ComponentMedia[] | ComponentCarousel | ComponentInstructions[]
}

export interface Section {
    id: number
    title: string
    order: number
    components: Component[]
}

export interface ReplyComment {
    id: number
    user_name: string
    content: string
    posted_at: string
    reactions: ReactionComment[]
}

export interface ReactionComment {
    id: number
    list_users_id: number[]
    count: number
    reaction_type: string
}

export interface Comment {
    id: number
    user_name: string
    content: string
    posted_at: string
    replies: ReplyComment[]
    reactions: ReactionComment[]
}

export interface Project {
    id: number
    title: string
    type_project: ("Frontend"  | "Mobile"  | "Desktop" | "Web" | "Backend" | "API RESTful" | "Fullstack" | "Design")[]
    current_index: number
    images: Image[]
    description: string
    post_date: string
    external_links: ExternalLink[]
    technologies: Technology[]
    sections: Section[]
    comments: Comment[]
}