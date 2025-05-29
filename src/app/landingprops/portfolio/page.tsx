export default function Portfolio() {
  return (
    <main className="max-w-3xl mx-auto p-8 font-sans">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-900">
        Welcome to The Portfolio!
      </h1>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-blue-700">Website</h2>
        <p className="text-gray-700 leading-relaxed max-w-prose">
          This portfolio website showcases my projects, skills, and professional
          journey. Explore the projects below and get to know more about my
          work.
        </p>

        {/* Example website project */}
        {/* <div className="mt-6 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-2 text-gray-900">
            Project Name: Creative Portfolio
          </h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            A responsive portfolio website built with React and Tailwind CSS,
            featuring smooth animations and intuitive navigation.
          </p>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
          >
            Visit Website &rarr;
          </a>
        </div> */}
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4 text-blue-700">
          Case Study
        </h2>
        <p className="text-gray-700 leading-relaxed max-w-prose">
          Detailed insights into selected projects highlighting challenges,
          solutions, and impact.
        </p>

        {/* Example case study with image */}
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row gap-6 items-center">
          {/* Image Section */}
          <img
            src="/pr.jpg" // Replace with your actual image path
            alt="Dr. Puja Rawal Instagram Campaign"
            className="w-full md:w-1/3 rounded-lg object-cover"
          />

          {/* Text Section */}
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2 text-red-500">
              <span className="text-black font-bold">Case Study:</span> DR. Puja
              Rawal – Consultant Gynecologist
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              With a powerful blend of education, empathy, and consistency, Dr.
              Puja Rawal’s Instagram grew from a modest presence to a leading
              local digital brand for women's health.
            </p>
            <a
              href="/landingprops/portfolio/case-studies"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
            >
              Read Full Case Study &rarr;
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
