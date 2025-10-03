import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
	FaLinkedin,
	FaEnvelope,
	FaPhone,
	FaCloud,
	FaServer,
	FaNetworkWired,
} from "react-icons/fa6";

import { FaMapMarkerAlt } from "react-icons/fa";

const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-gray-50 border-t border-gray-200 relative">
			{/* Optimized CSS pattern instead of external image */}
			<div className="absolute inset-0 opacity-5">
				<div
					className="w-full h-full"
					style={{
						backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
					                  radial-gradient(circle at 75% 75%, #6366f1 1px, transparent 1px)`,
						backgroundSize: "24px 24px",
					}}></div>
			</div>

			{/* Main Footer Content */}
			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Company Branding - Left Side */}
					<div className="lg:col-span-1 space-y-4">
						<div className="flex items-center space-x-3">
							<Image
								src="/images/logo_3d_CCS.png"
								alt="Canada Cloud Solution Logo"
								width={48}
								height={48}
								className="w-12 h-12 object-contain"
							/>
							<div>
								<h3 className="text-lg font-bold text-gray-900">
									Canada Cloud Solution
								</h3>
								<p className="text-sm text-blue-600 font-medium">
									Your Future Partner
								</p>
							</div>
						</div>
						<p className="text-gray-600 text-sm leading-relaxed">
							Building the future of cloud innovation, one solution at a time.
							We transform businesses through cutting-edge cloud technologies
							and seamless IT services.
						</p>
					</div>

					{/* Services */}
					<div className="space-y-4">
						<h4 className="text-lg font-semibold text-gray-900">
							Our Services
						</h4>
						<ul className="space-y-3">
							<li>
								<a
									href="#cloud-transformation"
									className="flex items-center text-gray-600 hover:text-blue-600 transition-colors text-sm">
									<FaCloud className="w-4 h-4 mr-2 text-blue-500" />
									Cloud Transformation
								</a>
							</li>
							<li>
								<a
									href="#infrastructure"
									className="flex items-center text-gray-600 hover:text-blue-600 transition-colors text-sm">
									<FaServer className="w-4 h-4 mr-2 text-blue-500" />
									Infrastructure Services
								</a>
							</li>
							<li>
								<a
									href="#networking"
									className="flex items-center text-gray-600 hover:text-blue-600 transition-colors text-sm">
									<FaNetworkWired className="w-4 h-4 mr-2 text-blue-500" />
									Network Solutions
								</a>
							</li>
							<li>
								<a
									href="#consulting"
									className="flex items-center text-gray-600 hover:text-blue-600 transition-colors text-sm">
									<FaServer className="w-4 h-4 mr-2 text-blue-500" />
									IT Consulting
								</a>
							</li>
						</ul>
					</div>

					{/* Quick Links */}
					<div className="space-y-4">
						<h4 className="text-lg font-semibold text-gray-900">Quick Links</h4>
						<ul className="space-y-3">
							<li>
								<a
									href="#about"
									className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
									About Us
								</a>
							</li>
							<li>
								<Link
									href="/case-studies"
									className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
									Case Studies
								</Link>
							</li>

							{/* <li>
								<a
									href="#careers"
									className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
									Careers
								</a>
							</li> */}
							<li>
								<Link
									href="/privacy-policy"
									className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link
									href="/cookie-preferences"
									className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
									Cookie Settings
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact Information - Right Side */}
					<div className="space-y-4">
						<h4 className="text-lg font-semibold text-gray-900">
							Get in Touch
						</h4>
						<div className="space-y-3">
							<div className="flex items-start space-x-3">
								<FaEnvelope className="w-4 h-4 text-blue-500 mt-1" />
								<div>
									<p className="text-xs text-gray-500 uppercase tracking-wide">
										Email
									</p>
									<Link
										href="mailto:canadacloudsolution@gmail.com"
										className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium">
										canadacloudsolution@gmail.com
									</Link>
								</div>
							</div>

							<div className="flex items-start space-x-3">
								<FaPhone className="w-4 h-4 text-blue-500 mt-1" />
								<div>
									<p className="text-xs text-gray-500 uppercase tracking-wide">
										Phone
									</p>
									<Link
										href="tel:+14156585533"
										className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium">
										+1 (415) 658-5533
									</Link>
								</div>
							</div>

							<div className="flex items-start space-x-3">
								<FaMapMarkerAlt className="w-4 h-4 text-blue-500 mt-1" />
								<div>
									<p className="text-xs text-gray-500 uppercase tracking-wide">
										Location
									</p>
									<p className="text-gray-700 text-sm font-medium">
										Mississauga, Ontario
									</p>
								</div>
							</div>

							{/* Social Media Links */}
							<div className="pt-4">
								<p className="text-xs text-gray-500 uppercase tracking-wide mb-3">
									Follow Us
								</p>
								<div className="flex space-x-3">
									<Link
										href="https://www.linkedin.com/company/canadacloudsolution/"
										target="_blank"
										rel="noopener noreferrer"
										className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
										<FaLinkedin className="w-4 h-4" />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Newsletter Signup
				<div className="relative z-10 mt-12 pt-8 border-t border-gray-200">
					<div className="max-w-md mx-auto text-center">
						<h4 className="text-lg font-semibold text-gray-900 mb-2">
							Stay Updated
						</h4>
						<p className="text-gray-600 text-sm mb-4">
							Get the latest cloud insights and industry updates delivered to
							your inbox.
						</p>
						<div className="flex space-x-2">
							<input
								type="email"
								placeholder="Enter your email"
								className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
							/>
							<button className="px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
								Subscribe
							</button>
						</div>
					</div> 
				</div>*/}
			</div>

			{/* Bottom Bar */}
			<div className="relative z-10 bg-gray-50 border-t border-gray-200 shadow-2xl">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
					<div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
						<p className="text-gray-600 text-sm">
							© {currentYear} Canada Cloud Solution. All rights reserved.
						</p>
						<p className="text-gray-500 text-sm">
							Powered by{" "}
							<Link
								href="https://bluesproutagency.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-600 hover:text-blue-800 transition-colors font-medium">
								Blue Sprout Agency LLC
							</Link>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
