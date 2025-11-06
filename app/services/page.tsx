"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
	Cloud,
	Shield,
	Database,
	Zap,
	Lock,
	Monitor,
	Briefcase,
	Check,
	ArrowRight,
	ChevronDown,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface ServiceDetail {
	id: string;
	title: string;
	icon: React.ReactNode;
	description: string;
	color: string;
	gradient: string;
	imageUrl: string;
	imageAlt: string;
	overview: string;
	capabilities: string[];
	technologies: {
		category: string;
		items: string[];
	}[];
	benefits: string[];
	useCases: string[];
	ccs_unique?: string;
}

const ServicesDetailPage: React.FC = () => {
	const [expandedService, setExpandedService] = useState<string>(
		"cloud-architecture"
	);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const services: ServiceDetail[] = [
		{
			id: "cloud-architecture",
			title: "Cloud Architecture & Migration",
			icon: <Cloud className="w-8 h-8" />,
			description: "Multi-cloud infrastructure design and seamless migration",
			color: "blue",
			gradient: "from-blue-500 to-blue-600",
			imageUrl:
				"/images/3d_visualization_of_the_cloud_migration_process.mp4",
			imageAlt: "3D Cloud Migration Process",
			overview:
				"CCS designs and deploys enterprise-grade cloud solutions across Microsoft Azure, AWS, GCP, and Oracle Cloud. We build scalable, secure, and compliant cloud foundations that serve as the backbone for digital transformation.",
			capabilities: [
				"IaaS, PaaS, SaaS, XaaS, DRaaS, BaaS architecture",
				"Multi-cloud landing zones with governance",
				"Virtual Networks and Network Security Groups",
				"Identity & Access Management (Entra ID, Azure AD)",
				"Sentinel SIEM and advanced threat protection",
				"Logic Apps and cloud automation",
				"Google Workspace & Microsoft 365 integration",
				"Cross-platform data migration with zero downtime",
			],
			technologies: [
				{
					category: "Microsoft Azure",
					items: [
						"Landing Zones",
						"Virtual Networks",
						"Defender for Cloud",
						"Entra ID",
						"Sentinel SIEM",
						"Logic Apps",
					],
				},
				{
					category: "AWS Cloud",
					items: [
						"EC2",
						"IAM",
						"S3",
						"GuardDuty",
						"Security Hub",
						"CloudFormation",
						"Organizations",
						"AWS Backup",
					],
				},
				{
					category: "GCP & Oracle",
					items: [
						"Identity-Aware Proxy",
						"VPC Service Controls",
						"Security Command Center",
						"Chronicle SIEM",
						"DBaaS",
						"Cloud DR",
					],
				},
			],
			benefits: [
				"99.99% uptime with multi-region redundancy",
				"Automated compliance with CIS Benchmarks",
				"Cost optimization through right-sizing",
				"Seamless workload mobility",
				"Future-proof architecture",
				"Reduced time-to-market",
			],
			useCases: [
				"Legacy to cloud migration",
				"Multi-cloud strategy implementation",
				"Hybrid cloud enablement",
				"Startup to enterprise scaling",
				"Compliance-driven transformations",
				"Disaster recovery setup",
			],
			ccs_unique:
				"We don't just lift-and-shift. CCS delivers automation-first, observability-rich, compliance-ready cloud architectures that grow with your business.",
		},
		{
			id: "data-protection",
			title: "Data Protection, Backup & Disaster Recovery",
			icon: <Database className="w-8 h-8" />,
			description:
				"End-to-end data continuity with AI-driven recovery optimization",
			color: "green",
			gradient: "from-green-500 to-green-600",
			imageUrl:
				"/images/create_a_short_engaging_animated_video_explaining.mp4",
			imageAlt: "Data Protection Animation",
			overview:
				"Data is your most critical asset. CCS provides enterprise-grade backup and disaster recovery solutions ensuring zero data loss, rapid recovery, and regulatory compliance across all platforms.",
			capabilities: [
				"Multi-cloud backup orchestration across Azure, AWS, GCP",
				"Automated disaster recovery runbooks",
				"RPO/RTO optimization using AI-driven predictive analysis",
				"Cross-region replication and failover",
				"Ransomware detection and immutable backups",
				"Seamless restoration to VMware, Hyper-V, Azure, AWS, GCP",
				"Backup validation and testing automation",
				"Cost-optimized tiered storage strategies",
			],
			technologies: [
				{
					category: "Backup Platforms",
					items: [
						"Veeam",
						"Acronis",
						"Commvault",
						"Rubrik",
						"Azure Backup Vault",
					],
				},
				{
					category: "Compliance & Standards",
					items: [
						"FINRA compliance",
						"NIST standards",
						"SOC 2 certification",
						"ISO 27001",
					],
				},
				{
					category: "Advanced Features",
					items: [
						"AI-driven analytics",
						"Predictive recovery",
						"Ransomware protection",
						"Immutable backups",
					],
				},
			],
			benefits: [
				"Guaranteed data recovery within minutes",
				"Protection against ransomware attacks",
				"Regulatory compliance assurance",
				"Reduced RTO/RPO metrics",
				"Lower operational costs",
				"Peace of mind with verified backups",
			],
			useCases: [
				"Business continuity planning",
				"Ransomware attack mitigation",
				"Regulatory compliance requirements",
				"Multi-cloud data protection",
				"Legacy system preservation",
				"M&A data consolidation",
			],
			ccs_unique:
				"CCS goes beyond backups—we ensure your data is protected, recoverable, and compliant under FINRA, NIST, SOC 2, and ISO 27001 standards.",
		},
		{
			id: "cybersecurity",
			title: "Cybersecurity & Zero Trust Architecture",
			icon: <Shield className="w-8 h-8" />,
			description:
				"Identity-first security with continuous monitoring and threat response",
			color: "red",
			gradient: "from-red-500 to-red-600",
			imageUrl: "/images/create_some_video_for_me_to_represent.mp4",
			imageAlt: "Cybersecurity Zero Trust",
			overview:
				"Security is not a feature—it's a culture. CCS implements zero trust architecture, advanced threat detection, and continuous security monitoring to protect your enterprise from evolving cyber threats.",
			capabilities: [
				"Identity & Access Management: Entra ID, Okta, CyberArk, Azure AD PIM",
				"Conditional Access and MFA enforcement",
				"Single Sign-On (SSO) and federation",
				"Data Loss Prevention (DLP) solutions",
				"Governance, Risk & Compliance (GRC) frameworks",
				"SOC Operations: Managed detection and response (MDR/XDR)",
				"Endpoint & Network Protection",
				"Security Assurance and zero trust verification",
				"Least privilege access enforcement",
				"Continuous monitoring and incident response",
			],
			technologies: [
				{
					category: "Identity & Access",
					items: [
						"Entra ID",
						"Okta",
						"CyberArk",
						"Azure AD PIM",
						"Conditional Access",
					],
				},
				{
					category: "Detection & Response",
					items: [
						"Microsoft Sentinel",
						"Splunk",
						"Chronicle SIEM",
						"Defender XDR",
						"Palo Alto",
						"CrowdStrike",
					],
				},
				{
					category: "Network & Endpoint",
					items: [
						"Cisco SecureX",
						"Fortinet",
						"Zscaler",
						"Trellix DLP",
						"Forcepoint",
					],
				},
			],
			benefits: [
				"Verified identity with continuous authentication",
				"Real-time threat detection and response",
				"Compliance with industry regulations",
				"Reduced attack surface",
				"Incident response within seconds",
				"User behavior analytics",
			],
			useCases: [
				"Zero trust implementation",
				"Breach response and remediation",
				"Compliance audits (SOX, PCI DSS, HIPAA)",
				"Insider threat detection",
				"Advanced persistent threat (APT) defense",
				"Supply chain security",
			],
			ccs_unique:
				"Zero Trust isn't just a buzzword at CCS—it's embedded in every layer: verified identity, least privilege, continuous monitoring, and assume breach mentality.",
		},
		{
			id: "devsecops",
			title: "DevOps | DevSecOps | SRE Automation",
			icon: <Zap className="w-8 h-8" />,
			description: "CI/CD automation with embedded security",
			color: "yellow",
			gradient: "from-yellow-500 to-yellow-600",
			imageUrl:
				"/images/ci_cd_automation_with_embedded_security_identity_and.jpeg",
			imageAlt: "DevOps CI/CD Pipeline",
			overview:
				"Modern enterprises need rapid deployment without compromising security. CCS enables DevOps, DevSecOps, and SRE practices that deliver continuous innovation with embedded security and reliability.",
			capabilities: [
				"CI/CD pipelines: Azure DevOps, GitHub Actions, Jenkins",
				"Infrastructure-as-Code: Terraform, Ansible automation",
				"Security as Code: Vulnerability scanning, IaC validation",
				"Compliance-as-Code: Open Policy Agent (OPA) enforcement",
				"Site Reliability Engineering (SRE) practices",
				"Cloud-native monitoring and observability",
				"Automated testing and deployment",
				"Performance optimization and cost analysis",
			],
			technologies: [
				{
					category: "CI/CD & Automation",
					items: [
						"Azure DevOps",
						"GitHub Actions",
						"Jenkins",
						"GitLab CI",
						"Terraform",
						"Ansible",
					],
				},
				{
					category: "Monitoring & Observability",
					items: [
						"Grafana",
						"Prometheus",
						"Elastic Stack",
						"Datadog",
						"New Relic",
						"Azure Monitor",
					],
				},
				{
					category: "ITSM & Operations",
					items: [
						"ServiceNow ITOM",
						"Incident management",
						"Change management",
						"Capacity planning",
					],
				},
			],
			benefits: [
				"Faster deployment cycles (from weeks to hours)",
				"Security integrated into development",
				"Automated compliance verification",
				"Reduced manual errors",
				"Better visibility into infrastructure",
				"Improved mean time to recovery (MTTR)",
			],
			useCases: [
				"Legacy DevOps modernization",
				"DevSecOps culture transformation",
				"Kubernetes and cloud-native adoption",
				"SRE team building and training",
				"Microservices architecture",
				"Automated compliance reporting",
			],
			ccs_unique:
				"CCS doesn't just implement pipelines—we build a DevSecOps culture where continuous innovation meets security by design.",
		},
		{
			id: "identity-governance",
			title: "Enterprise Identity, Governance & Compliance",
			icon: <Lock className="w-8 h-8" />,
			description: "Unified identity management and compliance automation",
			color: "purple",
			gradient: "from-purple-500 to-purple-600",
			imageUrl:
				"/images/identity_security.mp4",
			imageAlt: "Identity Management",
			overview:
				"Identity is the new perimeter. CCS integrates Identity (IAM), Privilege Access Management (PAM), and Governance, Risk & Compliance (GRC) into a unified framework for centralized control without security compromises.",
			capabilities: [
				"IAM + PAM + GRC framework integration",
				"Automated user lifecycle management",
				"Just-in-Time (JIT) access provisioning",
				"Privileged access workflows and approval",
				"Audit, attestation, and compliance tracking",
				"CIS Benchmarks and NIST 800-53 alignment",
				"PCI DSS and SOX compliance automation",
				"Security alignment and continuous verification",
			],
			technologies: [
				{
					category: "Identity Platforms",
					items: [
						"Entra ID",
						"Okta",
						"CyberArk",
						"Azure AD",
						"LDAP/Active Directory",
					],
				},
				{
					category: "GRC Platforms",
					items: [
						"ServiceNow",
						"SailPoint",
						"Saviynt",
						"CertinV",
						"Nessus",
					],
				},
				{
					category: "Compliance Frameworks",
					items: [
						"CIS Benchmarks",
						"NIST 800-53",
						"PCI DSS",
						"SOX",
						"ISO 27001",
					],
				},
			],
			benefits: [
				"Zero trust identity verification",
				"Automated compliance reporting",
				"Reduced access provisioning time",
				"Lower identity-related breach risk",
				"Audit readiness at all times",
				"Cost reduction through automation",
			],
			useCases: [
				"Zero trust identity implementation",
				"IAM consolidation (multiple platforms)",
				"Compliance framework alignment",
				"Org restructuring and access transitions",
				"M&A identity integration",
				"Compliance audit preparation",
			],
			ccs_unique:
				"CCS delivers centralized identity control where security and compliance are always in sync—verified, least-privileged, and continuously monitored.",
		},
		{
			id: "managed-operations",
			title: "Managed Infrastructure & Cloud Operations",
			icon: <Monitor className="w-8 h-8" />,
			description: "24/7 proactive infrastructure management",
			color: "indigo",
			gradient: "from-indigo-500 to-indigo-600",
			imageUrl:
				"/images/managed_infrastructure_cloud.jpeg",
			imageAlt: "Managed Operations",
			overview:
				"Infrastructure management is a 24/7 responsibility. CCS provides proactive monitoring, intelligent optimization, and comprehensive L2/L3 support ensuring 99.99% uptime and peak performance.",
			capabilities: [
				"Proactive L2/L3 support with 24/7 coverage",
				"Unified endpoint management via Intune, SCCM",
				"Patch automation across hybrid environments",
				"Intelligent workload optimization",
				"Centralized logging and monitoring",
				"Performance baselining and optimization",
				"Capacity planning and cost optimization",
				"Incident management and escalation",
			],
			technologies: [
				{
					category: "Monitoring & Management",
					items: [
						"Microsoft SCOM",
						"Intune",
						"SolarWinds",
						"NinjaOne",
						"SailPoint",
					],
				},
				{
					category: "Infrastructure Platforms",
					items: [
						"vSphere",
						"NSX-T",
						"Hyper-V",
						"Azure Stack",
						"OpenStack",
					],
				},
				{
					category: "Logging & Analytics",
					items: [
						"ELK Stack",
						"Azure Monitor",
						"AWS CloudWatch",
						"Splunk",
						"Datadog",
					],
				},
			],
			benefits: [
				"99.99% uptime SLA guarantee",
				"Proactive issue resolution",
				"Reduced operational overhead",
				"Lower MTTR and incident impact",
				"Infrastructure optimization",
				"Cost reduction through efficiency",
			],
			useCases: [
				"Hybrid cloud operations",
				"Mission-critical workload management",
				"Multi-cloud operations center setup",
				"Legacy infrastructure modernization",
				"Compliance-driven operations",
				"Peak performance optimization",
			],
			ccs_unique:
				"CCS delivers 24/7 proactive operations ensuring 99.99% uptime with intelligent automation, not just reactive support.",
		},
		{
			id: "consulting",
			title: "Strategic Consulting & IT Audit Services",
			icon: <Briefcase className="w-8 h-8" />,
			description: "Executive-level insights from certified professionals",
			color: "orange",
			gradient: "from-orange-500 to-orange-600",
		imageUrl:
			"/images/strategic_consulting_it_audit_expert_advisory.jpeg",
			imageAlt: "Consulting Services",
			overview:
				"Transform your enterprise with executive-level strategic guidance. CCS provides comprehensive audits, assessments, and consulting delivered by CISSP, CISM, SC-100, and CCSP certified experts.",
			capabilities: [
				"IT infrastructure, cloud, and cybersecurity audits",
				"Cloud readiness and cost optimization assessments",
				"IAM maturity evaluations",
				"Data classification and risk quantification",
				"End-to-end project documentation",
				"Policy design and governance",
				"Board-level reporting and executive summaries",
				"Roadmap development and implementation planning",
			],
			technologies: [
				{
					category: "Audit Expertise",
					items: [
						"CISSP",
						"CISM",
						"SC-100",
						"CCSP",
						"AWS Security Specialty",
						"Google Cloud Security",
					],
				},
				{
					category: "Assessment Frameworks",
					items: [
						"NIST Cybersecurity Framework",
						"CIS Benchmarks",
						"ISO/IEC 27001",
						"COBIT",
						"ITIL",
					],
				},
				{
					category: "Analysis & Reporting",
					items: [
						"Risk quantification",
						"Cost-benefit analysis",
						"ROI projections",
						"Executive dashboards",
					],
				},
			],
			benefits: [
				"Clear visibility into IT maturity",
				"Data-driven decision making",
				"Risk reduction",
				"Cost optimization opportunities",
				"Compliance roadmap clarity",
				"Strategic alignment with business goals",
			],
			useCases: [
				"Pre-acquisition IT audits",
				"Regulatory compliance assessments",
				"Cloud migration planning",
				"Digital transformation strategy",
				"Security posture assessment",
				"Cost optimization reviews",
			],
			ccs_unique:
				"CCS consultants aren't just auditors—they're strategic partners guiding your journey from assessment to execution with board-level accountability.",
		},
	];

	const selectedService = services.find((s) => s.id === expandedService);

	return (
		<>
			<Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
			<main className="min-h-screen bg-white">
				{/* Hero Section */}
				<section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
						<h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
							Enterprise Cloud & Cybersecurity Services
						</h1>
						<p className="text-xl text-blue-100">
							Comprehensive solutions from infrastructure to compliance
						</p>
					</div>
				</section>

				{/* Main Content */}
				<section className="py-16">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
							{/* Service Navigation */}
							<div className="lg:col-span-1">
								<div className="sticky top-8 space-y-2">
									<h3 className="text-lg font-bold text-gray-900 mb-4">
										Our Services
									</h3>
									<div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
										{services.map((service) => (
											<button
												key={service.id}
												onClick={() => setExpandedService(service.id)}
												className={`w-full text-left px-4 py-3 border-b border-gray-200 last:border-b-0 transition-all duration-300 ${
													expandedService === service.id
														? "bg-blue-50 border-l-4 border-l-blue-600 text-blue-600 font-semibold"
														: "text-gray-700 hover:bg-gray-50"
												}`}>
												<div className="flex items-center justify-between">
													<span className="flex items-center space-x-3">
														<span className="w-6 h-6">{service.icon}</span>
														<span className="text-sm">{service.title}</span>
													</span>
													{expandedService === service.id && (
														<ChevronDown className="w-4 h-4" />
													)}
												</div>
											</button>
										))}
									</div>
								</div>
							</div>

							{/* Service Details */}
							{selectedService && (
								<div className="lg:col-span-2 space-y-8">
									{/* Header */}
									<div>
										<div className="flex items-center space-x-4 mb-6">
											<div
												className={`p-4 rounded-xl bg-gradient-to-br ${selectedService.gradient} text-white`}>
												{selectedService.icon}
											</div>
											<div>
												<h2 className="text-3xl font-bold text-gray-900">
													{selectedService.title}
												</h2>
												<p className="text-gray-600 mt-1">
													{selectedService.description}
												</p>
											</div>
										</div>

										{/* Overview */}
										<div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100">
											<h3 className="text-lg font-semibold text-gray-900 mb-3">
												Overview
											</h3>
											<p className="text-gray-700 leading-relaxed">
												{selectedService.overview}
											</p>
										</div>
									</div>

									{/* Main Image */}
									<div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
										<Image
											src={selectedService.imageUrl}
											alt={selectedService.imageAlt}
											fill
											className="object-cover"
										/>
									</div>

									{/* Capabilities */}
									<div>
										<h3 className="text-2xl font-bold text-gray-900 mb-6">
											Capabilities
										</h3>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											{selectedService.capabilities.map((capability, idx) => (
												<div
													key={idx}
													className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
													<Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
													<span className="text-gray-700 text-sm">
														{capability}
													</span>
												</div>
											))}
										</div>
									</div>

									{/* Technologies */}
									<div>
										<h3 className="text-2xl font-bold text-gray-900 mb-6">
											Technologies & Tools
										</h3>
										<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
											{selectedService.technologies.map((tech, idx) => (
												<div
													key={idx}
													className="bg-white border border-gray-200 rounded-lg p-4">
													<h4 className="font-semibold text-gray-900 mb-3">
														{tech.category}
													</h4>
													<div className="flex flex-wrap gap-2">
														{tech.items.map((item, itemIdx) => (
															<span
																key={itemIdx}
																className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
																{item}
															</span>
														))}
													</div>
												</div>
											))}
										</div>
									</div>

									{/* Benefits */}
									<div>
										<h3 className="text-2xl font-bold text-gray-900 mb-6">
											Key Benefits
										</h3>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											{selectedService.benefits.map((benefit, idx) => (
												<div
													key={idx}
													className="flex items-center space-x-3 p-3">
													<div className="flex-shrink-0">
														<div className="flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-600">
															✓
														</div>
													</div>
													<span className="text-gray-700">{benefit}</span>
												</div>
											))}
										</div>
									</div>

									{/* Use Cases */}
									<div>
										<h3 className="text-2xl font-bold text-gray-900 mb-6">
											Use Cases
										</h3>
										<div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-6 border border-indigo-100">
											<ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
												{selectedService.useCases.map((useCase, idx) => (
													<li
														key={idx}
														className="flex items-center space-x-2">
														<span className="w-2 h-2 bg-blue-600 rounded-full"></span>
														<span className="text-gray-700">{useCase}</span>
													</li>
												))}
											</ul>
										</div>
									</div>

									{/* CCS Unique Promise */}
									{selectedService.ccs_unique && (
										<div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white">
											<h3 className="text-2xl font-bold mb-3">
												Why Choose CCS for This Service?
											</h3>
											<p className="text-lg leading-relaxed">
												{selectedService.ccs_unique}
											</p>
										</div>
									)}

									{/* CTA */}
									<div className="border-t pt-8">
										<p className="text-gray-600 mb-4">
											Ready to transform your enterprise?
										</p>
										<Link
											href="/"
											className="inline-flex items-center space-x-2 px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
											<span>Get in Touch</span>
											<ArrowRight className="w-5 h-5" />
										</Link>
									</div>
								</div>
							)}
						</div>
					</div>
				</section>

				{/* Why CCS Banner */}
				<section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
						<h2 className="text-3xl font-bold mb-6">
							30+ Years Serving Enterprises Across Canada
						</h2>
						<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
							<div>
								<div className="text-4xl font-bold mb-2">500+</div>
								<p className="text-blue-100">Enterprise Clients</p>
							</div>
							<div>
								<div className="text-4xl font-bold mb-2">99.99%</div>
								<p className="text-blue-100">Uptime Average</p>
							</div>
							<div>
								<div className="text-4xl font-bold mb-2">7/24</div>
								<p className="text-blue-100">Proactive Support</p>
							</div>
							<div>
								<div className="text-4xl font-bold mb-2">Zero Trust</div>
								<p className="text-blue-100">Security Culture</p>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default ServicesDetailPage;
