// Cookie Testing Utility
// Add this to your browser console to test cookie functionality

console.log("🍪 Cookie Manager Test Utility Loaded");

// Test functions you can run in the browser console
window.cookieTest = {
	// Clear all consent to test the banner again
	clearConsent() {
		localStorage.removeItem("cookieConsent");
		localStorage.removeItem("cookieConsentDate");
		localStorage.removeItem("cookiePreferences");
		console.log("✅ Consent cleared - refresh page to see banner");
	},

	// Check current consent status
	checkStatus() {
		const consent = localStorage.getItem("cookieConsent");
		const date = localStorage.getItem("cookieConsentDate");
		const prefs = localStorage.getItem("cookiePreferences");

		console.log("📊 Current Cookie Status:");
		console.log("Consent:", consent);
		console.log("Date:", date);
		console.log("Preferences:", prefs ? JSON.parse(prefs) : "none");
	},

	// Simulate expired consent (1+ years old)
	expireConsent() {
		const oldDate = new Date();
		oldDate.setFullYear(oldDate.getFullYear() - 2);
		localStorage.setItem("cookieConsentDate", oldDate.toISOString());
		console.log("⏰ Consent expired - refresh to see banner");
	},

	// Accept all cookies
	acceptAll() {
		localStorage.setItem("cookieConsent", "accepted");
		localStorage.setItem("cookieConsentDate", new Date().toISOString());
		localStorage.setItem(
			"cookiePreferences",
			JSON.stringify({
				essential: true,
				analytics: true,
				functional: true,
				marketing: true,
			})
		);
		console.log("✅ All cookies accepted");
	},

	// Decline optional cookies
	declineOptional() {
		localStorage.setItem("cookieConsent", "declined");
		localStorage.setItem("cookieConsentDate", new Date().toISOString());
		localStorage.setItem(
			"cookiePreferences",
			JSON.stringify({
				essential: true,
				analytics: false,
				functional: false,
				marketing: false,
			})
		);
		console.log("❌ Optional cookies declined");
	},
};

console.log("🧪 Test Commands Available:");
console.log("cookieTest.clearConsent() - Clear consent to show banner");
console.log("cookieTest.checkStatus() - Check current status");
console.log("cookieTest.expireConsent() - Simulate expired consent");
console.log("cookieTest.acceptAll() - Accept all cookies");
console.log("cookieTest.declineOptional() - Decline optional cookies");
