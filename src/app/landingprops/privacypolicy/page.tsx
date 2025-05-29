// /pages/privacy-policy.js

import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Digital Metapedia</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Privacy Policy of Digital Metapedia outlining data collection, usage, and user rights."
        />
      </Head>

      <main className="min-h-screen bg-gray-50 text-gray-900 px-6 py-12 md:px-24 lg:px-32">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-10">
          <h1 className="text-4xl font-extrabold mb-8 border-b border-gray-300 pb-3">
            Privacy Policy
          </h1>

          <p className="mb-4 text-sm text-gray-500">
            Effective Date: <strong>15-02-2022</strong>
          </p>

          <p className="mb-8 leading-relaxed text-lg">
            At Digital Metapedia, accessible from{" "}
            <a
              href="https://www.digitalmetapedia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800 transition"
            >
              www.digitalmetapedia.com
            </a>
            , protecting your privacy is a top priority. This Privacy Policy
            explains what information we collect, how we use it, and your
            choices regarding your data.
          </p>

          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-4 text-blue-700">
              1. Information We Collect
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
              <li>
                <strong>Personal Information:</strong> Name, email address,
                phone number, company name, job title, and other details you
                provide when filling contact forms or subscribing.
              </li>
              <li>
                <strong>Technical Information:</strong> IP address, browser
                type, device information, referring/exit pages, and timestamps.
              </li>
              <li>
                <strong>Cookies and Tracking Data:</strong> We use cookies and
                similar technologies to enhance your experience and analyze site
                traffic.
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-4 text-blue-700">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
              <li>
                To provide and improve our services tailored to your needs
              </li>
              <li>
                To communicate updates, promotions, and respond to inquiries
              </li>
              <li>To analyze usage trends for better user experience</li>
              <li>To comply with legal and regulatory obligations</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-4 text-blue-700">
              3. Your Choices
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
              <li>Access the personal data we hold about you at any time</li>
              <li>
                Request corrections or deletion of your personal information
              </li>
              <li>
                Opt out of receiving marketing and promotional communications
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-4 text-blue-700">
              4. Data Security
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              We implement appropriate technical and organizational security
              measures to protect your personal data from unauthorized access,
              alteration, disclosure, or destruction.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-4 text-blue-700">
              5. Changes to This Policy
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our Privacy Policy may be updated occasionally. We encourage you
              to review this page regularly to stay informed about how we
              protect your information.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-3xl font-semibold mb-4 text-blue-700">
              6. Contact Us
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              If you have any questions or concerns about this Privacy Policy,
              please contact us at:{" "}
              <a
                href="mailto:support@digitalmetapedia.com"
                className="text-blue-600 underline hover:text-blue-800 transition"
              >
                support@digitalmetapedia.com
              </a>
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
