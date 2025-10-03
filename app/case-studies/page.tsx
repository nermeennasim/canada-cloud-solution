"use client";
import React from "react";
import {
	Shield,
	Lock,
	Eye,
	CheckCircle,
	Users,
	Globe,
	ArrowRight,
	FileText,
	Clock,
	Award,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

const CaseStudiesPage: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className="min-h-screen bg-white">
			<Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

			{/* Hero Section */}
			<section
				className="py-20 lg:py-32 relative overflow-hidden"
				style={{
					backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.85), rgba(30, 64, 175, 0.85)), url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80')`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="text-center">
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
							Case Studies
						</h1>
						<p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
							Discover how Canada Cloud Solutions has helped global enterprises
							strengthen their cybersecurity posture and achieve digital
							transformation success.
						</p>
					</div>
				</div>
			</section>

			{/* Tokio Marine Insurance Case Study */}
			<section className="py-20 relative overflow-hidden">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					{/* Case Study Header */}
					<div className="text-center mb-16">
						<div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-4">
							<Award className="w-4 h-4 mr-2" />
							Featured Case Study
						</div>
						<h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
							Tokio Marine Insurance (Japan)
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Comprehensive Cybersecurity Transformation & Zero Trust
							Implementation
						</p>
					</div>

					{/* Project Overview */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
						<div>
							<h3 className="text-2xl font-bold text-gray-900 mb-6">
								Project Overview
							</h3>
							<p className="text-lg text-gray-700 leading-relaxed mb-6">
								Tokio Marine Insurance, one of Japan&apos;s leading insurance
								companies, partnered with Canada Cloud Solutions to modernize
								their cybersecurity infrastructure and implement a comprehensive
								Zero Trust security framework across their global operations.
							</p>
							<div className="space-y-4">
								<div className="flex items-start space-x-3">
									<Clock className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
									<div>
										<h4 className="font-semibold text-gray-900">Duration</h4>
										<p className="text-gray-700">18 months (2022-2023)</p>
									</div>
								</div>
								<div className="flex items-start space-x-3">
									<Users className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
									<div>
										<h4 className="font-semibold text-gray-900">Scope</h4>
										<p className="text-gray-700">
											Global implementation across 15+ countries
										</p>
									</div>
								</div>
								<div className="flex items-start space-x-3">
									<FileText className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
									<div>
										<h4 className="font-semibold text-gray-900">Industry</h4>
										<p className="text-gray-700">
											Insurance & Financial Services
										</p>
									</div>
								</div>
							</div>
						</div>
						<div
							className="relative rounded-2xl overflow-hidden shadow-xl"
							style={{
								backgroundImage: `url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
								backgroundSize: "cover",
								backgroundPosition: "center",
								height: "400px",
							}}>
							<div className="absolute inset-0 bg-blue-900/30"></div>
						</div>
					</div>

					{/* Challenges */}
					<div className="mb-20">
						<h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
							Key Challenges
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							<div className="p-6 bg-red-50 rounded-xl border-l-4 border-red-500">
								<div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
									<Shield className="w-6 h-6 text-red-600" />
								</div>
								<h4 className="text-lg font-bold text-gray-900 mb-2">
									Legacy Security Infrastructure
								</h4>
								<p className="text-gray-700">
									Outdated perimeter-based security model with limited
									visibility into internal threats and data movement.
								</p>
							</div>
							<div className="p-6 bg-orange-50 rounded-xl border-l-4 border-orange-500">
								<div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
									<Globe className="w-6 h-6 text-orange-600" />
								</div>
								<h4 className="text-lg font-bold text-gray-900 mb-2">
									Global Compliance Requirements
								</h4>
								<p className="text-gray-700">
									Complex regulatory landscape across multiple jurisdictions
									requiring consistent security standards.
								</p>
							</div>
							<div className="p-6 bg-yellow-50 rounded-xl border-l-4 border-yellow-500">
								<div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
									<Eye className="w-6 h-6 text-yellow-600" />
								</div>
								<h4 className="text-lg font-bold text-gray-900 mb-2">
									Limited Threat Visibility
								</h4>
								<p className="text-gray-700">
									Insufficient monitoring and detection capabilities for
									advanced persistent threats and insider risks.
								</p>
							</div>
						</div>
					</div>

					{/* Solutions Implemented */}
					<div className="mb-20">
						<h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
							Solutions Implemented
						</h3>
						<div className="space-y-8">
							<div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
								<div className="flex items-start space-x-6">
									<div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
										<Shield className="w-8 h-8 text-white" />
									</div>
									<div className="flex-1">
										<h4 className="text-xl font-bold text-gray-900 mb-3">
											Zero Trust Architecture Implementation
										</h4>
										<p className="text-gray-700 mb-4">
											Deployed comprehensive Zero Trust framework with
											identity-based access controls, continuous verification,
											and micro-segmentation across all network environments.
										</p>
										<ul className="space-y-2 text-gray-700">
											<li className="flex items-center space-x-2">
												<CheckCircle className="w-5 h-5 text-green-600" />
												<span>
													Multi-factor authentication (MFA) for all users
												</span>
											</li>
											<li className="flex items-center space-x-2">
												<CheckCircle className="w-5 h-5 text-green-600" />
												<span>
													Conditional access policies based on risk assessment
												</span>
											</li>
											<li className="flex items-center space-x-2">
												<CheckCircle className="w-5 h-5 text-green-600" />
												<span>
													Network microsegmentation for critical assets
												</span>
											</li>
										</ul>
									</div>
								</div>
							</div>

							<div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
								<div className="flex items-start space-x-6">
									<div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
										<Eye className="w-8 h-8 text-white" />
									</div>
									<div className="flex-1">
										<h4 className="text-xl font-bold text-gray-900 mb-3">
											Advanced Threat Detection & Response
										</h4>
										<p className="text-gray-700 mb-4">
											Implemented 24/7 Security Operations Center (SOC) with
											AI-powered threat hunting and automated incident response
											capabilities.
										</p>
										<ul className="space-y-2 text-gray-700">
											<li className="flex items-center space-x-2">
												<CheckCircle className="w-5 h-5 text-green-600" />
												<span>
													SIEM integration with machine learning analytics
												</span>
											</li>
											<li className="flex items-center space-x-2">
												<CheckCircle className="w-5 h-5 text-green-600" />
												<span>
													Endpoint Detection and Response (EDR) deployment
												</span>
											</li>
											<li className="flex items-center space-x-2">
												<CheckCircle className="w-5 h-5 text-green-600" />
												<span>Automated threat intelligence integration</span>
											</li>
										</ul>
									</div>
								</div>
							</div>

							<div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
								<div className="flex items-start space-x-6">
									<div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
										<Lock className="w-8 h-8 text-white" />
									</div>
									<div className="flex-1">
										<h4 className="text-xl font-bold text-gray-900 mb-3">
											Data Protection & Encryption
										</h4>
										<p className="text-gray-700 mb-4">
											Enhanced data security with end-to-end encryption, data
											loss prevention (DLP), and comprehensive backup solutions.
										</p>
										<ul className="space-y-2 text-gray-700">
											<li className="flex items-center space-x-2">
												<CheckCircle className="w-5 h-5 text-green-600" />
												<span>
													AES-256 encryption for data at rest and in transit
												</span>
											</li>
											<li className="flex items-center space-x-2">
												<CheckCircle className="w-5 h-5 text-green-600" />
												<span>
													DLP policies for sensitive customer information
												</span>
											</li>
											<li className="flex items-center space-x-2">
												<CheckCircle className="w-5 h-5 text-green-600" />
												<span>
													Automated backup and disaster recovery systems
												</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Results & Impact */}
					<div className="mb-20">
						<h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
							Results & Impact
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							<div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
								<div className="text-3xl font-bold text-green-600 mb-2">
									95%
								</div>
								<p className="text-gray-700 font-medium">
									Reduction in Security Incidents
								</p>
							</div>
							<div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
								<div className="text-3xl font-bold text-blue-600 mb-2">
									24/7
								</div>
								<p className="text-gray-700 font-medium">
									Continuous Threat Monitoring
								</p>
							</div>
							<div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
								<div className="text-3xl font-bold text-purple-600 mb-2">
									100%
								</div>
								<p className="text-gray-700 font-medium">
									Compliance Achievement
								</p>
							</div>
							<div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
								<div className="text-3xl font-bold text-orange-600 mb-2">
									&lt;1min
								</div>
								<p className="text-gray-700 font-medium">
									Average Threat Response Time
								</p>
							</div>
						</div>
					</div>

					{/* Client Testimonial */}
					<div className="bg-blue-50 rounded-2xl p-8 mb-20">
						<div className="text-center">
							<div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
								<Users className="w-8 h-8 text-white" />
							</div>
							<blockquote className="text-xl text-gray-800 italic mb-6 max-w-4xl mx-auto">
								&quot;Canada Cloud Solutions transformed our cybersecurity
								posture completely. Their Zero Trust implementation and 24/7 SOC
								services have given us unprecedented visibility and protection
								across our global operations. The reduction in security
								incidents and improved compliance has been remarkable.&quot;
							</blockquote>
							<cite className="text-gray-600 font-medium">
								— Chief Information Security Officer, Tokio Marine Insurance
							</cite>
						</div>
					</div>

					{/* Call to Action */}
					<div className="text-center">
						<h3 className="text-2xl font-bold text-gray-900 mb-4">
							Ready to Transform Your Security?
						</h3>
						<p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
							Discover how Canada Cloud Solutions can help your organization
							achieve similar results with our comprehensive cybersecurity
							services.
						</p>
						<a
							href="/#contact"
							className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
							Contact Our Security Experts
							<ArrowRight className="ml-2 w-5 h-5" />
						</a>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default CaseStudiesPage;
