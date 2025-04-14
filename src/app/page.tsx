import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Digital Metapedia Client Management System
              </h1>
              <p className="text-xl mb-8">
                Streamline your client management, track leads, and manage
                projects - all in one place.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="/dashboard"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition"
                >
                  Dashboard
                </Link>
                <Link
                  href="/login"
                  className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition"
                >
                  Login
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-64 md:h-96 w-full">
                <div className="absolute inset-0 bg-white/10 rounded-xl p-4">
                  <div className="bg-white/20 rounded-lg h-full w-full p-6">
                    <div className="bg-white/30 h-6 w-32 rounded mb-4"></div>
                    <div className="bg-white/30 h-4 w-full rounded mb-3"></div>
                    <div className="bg-white/30 h-4 w-5/6 rounded mb-3"></div>
                    <div className="bg-white/30 h-4 w-4/6 rounded mb-6"></div>
                    <div className="bg-white/30 h-32 w-full rounded mb-6"></div>
                    <div className="flex justify-end">
                      <div className="bg-white/30 h-8 w-24 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Client Management</h3>
              <p className="text-gray-600">
                Store client information, project details, and communication
                history in one place.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Lead Tracking</h3>
              <p className="text-gray-600">
                Track leads, including contact information, source, and
                follow-up interactions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Project Management</h3>
              <p className="text-gray-600">
                Manage projects, tasks, deadlines, and track progress in a
                collaborative environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-auto">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-xl font-bold mb-4">Digital Agency CMS</h3>
              <p className="text-gray-400 max-w-md">
                A comprehensive solution for digital marketing agencies to
                manage clients, leads, and projects.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/login"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    href="/signup"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Digital Agency CMS. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
