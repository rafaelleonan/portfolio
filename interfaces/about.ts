export interface SoftSkill {
	id: string
	label: string
	description: string
	icon: string
	level: number
}

export interface SoftSkillFeedback {
	id: string
	soft_skill_id: string
	name: string
	cargo: string
	feedback : string
	levelSelected: number
}