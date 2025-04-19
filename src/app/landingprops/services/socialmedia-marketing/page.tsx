import Head from "next/head";
import Layout from "../../../components/Layout";

export default function SocialMediaPost() {
  return (
    <Layout>
      <Head>
        <title>UI/UX Design Services | Digital Metapedia</title>
        <meta
          name="description"
          content="User-centered design services that create intuitive, engaging, and visually stunning digital experiences."
        />
      </Head>

      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            🌟 Transform Your Digital Experience 🌟
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            At <strong>Digital Metapedia</strong>, we create user-centered
            designs that not only look stunning but also drive results. Whether
            you're a startup or an established brand, we ensure your product
            feels intuitive and connects with your audience.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            💡 Our Services Include:
          </h2>
          <div className="text-left mb-8">
            <ul className="list-disc pl-5 text-lg text-gray-700">
              <li>
                <strong>User Research:</strong> Deep insights into user behavior
                and needs
              </li>
              <li>
                <strong>UX Strategy:</strong> Aligning your business goals with
                user experience
              </li>
              <li>
                <strong>UI Design:</strong> Beautiful, intuitive interfaces
              </li>
              <li>
                <strong>Prototyping & Testing:</strong> Validating designs with
                real users
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            🔄 Our Process:
          </h2>
          <div className="text-left mb-8">
            <ol className="list-decimal pl-5 text-lg text-gray-700 space-y-4">
              <li>
                <strong>Discovery:</strong> Understanding your business and
                goals
              </li>
              <li>
                <strong>Research:</strong> In-depth user and competitor analysis
              </li>
              <li>
                <strong>Wireframing:</strong> Structuring your design to improve
                user flows
              </li>
              <li>
                <strong>Visual Design:</strong> Creating high-fidelity visuals
                for your brand
              </li>
              <li>
                <strong>Testing:</strong> Prototyping and validating through
                user feedback
              </li>
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              🚀 Ready to Enhance Your User Experience?
            </h2>
            <a
              href="/#contact"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Start Your Design Project
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
