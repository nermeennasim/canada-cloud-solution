"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
	Cloud,
	Shield,
	Database,
	Zap,
	Lock,
	Monitor,
	Briefcase,
	ChevronRight,
	ArrowRight,
} from "lucide-react";

interface Service {
	id: string;
	title: string;
	description: string;
	shortDescription: string;
	icon: React.ReactNode;
	color: string;
	technologies: string[];
	mediaUrl: string;
	mediaType: "image" | "video";
	mediaAlt: string;
	details: string[];
	gradient: string;
}

const ServicesSection: React.FC = () => {
	const [expandedService, setExpandedService] = useState<string | null>(null);

	const services: Service[] = [
		{
			id: "cloud-architecture",
			title: "Cloud Architecture & Migration",
			shortDescription: "Multi-cloud infrastructure design and seamless migration",
			description:
				"Enterprise-grade cloud solutions across Microsoft Azure, AWS, GCP, and Oracle Cloud",
			icon: <Cloud className="w-8 h-8" />,
			color: "from-blue-500 to-blue-600",
			gradient: "from-blue-50 to-blue-100",
			technologies: [
				"Azure",
				"AWS",
				"GCP",
				"Oracle Cloud",
				"Microsoft 365",
				"Google Workspace",
			],
			mediaUrl: "/images/3d_visualization_of_the_cloud_migration_process.mp4",
			mediaType: "video",
			mediaAlt: "3D Cloud Migration Process",
			details: [
				"IaaS, PaaS, SaaS, XaaS architecture",
				"Landing Zones & Virtual Networks",
				"Identity & Access Management (Entra ID)",
				"Compliance-first design",
				"Automation & Observability",
				"Multi-cloud orchestration",
			],
		},
		{
			id: "data-protection",
			title: "Data Protection, Backup & DR",
			shortDescription: "Comprehensive backup and disaster recovery solutions",
			description:
				"End-to-end data continuity with AI-driven recovery optimization",
			icon: <Database className="w-8 h-8" />,
			color: "from-green-500 to-green-600",
			gradient: "from-green-50 to-green-100",
			technologies: [
				"Veeam",
				"Acronis",
				"Commvault",
				"Rubrik",
				"Azure Backup",
			],
			mediaUrl: "/images/create_a_short_engaging_animated_video_explaining.mp4",
			mediaType: "video",
			mediaAlt: "Data Protection Animation",
			details: [
				"Multi-cloud backup orchestration",
				"Automated disaster recovery",
				"RPO/RTO optimization",
				"Cross-region replication",
				"FINRA, NIST, SOC 2 compliance",
				"Seamless restoration across platforms",
			],
		},
		{
			id: "cybersecurity",
			title: "Cybersecurity & Zero Trust",
			shortDescription: "Advanced threat protection and zero trust architecture",
			description:
				"Identity-first security with continuous monitoring and threat response",
			icon: <Shield className="w-8 h-8" />,
			color: "from-red-500 to-red-600",
			gradient: "from-red-50 to-red-100",
			technologies: [
				"Microsoft Sentinel",
				"Entra ID",
				"Defender XDR",
				"Palo Alto",
				"CrowdStrike",
				"Zscaler",
			],
			mediaUrl: "/images/create_some_video_for_me_to_represent.mp4",
			mediaType: "video",
			mediaAlt: "Cybersecurity Zero Trust",
			details: [
				"Identity & Access Management (IAM)",
				"Data Loss Prevention (DLP)",
				"SOC Operations & MDR/XDR",
				"Endpoint protection",
				"Zero Trust verification",
				"Continuous threat monitoring",
			],
		},
		{
			id: "devsecops",
			title: "DevOps | DevSecOps | SRE",
			shortDescription: "CI/CD automation with embedded security",
			description:
				"Continuous innovation with integrated security and reliability",
			icon: <Zap className="w-8 h-8" />,
			color: "from-yellow-500 to-yellow-600",
			gradient: "from-yellow-50 to-yellow-100",
			technologies: [
				"Azure DevOps",
				"GitHub Actions",
				"Terraform",
				"Jenkins",
				"Ansible",
				"Datadog",
			],
			mediaUrl: "/images/ci_cd_automation_with_embedded_security_identity_and.jpeg",
			mediaType: "image",
			mediaAlt: "DevOps CI/CD Pipeline",
			details: [
				"CI/CD pipeline automation",
				"Security as Code (SaC)",
				"IaC validation & compliance",
				"Site Reliability Engineering",
				"Cloud-native monitoring",
				"Vulnerability scanning",
			],
		},
		{
			id: "identity-governance",
			title: "Enterprise Identity & Governance",
			shortDescription: "Unified identity management and compliance automation",
			description:
				"Centralized control with zero compromise on security or compliance",
			icon: <Lock className="w-8 h-8" />,
			color: "from-purple-500 to-purple-600",
			gradient: "from-purple-50 to-purple-100",
			technologies: [
				"Entra ID",
				"Okta",
				"CyberArk",
				"ServiceNow",
				"SailPoint",
				"Saviynt",
			],
			mediaUrl: "/images/identity_security.mp4",
			mediaType: "video",
			mediaAlt: "Identity Management",
			details: [
				"IAM + PAM + GRC integration",
				"Automated user lifecycle",
				"JIT access & privileged workflows",
				"Audit & attestation tracking",
				"CIS Benchmarks compliance",
				"NIST 800-53 alignment",
			],
		},
		{
			id: "managed-operations",
			title: "Managed Infrastructure & Operations",
			shortDescription: "24/7 proactive infrastructure management",
			description:
				"Ensuring 99.99% uptime with intelligent workload optimization",
			icon: <Monitor className="w-8 h-8" />,
			color: "from-indigo-500 to-indigo-600",
			gradient: "from-indigo-50 to-indigo-100",
			technologies: [
				"SCOM",
				"Intune",
				"SolarWinds",
				"NinjaOne",
				"vSphere",
				"ELK Stack",
			],
			mediaUrl: "/images/managed_infrastructure_cloud.jpeg",
			mediaType: "image",
			mediaAlt: "Managed Operations",
			details: [
				"L2/L3 proactive support",
				"Unified endpoint management",
				"Patch automation via Intune/SCCM",
				"Workload optimization",
				"Centralized logging & monitoring",
				"99.99% uptime SLA",
			],
		},
		{
			id: "consulting",
			title: "Strategic Consulting & IT Audit",
			shortDescription: "Expert advisory and compliance auditing",
			description:
				"Executive-level insights from certified security professionals",
			icon: <Briefcase className="w-8 h-8" />,
			color: "from-orange-500 to-orange-600",
			gradient: "from-orange-50 to-orange-100",
			technologies: [
				"CISSP",
				"CISM",
				"SC-100",
				"CCSP",
				"AWS Security",
				"Audit Frameworks",
			],
			mediaUrl: "/images/strategic_consulting_it_audit_expert_advisory.jpeg",
			mediaType: "image",
			mediaAlt: "Strategic Consulting",
			details: [
				"Infrastructure & cloud audits",
				"Cloud readiness assessments",
				"IAM maturity evaluations",
				"Risk quantification",
				"Cost optimization",
				"Board-level reporting",
			],
		},
	];

	return (
		<section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className="text-center mb-16">
					<div className="inline-flex items-center justify-center space-x-2 mb-4">
						<div className="w-12 h-1 bg-blue-600 rounded-full"></div>
						<span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">
							Our Expertise
						</span>
						<div className="w-12 h-1 bg-blue-600 rounded-full"></div>
					</div>
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
						Enterprise Cloud & Cybersecurity Services
					</h2>
					<p className="text-lg text-gray-600 max-w-3xl mx-auto">
						From infrastructure to compliance, CCS delivers end-to-end expertise
						with certified professionals serving enterprises across Canada and
						globally.
					</p>
				</div>

				{/* Services Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
					{services.map((service) => (
						<div
							key={service.id}
							className="group relative h-full"
							onMouseEnter={() => setExpandedService(service.id)}
							onMouseLeave={() => setExpandedService(null)}>
							{/* Card Container */}
							<div
								className={`relative h-full rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-translate-y-2 ${
									expandedService === service.id
										? "shadow-2xl bg-white"
										: "shadow-lg hover:shadow-xl bg-white"
								}`}>
								{/* Gradient Background */}
								<div
									className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

								{/* Media Container */}
								<div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
									{service.mediaType === "video" ? (
										<video
											src={service.mediaUrl}
											autoPlay
											muted
											loop
											playsInline
											className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
										/>
									) : (
										<Image
											src={service.mediaUrl}
											alt={service.mediaAlt}
											fill
											className="object-cover group-hover:scale-110 transition-transform duration-500"
											sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
										/>
									)}
									{/* Overlay */}
									<div
										className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>

									{/* Icon Badge */}
									<div
										className={`absolute top-4 right-4 p-3 rounded-xl bg-white shadow-lg group-hover:shadow-xl transition-all duration-300`}>
										<div className="text-white bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-lg">
											{service.icon}
										</div>
									</div>
								</div>

								{/* Content */}
								<div className="relative p-6 z-10">
									{/* Title */}
									<h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
										{service.title}
									</h3>

									{/* Short Description */}
									<p className="text-sm text-gray-600 mb-4 line-clamp-2">
										{service.shortDescription}
									</p>

									{/* Technologies - Show on hover */}
									<div
										className={`mb-4 transition-all duration-500 overflow-hidden ${
											expandedService === service.id
												? "max-h-32 opacity-100"
												: "max-h-0 opacity-0"
										}`}>
										<p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
											Key Technologies
										</p>
										<div className="flex flex-wrap gap-2">
											{service.technologies.slice(0, 3).map((tech, idx) => (
												<span
													key={idx}
													className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full hover:bg-blue-200 transition-colors">
													{tech}
												</span>
											))}
											{service.technologies.length > 3 && (
												<span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
													+{service.technologies.length - 3} more
												</span>
											)}
										</div>
									</div>

									{/* Details List - Show on expand */}
									<div
										className={`mb-4 transition-all duration-500 overflow-hidden ${
											expandedService === service.id
												? "max-h-64 opacity-100"
												: "max-h-0 opacity-0"
										}`}>
										<ul className="space-y-2">
											{service.details.map((detail, idx) => (
												<li
													key={idx}
													className="flex items-start text-sm text-gray-700">
													<ChevronRight className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
													<span>{detail}</span>
												</li>
											))}
										</ul>
									</div>

									{/* CTA Button */}
									<button
										className={`inline-flex items-center space-x-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-all duration-300 group/btn`}>
										<span>Learn More</span>
										<ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
									</button>
								</div>

								{/* Animated Border on Hover */}
								<div
									className={`absolute inset-0 rounded-2xl pointer-events-none transition-all duration-500 ${
										expandedService === service.id
											? "ring-2 ring-blue-500 ring-offset-2"
											: "ring-1 ring-gray-200"
									}`}></div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ServicesSection;
