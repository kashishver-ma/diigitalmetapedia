// /pages/services/web-development.js
import Head from "next/head";
import Layout from "../../../components/Layout";

export default function WebDevelopment() {
  return (
    <Layout>
      <Head>
        <title>Web Development Services | Digital Metapedia</title>
        <meta
          name="description"
          content="Professional web development services that transform your ideas into powerful online solutions."
        />
      </Head>

      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Web Development Services
          </h1>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Transforming Ideas into Digital Reality
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              At Digital Metapedia, we specialize in creating custom web
              solutions that align with your business objectives, enhance user
              experience, and drive growth.
            </p>

            <div className="bg-red-50 border-l-4 border-red-600 p-5 mb-8">
              <p className="text-red-700">
                Our team of expert developers brings years of experience to
                every project, ensuring the highest quality deliverables that
                exceed expectations.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Frontend Development
              </h3>
              <p className="text-gray-700">
                We create responsive, intuitive user interfaces using the latest
                technologies like React, Vue, and Angular to deliver exceptional
                user experiences across all devices.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Backend Development
              </h3>
              <p className="text-gray-700">
                Our backend solutions are built for performance, security, and
                scalability using Node.js, Python, PHP, and other modern
                frameworks.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                E-commerce Solutions
              </h3>
              <p className="text-gray-700">
                From small boutiques to large marketplaces, we build custom
                e-commerce platforms that drive sales and improve customer
                satisfaction.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Custom CMS
              </h3>
              <p className="text-gray-700">
                Take control of your content with custom content management
                systems tailored to your specific workflow and business needs.
              </p>
            </div>
          </div>

          <div className="bg-gray-100 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Development Process
            </h2>

            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-red-600 text-white font-bold mr-4">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    Discovery & Planning
                  </h3>
                  <p className="text-gray-700">
                    We begin by understanding your business goals, target
                    audience, and project requirements.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-red-600 text-white font-bold mr-4">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    Design & Prototyping
                  </h3>
                  <p className="text-gray-700">
                    Creating wireframes and interactive prototypes to visualize
                    the final product before development begins.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-red-600 text-white font-bold mr-4">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    Development
                  </h3>
                  <p className="text-gray-700">
                    Building your solution using the latest technologies and
                    best practices in web development.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-red-600 text-white font-bold mr-4">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    Testing & QA
                  </h3>
                  <p className="text-gray-700">
                    Rigorous testing across different devices and browsers to
                    ensure a flawless user experience.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-red-600 text-white font-bold mr-4">
                  5
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    Deployment & Support
                  </h3>
                  <p className="text-gray-700">
                    Launching your website and providing ongoing maintenance and
                    support.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Ready to Start Your Web Project?
            </h2>
            <a
              href="/#contact"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Get a Free Consultation
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
