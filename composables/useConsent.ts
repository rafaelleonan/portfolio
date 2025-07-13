import { useCookie, useState } from '#app'

type ConsentOptions = {
	essential: true      // Sempre true
	analytics: boolean
	feedback: boolean
}


export const useConsent = () => {
	const consentCookie = useCookie<ConsentOptions>('cookie_consent', {
		maxAge: 60 * 60 * 24 * 365,
		default: () => ({ essential: true, analytics: false, feedback: false }),
	})
	
	const consent = useState<ConsentOptions>('cookieConsent', () => consentCookie.value!)
	
	const setConsent = (options: ConsentOptions) => {
		consent.value = options
		consentCookie.value = options
		toggleConsent(false)
	}
	
	const resetConsent = () => {
		consent.value = { essential: true, analytics: false, feedback: false }
		consentCookie.value = { essential: true, analytics: false, feedback: false }
		toggleConsent(false)
	}
	
	const visualizeConsent = useState<boolean>('visualizeConsent', () => true)
	
	const toggleConsent = (value: boolean) => {
		visualizeConsent.value = value
	}
	
	return {
		consent,
		visualizeConsent,
		toggleConsent,
		setConsent,
		resetConsent
	}
}