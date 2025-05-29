import Link from "next/link";
import {
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaEnvelope,
  FaLock,
  FaFileContract,
} from "react-icons/fa";

export default function Sitemap() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-12 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 border-b pb-3">Sitemap</h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">
            🌐 Main Pages
          </h2>
          <ul className="space-y-3 text-lg">
            <li className="hover:pl-2 transition-all">
              <Link
                href="/"
                className="flex items-center space-x-2 hover:text-blue-600"
              >
                <FaHome /> <span>Home</span>
              </Link>
            </li>
            <li className="hover:pl-2 transition-all">
              <Link
                href="/#about"
                className="flex items-center space-x-2 hover:text-blue-600"
              >
                <FaInfoCircle /> <span>About Us</span>
              </Link>
            </li>
            <li className="hover:pl-2 transition-all">
              <Link
                href="/#services"
                className="flex items-center space-x-2 hover:text-blue-600"
              >
                <FaServicestack /> <span>Services</span>
              </Link>
            </li>
            <li className="hover:pl-2 transition-all">
              <Link
                href="/#contact"
                className="flex items-center space-x-2 hover:text-blue-600"
              >
                <FaEnvelope /> <span>Contact</span>
              </Link>
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">
            📄 Legal Pages
          </h2>
          <ul className="space-y-3 text-lg">
            <li className="hover:pl-2 transition-all">
              <Link
                href="/landingprops/privacypolicy"
                className="flex items-center space-x-2 hover:text-blue-600"
              >
                <FaLock /> <span>Privacy Policy</span>
              </Link>
            </li>
            <li className="hover:pl-2 transition-all">
              <Link
                href="/landingprops/terms"
                className="flex items-center space-x-2 hover:text-blue-600"
              >
                <FaFileContract /> <span>Terms of Service</span>
              </Link>
            </li>
          </ul>
        </section>

        {/* Additional Sections Can Be Added Here */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">
            🚀 Explore More
          </h2>
          <p className="text-gray-600">
            Looking for something else? Use the navigation menu or contact us
            directly.
          </p>
        </section>
      </div>
    </div>
  );
}
