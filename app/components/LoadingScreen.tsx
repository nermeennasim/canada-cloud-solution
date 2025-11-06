// "use client";
// import React, { useEffect, useState } from "react";

// const LoadingScreen: React.FC = () => {
// 	const [isVisible, setIsVisible] = useState(true);
// 	const [opacity, setOpacity] = useState(1);

// 	useEffect(() => {
// 		const minDisplayTime = setTimeout(() => {
// 			setOpacity(0);
// 		}, 2000);

// 		const removeTimeout = setTimeout(() => {
// 			setIsVisible(false);
// 		}, 2800);

// 		return () => {
// 			clearTimeout(minDisplayTime);
// 			clearTimeout(removeTimeout);
// 		};
// 	}, []);

// 	if (!isVisible) return null;

// 	return (
// 		<div
// 			className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 transition-opacity duration-1000"
// 			style={{ opacity }}>
// 			{/* Animated Background Gradients */}
// 			<div className="absolute inset-0 overflow-hidden">
// 				<div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
// 				<div className="absolute top-40 right-10 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
// 				<div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
// 			</div>

// 			{/* Content */}
// 			<div className="relative z-10 text-center flex flex-col items-center">
// 				{/* Animated Cloud Container */}
// 				<div className="mb-12 relative w-80 h-64 flex items-center justify-center">
// 					{/* Outer Glow Circle */}
// 					<div className="absolute w-80 h-80 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>

// 					{/* Main Cloud SVG with Advanced Animation */}
// 					<svg
// 						viewBox="0 0 200 120"
// 						className="w-72 h-auto relative z-10 drop-shadow-2xl"
// 						style={{
// 							filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))",
// 						}}>
// 						<defs>
// 							<linearGradient
// 								id="cloudGradient"
// 								x1="0%"
// 								y1="0%"
// 								x2="100%"
// 								y2="100%">
// 								<stop offset="0%" stopColor="#ffffff" />
// 								<stop offset="50%" stopColor="#e0f2fe" />
// 								<stop offset="100%" stopColor="#ffffff" />
// 							</linearGradient>

// 							<filter id="glow">
// 								<feGaussianBlur stdDeviation="2" result="coloredBlur" />
// 								<feMerge>
// 									<feMergeNode in="coloredBlur" />
// 									<feMergeNode in="SourceGraphic" />
// 								</feMerge>
// 							</filter>

// 							<animate
// 								id="float"
// 								attributeName="transform"
// 								values="translate(0, 0); translate(0, -10px); translate(0, 0)"
// 								dur="3s"
// 								repeatCount="indefinite"
// 							/>
// 						</defs>

// 						{/* Cloud Shape */}
// 						<g filter="url(#glow)" style={{ animation: "float 3s ease-in-out infinite" }}>
// 							{/* Left bulge */}
// 							<circle
// 								cx="40"
// 								cy="70"
// 								r="28"
// 								fill="url(#cloudGradient)"
// 								opacity="0.95"
// 								style={{
// 									animation: "cloudPulse 2s ease-in-out infinite",
// 								}}
// 							/>
// 							{/* Center bulge */}
// 							<circle
// 								cx="100"
// 								cy="60"
// 								r="35"
// 								fill="url(#cloudGradient)"
// 								opacity="0.95"
// 								style={{
// 									animation: "cloudPulse 2s ease-in-out infinite 0.3s",
// 								}}
// 							/>
// 							{/* Right bulge */}
// 							<circle
// 								cx="160"
// 								cy="70"
// 								r="28"
// 								fill="url(#cloudGradient)"
// 								opacity="0.95"
// 								style={{
// 									animation: "cloudPulse 2s ease-in-out infinite 0.6s",
// 								}}
// 							/>
// 							{/* Bottom connection */}
// 							<ellipse
// 								cx="100"
// 								cy="95"
// 								rx="65"
// 								ry="20"
// 								fill="url(#cloudGradient)"
// 								opacity="0.95"
// 								style={{
// 									animation: "cloudPulse 2s ease-in-out infinite 0.9s",
// 								}}
// 							/>
// 						</g>

// 						{/* Floating particles inside cloud */}
// 						<g opacity="0.6">
// 							<circle
// 								cx="70"
// 								cy="65"
// 								r="2"
// 								fill="#60a5fa"
// 								style={{
// 									animation: "float 4s ease-in-out infinite",
// 								}}
// 							/>
// 							<circle
// 								cx="110"
// 								cy="55"
// 								r="1.5"
// 								fill="#93c5fd"
// 								style={{
// 									animation: "float 5s ease-in-out infinite 0.5s",
// 								}}
// 							/>
// 							<circle
// 								cx="130"
// 								cy="75"
// 								r="2"
// 								fill="#60a5fa"
// 								style={{
// 									animation: "float 4.5s ease-in-out infinite 1s",
// 								}}
// 							/>
// 						</g>
// 					</svg>
// 				</div>

// 				{/* Brand Text */}
// 				<h1 className="text-5xl lg:text-6xl font-bold mb-4 drop-shadow-xl bg-gradient-to-r from-blue-200 via-cyan-100 to-blue-200 bg-clip-text text-transparent">
// 					Canada Cloud Solutions
// 				</h1>
// 				<p className="text-xl text-blue-100 mb-8 drop-shadow-md font-medium">
// 					Preparing your cloud experience...
// 				</p>

// 				{/* Advanced Loading Bar */}
// 				<div className="w-72 h-3 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm border border-white/30 shadow-lg mb-8">
// 					<div
// 						className="h-full bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full"
// 						style={{
// 							animation: "shimmer 1.5s infinite",
// 							backgroundSize: "200% 100%",
// 						}}></div>
// 				</div>

// 				{/* Status Text */}
// 				<div className="flex items-center justify-center space-x-2">
// 					<span className="text-sm text-blue-200">Loading</span>
// 					<div className="flex gap-1">
// 						<span
// 							className="w-2 h-2 bg-blue-400 rounded-full"
// 							style={{
// 								animation: "bounce 1.4s infinite",
// 								animationDelay: "0s",
// 							}}></span>
// 						<span
// 							className="w-2 h-2 bg-cyan-400 rounded-full"
// 							style={{
// 								animation: "bounce 1.4s infinite",
// 								animationDelay: "0.2s",
// 							}}></span>
// 						<span
// 							className="w-2 h-2 bg-blue-300 rounded-full"
// 							style={{
// 								animation: "bounce 1.4s infinite",
// 								animationDelay: "0.4s",
// 							}}></span>
// 					</div>
// 				</div>

// 				{/* Tagline */}
// 				<p className="text-xs text-blue-300 mt-8 drop-shadow-md opacity-70">
// 					Enterprise Cloud Infrastructure Made Simple
// 				</p>
// 			</div>

// 			{/* Advanced Animations */}
// 			<style jsx>{`
// 				@keyframes float {
// 					0%, 100% {
// 						transform: translateY(0px) translateX(0px);
// 					}
// 					25% {
// 						transform: translateY(-15px) translateX(5px);
// 					}
// 					50% {
// 						transform: translateY(-10px) translateX(-5px);
// 					}
// 					75% {
// 						transform: translateY(-15px) translateX(3px);
// 					}
// 				}

// 				@keyframes cloudPulse {
// 					0%, 100% {
// 						r: 28px;
// 						opacity: 0.95;
// 					}
// 					50% {
// 						r: 31px;
// 						opacity: 1;
// 					}
// 				}

// 				@keyframes shimmer {
// 					0% {
// 						transform: translateX(-100%);
// 					}
// 					100% {
// 						transform: translateX(100%);
// 					}
// 				}

// 				@keyframes bounce {
// 					0%, 100% {
// 						transform: translateY(0);
// 						opacity: 1;
// 					}
// 					50% {
// 						transform: translateY(-10px);
// 						opacity: 0.7;
// 					}
// 				}

// 				@keyframes blob {
// 					0%, 100% {
// 						transform: translate(0, 0) scale(1);
// 					}
// 					33% {
// 						transform: translate(30px, -50px) scale(1.1);
// 					}
// 					66% {
// 						transform: translate(-20px, 20px) scale(0.9);
// 					}
// 				}

// 				.animate-blob {
// 					animation: blob 7s infinite;
// 				}

// 				.animation-delay-2000 {
// 					animation-delay: 2s;
// 				}

// 				.animation-delay-4000 {
// 					animation-delay: 4s;
// 				}
// 			`}</style>
// 		</div>
// 	);
// };

// export default LoadingScreen;
"use client";
import React, { useEffect, useState } from "react";

const LoadingScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const minDisplayTime = setTimeout(() => {
      setOpacity(0);
    }, 2000);

    const removeTimeout = setTimeout(() => {
      setIsVisible(false);
    }, 2800);

    return () => {
      clearTimeout(minDisplayTime);
      clearTimeout(removeTimeout);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 transition-opacity duration-1000"
      style={{ opacity }}
    >
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center flex flex-col items-center">
        {/* Animated Cloud Container */}
        <div className="mb-12 relative w-80 h-64 flex items-center justify-center">
          {/* Outer Glow Circle */}
          <div className="absolute w-80 h-80 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>

          {/* Main Cloud SVG with Advanced Animation */}
          <svg
            viewBox="0 0 200 120"
            className="w-72 h-auto relative z-10 drop-shadow-2xl"
            style={{
              filter: "drop-shadow(0 0 20px rgba(147, 51, 234, 0.5))",
            }}
          >
            <defs>
              <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="50%" stopColor="#e0e7ff" />
                <stop offset="100%" stopColor="#ffffff" />
              </linearGradient>

              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <animate
                id="float"
                attributeName="transform"
                values="translate(0, 0); translate(0, -10px); translate(0, 0)"
                dur="3s"
                repeatCount="indefinite"
              />
            </defs>

            {/* Cloud Shape */}
            <g filter="url(#glow)" style={{ animation: "float 3s ease-in-out infinite" }}>
              {/* Left bulge */}
              <circle
                cx="40"
                cy="70"
                r="28"
                fill="url(#cloudGradient)"
                opacity="0.95"
                style={{
                  animation: "cloudPulse 2s ease-in-out infinite",
                }}
              />
              {/* Center bulge */}
              <circle
                cx="100"
                cy="60"
                r="35"
                fill="url(#cloudGradient)"
                opacity="0.95"
                style={{
                  animation: "cloudPulse 2s ease-in-out infinite 0.3s",
                }}
              />
              {/* Right bulge */}
              <circle
                cx="160"
                cy="70"
                r="28"
                fill="url(#cloudGradient)"
                opacity="0.95"
                style={{
                  animation: "cloudPulse 2s ease-in-out infinite 0.6s",
                }}
              />
              {/* Bottom connection */}
              <ellipse
                cx="100"
                cy="95"
                rx="65"
                ry="20"
                fill="url(#cloudGradient)"
                opacity="0.95"
                style={{
                  animation: "cloudPulse 2s ease-in-out infinite 0.9s",
                }}
              />
            </g>

            {/* Floating particles inside cloud */}
            <g opacity="0.6">
              <circle
                cx="70"
                cy="65"
                r="2"
                fill="#a78bfa"
                style={{
                  animation: "float 4s ease-in-out infinite",
                }}
              />
              <circle
                cx="110"
                cy="55"
                r="1.5"
                fill="#c4b5fd"
                style={{
                  animation: "float 5s ease-in-out infinite 0.5s",
                }}
              />
              <circle
                cx="130"
                cy="75"
                r="2"
                fill="#a78bfa"
                style={{
                  animation: "float 4.5s ease-in-out infinite 1s",
                }}
              />
            </g>
          </svg>
        </div>

        {/* Brand Text */}
        <h1 className="text-5xl lg:text-6xl font-bold mb-4 drop-shadow-xl bg-gradient-to-r from-purple-200 via-pink-100 to-purple-200 bg-clip-text text-transparent">
          Cloud Solutions
        </h1>
        <p className="text-xl text-purple-100 mb-8 drop-shadow-md font-medium">
          Preparing your cloud experience...
        </p>

        {/* Advanced Loading Bar */}
        <div className="w-72 h-3 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm border border-white/30 shadow-lg mb-8">
          <div
            className="h-full bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full"
            style={{
              animation: "shimmer 1.5s infinite",
              backgroundSize: "200% 100%",
            }}
          ></div>
        </div>

        {/* Status Text */}
        <div className="flex items-center justify-center space-x-2">
          <span className="text-sm text-purple-200">Loading</span>
          <div className="flex gap-1">
            <span
              className="w-2 h-2 bg-purple-400 rounded-full"
              style={{
                animation: "bounce 1.4s infinite",
                animationDelay: "0s",
              }}
            ></span>
            <span
              className="w-2 h-2 bg-pink-400 rounded-full"
              style={{
                animation: "bounce 1.4s infinite",
                animationDelay: "0.2s",
              }}
            ></span>
            <span
              className="w-2 h-2 bg-purple-300 rounded-full"
              style={{
                animation: "bounce 1.4s infinite",
                animationDelay: "0.4s",
              }}
            ></span>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-xs text-purple-300 mt-8 drop-shadow-md opacity-70">
          Secure, Scalable, and Reliable Cloud Solutions
        </p>
      </div>

      {/* Advanced Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-15px) translateX(5px);
          }
          50% {
            transform: translateY(-10px) translateX(-5px);
          }
          75% {
            transform: translateY(-15px) translateX(3px);
          }
        }

        @keyframes cloudPulse {
          0%, 100% {
            r: 28px;
            opacity: 0.95;
          }
          50% {
            r: 31px;
            opacity: 1;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(-10px);
            opacity: 0.7;
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