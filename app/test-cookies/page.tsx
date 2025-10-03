"use client";

import { useState } from "react";
import { CookieManager, useCookiePreferences } from "../lib/cookieManager";
import Footer from "../components/Footer";

export default function TestCookiesPage() {
	const {
		preferences,
		hasConsent,
		updatePreferences,
		acceptAll,
		declineOptional,
		// clearConsent,
		isLoaded,
	} = useCookiePreferences();
	const [testResult, setTestResult] = useState<string>("");

	const runTests = () => {
		const results: string[] = [];

		// Test 1: Check initial state
		results.push(`Initial hasConsent: ${hasConsent}`);
		results.push(`Initial isLoaded: ${isLoaded}`);
		results.push(`Initial preferences: ${JSON.stringify(preferences)}`);

		// Test 2: Accept all cookies
		acceptAll();
		results.push(`After acceptAll - hasConsent: ${CookieManager.hasConsent()}`);

		// Test 3: Update specific preferences
		updatePreferences({
			essential: true,
			analytics: false,
			functional: false,
			marketing: false,
		});
		const newPrefs = CookieManager.getPreferences();
		results.push(`After updating preferences: ${JSON.stringify(newPrefs)}`);

		// Test 4: Decline optional
		declineOptional();
		results.push(
			`After declineOptional - hasConsent: ${CookieManager.hasConsent()}`
		);

		setTestResult(results.join("\n"));
	};

	const clearStorage = () => {
		localStorage.removeItem("cookieConsent");
		localStorage.removeItem("cookiePreferences");
		setTestResult(
			"Storage cleared. Refresh the page to see the cookie banner again."
		);
	};

	return (
		<>
			{/* Simple header for test page */}
			<div className="bg-white shadow-sm">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
					<h1 className="text-xl font-semibold text-gray-900">
						Cookie Test Page
					</h1>
				</div>
			</div>
			<div className="min-h-screen bg-gray-50 py-8">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="bg-white rounded-lg shadow-lg p-8">
						<h1 className="text-3xl font-bold text-gray-900 mb-8">
							Cookie Consent System Test
						</h1>

						<div className="space-y-6">
							<div>
								<h2 className="text-xl font-semibold mb-4">Current State</h2>
								<div className="bg-gray-100 p-4 rounded-lg">
									<p>
										<strong>Has Consent:</strong> {hasConsent ? "Yes" : "No"}
									</p>
									<p>
										<strong>Is Loaded:</strong> {isLoaded ? "Yes" : "No"}
									</p>
									<p>
										<strong>Google Analytics:</strong>{" "}
										{preferences.analytics ? "✅ Enabled" : "❌ Disabled"}
									</p>
									<p>
										<strong>GA Scripts Loaded:</strong>{" "}
										{typeof window !== "undefined" &&
										typeof window.gtag === "function"
											? "✅ Yes"
											: "❌ No"}
									</p>
									<p>
										<strong>Preferences:</strong>
									</p>
									<pre className="mt-2 text-sm">
										{JSON.stringify(preferences, null, 2)}
									</pre>
								</div>
							</div>

							<div>
								<h2 className="text-xl font-semibold mb-4">Actions</h2>
								<div className="space-x-4">
									<button
										onClick={runTests}
										className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
										Run Tests
									</button>
									<button
										onClick={acceptAll}
										className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
										Accept All
									</button>
									<button
										onClick={declineOptional}
										className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
										Decline Optional
									</button>
									<button
										onClick={clearStorage}
										className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
										Clear Storage
									</button>
									<button
										onClick={() => {
											if (
												typeof window !== "undefined" &&
												typeof window.gtag === "function"
											) {
												window.gtag("event", "test_event", {
													event_category: "engagement",
													event_label: "cookie_test_page",
													value: 1,
												});
												setTestResult(
													"Test GA event sent! Check GA Real-time reports."
												);
											} else {
												setTestResult(
													"Google Analytics not loaded - analytics cookies may be disabled."
												);
											}
										}}
										className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
										Test GA Event
									</button>
								</div>
							</div>

							{testResult && (
								<div>
									<h2 className="text-xl font-semibold mb-4">Test Results</h2>
									<div className="bg-gray-100 p-4 rounded-lg">
										<pre className="text-sm whitespace-pre-wrap">
											{testResult}
										</pre>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
