"use client";
import React, { useState, useEffect } from "react";
import { Cookie, X, Shield, Eye, Settings } from "lucide-react";
import Link from "next/link";
import { CookieManager } from "../lib/cookieManager";

interface CookieConsentProps {
	onAccept?: () => void;
	onDecline?: () => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({
	onAccept,
	onDecline,
}) => {
	const [isVisible, setIsVisible] = useState(false);
	const [showDetails, setShowDetails] = useState(false);
	const [isMounted, setIsMounted] = useState(false);

	// Handle client-side mounting to prevent hydration mismatch
	useEffect(() => {
		setIsMounted(true);
	}, []);

	useEffect(() => {
		if (!isMounted) return;

		// Check if user has already made a choice or if consent is expired
		const hasDecided = CookieManager.hasUserDecided();
		const isExpired = CookieManager.isConsentExpired();

		console.log("🍪 Cookie Consent Debug:");
		console.log("- Has user decided:", hasDecided);
		console.log("- Is consent expired:", isExpired);
		console.log("- Should show banner:", !hasDecided || isExpired);

		if (!hasDecided || isExpired) {
			// Show banner after a short delay for better UX
			const timer = setTimeout(() => {
				console.log("🍪 Showing cookie consent banner");
				setIsVisible(true);
			}, 1000);
			return () => clearTimeout(timer);
		}
	}, [isMounted]);

	const handleAccept = () => {
		CookieManager.acceptAll();
		setIsVisible(false);

		// Initialize analytics and other services
		CookieManager.initializeAnalytics();

		if (onAccept) onAccept();
	};

	const handleDecline = () => {
		CookieManager.declineOptional();
		setIsVisible(false);
		if (onDecline) onDecline();
	};

	const handleClose = () => {
		setIsVisible(false);
	};

	// Don't render anything during SSR or before mounting
	if (!isMounted || !isVisible) return null;

	return (
		<>
			{/* Backdrop */}
			<div className="fixed inset-0 bg-black/50 z-40" />

			{/* Cookie Consent Banner */}
			<div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50">
				<div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-6 relative animate-slide-up">
					{/* Close Button */}
					<button
						onClick={handleClose}
						className="absolute top-4 right-4 p-1 rounded-lg hover:bg-gray-100 transition-colors">
						<X className="w-5 h-5 text-gray-500" />
					</button>

					{/* Header */}
					<div className="flex items-start space-x-3 mb-4">
						<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
							<Cookie className="w-6 h-6 text-blue-600" />
						</div>
						<div>
							<h3 className="text-lg font-bold text-gray-900 mb-1">
								We Use Cookies
							</h3>
							<p className="text-sm text-gray-600 leading-relaxed">
								We use cookies to enhance your browsing experience and provide
								personalized content.
							</p>
						</div>
					</div>

					{/* Cookie Details (Expandable) */}
					{showDetails && (
						<div className="mb-4 p-4 bg-gray-50 rounded-lg space-y-3">
							<div className="flex items-start space-x-3">
								<Shield className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
								<div>
									<h4 className="text-sm font-semibold text-gray-900">
										Essential Cookies
									</h4>
									<p className="text-xs text-gray-600">
										Required for basic website functionality and security.
									</p>
								</div>
							</div>
							<div className="flex items-start space-x-3">
								<Eye className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
								<div>
									<h4 className="text-sm font-semibold text-gray-900">
										Analytics Cookies
									</h4>
									<p className="text-xs text-gray-600">
										Help us understand how you interact with our website.
									</p>
								</div>
							</div>
							<div className="flex items-start space-x-3">
								<Settings className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
								<div>
									<h4 className="text-sm font-semibold text-gray-900">
										Functional Cookies
									</h4>
									<p className="text-xs text-gray-600">
										Remember your preferences and personalize your experience.
									</p>
								</div>
							</div>
						</div>
					)}

					{/* Privacy Policy Link */}
					<div className="mb-4">
						<Link
							href="/privacy-policy"
							className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
							View our Privacy Policy
						</Link>
						<span className="text-gray-400 mx-2">•</span>
						<button
							onClick={() => setShowDetails(!showDetails)}
							className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
							{showDetails ? "Hide Details" : "Cookie Details"}
						</button>
						<span className="text-gray-400 mx-2">•</span>
						<Link
							href="/cookie-preferences"
							className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
							Manage Preferences
						</Link>
					</div>

					{/* Action Buttons */}
					<div className="flex flex-col sm:flex-row gap-3">
						<button
							onClick={handleAccept}
							className="flex-1 bg-blue-600 text-white px-4 py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
							Accept All Cookies
						</button>
						<button
							onClick={handleDecline}
							className="flex-1 bg-gray-100 text-gray-700 px-4 py-2.5 rounded-lg hover:bg-gray-200 transition-colors font-medium text-sm">
							Decline Optional
						</button>
					</div>

					{/* Legal Notice */}
					<p className="text-xs text-gray-500 mt-3 leading-relaxed">
						By continuing to use our site, you consent to our use of cookies as
						described in our{" "}
						<Link
							href="/privacy-policy"
							className="text-blue-600 hover:text-blue-800">
							Privacy Policy
						</Link>
						.
					</p>
				</div>
			</div>

			{/* Custom CSS for animation */}
			<style jsx>{`
				@keyframes slide-up {
					from {
						transform: translateY(100%);
						opacity: 0;
					}
					to {
						transform: translateY(0);
						opacity: 1;
					}
				}
				.animate-slide-up {
					animation: slide-up 0.3s ease-out;
				}
			`}</style>
		</>
	);
};

export default CookieConsent;
