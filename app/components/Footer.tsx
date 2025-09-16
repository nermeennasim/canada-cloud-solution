import React from "react";

const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-blue-900 py-12 rounded-xl">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center">
					{/* Logo and Company Name */}
					<div className="flex items-center justify-center space-x-3 mb-6">
						<div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
							<span className="text-white font-bold text-lg">CCS</span>
						</div>
						<div>
							<h3 className="text-xl font-bold text-white">
								Canada Cloud Solution
							</h3>
							<p className="text-sm text-gray-400">Your Future Partner</p>
						</div>
					</div>

					{/* Company Description */}
					<p className="text-gray-400 mb-6 max-w-md mx-auto">
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
					<div className="border-t border-gray-700 pt-6">
						{/* Copyright */}
						<p className="text-gray-500 text-sm">
							© {currentYear} Canada Cloud Solution. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
