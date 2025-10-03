import Link from "next/link";

export default function NotFound() {
	return (
		<div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				<div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
					<div className="text-center">
						<h1 className="text-4xl font-bold text-blue-600 mb-4">404</h1>
						<h2 className="text-xl font-semibold text-gray-900 mb-4">
							Page Not Found
						</h2>
						<p className="text-gray-600 mb-6">
							Sorry, we couldn&apos;t find the page you&apos;re looking for.
						</p>
						<Link
							href="/"
							className="block w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-center">
							Return Home
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
