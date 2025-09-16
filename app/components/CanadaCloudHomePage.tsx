"use client";
import React, { useState } from "react";
import {
	Cloud,
	Settings,
	Globe,
	Users,
	Mail,
	Phone,
	MapPin,
	Lightbulb,
	ArrowRight,
	Menu,
	X,
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
			<section id="home" className="py-20 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-700 text-sm font-medium mb-8">
							<Lightbulb className="w-4 h-4 mr-2" />
							Coming Soon - New Digital Experience
						</div>

						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
							Welcome to the future of{" "}
							<span className="text-blue-600">cloud innovation</span>
						</h1>

						<p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
							We're currently working behind the scenes to bring you a brand-new
							digital experience that reflects our commitment to cutting-edge
							cloud solutions, seamless IT services, and customer-first
							innovation.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
							<a
								href="#contact"
								className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
								Get In Touch
								<ArrowRight className="ml-2 w-5 h-5" />
							</a>
							<a
								href="#services"
								className="inline-flex items-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300">
								Learn More
							</a>
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
							Excellence takes time—and we're building something that's worth
							it.
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
								A completely redesigned interface that's intuitive, beautiful,
								and built for the modern business.
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
						Because excellence takes time—and we're building something that's
						worth it.
					</p>
					<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
						<p className="text-lg text-white leading-relaxed">
							We're not just updating our website; we're reimagining how you
							experience cloud solutions. Every pixel, every interaction, and
							every feature is being crafted with your success in mind.
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
