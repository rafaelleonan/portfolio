// plugins/firebase.client.ts
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { useRuntimeConfig } from '#imports'

export default defineNuxtPlugin((nuxtApp) => {
	const config = useRuntimeConfig()
	
	if (!config.public.firebaseApiKey) {
		console.error('Erro: Chaves do Firebase não encontradas no runtimeConfig.public. Verifique .env e/ou GitHub Secrets.')
		return
	}
	
	const firebaseConfig = {
		apiKey: config.public.firebaseApiKey ?? "",
		authDomain: config.public.firebaseAuthDomain ?? "",
		projectId: config.public.firebaseProjectId ?? "",
		storageBucket: config.public.firebaseStorageBucket ?? "",
		messagingSenderId: config.public.firebaseMessagingSenderId ?? "",
		appId: config.public.firebaseAppId ?? "",
	}
	
	const app = initializeApp(firebaseConfig)
	const auth = getAuth(app)
	const db = getFirestore(app)
	
	return {
		provide: {
			firebaseAuth: auth,
			firebaseDb: db,
		}
	}
})