export interface BadgeTech {
  src: string
  title: string
  current?: boolean
	proficiency_level?: number
}

export interface BadgeCategory {
  title: string
  badges: BadgeTech[]
}