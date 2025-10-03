import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import GoogleAnalytics from "./components/GoogleAnalytics";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://canadacloudsolution.ca"),
	title: {
		default: "Canada Cloud Solution - IT Management & Cloud Transformation",
		template: "%s | Canada Cloud Solution",
	},
	description:
		"Expert IT management and cloud transformation services for small to medium-sized businesses. CCS provides security compliance, tailored cloud solutions, and reliable IT support with years of industry experience.",
	keywords: [
		"IT management",
		"cloud transformation",
		"security compliance",
		"cloud solutions",
		"IT support",
		"small business IT",
		"medium business IT",
		"Canada cloud services",
		"IT consulting",
		"cloud migration",
		"cybersecurity",
		"managed IT services",
		"technology solutions",
		"digital transformation",
		"business continuity",
		"data protection",
		"network management",
		"IT infrastructure",
		"cloud computing",
		"tech support",
		"IT strategy",
		"cloud security",
		"disaster recovery",
		"IT outsourcing",
		"software solutions",
		"infrastructure as a service (IaaS)",
		"platform as a service (PaaS)",
		"software as a service (SaaS)",
		"hybrid cloud",
		"public cloud",
		"private cloud",
		"cloud consulting",
		"IT project management",
		"IT audits",
		"regulatory compliance",
		"IT training",
		"help desk services",
		"remote IT support",
		"on-site IT support",
		"IT asset management",
		"technology upgrades",
		"web hosting",
		"web development",
	],
	authors: [{ name: "Canada Cloud Solution" }],
	creator: "Canada Cloud Solution",
	publisher: "Canada Cloud Solution",
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	openGraph: {
		type: "website",
		locale: "en_CA",
		url: "https://canadacloudsolution.ca", // Replace with your actual domain
		siteName: "Canada Cloud Solution",
		title: "Canada Cloud Solution - IT Management & Cloud Transformation",
		description:
			"Expert IT management and cloud transformation services for small to medium-sized businesses. Tailored solutions with years of industry experience.",
		images: [
			{
				url: "/og-image.png", // Add your Open Graph image
				width: 1200,
				height: 630,
				alt: "Canada Cloud Solution - Your Future Partner in IT",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Canada Cloud Solution - IT Management & Cloud Transformation",
		description:
			"Expert IT management and cloud transformation services for small to medium-sized businesses.",
		images: ["/og-image.png"], // Same image as Open Graph
		creator: "@canadacloudsol", // Replace with your Twitter handle
	},
	verification: {
		google: "your-google-verification-code", // Add your Google Search Console verification
	},
	alternates: {
		canonical: "https://canadacloudsolution.ca", // Replace with your actual domain
	},
	category: "technology",
	classification: "Business Services",
	referrer: "origin-when-cross-origin",
};
export default function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				{/* Preload critical resources */}
				<link
					rel="preload"
					href="/images/logo.png"
					as="image"
					type="image/png"
				/>
				<link
					rel="preload"
					href="/images/hero-img.jpg"
					as="image"
					type="image/jpeg"
				/>
				<link rel="dns-prefetch" href="https://www.googletagmanager.com" />
				<link rel="dns-prefetch" href="https://www.google-analytics.com" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin=""
				/>

				<link rel="icon" href="images/favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white-smoke text-gray-900`}>
				<GoogleAnalytics gtagId={`${process.env.G_TAG}`} />
				{children}
			</body>
		</html>
	);
}
