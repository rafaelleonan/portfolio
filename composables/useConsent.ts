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
		toggleConsentCookie(false)
	}
	
	const resetConsent = () => {
		consent.value = { essential: true, analytics: false, feedback: false }
		consentCookie.value = { essential: true, analytics: false, feedback: false }
		toggleConsent(false)
		toggleConsentCookie(false)
	}
	
	const visualizeConsentCookie = useCookie<boolean>('visualize_consent', {
		maxAge: 60 * 60 * 24 * 365,
		default: () => true
	})
	
	const toggleConsentCookie = (value: boolean) => {
		visualizeConsentCookie.value = value
	}
	
	const visualizeConsent = useState<boolean>('visualizeConsent', () => visualizeConsentCookie.value!)
	
	const toggleConsent = (value: boolean) => {
		visualizeConsent.value = value
	}
	
	return {
		consent,
		visualizeConsentCookie,
		visualizeConsent,
		toggleConsent,
		setConsent,
		resetConsent
	}
}