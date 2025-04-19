// /pages/services/ui-ux-design.js
import Head from "next/head";
import Layout from "../../../components/Layout";

export default function UIUXDesign() {
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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            UI/UX Design Services
          </h1>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Creating Exceptional User Experiences
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Our design team combines creativity with user psychology to create
              interfaces that are not only beautiful but also intuitive and
              effective.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                User Research
              </h3>
              <p className="text-gray-700">
                Understanding your users through interviews, surveys, and
                behavior analysis to inform design decisions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                UX Strategy
              </h3>
              <p className="text-gray-700">
                Creating cohesive user experience strategies that align with
                business goals and user needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                UI Design
              </h3>
              <p className="text-gray-700">
                Crafting visually appealing interfaces with consistent branding,
                intuitive layouts, and engaging visual elements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Prototyping & Testing
              </h3>
              <p className="text-gray-700">
                Creating interactive prototypes and conducting usability testing
                to validate designs before development.
              </p>
            </div>
          </div>

          <div className="bg-gray-100 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Design Process
            </h2>

            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-red-600 text-white font-bold mr-4">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    Discovery
                  </h3>
                  <p className="text-gray-700">
                    Understanding business objectives, user needs, and project
                    requirements.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-red-600 text-white font-bold mr-4">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    Research
                  </h3>
                  <p className="text-gray-700">
                    User research, competitor analysis, and information
                    architecture planning.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-red-600 text-white font-bold mr-4">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    Wireframing
                  </h3>
                  <p className="text-gray-700">
                    Creating low-fidelity layouts to establish information
                    hierarchy and user flows.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-red-600 text-white font-bold mr-4">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    Visual Design
                  </h3>
                  <p className="text-gray-700">
                    Developing high-fidelity designs with attention to color,
                    typography, and visual elements.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-red-600 text-white font-bold mr-4">
                  5
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    Prototyping & Testing
                  </h3>
                  <p className="text-gray-700">
                    Creating interactive prototypes and validating designs
                    through user testing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Ready to Enhance Your User Experience?
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
