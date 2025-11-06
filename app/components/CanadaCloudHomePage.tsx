"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
	Settings,
	Globe,
	Users,
	Mail,
	Phone,
	MapPin,
	Lightbulb,
	ArrowRight,
	Shield,
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import Footer from "./Footer";
import Navbar from "./Navbar";
import CookieConsent from "./CookieConsent";
import LoadingScreen from "./LoadingScreen";
import Link from "next/link";
import { useSmoothScroll } from "../hooks/useSmoothScroll";
import ServicesSection from "./ServicesSection";

const CanadaCloudHomePage: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { scrollToSection } = useSmoothScroll();

	return (
		<div className="min-h-screen bg-white">
			{/* Loading Screen */}
			<LoadingScreen />
			
			{/* Header */}
			<Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

			{/* Hero Section */}
			<section
				id="home"
				className="py-20 lg:py-32 relative overflow-hidden"
				style={{
					backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.7), rgba(30, 64, 175, 0.7)), url('/images/hero-img.jpg')`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[500px]">
						{/* Left Side - Text Content */}
						<div className="text-left space-y-8">
							{/* <div
								className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium mb-8 backdrop-blur-sm animate-fade-in-left border border-white/30"
								style={{ animationDelay: "0.1s" }}>
								<Lightbulb className="w-4 h-4 mr-2" />
								Coming Soon - New Digital Experience
							</div> */}

							<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
								<span className="text-white block drop-shadow-lg">
									Welcome to
								</span>
								<span className="text-white block drop-shadow-lg">
									the future of
								</span>
								<span className="text-cyan-200 block drop-shadow-lg">
									cloud innovation
								</span>
							</h1>

							<p className="text-xl text-gray-100 leading-relaxed max-w-lg drop-shadow-md">
								We&apos;re currently working behind the scenes to bring you a
								brand-new digital experience that reflects our commitment to
								cutting-edge cloud solutions, seamless IT services, and
								customer-first innovation.
							</p>

							<div className="flex flex-col sm:flex-row gap-4 pt-4">
								<button
									onClick={() => scrollToSection("contact")}
									className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl">
									Get In Touch
									<ArrowRight className="ml-2 w-5 h-5" />
								</button>
								<button
									onClick={() => scrollToSection("services")}
									className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-900 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl backdrop-blur-sm">
									Learn More
								</button>
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
										stroke="#ffffff"
										strokeWidth="4"
										filter="url(#glow)"
										className="animate-pulse drop-shadow-lg"
									/>

									{/* Inner Cloud Glow */}
									<path
										d="M100 180 C60 180, 40 150, 60 120 C80 80, 120 80, 140 100 C160 80, 200 80, 220 100 C240 80, 280 80, 300 100 C320 80, 360 80, 380 120 C400 150, 380 180, 340 180 Z"
										fill="rgba(255, 255, 255, 0.2)"
										className="animate-pulse"
									/>

									{/* Floating Dots */}
									<circle
										cx="150"
										cy="120"
										r="3"
										fill="#ffffff"
										className="animate-bounce drop-shadow-lg">
										<animate
											attributeName="opacity"
											values="0.6;1;0.6"
											dur="2s"
											repeatCount="indefinite"
										/>
									</circle>
									<circle
										cx="250"
										cy="130"
										r="2"
										fill="#f0f9ff"
										className="animate-bounce drop-shadow-lg"
										style={{ animationDelay: "0.5s" }}>
										<animate
											attributeName="opacity"
											values="0.6;1;0.6"
											dur="2s"
											repeatCount="indefinite"
										/>
									</circle>
									<circle
										cx="320"
										cy="110"
										r="2.5"
										fill="#ffffff"
										className="animate-bounce drop-shadow-lg"
										style={{ animationDelay: "1s" }}>
										<animate
											attributeName="opacity"
											values="0.6;1;0.6"
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

			{/* About Us Section */}
			<section
				id="about"
				className="py-20 relative overflow-hidden"
				style={{
					backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/014/773/886/non_2x/abstract-network-technology-geometric-dots-network-clipart-connecting-dots-and-lines-global-network-connection-digital-technology-with-plexus-background-illustration-vector.jpg')`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}>
				{/* Light overlay to ensure readability */}
				<div className="absolute inset-0 bg-white/85"></div>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						{/* Left Column - Content */}
						<div>
							<h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 drop-shadow-sm">
								About Us
							</h2>
							<div className="space-y-6">
								<p className="text-lg text-gray-700 leading-relaxed">
									The enterprise challenge is real: digital transformation demands simultaneous progress on three critical fronts—cloud modernization, cybersecurity resilience, and operational efficiency. Yet most organizations lack the in-house expertise and resources to execute all three effectively.
								</p>
								<p className="text-lg text-gray-700 leading-relaxed">
									Canada Cloud Solutions was founded in 2019 to solve this exact problem. We recognized that enterprises needed more than vendors; they needed a strategic partner who could navigate the intersection of cloud, security, and operations—someone who understood their industry, their compliance requirements, and their business goals.
								</p>
								<p className="text-lg text-gray-700 leading-relaxed">
									From our partners across North America, South America, the Middle East, Europe, UK, Japan, South Asia, and Australia, our team of certified experts delivers:
								</p>
								
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
									<div className="flex items-start space-x-3">
										<div className="text-blue-600 text-2xl font-bold flex-shrink-0">✓</div>
										<p className="text-gray-700">
											<span className="font-semibold">End-to-end cloud architecture & migration expertise</span>
										</p>
									</div>
									<div className="flex items-start space-x-3">
										<div className="text-blue-600 text-2xl font-bold flex-shrink-0">✓</div>
										<p className="text-gray-700">
											<span className="font-semibold">Zero Trust security frameworks & continuous compliance</span>
										</p>
									</div>
									<div className="flex items-start space-x-3">
										<div className="text-blue-600 text-2xl font-bold flex-shrink-0">✓</div>
										<p className="text-gray-700">
											<span className="font-semibold">24/7 managed infrastructure & operations with 99.99% SLAs</span>
										</p>
									</div>
									<div className="flex items-start space-x-3">
										<div className="text-blue-600 text-2xl font-bold flex-shrink-0">✓</div>
										<p className="text-gray-700">
											<span className="font-semibold">Strategic consulting from industry-leading CISSP, CISM, and SC-100 certified professionals</span>
										</p>
									</div>
								</div>

								<div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 rounded-lg p-6">
									<p className="text-lg font-semibold text-gray-900 mb-2">Our Mission</p>
									<p className="text-gray-700 leading-relaxed">
										Eliminate the complexity. We secure your environment, modernize your infrastructure, and optimize your operations—so you can focus on what matters: growing your business.
									</p>
								</div>
							</div>
						</div>

						{/* Right Column - Image */}
						<div className="relative rounded-2xl overflow-hidden shadow-xl h-96 lg:h-full">
							<Image
								src="/images/strategic_consulting_it_audit_expert_advisory_2.jpeg"
								alt="Canada Cloud Solutions Expert Team"
								fill
								className="object-cover"
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							/>
							<div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent"></div>
						</div>
					</div>
				</div>
			</section>

			{/* Industries We Serve Section */}
			<section
				id="industries"
				className="py-20 relative overflow-hidden"
				style={{
					backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/014/773/886/non_2x/abstract-network-technology-geometric-dots-network-clipart-connecting-dots-and-lines-global-network-connection-digital-technology-with-plexus-background-illustration-vector.jpg')`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}>
				{/* Light overlay to ensure readability */}
				<div className="absolute inset-0 bg-white/85"></div>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="text-center mb-16">
						<h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 drop-shadow-sm">
							Industries We Serve
						</h2>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div
							className="group p-8 rounded-2xl relative overflow-hidden border-2 border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
							style={{
								backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1bfTuW.img?w=1920&h=1080&m=4&q=97')`,
								backgroundSize: "cover",
								backgroundPosition: "center",
							}}>
							<div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10 shadow-lg">
								<Settings className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-xl font-bold text-white mb-3 relative z-10 drop-shadow-lg">
								Financial Services & Insurance
							</h3>
							<p className="text-gray-200 relative z-10 drop-shadow-md">
								Enterprise Cloud Security, Data Privacy & Compliance (PCI, ISO,
								SOC2)
							</p>
						</div>

						<div
							className="group p-8 rounded-2xl relative overflow-hidden border-2 border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
							style={{
								backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://imageio.forbes.com/specials-images/imageserve/6615637a9b5f5b7457b15745/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds')`,
								backgroundSize: "cover",
								backgroundPosition: "center",
							}}>
							<div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10 shadow-lg">
								<Globe className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-xl font-bold text-white mb-3 relative z-10 drop-shadow-lg">
								Government & Public Sector
							</h3>
							<p className="text-gray-200 relative z-10 drop-shadow-md">
								Secure Hybrid Cloud, Citizen Data Protection
							</p>
						</div>

						<div
							className="group p-8 rounded-2xl relative overflow-hidden border-2 border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
							style={{
								backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://images.mid-day.com/images/images/2014/dec/exercise.jpg')`,
								backgroundSize: "cover",
								backgroundPosition: "center",
							}}>
							<div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10 shadow-lg">
								<Users className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-xl font-bold text-white mb-3 relative z-10 drop-shadow-lg">
								Healthcare & Non-Profits
							</h3>
							<p className="text-gray-200 relative z-10 drop-shadow-md">
								Patient Data Security, HIPAA & Privacy Frameworks
							</p>
						</div>

						<div
							className="group p-8 rounded-2xl relative overflow-hidden border-2 border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
							style={{
								backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://www.hedgethink.com/wp-content/uploads/2019/02/multiplay-market.jpg')`,
								backgroundSize: "cover",
								backgroundPosition: "center",
							}}>
							<div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10 shadow-lg">
								<Phone className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-xl font-bold text-white mb-3 relative z-10 drop-shadow-lg">
								Telecom & ISP
							</h3>
							<p className="text-gray-200 relative z-10 drop-shadow-md">
								Infrastructure Modernization & Endpoint Protection
							</p>
						</div>

						<div
							className="group p-8 rounded-2xl relative overflow-hidden border-2 border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
							style={{
								backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://cdn.i-scmp.com/sites/default/files/2019/01/17/research_4.jpg')`,
								backgroundSize: "cover",
								backgroundPosition: "center",
							}}>
							<div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10 shadow-lg">
								<Globe className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-xl font-bold text-white mb-3 relative z-10 drop-shadow-lg">
								Retail & E-Commerce
							</h3>
							<p className="text-gray-200 relative z-10 drop-shadow-md">
								Application Security, Fraud Prevention Solutions
							</p>
						</div>

						<div
							className="group p-8 rounded-2xl relative overflow-hidden border-2 border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
							style={{
								backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')`,
								backgroundSize: "cover",
								backgroundPosition: "center",
							}}>
							<div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10 shadow-lg">
								<MapPin className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-xl font-bold text-white mb-3 relative z-10 drop-shadow-lg">
								Real Estate & Property
							</h3>
							<p className="text-gray-200 relative z-10 drop-shadow-md">
								Property Management Systems, Client Data Security & Digital
								Marketing
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* What We Do Section */}
			<section
				id="services"
				className="py-20 relative overflow-hidden"
				style={{
					backgroundImage: `url('https://t3.ftcdn.net/jpg/03/74/41/40/360_F_374414072_jNUa02RudGjOdFUHYMes3zNxGMJDAi1k.jpg')`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}>
				{/* Blue overlay */}
				<div className="absolute inset-0 bg-blue-900/85"></div>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="text-center mb-16">
						<h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 drop-shadow-lg">
							What We Do
						</h2>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
						{/* Managed Services Column */}
						<div className="bg-white/15 backdrop-blur-md rounded-2xl p-8 border border-white/20">
							<h3 className="text-2xl font-bold text-white mb-6 drop-shadow-lg">
								Managed Services (MSP)
							</h3>
							<ul className="text-white space-y-3 drop-shadow-md">
								<li>• IT Infrastructure Management</li>
								<li>• Cloud & Hybrid IT Support</li>
								<li>• End-User Device Management</li>
								<li>• Identity and Access Management</li>
								<li>• Migration Services</li>
								<li>• Patch Management & OS Hardening</li>
								<li>• 24/7 Helpdesk & Remote Support</li>
							</ul>
						</div>

						{/* Managed Security Column */}
						<div className="bg-white/15 backdrop-blur-md rounded-2xl p-8 border border-white/20">
							<h3 className="text-2xl font-bold text-white mb-6 drop-shadow-lg">
								Managed Security (MSSP)
							</h3>
							<ul className="text-white space-y-3 drop-shadow-md">
								<li>• Security Operations Center (SOC)</li>
								<li>• Threat Hunting & Incident Response</li>
								<li>• Endpoint Detection & Response</li>
								<li>• Data Loss Prevention (DLP)</li>
								<li>• Zero Trust Security Design</li>
								<li>• Vulnerability Assessments</li>
								<li>• Compliance & Risk Management</li>
								<li>• Security Awareness Programs</li>
							</ul>
						</div>

						{/* Cloud Solutions Column */}
						<div className="bg-white/15 backdrop-blur-md rounded-2xl p-8 border border-white/20">
							<h3 className="text-2xl font-bold text-white mb-6 drop-shadow-lg">
								Cloud Solutions (CSP)
							</h3>
							<ul className="text-white space-y-3 drop-shadow-md">
								<li>• Microsoft Cloud (M365, Azure)</li>
								<li>• Amazon Web Services (AWS)</li>
								<li>• Google Cloud Platform (GCP)</li>
								<li>• Cybersecurity & Governance</li>
								<li>• Infrastructure & Engineering</li>
								<li>• DevSecOps Implementation</li>
								<li>• Disaster Recovery Planning</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* New Services Section - Detailed Interactive Cards */}
			<ServicesSection />

			{/* Global Client Engagements Section - REMOVED */}

			{/* Why CCS Section - Enhanced with Video Background */}
			<section
				id="why-ccs"
				className="py-20 relative overflow-hidden"
			>
				{/* Video Background */}
				<video
					src="/images/managed_infrastructure_operations_24_7_proactive_infrastructure.mp4"
					autoPlay
					muted
					loop
					playsInline
					className="absolute inset-0 w-full h-full object-cover"
				/>

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					{/* Header */}
					<div className="text-center mb-16">
						<h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg">
							Why Choose Canada Cloud Solutions?
						</h2>
						<p className="text-xl text-gray-100 max-w-3xl mx-auto drop-shadow-md leading-relaxed">
							Industry veterans with 30+ years of collective expertise, staying ahead of cutting-edge cloud market trends and latest best practices. We don&apos;t just implement solutions&mdash;we architect your competitive advantage.
						</p>
					</div>

					{/* Core Reasons Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
						{/* Trusted Since */}
						<div className="group p-8 rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/30 hover:border-white/50 hover:bg-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
							<div className="w-16 h-16 bg-blue-400/30 border-2 border-blue-300/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
								<Globe className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-xl font-bold text-white mb-3 drop-shadow-lg">
								Trusted Since 2019
							</h3>
							<p className="text-gray-200 drop-shadow-md leading-relaxed">
								Serving public, private, and government sectors across Canada and beyond. Proven track record with 500+ enterprise partnerships.
							</p>
						</div>

						{/* Deep Industry Experience */}
						<div className="group p-8 rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/30 hover:border-white/50 hover:bg-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
							<div className="w-16 h-16 bg-blue-400/30 border-2 border-blue-300/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
								<Users className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-xl font-bold text-white mb-3 drop-shadow-lg">
								30+ Years Industry Expertise
							</h3>
							<p className="text-gray-200 drop-shadow-md leading-relaxed">
								Our team brings decades of collective experience navigating cloud evolution, from on-prem to hybrid to Zero Trust and AI-driven operations.
							</p>
						</div>

						{/* Certified Professionals */}
						<div className="group p-8 rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/30 hover:border-white/50 hover:bg-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
							<div className="w-16 h-16 bg-blue-400/30 border-2 border-blue-300/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
								<Settings className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-xl font-bold text-white mb-3 drop-shadow-lg">
								Industry-Certified Experts
							</h3>
							<p className="text-gray-200 drop-shadow-md leading-relaxed">
								Microsoft, AWS, Google Cloud, VMware, Cisco, and ISACA-certified engineers. CISSP, CISM, SC-100 credentials across the team.
							</p>
						</div>

						{/* End-to-End Expertise */}
						<div className="group p-8 rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/30 hover:border-white/50 hover:bg-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
							<div className="w-16 h-16 bg-blue-400/30 border-2 border-blue-300/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
								<Lightbulb className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-xl font-bold text-white mb-3 drop-shadow-lg">
								End-to-End Expertise
							</h3>
							<p className="text-gray-200 drop-shadow-md leading-relaxed">
								From infrastructure to compliance, one unified team. Cloud architecture, security, operations, and strategic consulting—all under one roof.
							</p>
						</div>

						{/* Security-First Culture */}
						<div className="group p-8 rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/30 hover:border-white/50 hover:bg-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
							<div className="w-16 h-16 bg-red-400/30 border-2 border-red-300/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
								<Shield className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-xl font-bold text-white mb-3 drop-shadow-lg">
								Security-First Culture
							</h3>
							<p className="text-gray-200 drop-shadow-md leading-relaxed">
								Every project begins and ends with Zero Trust principles. Security isn&apos;t bolted on&mdash;it&apos;s foundational to everything we build.
							</p>
						</div>

						{/* Nationwide Presence */}
						<div className="group p-8 rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/30 hover:border-white/50 hover:bg-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
							<div className="w-16 h-16 bg-green-400/30 border-2 border-green-300/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
								<MapPin className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-xl font-bold text-white mb-3 drop-shadow-lg">
								Coast-to-Coast Presence
							</h3>
							<p className="text-gray-200 drop-shadow-md leading-relaxed">
								From Vancouver to Halifax and globally. Local support with enterprise-grade capabilities. Your timezone, our commitment.
							</p>
						</div>
					</div>

					{/* Cutting Edge Advantage */}
					<div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-md border-2 border-blue-300/50">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
							<div>
								<h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">
									Staying Ahead of Market Trends
								</h3>
								<p className="text-gray-100 mb-6 leading-relaxed drop-shadow-md">
									Our experts continuously monitor emerging cloud technologies, AI-driven operations, and evolving security landscapes. We bring the latest best practices to your infrastructure before they become standard.
								</p>
								<ul className="space-y-3">
									<li className="flex items-start space-x-3">
										<span className="text-green-400 font-bold text-lg flex-shrink-0">✓</span>
										<span className="text-gray-100">AI-powered automation and threat detection</span>
									</li>
									<li className="flex items-start space-x-3">
										<span className="text-green-400 font-bold text-lg flex-shrink-0">✓</span>
										<span className="text-gray-100">Next-gen cloud architecture patterns</span>
									</li>
									<li className="flex items-start space-x-3">
										<span className="text-green-400 font-bold text-lg flex-shrink-0">✓</span>
										<span className="text-gray-100">Continuous compliance and governance</span>
									</li>
									<li className="flex items-start space-x-3">
										<span className="text-green-400 font-bold text-lg flex-shrink-0">✓</span>
										<span className="text-gray-100">Cost optimization through advanced analytics</span>
									</li>
								</ul>
							</div>
							<div className="relative h-64 lg:h-80 rounded-xl overflow-hidden shadow-2xl border-2 border-white/30">
								<Image
									src="/images/staying_ahead_of_market_trends_create_image.jpeg"
									alt="Cutting Edge Cloud Technology"
									fill
									className="object-cover"
									sizes="(max-width: 768px) 100vw, 50vw"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
							</div>
						</div>
					</div>

					{/* CTA */}
					<div className="text-center mt-16">
						<Link
							href="/#contact"
							className="inline-flex items-center justify-center px-10 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl transform hover:scale-105 transition-all duration-200 shadow-2xl hover:shadow-3xl drop-shadow-lg">
							Start Your Transformation
							<ArrowRight className="ml-2 w-5 h-5" />
						</Link>
					</div>
				</div>
			</section>
			{/* Partner With Us / Contact Section */}
			<section
				id="contact"
				className="py-20 relative overflow-hidden"
				style={{
					backgroundImage: `url('https://s0.rbk.ru/v6_top_pics/media/img/0/44/756479054248440.jpg')`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}>
				{/* Light overlay to ensure readability */}
				<div className="absolute inset-0 bg-white/85"></div>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="text-center mb-16">
						<h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 drop-shadow-sm">
							Partner With Us
						</h2>
						<div className="max-w-4xl mx-auto">
							<p className="text-xl text-gray-700 drop-shadow-sm mb-6">
								Future-proof your enterprise with Canada Cloud Solutions (CCS).
							</p>
							<p className="text-lg text-gray-700 drop-shadow-sm">
								Whether you&apos;re modernizing infrastructure, migrating to the
								cloud, or strengthening your security posture, CCS is your
								trusted global partner.
							</p>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
						<div className="text-center p-8 bg-white rounded-2xl border-2 border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
							<div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
								<Mail className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-3">Email Us</h3>
							<Link
								href="mailto:info@canadacloudsolution.ca"
								className="text-blue-600 hover:text-blue-800 font-medium transition-colors break-all word-break leading-relaxed">
								info@canadacloudsolution.ca
							</Link>
						</div>

						<div className="text-center p-8 bg-white rounded-2xl border-2 border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
							<div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
								<Globe className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-3">
								Visit Website
							</h3>
							<Link
								href="https://www.canadacloudsolutions.ca"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
								www.canadacloudsolutions.ca
							</Link>
						</div>

						<div className="text-center p-8 bg-white rounded-2xl border-2 border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
							<div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
								<Phone className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-3">Call Us</h3>
							<Link
								href="tel:+14156585533"
								className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
								+1 (415) 658-5533
							</Link>
						</div>
					</div>

					<div className="flex flex-col items-center justify-center mt-12">
						<p className="text-gray-700 mb-4 drop-shadow-sm">
							Connect with us:
						</p>
						<div className="flex justify-center space-x-4">
							<Link
								href="https://www.linkedin.com/company/canadacloudsolution/"
								target="_blank"
								rel="noopener noreferrer"
								className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg hover:scale-110 hover:-translate-y-1">
								<FaLinkedin className="w-6 h-6" />
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Cookie Consent Banner */}
			<CookieConsent />

			{/* Debug Button (Remove in production) */}
			{process.env.NODE_ENV === "development" && (
				<div className="fixed bottom-4 left-4 z-40">
					<button
						onClick={() => {
							localStorage.removeItem("cookieConsent");
							localStorage.removeItem("cookieConsentDate");
							localStorage.removeItem("cookiePreferences");
							window.location.reload();
						}}
						className="bg-red-600 text-white px-3 py-2 rounded text-sm hover:bg-red-700 transition-colors">
						🧪 Clear Cookies & Reload
					</button>
				</div>
			)}

			{/* Footer */}
			<Footer />
		</div>
	);
};

export default CanadaCloudHomePage;
