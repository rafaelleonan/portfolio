// plugins/firebase.client.ts
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import {useRuntimeConfig} from "#imports";
import {process} from "std-env";

export default defineNuxtPlugin((nuxtApp) => {
	let firebaseConfig: any
	nuxtApp.hook('app:mounted', () => {
		const config = useRuntimeConfig()
		console.log('Config app:mounted: ', config)
		firebaseConfig = {
			apiKey: config.public.firebaseApiKey ?? process.env.NUXT_PUBLIC_FIREBASE_API_KEY,
			authDomain: config.public.firebaseAuthDomain ?? process.env.NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
			projectId: config.public.firebaseProjectId ?? process.env.NUXT_PUBLIC_FIREBASE_PROJECT_ID,
			storageBucket: config.public.firebaseStorageBucket ?? process.env.NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
			messagingSenderId: config.public.firebaseMessagingSenderId ?? process.env.NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
			appId: config.public.firebaseAppId ?? process.env.NUXT_PUBLIC_FIREBASE_APP_ID,
		}
	})
	console.log('firebaseConfig: ', firebaseConfig)
	
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
