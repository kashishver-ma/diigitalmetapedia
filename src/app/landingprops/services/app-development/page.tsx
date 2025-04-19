// /pages/nav/services/app-development.js
import Head from "next/head";
import Layout from "../../../components/Layout";

export default function AppDevelopment() {
  return (
    <Layout>
      <Head>
        <title>Mobile App Development | Digital Metapedia</title>
        <meta
          name="description"
          content="Custom mobile application development for iOS and Android platforms to bring your app ideas to life."
        />
      </Head>

      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Mobile App Development
          </h1>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Native & Cross-Platform Mobile Solutions
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Our expert developers create high-performance, user-friendly
              mobile applications that provide exceptional value to your users
              and business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                iOS Development
              </h3>
              <p className="text-gray-700">
                Custom iOS applications built with Swift for optimal performance
                and seamless integration with Apple's ecosystem.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Android Development
              </h3>
              <p className="text-gray-700">
                Android apps developed using Kotlin and Java to reach the
                diverse Android user base with beautiful native experiences.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Cross-Platform Solutions
              </h3>
              <p className="text-gray-700">
                Efficient development across platforms using React Native and
                Flutter, reducing time-to-market while maintaining quality.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                App Maintenance
              </h3>
              <p className="text-gray-700">
                Ongoing support, updates, and optimizations to keep your app
                running smoothly and aligned with the latest OS updates.
              </p>
            </div>
          </div>

          <div className="bg-gray-100 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Featured App Solutions
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  E-commerce Apps
                </h3>
                <p className="text-gray-700 mb-3">
                  Mobile shopping experiences with secure payments, personalized
                  recommendations, and seamless checkout flow.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  On-Demand Service Apps
                </h3>
                <p className="text-gray-700 mb-3">
                  Connect service providers with customers through intuitive
                  booking systems, real-time tracking, and payment processing.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Social Networking Apps
                </h3>
                <p className="text-gray-700 mb-3">
                  Custom social platforms with robust user profiles, feeds,
                  messaging, and engagement features.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Enterprise Solutions
                </h3>
                <p className="text-gray-700 mb-3">
                  Business apps for internal operations, team communication,
                  data management, and workflow optimization.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Have an App Idea?
            </h2>
            <a
              href="/#contact"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Let's Discuss Your Project
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
