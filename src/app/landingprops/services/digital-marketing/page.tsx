// /pages/services/digital-marketing.js
import Head from "next/head";
import Layout from "../../../components/Layout";
import Link from "next/link";

export default function DigitalMarketing() {
  return (
    <Layout>
      <Head>
        <title>Digital Marketing Services | Digital Metapedia</title>
        <meta
          name="description"
          content="Results-driven digital marketing strategies to grow your brand, increase traffic, and boost conversions."
        />
      </Head>

      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Digital Marketing Services
          </h1>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Data-Driven Marketing Strategies
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              We combine creativity with analytics to develop marketing
              campaigns that connect with your audience and deliver measurable
              results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Search Engine Optimization
              </h3>
              <p className="text-gray-700">
                Comprehensive SEO strategies to improve your organic visibility,
                drive quality traffic, and increase your search engine rankings.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Pay-Per-Click Advertising
              </h3>
              <p className="text-gray-700">
                Strategic PPC campaigns across Google, Bing, and social
                platforms to drive targeted traffic and maximize ROI.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Social Media Marketing
              </h3>
              <p className="text-gray-700">
                Engaging social strategies to build your brand, foster
                community, and convert followers into loyal customers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Content Marketing
              </h3>
              <p className="text-gray-700">
                Compelling content strategies that educate, engage, and inspire
                your audience while establishing your brand authority.
              </p>
            </div>
          </div>

          <div className="bg-gray-100 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Marketing Approach
            </h2>

            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-red-600 text-white font-bold mr-4">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    Research & Analysis
                  </h3>
                  <p className="text-gray-700">
                    Thorough audience, competitor, and market research to inform
                    strategy development.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-red-600 text-white font-bold mr-4">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    Strategy Development
                  </h3>
                  <p className="text-gray-700">
                    Creating customized marketing plans aligned with your
                    business objectives and target audience.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-red-600 text-white font-bold mr-4">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    Campaign Execution
                  </h3>
                  <p className="text-gray-700">
                    Professional implementation of marketing initiatives across
                    selected channels.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-red-600 text-white font-bold mr-4">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    Monitoring & Optimization
                  </h3>
                  <p className="text-gray-700">
                    Continuous tracking of performance metrics and campaign
                    refinement for optimal results.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-red-600 text-white font-bold mr-4">
                  5
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    Reporting & Analysis
                  </h3>
                  <p className="text-gray-700">
                    Transparent reporting with actionable insights to drive
                    ongoing marketing success.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Ready to Boost Your Digital Presence?
            </h2>
            <Link
              href="/#contact"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Request a Marketing Proposal
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
