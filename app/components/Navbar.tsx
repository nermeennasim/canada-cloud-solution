import React from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useSmoothScroll } from "../hooks/useSmoothScroll";
interface NavbarProps {
	isMenuOpen: boolean;
	setIsMenuOpen: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
	const { scrollToSection } = useSmoothScroll();

	const handleNavClick = (sectionId: string) => {
		scrollToSection(sectionId);
		setIsMenuOpen(false); // Close mobile menu if open
	};

	return (
		<>
			{/* Under Construction Banner */}
			{/* <div className="bg-red-600 text-white py-2 px-4 text-center text-sm">
				🚧 Website Under Construction - Please contact us via the contact
				section below 🚧
			</div> */}

			<header className="bg-white shadow-sm sticky top-0 z-50 rounded-b-lg">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center py-4 rounded-b-lg">
						{/* Logo */}
						<div className="flex items-center space-x-3">
							<div className="flex items-center justify-center rounded-lg">
								<Image
									src="/images/logo_3d_CCS.png"
									alt="CCS Logo"
									className="object-contain w-14 h-14 sm:w-20 sm:h-20 "
									width={80}
									height={80}
									priority
								/>
							</div>
							<div>
								<h1 className="text-lg sm:text-xl font-bold text-gray-900">
									<span className="text-red-600 text-2xl">C</span>anada{" "}
									<span className="text-blue-600 text-2xl">C</span>loud{" "}
									<span className="text-red-600 text-2xl">S</span>olution
								</h1>
								<p className="text-xs sm:text-sm text-gray-600 hidden sm:block">
									Your Future Partner
								</p>
							</div>
						</div>

						{/* Desktop Navigation */}
						<nav className="hidden md:flex space-x-6">
							<button
								onClick={() => handleNavClick("home")}
								className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
								Home
							</button>
							<button
								onClick={() => handleNavClick("about")}
								className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
								About
							</button>
							<button
								onClick={() => handleNavClick("industries")}
								className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
								Industries
							</button>
							<button
								onClick={() => handleNavClick("services")}
								className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
								Services
							</button>
							<button
								onClick={() => handleNavClick("clients")}
								className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
								Clients
							</button>
							<button
								onClick={() => handleNavClick("why-ccs")}
								className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
								Why CCS
							</button>
							<button
								onClick={() => handleNavClick("contact")}
								className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
								Contact
							</button>
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
								<button
									onClick={() => handleNavClick("home")}
									className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 py-3 px-4 rounded-lg font-medium text-left">
									Home
								</button>
								<button
									onClick={() => handleNavClick("about")}
									className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 py-3 px-4 rounded-lg font-medium text-left">
									About
								</button>
								<button
									onClick={() => handleNavClick("industries")}
									className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 py-3 px-4 rounded-lg font-medium text-left">
									Industries
								</button>
								<button
									onClick={() => handleNavClick("services")}
									className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 py-3 px-4 rounded-lg font-medium text-left">
									Services
								</button>
								<button
									onClick={() => handleNavClick("clients")}
									className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 py-3 px-4 rounded-lg font-medium text-left">
									Clients
								</button>
								<button
									onClick={() => handleNavClick("why-ccs")}
									className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 py-3 px-4 rounded-lg font-medium text-left">
									Why CCS
								</button>
								<button
									onClick={() => handleNavClick("contact")}
									className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 py-3 px-4 rounded-lg font-medium text-left">
									Contact
								</button>
							</nav>
						</div>
					)}
				</div>
			</header>
		</>
	);
};

export default Navbar;
