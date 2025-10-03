"use client";
import React, { useState } from "react";
import {
	Shield,
	FileText,
	Globe,
	Mail,
	Lock,
	Eye,
	Users,
	Clock,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

const PrivacyPolicyPage: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className="min-h-screen bg-white">
			<Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

			{/* Hero Section */}
			<section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
							<Shield className="w-8 h-8 text-white" />
						</div>
						<h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
							Privacy Policy
						</h1>
						<p className="text-xl text-blue-100 max-w-3xl mx-auto">
							Your privacy is important to us. This policy explains how Canada
							Cloud Solutions collects, uses, and protects your personal
							information.
						</p>
						<div className="mt-6 text-blue-200">
							<p className="flex items-center justify-center space-x-2">
								<Clock className="w-5 h-5" />
								<span>Last updated: October 3, 2025</span>
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Privacy Policy Content */}
			<section className="py-20">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					{/* Table of Contents */}
					<div className="bg-gray-50 rounded-xl p-8 mb-12">
						<h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
							<FileText className="w-6 h-6 mr-3 text-blue-600" />
							Table of Contents
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<ul className="space-y-2">
								<li>
									<Link
										href="#information-collection"
										className="text-blue-600 hover:text-blue-800 transition-colors">
										1. Information We Collect
									</Link>
								</li>
								<li>
									<Link
										href="#information-use"
										className="text-blue-600 hover:text-blue-800 transition-colors">
										2. How We Use Information
									</Link>
								</li>
								<li>
									<Link
										href="#information-sharing"
										className="text-blue-600 hover:text-blue-800 transition-colors">
										3. Information Sharing
									</Link>
								</li>
								<li>
									<Link
										href="#data-security"
										className="text-blue-600 hover:text-blue-800 transition-colors">
										4. Data Security
									</Link>
								</li>
							</ul>
							<ul className="space-y-2">
								<li>
									<Link
										href="#cookies"
										className="text-blue-600 hover:text-blue-800 transition-colors">
										5. Cookies and Tracking
									</Link>
								</li>
								<li>
									<Link
										href="#user-rights"
										className="text-blue-600 hover:text-blue-800 transition-colors">
										6. Your Rights
									</Link>
								</li>
								<li>
									<Link
										href="#international-transfers"
										className="text-blue-600 hover:text-blue-800 transition-colors">
										7. International Transfers
									</Link>
								</li>
								<li>
									<Link
										href="#contact"
										className="text-blue-600 hover:text-blue-800 transition-colors">
										8. Contact Information
									</Link>
								</li>
							</ul>
						</div>
					</div>

					{/* Introduction */}
					<div className="mb-12">
						<h2 className="text-2xl font-bold text-gray-900 mb-6">
							Introduction
						</h2>
						<div className="prose prose-lg text-gray-700 space-y-4">
							<p>
								Canada Cloud Solutions (&quot;CCS&quot;, &quot;we&quot;,
								&quot;us&quot;, or &quot;our&quot;) is committed to protecting
								your privacy and ensuring the security of your personal
								information. This Privacy Policy explains how we collect, use,
								disclose, and safeguard your information when you visit our
								website, use our services, or interact with us.
							</p>
							<p>
								By accessing or using our services, you agree to the collection
								and use of information in accordance with this Privacy Policy.
								If you do not agree with this policy, please do not access or
								use our services.
							</p>
						</div>
					</div>

					{/* Section 1: Information Collection */}
					<div id="information-collection" className="mb-12">
						<div className="flex items-center mb-6">
							<div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
								<Users className="w-6 h-6 text-white" />
							</div>
							<h2 className="text-2xl font-bold text-gray-900">
								1. Information We Collect
							</h2>
						</div>
						<div className="space-y-6">
							<div>
								<h3 className="text-xl font-semibold text-gray-900 mb-3">
									Personal Information
								</h3>
								<p className="text-gray-700 mb-4">
									We may collect the following types of personal information:
								</p>
								<ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
									<li>
										Contact information (name, email address, phone number,
										mailing address)
									</li>
									<li>
										Professional information (company name, job title, industry)
									</li>
									<li>Account credentials and authentication information</li>
									<li>Payment and billing information for our services</li>
									<li>Communication records and correspondence with us</li>
								</ul>
							</div>
							<div>
								<h3 className="text-xl font-semibold text-gray-900 mb-3">
									Technical Information
								</h3>
								<ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
									<li>IP address, browser type, and operating system</li>
									<li>Device identifiers and network information</li>
									<li>Website usage data and analytics information</li>
									<li>Log files and system performance data</li>
								</ul>
							</div>
						</div>
					</div>

					{/* Section 2: Information Use */}
					<div id="information-use" className="mb-12">
						<div className="flex items-center mb-6">
							<div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mr-4">
								<Globe className="w-6 h-6 text-white" />
							</div>
							<h2 className="text-2xl font-bold text-gray-900">
								2. How We Use Information
							</h2>
						</div>
						<div className="space-y-4 text-gray-700">
							<p>
								We use the collected information for the following purposes:
							</p>
							<ul className="list-disc list-inside space-y-2 ml-4">
								<li>
									Provide, maintain, and improve our cloud and cybersecurity
									services
								</li>
								<li>Process transactions and manage customer accounts</li>
								<li>
									Communicate with you about our services, updates, and support
								</li>
								<li>Respond to your inquiries and provide customer support</li>
								<li>Analyze usage patterns to enhance user experience</li>
								<li>
									Comply with legal obligations and regulatory requirements
								</li>
								<li>
									Detect, prevent, and address technical issues or security
									threats
								</li>
								<li>
									Send marketing communications (with your consent where
									required)
								</li>
							</ul>
						</div>
					</div>

					{/* Section 3: Information Sharing */}
					<div id="information-sharing" className="mb-12">
						<div className="flex items-center mb-6">
							<div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
								<Eye className="w-6 h-6 text-white" />
							</div>
							<h2 className="text-2xl font-bold text-gray-900">
								3. Information Sharing
							</h2>
						</div>
						<div className="space-y-6">
							<p className="text-gray-700">
								We do not sell, trade, or rent your personal information to
								third parties. We may share your information in the following
								limited circumstances:
							</p>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div className="p-4 border border-gray-200 rounded-lg">
									<h4 className="font-semibold text-gray-900 mb-2">
										Service Providers
									</h4>
									<p className="text-gray-700 text-sm">
										Trusted third-party vendors who assist in delivering our
										services under strict confidentiality agreements.
									</p>
								</div>
								<div className="p-4 border border-gray-200 rounded-lg">
									<h4 className="font-semibold text-gray-900 mb-2">
										Legal Compliance
									</h4>
									<p className="text-gray-700 text-sm">
										When required by law, court order, or to protect our rights
										and the safety of others.
									</p>
								</div>
								<div className="p-4 border border-gray-200 rounded-lg">
									<h4 className="font-semibold text-gray-900 mb-2">
										Business Transfers
									</h4>
									<p className="text-gray-700 text-sm">
										In connection with mergers, acquisitions, or sale of assets,
										subject to confidentiality requirements.
									</p>
								</div>
								<div className="p-4 border border-gray-200 rounded-lg">
									<h4 className="font-semibold text-gray-900 mb-2">
										With Your Consent
									</h4>
									<p className="text-gray-700 text-sm">
										When you have explicitly agreed to share information for
										specific purposes.
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Section 4: Data Security */}
					<div id="data-security" className="mb-12">
						<div className="flex items-center mb-6">
							<div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center mr-4">
								<Lock className="w-6 h-6 text-white" />
							</div>
							<h2 className="text-2xl font-bold text-gray-900">
								4. Data Security
							</h2>
						</div>
						<div className="space-y-4 text-gray-700">
							<p>
								We implement robust security measures to protect your personal
								information:
							</p>
							<div className="bg-blue-50 p-6 rounded-xl">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div>
										<h4 className="font-semibold text-gray-900 mb-2">
											Encryption
										</h4>
										<p className="text-sm text-gray-700">
											AES-256 encryption for data at rest and TLS 1.3 for data
											in transit
										</p>
									</div>
									<div>
										<h4 className="font-semibold text-gray-900 mb-2">
											Access Controls
										</h4>
										<p className="text-sm text-gray-700">
											Multi-factor authentication and role-based access controls
										</p>
									</div>
									<div>
										<h4 className="font-semibold text-gray-900 mb-2">
											Monitoring
										</h4>
										<p className="text-sm text-gray-700">
											24/7 security monitoring and threat detection systems
										</p>
									</div>
									<div>
										<h4 className="font-semibold text-gray-900 mb-2">
											Compliance
										</h4>
										<p className="text-sm text-gray-700">
											SOC 2, ISO 27001, and industry-standard security
											frameworks
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Section 5: Cookies */}
					<div id="cookies" className="mb-12">
						<div className="flex items-center mb-6">
							<div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center mr-4">
								<Globe className="w-6 h-6 text-white" />
							</div>
							<h2 className="text-2xl font-bold text-gray-900">
								5. Cookies and Tracking Technologies
							</h2>
						</div>
						<div className="space-y-4 text-gray-700">
							<p>
								We use cookies and similar technologies to enhance your
								experience on our website:
							</p>
							<div className="space-y-4">
								<div>
									<h4 className="font-semibold text-gray-900">
										Essential Cookies
									</h4>
									<p className="text-sm">
										Required for basic website functionality and security
									</p>
								</div>
								<div>
									<h4 className="font-semibold text-gray-900">
										Analytics Cookies
									</h4>
									<p className="text-sm">
										Help us understand how visitors interact with our website
									</p>
								</div>
								<div>
									<h4 className="font-semibold text-gray-900">
										Marketing Cookies
									</h4>
									<p className="text-sm">
										Used to deliver relevant advertisements (with your consent)
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Section 6: User Rights */}
					<div id="user-rights" className="mb-12">
						<div className="flex items-center mb-6">
							<div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center mr-4">
								<Shield className="w-6 h-6 text-white" />
							</div>
							<h2 className="text-2xl font-bold text-gray-900">
								6. Your Privacy Rights
							</h2>
						</div>
						<div className="space-y-4 text-gray-700">
							<p>You have the following rights regarding your personal data:</p>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div className="p-4 bg-gray-50 rounded-lg">
									<h4 className="font-semibold text-gray-900 mb-2">
										Access & Portability
									</h4>
									<p className="text-sm">
										Request a copy of your personal data in a structured format
									</p>
								</div>
								<div className="p-4 bg-gray-50 rounded-lg">
									<h4 className="font-semibold text-gray-900 mb-2">
										Correction
									</h4>
									<p className="text-sm">
										Update or correct inaccurate personal information
									</p>
								</div>
								<div className="p-4 bg-gray-50 rounded-lg">
									<h4 className="font-semibold text-gray-900 mb-2">Deletion</h4>
									<p className="text-sm">
										Request deletion of your personal data (subject to legal
										requirements)
									</p>
								</div>
								<div className="p-4 bg-gray-50 rounded-lg">
									<h4 className="font-semibold text-gray-900 mb-2">Opt-out</h4>
									<p className="text-sm">
										Unsubscribe from marketing communications at any time
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Section 7: International Transfers */}
					<div id="international-transfers" className="mb-12">
						<div className="flex items-center mb-6">
							<div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center mr-4">
								<Globe className="w-6 h-6 text-white" />
							</div>
							<h2 className="text-2xl font-bold text-gray-900">
								7. International Data Transfers
							</h2>
						</div>
						<div className="space-y-4 text-gray-700">
							<p>
								As a global company serving clients worldwide, we may transfer
								your personal information across international borders. We
								ensure appropriate safeguards are in place, including:
							</p>
							<ul className="list-disc list-inside space-y-2 ml-4">
								<li>
									Standard Contractual Clauses approved by regulatory bodies
								</li>
								<li>
									Adequacy decisions for countries with equivalent protection
								</li>
								<li>Binding corporate rules for intra-group transfers</li>
								<li>Your explicit consent where required by law</li>
							</ul>
						</div>
					</div>

					{/* Section 8: Contact Information */}
					<div id="contact" className="mb-12">
						<div className="flex items-center mb-6">
							<div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
								<Mail className="w-6 h-6 text-white" />
							</div>
							<h2 className="text-2xl font-bold text-gray-900">
								8. Contact Information
							</h2>
						</div>
						<div className="bg-blue-50 p-6 rounded-xl">
							<p className="text-gray-700 mb-4">
								If you have questions about this Privacy Policy or wish to
								exercise your privacy rights, please contact us:
							</p>
							<div className="space-y-2 text-gray-700">
								<p>
									<strong>Email:</strong>{" "}
									<Link
										href="mailto:privacy@canadacloudsolutions.ca"
										className="text-blue-600 hover:text-blue-800">
										privacy@canadacloudsolutions.ca
									</Link>
								</p>
								<p>
									<strong>General Contact:</strong>{" "}
									<Link
										href="mailto:canadacloudsolutions@gmail.com"
										className="text-blue-600 hover:text-blue-800">
										canadacloudsolutions@gmail.com
									</Link>
								</p>
								<p>
									<strong>Phone:</strong>{" "}
									<Link
										href="tel:+14156585533"
										className="text-blue-600 hover:text-blue-800">
										+1 (415) 658-5533
									</Link>
								</p>
							</div>
						</div>
					</div>

					{/* Policy Updates */}
					<div className="border-t border-gray-200 pt-8">
						<h2 className="text-xl font-bold text-gray-900 mb-4">
							Policy Updates
						</h2>
						<p className="text-gray-700">
							We may update this Privacy Policy from time to time to reflect
							changes in our practices or applicable laws. We will notify you of
							any material changes by posting the new Privacy Policy on this
							page and updating the &quot;Last Updated&quot; date. We encourage
							you to review this Privacy Policy periodically to stay informed
							about how we protect your information.
						</p>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default PrivacyPolicyPage;
