"use client";
import React, { useState, useEffect } from "react";
import { Cookie, Shield, Eye, Settings, BarChart3, Save } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCookiePreferences, CookiePreferences } from "../lib/cookieManager";
import Link from "next/link";

const CookiePreferencesPage: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { preferences, updatePreferences, acceptAll, declineOptional, isLoaded } =
		useCookiePreferences();
	const [tempPreferences, setTempPreferences] =
		useState<CookiePreferences>(preferences);
	const [saved, setSaved] = useState(false);

	// Sync tempPreferences with loaded preferences
	useEffect(() => {
		if (isLoaded) {
			setTempPreferences(preferences);
		}
	}, [preferences, isLoaded]);

	const handleSave = () => {
		updatePreferences(tempPreferences);
		setSaved(true);
		
		// Force Google Analytics initialization with new preferences
		if (typeof window !== 'undefined' && window.gtag) {
			if (tempPreferences.analytics) {
				window.gtag("consent", "update", {
					analytics_storage: "granted",
				});
				console.log("🔍 Analytics enabled via preferences page");
			} else {
				window.gtag("consent", "update", {
					analytics_storage: "denied",
				});
				console.log("🚫 Analytics disabled via preferences page");
			}
		}
		
		setTimeout(() => setSaved(false), 3000);
	};

	const handleToggle = (key: keyof CookiePreferences) => {
		if (key === "essential") return; // Essential cookies can't be disabled

		setTempPreferences((prev) => ({
			...prev,
			[key]: !prev[key],
		}));
	};

	return (
		<div className="min-h-screen bg-white">
			<Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

			{/* Hero Section */}
			<section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
							<Cookie className="w-8 h-8 text-white" />
						</div>
						<h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
							Cookie Preferences
						</h1>
						<p className="text-xl text-blue-100 max-w-3xl mx-auto">
							Manage your cookie preferences and control how we use cookies to
							improve your experience on our website.
						</p>
					</div>
				</div>
			</section>

			{/* Cookie Preferences Content */}
			<section className="py-20">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					{/* Save Notification */}
					{saved && (
						<div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
							<Save className="w-6 h-6 text-green-600" />
							<p className="text-green-800 font-medium">
								Your cookie preferences have been saved successfully!
							</p>
						</div>
					)}

					{/* Quick Actions */}
					<div className="bg-gray-50 rounded-xl p-8 mb-8">
						<h2 className="text-xl font-bold text-gray-900 mb-4">
							Quick Actions
						</h2>
						<div className="flex flex-col sm:flex-row gap-4">
							<button
								onClick={acceptAll}
								className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
								Accept All Cookies
							</button>
							<button
								onClick={declineOptional}
								className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium">
								Decline Optional Cookies
							</button>
						</div>
					</div>

					{/* Cookie Categories */}
					<div className="space-y-6">
						{/* Essential Cookies */}
						<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
							<div className="flex items-start justify-between mb-4">
								<div className="flex items-start space-x-4">
									<div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
										<Shield className="w-6 h-6 text-green-600" />
									</div>
									<div>
										<h3 className="text-lg font-bold text-gray-900">
											Essential Cookies
										</h3>
										<p className="text-gray-600 text-sm mt-1">
											These cookies are necessary for the website to function
											and cannot be disabled.
										</p>
									</div>
								</div>
								<div className="flex items-center">
									<div className="w-12 h-6 bg-green-500 rounded-full relative">
										<div className="w-5 h-5 bg-white rounded-full shadow-md absolute top-0.5 right-0.5 transition-transform"></div>
									</div>
								</div>
							</div>
							<div className="text-sm text-gray-700 space-y-2">
								<p>• Session management and user authentication</p>
								<p>• Security features and fraud prevention</p>
								<p>• Basic website functionality</p>
							</div>
						</div>

						{/* Analytics Cookies */}
						<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
							<div className="flex items-start justify-between mb-4">
								<div className="flex items-start space-x-4">
									<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
										<BarChart3 className="w-6 h-6 text-blue-600" />
									</div>
									<div>
										<h3 className="text-lg font-bold text-gray-900">
											Analytics Cookies
										</h3>
										<p className="text-gray-600 text-sm mt-1">
											Help us understand how visitors interact with our website
											by collecting anonymous data.
										</p>
									</div>
								</div>
								<button
									onClick={() => handleToggle("analytics")}
									className="flex items-center">
									<div
										className={`w-12 h-6 ${
											tempPreferences.analytics ? "bg-blue-500" : "bg-gray-300"
										} rounded-full relative transition-colors`}>
										<div
											className={`w-5 h-5 bg-white rounded-full shadow-md absolute top-0.5 transition-transform ${
												tempPreferences.analytics
													? "translate-x-6"
													: "translate-x-0.5"
											}`}></div>
									</div>
								</button>
							</div>
							<div className="text-sm text-gray-700 space-y-2">
								<p>• Page views and user behavior analysis</p>
								<p>• Performance monitoring and optimization</p>
								<p>• Anonymous usage statistics</p>
							</div>
						</div>

						{/* Functional Cookies */}
						<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
							<div className="flex items-start justify-between mb-4">
								<div className="flex items-start space-x-4">
									<div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
										<Settings className="w-6 h-6 text-purple-600" />
									</div>
									<div>
										<h3 className="text-lg font-bold text-gray-900">
											Functional Cookies
										</h3>
										<p className="text-gray-600 text-sm mt-1">
											Remember your preferences and settings to provide a
											personalized experience.
										</p>
									</div>
								</div>
								<button
									onClick={() => handleToggle("functional")}
									className="flex items-center">
									<div
										className={`w-12 h-6 ${
											tempPreferences.functional
												? "bg-purple-500"
												: "bg-gray-300"
										} rounded-full relative transition-colors`}>
										<div
											className={`w-5 h-5 bg-white rounded-full shadow-md absolute top-0.5 transition-transform ${
												tempPreferences.functional
													? "translate-x-6"
													: "translate-x-0.5"
											}`}></div>
									</div>
								</button>
							</div>
							<div className="text-sm text-gray-700 space-y-2">
								<p>• Language and region preferences</p>
								<p>• Theme and display settings</p>
								<p>• Form data and user preferences</p>
							</div>
						</div>

						{/* Marketing Cookies */}
						<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
							<div className="flex items-start justify-between mb-4">
								<div className="flex items-start space-x-4">
									<div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
										<Eye className="w-6 h-6 text-orange-600" />
									</div>
									<div>
										<h3 className="text-lg font-bold text-gray-900">
											Marketing Cookies
										</h3>
										<p className="text-gray-600 text-sm mt-1">
											Used to deliver relevant advertisements and track
											advertising campaign performance.
										</p>
									</div>
								</div>
								<button
									onClick={() => handleToggle("marketing")}
									className="flex items-center">
									<div
										className={`w-12 h-6 ${
											tempPreferences.marketing
												? "bg-orange-500"
												: "bg-gray-300"
										} rounded-full relative transition-colors`}>
										<div
											className={`w-5 h-5 bg-white rounded-full shadow-md absolute top-0.5 transition-transform ${
												tempPreferences.marketing
													? "translate-x-6"
													: "translate-x-0.5"
											}`}></div>
									</div>
								</button>
							</div>
							<div className="text-sm text-gray-700 space-y-2">
								<p>• Personalized advertisements</p>
								<p>• Social media integration</p>
								<p>• Campaign effectiveness measurement</p>
							</div>
						</div>
					</div>

					{/* Save Button */}
					<div className="text-center mt-12">
						<button
							onClick={handleSave}
							disabled={saved}
							className={`px-8 py-4 rounded-xl transition-colors font-semibold text-lg shadow-lg hover:shadow-xl flex items-center justify-center mx-auto space-x-2 ${
								saved 
									? "bg-green-600 text-white cursor-not-allowed" 
									: "bg-blue-600 text-white hover:bg-blue-700"
							}`}>
							{saved ? (
								<>
									<Save className="w-5 h-5" />
									<span>Preferences Saved!</span>
								</>
							) : (
								<>
									<Save className="w-5 h-5" />
									<span>Save Preferences</span>
								</>
							)}
						</button>
						
						{/* Quick Actions */}
						<div className="flex justify-center space-x-4 mt-6">
							<button
								onClick={() => {
									acceptAll();
									setTempPreferences({
										essential: true,
										analytics: true,
										functional: true,
										marketing: true,
									});
									setSaved(true);
									setTimeout(() => setSaved(false), 3000);
								}}
								className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors text-sm font-medium">
								Accept All
							</button>
							<button
								onClick={() => {
									declineOptional();
									setTempPreferences({
										essential: true,
										analytics: false,
										functional: false,
										marketing: false,
									});
									setSaved(true);
									setTimeout(() => setSaved(false), 3000);
								}}
								className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium">
								Decline Optional
							</button>
						</div>
					</div>

					{/* Additional Information */}
					<div className="mt-12 p-6 bg-blue-50 rounded-xl">
						<h3 className="text-lg font-bold text-gray-900 mb-4">
							More Information
						</h3>
						<div className="text-gray-700 space-y-2">
							<p>
								For more details about how we use cookies and process your data,
								please review our{" "}
								<Link
									href="/privacy-policy"
									className="text-blue-600 hover:text-blue-800 font-medium">
									Privacy Policy
								</Link>
								.
							</p>
							<p>
								You can change these preferences at any time by returning to
								this page. Some features may not work properly if you disable
								certain cookies.
							</p>
							<p>
								If you have questions about our cookie practices, please{" "}
								<Link
									href="/#contact"
									className="text-blue-600 hover:text-blue-800 font-medium">
									contact us
								</Link>
								.
							</p>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default CookiePreferencesPage;
