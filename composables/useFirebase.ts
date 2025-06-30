import {
	signInAnonymously,
	signInWithPopup,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	FacebookAuthProvider,
	GithubAuthProvider,
	OAuthProvider,
	TwitterAuthProvider,
	signOut,
} from 'firebase/auth'
import {
	getDoc,
	setDoc,
	doc,
	getDocs,
	collection,
	addDoc,
	updateDoc,
	deleteDoc,
	Firestore,
	QuerySnapshot,
} from 'firebase/firestore'

import type {AuthProvider} from 'firebase/auth'
import type {DocumentData} from 'firebase/firestore'

export const useFirebase = () => {
	const { $firebaseAuth, $firebaseDb } = useNuxtApp()
	const auth = $firebaseAuth
	const db = $firebaseDb
	
	const loginAnonymously = async () => await signInAnonymously($firebaseAuth)
	
	const loginWithProvider = async (provider: AuthProvider) => await signInWithPopup($firebaseAuth, provider)
	
	const loginWithGoogle    = async () => await loginWithProvider(new GoogleAuthProvider())
	const loginWithFacebook  = async () => await loginWithProvider(new FacebookAuthProvider())
	const loginWithGithub    = async () => await loginWithProvider(new GithubAuthProvider())
	const loginWithMicrosoft = async () => await loginWithProvider(new OAuthProvider('microsoft.com'))
	const loginWithApple     = async () => await loginWithProvider(new OAuthProvider('apple.com'))
	const loginWithTwitter   = async () => await loginWithProvider(new TwitterAuthProvider())
	const loginWithYahoo     = async () => await loginWithProvider(new OAuthProvider('yahoo.com'))
	
	const loginWithEmail = async (email: string, password: string) => {
		return await signInWithEmailAndPassword($firebaseAuth, email, password)
	}
	
	const registerWithEmail = async (email: string, password: string) => {
		return await createUserWithEmailAndPassword($firebaseAuth, email, password)
	}
	
	const logout = async () => {
		return await signOut($firebaseAuth)
	}
	
	const createDocument = async (path: string, data: Record<string, any>, id?: string) => {
		if (id) {
			await setDoc(doc($firebaseDb, path, id), data)
		} else {
			await addDoc(collection($firebaseDb, path), data)
		}
	}
	
	const getDocument = async (path: string, id: string): Promise<DocumentData | null> => {
		const ref = doc($firebaseDb, path, id)
		const snapshot = await getDoc(ref)
		return snapshot.exists() ? snapshot.data() : null
	}
	
	const getCollection = async (path: string) => {
		return await getDocs(collection($firebaseDb, path))
	}
	
	const updateDocument = async (path: string, id: string, data: Partial<Record<string, any>>) => {
		return await updateDoc(doc($firebaseDb, path, id), data)
	}
	
	const deleteDocument = async (path: string, id: string) => {
		return await deleteDoc(doc($firebaseDb, path, id))
	}
	
	return {
		auth,
		loginAnonymously,
		loginWithGoogle,
		loginWithFacebook,
		loginWithGithub,
		loginWithMicrosoft,
		loginWithApple,
		loginWithTwitter,
		loginWithYahoo,
		loginWithEmail,
		registerWithEmail,
		logout,
		db,
		createDocument,
		getDocument,
		getCollection,
		updateDocument,
		deleteDocument,
	}
}
