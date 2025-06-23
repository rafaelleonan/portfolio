import { ref } from 'vue'

type Notification = {
	id: number
	message: string
	type?: 'success' | 'error' | 'info' | 'warning'
	duration?: number
}

const notifications = ref<Notification[]>([])
let idCounter = 0

export function useNotifications() {
	function addNotification(message: string, type: Notification['type'] = 'info', duration = 3000) {
		const id = idCounter++
		notifications.value.push({ id, message, type, duration })
		
		setTimeout(() => {
			removeNotification(id)
		}, duration)
	}
	
	function removeNotification(id: number) {
		notifications.value = notifications.value.filter((n) => n.id !== id)
	}
	
	return {
		notifications,
		addNotification,
		removeNotification,
	}
}