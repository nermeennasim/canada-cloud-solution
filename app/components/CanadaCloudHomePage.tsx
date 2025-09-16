"use client";
import React, { useState } from "react";
import {
	Settings,
	Globe,
	Users,
	Mail,
	Phone,
	MapPin,
	Lightbulb,
	ArrowRight,
} from "lucide-react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const CanadaCloudHomePage: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className="min-h-screen bg-white">
			{/* Header */}
			<Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

			{/* Hero Section */}
			<section
				id="home"
				className="py-20 lg:py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[500px]">
						{/* Left Side - Text Content */}
						<div className="text-left space-y-8">
							<div
								className="inline-flex items-center px-4 py-2 bg-blue-700/50 rounded-full text-blue-200 text-sm font-medium mb-8 backdrop-blur-sm animate-fade-in-left"
								style={{ animationDelay: "0.1s" }}>
								<Lightbulb className="w-4 h-4 mr-2" />
								Coming Soon - New Digital Experience
							</div>

							<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
								<span className="text-white block animate-pulse">
									Welcome to
								</span>
								<span
									className="text-white block animate-pulse"
									style={{ animationDelay: "0.5s" }}>
									the future of
								</span>
								<span
									className="text-blue-300 block animate-bounce"
									style={{ animationDelay: "1s" }}>
									cloud innovation
								</span>
							</h1>

							<p className="text-xl text-blue-100 leading-relaxed max-w-lg animate-pulse">
								We&apos;re currently working behind the scenes to bring you a
								brand-new digital experience that reflects our commitment to
								cutting-edge cloud solutions, seamless IT services, and
								customer-first innovation.
							</p>

							<p className="text-xl text-blue-100 leading-relaxed max-w-lg animate-pulse">
								We&apos;re currently working behind the scenes to bring you a
								brand-new digital experience that reflects our commitment to
								cutting-edge cloud solutions, seamless IT services, and
								customer-first innovation.
							</p>

							<div className="flex flex-col sm:flex-row gap-4 pt-4">
								<a
									href="#contact"
									className="inline-flex items-center justify-center px-8 py-4 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-400 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl animate-bounce">
									Get In Touch
									<ArrowRight className="ml-2 w-5 h-5" />
								</a>
								<a
									href="#services"
									className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-xl hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
									Learn More
								</a>
							</div>
						</div>
						{/* Right Side - Cloud Illustration */}
						<div
							className="flex justify-center lg:justify-end animate-fade-in-right"
							style={{ animationDelay: "1.8s" }}>
							<div className="relative">
								{/* Glowing Cloud SVG */}
								<svg
									width="400"
									height="300"
									viewBox="0 0 400 300"
									className="w-full max-w-md lg:max-w-lg">
									{/* Glow Effect */}
									<defs>
										<filter id="glow">
											<feGaussianBlur stdDeviation="4" result="coloredBlur" />
											<feMerge>
												<feMergeNode in="coloredBlur" />
												<feMergeNode in="SourceGraphic" />
											</feMerge>
										</filter>
									</defs>

									{/* Cloud Shape */}
									<path
										d="M100 180 C60 180, 40 150, 60 120 C80 80, 120 80, 140 100 C160 80, 200 80, 220 100 C240 80, 280 80, 300 100 C320 80, 360 80, 380 120 C400 150, 380 180, 340 180 Z"
										fill="none"
										stroke="#3B82F6"
										strokeWidth="3"
										filter="url(#glow)"
										className="animate-pulse"
									/>

									{/* Inner Cloud Glow */}
									<path
										d="M100 180 C60 180, 40 150, 60 120 C80 80, 120 80, 140 100 C160 80, 200 80, 220 100 C240 80, 280 80, 300 100 C320 80, 360 80, 380 120 C400 150, 380 180, 340 180 Z"
										fill="rgba(59, 130, 246, 0.1)"
										className="animate-pulse"
									/>

									{/* Floating Dots */}
									<circle
										cx="150"
										cy="120"
										r="3"
										fill="#60A5FA"
										className="animate-bounce">
										<animate
											attributeName="opacity"
											values="0.3;1;0.3"
											dur="2s"
											repeatCount="indefinite"
										/>
									</circle>
									<circle
										cx="250"
										cy="130"
										r="2"
										fill="#93C5FD"
										className="animate-bounce"
										style={{ animationDelay: "0.5s" }}>
										<animate
											attributeName="opacity"
											values="0.3;1;0.3"
											dur="2s"
											repeatCount="indefinite"
										/>
									</circle>
									<circle
										cx="320"
										cy="110"
										r="2.5"
										fill="#BFDBFE"
										className="animate-bounce"
										style={{ animationDelay: "1s" }}>
										<animate
											attributeName="opacity"
											values="0.3;1;0.3"
											dur="2s"
											repeatCount="indefinite"
										/>
									</circle>
								</svg>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* What to Expect Section */}
			<section id="services" className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
							What to Expect
						</h2>
						<p className="text-xl text-gray-600">
							Excellence takes time—and we&apos;re building something
							that&apos;s worth it.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						<div className="group p-8 rounded-2xl bg-white border-2 border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
							<div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
								<Lightbulb className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-3">
								Fresh, Modern Design
							</h3>
							<p className="text-gray-600">
								A completely redesigned interface that&apos;s intuitive,
								beautiful, and built for the modern business.
							</p>
						</div>

						<div className="group p-8 rounded-2xl bg-white border-2 border-gray-100 hover:border-red-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
							<div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
								<Settings className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-3">
								Dynamic Features
							</h3>
							<p className="text-gray-600">
								Tailored functionality that adapts to your unique business needs
								and workflows.
							</p>
						</div>

						<div className="group p-8 rounded-2xl bg-white border-2 border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
							<div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
								<Globe className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-3">
								Faster Access
							</h3>
							<p className="text-gray-600">
								Lightning-fast, smarter access to all your cloud services and
								applications.
							</p>
						</div>

						<div className="group p-8 rounded-2xl bg-white border-2 border-gray-100 hover:border-red-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
							<div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
								<Users className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-3">
								Enhanced Support
							</h3>
							<p className="text-gray-600">
								Improved support tools and client resources for a seamless
								experience.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Why the Wait Section */}
			<section id="about" className="py-20 bg-blue-600">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
						Why the Wait?
					</h2>
					<p className="text-xl text-blue-100 mb-8">
						Because excellence takes time—and we&apos;re building something
						that&apos;s worth it.
					</p>
					<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
						<p className="text-lg text-white leading-relaxed">
							We&apos;re not just updating our website; we&apos;re reimagining
							how you experience cloud solutions. Every pixel, every
							interaction, and every feature is being crafted with your success
							in mind.
						</p>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section id="contact" className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
							Stay Connected
						</h2>
						<p className="text-xl text-gray-600">
							In the meantime, feel free to reach out
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
						<div className="text-center p-8 bg-white rounded-2xl border-2 border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
							<div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
								<Mail className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-3">Email Us</h3>
							<a
								href="mailto:canadacloudsolution@gmail.com"
								className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
								canadacloudsolution@gmail.com
							</a>
						</div>

						<div className="text-center p-8 bg-white rounded-2xl border-2 border-gray-100 hover:border-red-300 hover:shadow-xl transition-all duration-300">
							<div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
								<Phone className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-3">Call Us</h3>
							<a
								href="tel:+14156585533"
								className="text-red-600 hover:text-red-800 font-medium transition-colors">
								+1 (415) 658-5533
							</a>
						</div>

						<div className="text-center p-8 bg-white rounded-2xl border-2 border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
							<div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
								<MapPin className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-3">Visit Us</h3>
							<p className="text-gray-600 font-medium">Mississauga, Ontario</p>
						</div>
					</div>

					<div className="text-center mt-12">
						<p className="text-gray-600 mb-4">Follow us for updates:</p>
						<div className="flex justify-center space-x-4">
							<a
								href="https://www.linkedin.com/company/canadacloudsolution/"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
								LinkedIn
							</a>
							<a
								href="#"
								className="inline-flex items-center px-6 py-3 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors">
								Twitter
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<Footer />
		</div>
	);
};

export default CanadaCloudHomePage;
