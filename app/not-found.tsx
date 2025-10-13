"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
	Home,
	Search,
	ArrowLeft,
	Cloud,
	AlertTriangle,
	RefreshCw,
	Mail,
	Phone,
} from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function NotFound() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleGoBack = () => {
		window.history.back();
	};

	return (
		<div className="min-h-screen bg-white">
			<Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

			{/* 404 Hero Section */}
			<section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
				{/* Background Pattern */}
				<div className="absolute inset-0 opacity-10">
					<div
						className="w-full h-full"
						style={{
							backgroundImage: `radial-gradient(circle at 25% 25%, #ffffff 2px, transparent 2px),
					                      radial-gradient(circle at 75% 75%, #ffffff 1px, transparent 1px)`,
							backgroundSize: "60px 60px",
						}}></div>
				</div>

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
					<div className="text-center">
						{/* 404 Icon */}
						<div className="mb-8">
							<div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
								<AlertTriangle className="w-16 h-16 text-white" />
							</div>
							<h1 className="text-6xl sm:text-8xl font-bold text-white mb-4 opacity-90">
								404
							</h1>
						</div>

						{/* Error Message */}
						<h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
							Oops! Page Not Found
						</h2>
						<p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
							The page you&apos;re looking for doesn&apos;t exist or has been
							moved. Don&apos;t worry, our cloud solutions are still here to
							help you navigate back to safety.
						</p>

						{/* Action Buttons */}
						<div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
							<Link
								href="/"
								className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl flex items-center space-x-2">
								<Home className="w-5 h-5" />
								<span>Go Home</span>
							</Link>
							<button
								onClick={handleGoBack}
								className="bg-blue-700 text-white px-8 py-4 rounded-xl hover:bg-blue-800 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl flex items-center space-x-2">
								<ArrowLeft className="w-5 h-5" />
								<span>Go Back</span>
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* Helpful Links Section */}
			<section className="py-20 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl font-bold text-gray-900 mb-4">
							Looking for Something Specific?
						</h2>
						<p className="text-xl text-gray-600 max-w-2xl mx-auto">
							Here are some popular pages that might help you find what
							you&apos;re looking for.
						</p>
					</div>

					{/* Quick Navigation Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* Home */}
						<Link
							href="/"
							className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 hover:border-blue-300 group">
							<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
								<Home className="w-6 h-6 text-blue-600" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-2">Homepage</h3>
							<p className="text-gray-600">
								Return to our main page to explore our cloud transformation
								services and solutions.
							</p>
						</Link>

						{/* Services */}
						<Link
							href="/#services"
							className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 hover:border-blue-300 group">
							<div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
								<Cloud className="w-6 h-6 text-green-600" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-2">
								Our Services
							</h3>
							<p className="text-gray-600">
								Discover our comprehensive IT management and cloud
								transformation services.
							</p>
						</Link>

						{/* Case Studies */}
						<Link
							href="/case-studies"
							className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 hover:border-blue-300 group">
							<div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
								<Search className="w-6 h-6 text-purple-600" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-2">
								Case Studies
							</h3>
							<p className="text-gray-600">
								Read about our successful projects and client transformations.
							</p>
						</Link>

						{/* About */}
						<Link
							href="/#about"
							className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 hover:border-blue-300 group">
							<div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
								<AlertTriangle className="w-6 h-6 text-orange-600" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-2">About Us</h3>
							<p className="text-gray-600">
								Learn more about Canada Cloud Solutions and our team of experts.
							</p>
						</Link>

						{/* Contact */}
						<Link
							href="/#contact"
							className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 hover:border-blue-300 group">
							<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
								<Mail className="w-6 h-6 text-blue-600" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-2">
								Contact Us
							</h3>
							<p className="text-gray-600">
								Get in touch with our team for support or to discuss your IT
								needs.
							</p>
						</Link>

						{/* Privacy Policy */}
						<Link
							href="/privacy-policy"
							className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 hover:border-blue-300 group">
							<div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gray-200 transition-colors">
								<RefreshCw className="w-6 h-6 text-gray-600" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-2">
								Privacy Policy
							</h3>
							<p className="text-gray-600">
								Review our privacy practices and data protection policies.
							</p>
						</Link>
					</div>
				</div>
			</section>

			{/* Contact Support Section */}
			<section className="py-16 bg-blue-600">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-2xl font-bold text-white mb-4">
						Still Can&apos;t Find What You&apos;re Looking For?
					</h2>
					<p className="text-blue-100 mb-8 text-lg">
						Our support team is here to help you navigate to the right solution.
					</p>
					<div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
						<Link
							href="mailto:info@canadacloudsolution.ca"
							className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold flex items-center space-x-2">
							<Mail className="w-5 h-5" />
							<span>Email Support</span>
						</Link>
						<Link
							href="tel:+14156585533"
							className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors font-semibold flex items-center space-x-2">
							<Phone className="w-5 h-5" />
							<span>Call Us</span>
						</Link>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
