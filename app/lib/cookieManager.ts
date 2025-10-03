// Cookie Management Utility
export interface CookiePreferences {
	essential: boolean;
	analytics: boolean;
	functional: boolean;
	marketing: boolean;
}

// Global gtag declaration
declare global {
	interface Window {
		gtag: (
			command: string,
			targetId: string,
			config?: Record<string, unknown>
		) => void;
		dataLayer: Record<string, unknown>[];
	}
}

export class CookieManager {
	private static readonly CONSENT_KEY = "cookieConsent";
	private static readonly CONSENT_DATE_KEY = "cookieConsentDate";
	private static readonly PREFERENCES_KEY = "cookiePreferences";

	/**
	 * Check if user has given cookie consent
	 */
	static hasConsent(): boolean {
		if (typeof window === "undefined") return false;
		const consent = localStorage.getItem(this.CONSENT_KEY);
		return consent === "accepted";
	}

	/**
	 * Check if user has made any choice (accepted or declined)
	 */
	static hasUserDecided(): boolean {
		if (typeof window === "undefined") return false;
		const consent = localStorage.getItem(this.CONSENT_KEY);
		return consent === "accepted" || consent === "declined";
	}

	/**
	 * Get user's cookie preferences
	 */
	static getPreferences(): CookiePreferences {
		if (typeof window === "undefined") {
			return { essential: true, analytics: false, functional: false, marketing: false };
		}

		const stored = localStorage.getItem(this.PREFERENCES_KEY);
		if (stored) {
			try {
				return JSON.parse(stored);
			} catch {
				// Fall back to default if JSON is corrupted
			}
		}

		// Default preferences based on consent
		const hasConsent = this.hasConsent();
		return {
			essential: true, // Always true - required for basic functionality
			analytics: hasConsent,
			functional: hasConsent,
			marketing: hasConsent,
		};
	}

	/**
	 * Save user's cookie preferences
	 */
	static setPreferences(preferences: CookiePreferences): void {
		if (typeof window === "undefined") return;
		localStorage.setItem(this.PREFERENCES_KEY, JSON.stringify(preferences));
		
		// Initialize analytics based on new preferences
		this.initializeAnalytics();
	}

	/**
	 * Accept all cookies
	 */
	static acceptAll(): void {
		if (typeof window === "undefined") return;
		
		localStorage.setItem(this.CONSENT_KEY, "accepted");
		localStorage.setItem(this.CONSENT_DATE_KEY, new Date().toISOString());
		
		this.setPreferences({
			essential: true,
			analytics: true,
			functional: true,
			marketing: true,
		});
		
		// Analytics will be initialized by setPreferences
	}

	/**
	 * Decline optional cookies (keep only essential)
	 */
	static declineOptional(): void {
		if (typeof window === "undefined") return;
		
		localStorage.setItem(this.CONSENT_KEY, "declined");
		localStorage.setItem(this.CONSENT_DATE_KEY, new Date().toISOString());
		
		this.setPreferences({
			essential: true,
			analytics: false,
			functional: false,
			marketing: false,
		});
		
		// Analytics will be disabled by setPreferences
	}

	/**
	 * Clear all consent data (for testing or reset)
	 */
	static clearConsent(): void {
		if (typeof window === "undefined") return;
		
		localStorage.removeItem(this.CONSENT_KEY);
		localStorage.removeItem(this.CONSENT_DATE_KEY);
		localStorage.removeItem(this.PREFERENCES_KEY);
	}

	/**
	 * Get consent date
	 */
	static getConsentDate(): Date | null {
		if (typeof window === "undefined") return null;
		
		const dateStr = localStorage.getItem(this.CONSENT_DATE_KEY);
		return dateStr ? new Date(dateStr) : null;
	}

	/**
	 * Check if consent is expired (older than 1 year)
	 */
	static isConsentExpired(): boolean {
		const consentDate = this.getConsentDate();
		if (!consentDate) return true;

		const oneYearAgo = new Date();
		oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
		
		return consentDate < oneYearAgo;
	}

	/**
	 * Initialize Google Analytics
	 */
	static initializeAnalytics(): void {
		const preferences = this.getPreferences();
		
		if (preferences.analytics && typeof window !== "undefined" && window.gtag) {
			// Enable Google Analytics tracking
			window.gtag("consent", "update", {
				analytics_storage: "granted",
			});
			console.log("🔍 Analytics cookies accepted - Google Analytics enabled");
		} else if (typeof window !== "undefined" && window.gtag) {
			// Disable Google Analytics tracking
			window.gtag("consent", "update", {
				analytics_storage: "denied",
			});
			console.log("🚫 Analytics cookies declined - Google Analytics disabled");
		}
	}

	/**
	 * Set a functional cookie (respects user preferences)
	 */
	static setFunctionalCookie(name: string, value: string, days: number = 30): void {
		const preferences = this.getPreferences();
		
		if (!preferences.functional) {
			console.log(`Functional cookie "${name}" blocked by user preferences`);
			return;
		}

		if (typeof document !== "undefined") {
			const expires = new Date();
			expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
			document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Strict`;
		}
	}

	/**
	 * Get a cookie value
	 */
	static getCookie(name: string): string | null {
		if (typeof document === "undefined") return null;
		
		const nameEQ = name + "=";
		const ca = document.cookie.split(";");
		
		for (let i = 0; i < ca.length; i++) {
			let c = ca[i];
			while (c.charAt(0) === " ") c = c.substring(1, c.length);
			if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
		}
		
		return null;
	}
}

// React Hook for using cookie preferences
import { useState, useEffect } from "react";

export function useCookiePreferences() {
	// Initialize with default values to prevent hydration mismatch
	const [preferences, setPreferences] = useState<CookiePreferences>({
		essential: true,
		analytics: false,
		functional: false,
		marketing: false,
	});
	const [hasConsent, setHasConsent] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		// Load actual preferences after component mounts (client-side only)
		setPreferences(CookieManager.getPreferences());
		setHasConsent(CookieManager.hasConsent());
		setIsLoaded(true);

		// Update state when localStorage changes
		const handleStorageChange = () => {
			setPreferences(CookieManager.getPreferences());
			setHasConsent(CookieManager.hasConsent());
		};

		window.addEventListener("storage", handleStorageChange);
		return () => window.removeEventListener("storage", handleStorageChange);
	}, []);

	const updatePreferences = (newPreferences: CookiePreferences) => {
		CookieManager.setPreferences(newPreferences);
		setPreferences(newPreferences);
	};

	return {
		preferences,
		hasConsent,
		isLoaded,
		updatePreferences,
		acceptAll: () => {
			CookieManager.acceptAll();
			setPreferences(CookieManager.getPreferences());
			setHasConsent(true);
		},
		declineOptional: () => {
			CookieManager.declineOptional();
			setPreferences(CookieManager.getPreferences());
			setHasConsent(false);
		},
		clearConsent: () => {
			CookieManager.clearConsent();
			setPreferences(CookieManager.getPreferences());
			setHasConsent(false);
		}
	};
}