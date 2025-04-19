// /pages/portfolio/websites.js
import Head from "next/head";
import Image from "next/image";
import Layout from "../../../components/Layout";

export default function WebsitePortfolio() {
  // Sample portfolio projects
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform Redesign",
      client: "Fashion Boutique",
      description:
        "Complete redesign of an online fashion store, focusing on mobile responsiveness, conversion optimization, and improved user experience.",
      technologies: ["React", "Next.js", "Tailwind CSS", "Stripe"],
      imageUrl: "/images/portfolio/website-1.jpg",
    },
    {
      id: 2,
      title: "Corporate Website",
      client: "Financial Services Inc.",
      description:
        "Modern corporate website with advanced animations, interactive elements, and integrated customer portal for financial service management.",
      technologies: ["Vue.js", "Laravel", "GSAP", "MySQL"],
      imageUrl: "/images/portfolio/website-2.jpg",
    },
    {
      id: 3,
      title: "Real Estate Listing Platform",
      client: "Urban Properties",
      description:
        "Custom property listing platform with advanced search functionality, map integration, and virtual tour capabilities.",
      technologies: ["React", "Node.js", "MongoDB", "Google Maps API"],
      imageUrl: "/images/portfolio/website-3.jpg",
    },
    {
      id: 4,
      title: "Restaurant Ordering System",
      client: "Gourmet Chain",
      description:
        "Online food ordering system with real-time order tracking, table reservations, and loyalty program integration.",
      technologies: ["Angular", "Firebase", "Express.js", "Stripe"],
      imageUrl: "/images/portfolio/website-4.jpg",
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Website Portfolio | Digital Metapedia</title>
        <meta
          name="description"
          content="Explore our portfolio of custom-designed websites and web applications."
        />
      </Head>

      <div className="container mx-auto px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Website Portfolio
          </h1>

          <p className="text-lg text-gray-700 mb-12">
            Browse our collection of custom websites designed and developed for
            clients across various industries. Each project showcases our
            commitment to creating user-friendly, visually stunning, and
            high-performing web solutions.
          </p>

          <div className="space-y-16">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="md:flex">
                  <div className="md:w-2/5 bg-gray-200">
                    {/* Replace with actual Image component when you have images */}
                    <div className="h-64 w-full relative">
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-300 text-gray-500">
                        Project Image Placeholder
                      </div>
                    </div>
                  </div>

                  <div className="md:w-3/5 p-8">
                    <div className="uppercase tracking-wide text-sm text-red-600 font-semibold">
                      {project.client}
                    </div>
                    <h2 className="mt-2 text-2xl font-semibold text-gray-800">
                      {project.title}
                    </h2>
                    <p className="mt-3 text-gray-700">{project.description}</p>

                    <div className="mt-4">
                      <h3 className="text-sm uppercase tracking-wide font-semibold text-gray-600">
                        Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6">
                      <a
                        href="#"
                        className="inline-flex items-center text-red-600 hover:text-red-700"
                      >
                        View Case Study
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 ml-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Want to See More?
            </h2>
            <a
              href="/#contact"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Request Our Full Portfolio
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
