"use client";
import React, { useEffect, useState } from "react";
import { Cloud } from "lucide-react";

const LoadingScreen: React.FC = () => {
	const [isVisible, setIsVisible] = useState(true);
	const [opacity, setOpacity] = useState(1);

	useEffect(() => {
		// Set a minimum display time for the loading screen
		const minDisplayTime = setTimeout(() => {
			setOpacity(0);
		}, 2000); // Show for 2 seconds

		// Then remove it from DOM
		const removeTimeout = setTimeout(() => {
			setIsVisible(false);
		}, 2800); // Account for fade-out transition

		return () => {
			clearTimeout(minDisplayTime);
			clearTimeout(removeTimeout);
		};
	}, []);

	if (!isVisible) return null;

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800 transition-opacity duration-1000"
			style={{ opacity }}>
			{/* Animated Background Gradient */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute top-0 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
				<div className="absolute top-0 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
				<div className="absolute -bottom-8 left-20 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
			</div>

			{/* Content */}
			<div className="relative z-10 text-center">
				{/* Animated Cloud Icon */}
				<div className="flex justify-center mb-8 animate-bounce">
					<div className="relative">
						{/* Outer glow */}
						<div className="absolute inset-0 bg-blue-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
						{/* Icon */}
						<Cloud className="w-24 h-24 text-white drop-shadow-2xl" />
					</div>
				</div>

				{/* Loading Text */}
				<h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg">
					Canada Cloud Solutions
				</h1>
				<p className="text-xl text-blue-100 mb-8 drop-shadow-md">
					Preparing your cloud experience...
				</p>

				{/* Animated Loading Bar */}
				<div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm border border-white/30">
					<div className="h-full bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 rounded-full animate-pulse" style={{
						animation: "shimmer 2s infinite"
					}}></div>
				</div>

				{/* Loading Dots */}
				<div className="flex justify-center gap-2 mt-8">
					<div className="w-3 h-3 bg-blue-300 rounded-full animate-bounce" style={{ animationDelay: "0s" }}></div>
					<div className="w-3 h-3 bg-cyan-300 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
					<div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
				</div>

				{/* Tagline */}
				<p className="text-sm text-blue-200 mt-8 drop-shadow-md opacity-75">
					Transforming enterprise infrastructure with cutting-edge cloud solutions
				</p>
			</div>

			{/* Inline Styles for Animations */}
			<style jsx>{`
				@keyframes shimmer {
					0% {
						transform: translateX(-100%);
					}
					100% {
						transform: translateX(100%);
					}
				}
				
				@keyframes blob {
					0%, 100% {
						transform: translate(0, 0) scale(1);
					}
					33% {
						transform: translate(30px, -50px) scale(1.1);
					}
					66% {
						transform: translate(-20px, 20px) scale(0.9);
					}
				}

				.animate-blob {
					animation: blob 7s infinite;
				}

				.animation-delay-2000 {
					animation-delay: 2s;
				}

				.animation-delay-4000 {
					animation-delay: 4s;
				}
			`}</style>
		</div>
	);
};

export default LoadingScreen;
