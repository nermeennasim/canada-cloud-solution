'use client'

import Link from 'next/link'

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-red-600 mb-4">Error</h1>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Something went wrong!
                </h2>
                <p className="text-gray-600 mb-6">
                  We apologize for the inconvenience. An unexpected error occurred.
                </p>
                <div className="space-y-4">
                  <button
                    onClick={reset}
                    className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    Try again
                  </button>
                  <Link
                    href="/"
                    className="block w-full bg-gray-100 text-gray-900 px-4 py-2 rounded hover:bg-gray-200 transition-colors text-center"
                  >
                    Go back home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}