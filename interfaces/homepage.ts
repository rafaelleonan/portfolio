export interface BadgeTech {
    src: string
    title: string
	  current?: boolean
}

export interface BadgeCategory {
    title: string
    badges: BadgeTech[]
}