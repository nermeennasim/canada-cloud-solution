import Image from "next/image";

const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-blue-50 py-12 rounded-xl relative overflow-hidden">
			{/* Repeating Logo Background Pattern */}
			<div
				className="absolute inset-0 opacity-5 bg-repeat"
				style={{
					backgroundImage: "url('/images/logo.png')",
					backgroundSize: "80px 80px",
				}}></div>

			{/* Gradient Shade Overlay */}
			<div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-white/70 to-blue-100/80"></div>

			{/* Content overlay */}
			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center">
					{/* Logo and Company Name */}
					<div className="flex items-center justify-center space-x-3 mb-6">
						<div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
							<Image
								src="/images/logo.png"
								alt="CCS Logo"
								width={32}
								height={32}
								className="w-8 h-8"
							/>
						</div>
						<div>
							<h3 className="text-xl font-bold text-gray-800">
								<span className="text-red-600">C</span>anada{" "}
								<span className="text-blue-600">C</span>loud{" "}
								<span className="text-red-600">S</span>olution
							</h3>
							<p className="text-sm text-gray-600">Your Future Partner</p>
						</div>
					</div>

					{/* Company Description */}
					<p className="text-gray-600 mb-6 max-w-md mx-auto">
						Building the future of cloud innovation, one solution at a time.
					</p>

					{/* Social Links */}
					<div className="flex justify-center space-x-4 mb-6">
						<a
							href="https://www.linkedin.com/company/canadacloudsolution/"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium">
							LinkedIn
						</a>
						<a
							href="#"
							className="inline-flex items-center px-6 py-3 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors duration-300 font-medium">
							Twitter
						</a>
					</div>

					{/* Divider */}
					<div className="border-t border-gray-300 pt-6">
						{/* Copyright */}
						<p className="text-gray-600 text-sm mb-2">
							© {currentYear} Canada Cloud Solution. All rights reserved.
						</p>

						{/* Powered by */}
						<p className="text-gray-500 text-xs">
							Powered by{" "}
							<a
								href="https://bluesproutagency.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
								Blue Sprout Agency LLC
							</a>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
