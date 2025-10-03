"use client";

import { useEffect } from "react";
import Script from "next/script";
import { useCookiePreferences } from "../lib/cookieManager";

const GA_MEASUREMENT_ID = "G-FRQZ0XBBKY";

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

export default function GoogleAnalytics() {
	const { preferences, isLoaded } = useCookiePreferences();

	useEffect(() => {
		if (!isLoaded) return;

		// Initialize or disable Google Analytics based on user preferences
		if (preferences.analytics && typeof window !== "undefined") {
			// Enable Google Analytics
			window.gtag("consent", "update", {
				analytics_storage: "granted",
			});

			console.log(
				"🔍 Google Analytics enabled - user accepted analytics cookies"
			);
		} else if (typeof window !== "undefined" && window.gtag) {
			// Disable Google Analytics
			window.gtag("consent", "update", {
				analytics_storage: "denied",
			});

			console.log(
				"🚫 Google Analytics disabled - user declined analytics cookies"
			);
		}
	}, [preferences.analytics, isLoaded]);

	// Only load GA scripts if analytics cookies are accepted
	if (!isLoaded || !preferences.analytics) {
		return null;
	}

	return (
		<>
			<Script
				src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
				strategy="afterInteractive"
			/>
			<Script
				id="google-analytics"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						
						// Initialize with consent mode
						gtag('consent', 'default', {
							analytics_storage: 'denied',
							ad_storage: 'denied',
							wait_for_update: 500,
						});
						
						gtag('config', '${GA_MEASUREMENT_ID}', {
							page_title: document.title,
							page_location: window.location.href,
						});
					`,
				}}
			/>
		</>
	);
}
