import React from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
	isMenuOpen: boolean;
	setIsMenuOpen: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
	return (
		<>
			{" "}
			{/* Under Construction Banner */}
			<div className="bg-cyan-950 text-white py-2 px-4 text-center text-md font-semibold">
				🚧 Website Under Construction - Please contact us via the contact
				section below 🚧
			</div>
			<header className="bg-white shadow-sm sticky top-0 z-50 rounded-xl">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center py-4">
						{/* Logo */}
						<div className="flex items-center space-x-3">
							<div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
								<img
									src={"images/logo.png"}
									alt="CCS Logo"
									className="w-8 h-8"
								/>
							</div>
							<div>
								<h1 className="text-xl font-bold text-gray-900">
									<span className="text-red-600">C</span>anada{" "}
									<span className="text-blue-600">C</span>loud{" "}
									<span className="text-red-600">S</span>olution
								</h1>
								<p className="text-sm text-gray-600 hidden sm:block">
									Your Future Partner
								</p>
							</div>
						</div>
						{/* Desktop Navigation */}
						<nav className="hidden md:flex space-x-8">
							<a
								href="#home"
								className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
								Home
							</a>
							<a
								href="#services"
								className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
								Services
							</a>
							<a
								href="#about"
								className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
								About
							</a>
							<a
								href="#contact"
								className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
								Contact
							</a>
						</nav>

						{/* Mobile Menu Button */}
						<button
							className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							aria-label="Toggle menu">
							{isMenuOpen ? (
								<X size={24} className="text-gray-700" />
							) : (
								<Menu size={24} className="text-gray-700" />
							)}
						</button>
					</div>

					{/* Mobile Navigation */}
					{isMenuOpen && (
						<div className="md:hidden pb-4 border-t border-gray-100">
							<nav className="flex flex-col space-y-1 pt-4">
								<a
									href="#home"
									className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 py-3 px-4 rounded-lg font-medium"
									onClick={() => setIsMenuOpen(false)}>
									Home
								</a>
								<a
									href="#services"
									className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 py-3 px-4 rounded-lg font-medium"
									onClick={() => setIsMenuOpen(false)}>
									Services
								</a>
								<a
									href="#about"
									className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 py-3 px-4 rounded-lg font-medium"
									onClick={() => setIsMenuOpen(false)}>
									About
								</a>
								<a
									href="#contact"
									className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 py-3 px-4 rounded-lg font-medium"
									onClick={() => setIsMenuOpen(false)}>
									Contact
								</a>
							</nav>
						</div>
					)}
				</div>
			</header>
		</>
	);
};

export default Navbar;
