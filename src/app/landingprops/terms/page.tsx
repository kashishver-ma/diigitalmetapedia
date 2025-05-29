import Head from "next/head";
import {
  FaCheckCircle,
  FaGlobe,
  FaShieldAlt,
  FaBullhorn,
} from "react-icons/fa";

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service - Digital Metapedia</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="min-h-screen bg-gray-50 text-gray-800 px-6 py-12 md:px-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 border-b pb-3">
            📝 Terms of Service
          </h1>
          <p className="text-sm text-gray-500 mb-10">
            Effective Date: 15-02-2022
          </p>

          <section className="mb-8">
            <h2 className="flex items-center text-2xl font-semibold mb-4 text-blue-700">
              <FaGlobe className="mr-2 text-blue-500" />
              Using Our Website
            </h2>
            <p className="text-lg">By accessing our site, you agree to:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-700 text-base">
              <li>Use it respectfully and legally</li>
              <li>Not harm, hack, or misuse the website in any way</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="flex items-center text-2xl font-semibold mb-4 text-blue-700">
              <FaShieldAlt className="mr-2 text-blue-500" />
              Our Content
            </h2>
            <p className="text-lg">
              Everything on this site (like text, logos, designs, and graphics)
              belongs to Digital Metapedia. Please don’t copy or use our content
              without permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="flex items-center text-2xl font-semibold mb-4 text-blue-700">
              <FaBullhorn className="mr-2 text-blue-500" />
              Our Services
            </h2>
            <p className="text-lg mb-2">
              We offer a range of digital marketing services including:
            </p>
            <ul className="list-disc ml-6 space-y-1 text-gray-700 text-base">
              <li>Search Engine Optimization (SEO)</li>
              <li>Social Media Marketing</li>
              {/* Add more services if needed */}
            </ul>
          </section>

          <section className="mt-10 text-base text-gray-600">
            <p>
              By continuing to use Digital Metapedia, you acknowledge and agree
              to these terms. If you have questions, please{" "}
              <a href="/#contact" className="text-blue-600 hover:underline">
                contact us
              </a>
              .
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
