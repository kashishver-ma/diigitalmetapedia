import React from "react";

const AboutSection = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12 text-gray-800 text-capitalize">
      <section className="mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 italic mb-6">
          Your Growth, Our Mission.
        </h1>
        <p className="text-lg md:text-xl text-center max-w-3xl mx-auto mb-10 font-medium">
          Welcome to{" "}
          <span className="italic font-semibold">Digital Metapedia</span>,
          Sonipat’s trusted and performance-driven{" "}
          <strong className="font-bold">digital marketing agency</strong>. We
          specialize in helping businesses of all sizes grow their online
          presence, generate quality leads, and boost revenue through smart,
          tailored digital strategies.
        </p>

        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-red-600">
            Who We Are
          </h2>
          <p className="text-gray-700 text-lg">
            Founded with a vision to empower local and national brands with
            digital excellence,{" "}
            <span className="italic font-semibold">Digital Metapedia</span>{" "}
            brings together creativity, data, and cutting-edge technology to
            deliver real results. From startups and small businesses to
            established enterprises, we partner with ambitious brands who want
            to stand out online.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-red-600">
            What We Do
          </h2>
          <ul className="space-y-5 text-lg list-disc list-inside text-gray-700">
            <li>
              <strong>Social Media Marketing (SMM):</strong> Build engaging
              content, grow your community, and convert followers into loyal
              customers on platforms like Instagram, Facebook, and LinkedIn.
            </li>
            <li>
              <strong>Search Engine Optimization (SEO):</strong> Rank higher on
              Google, drive organic traffic, and attract the right audience with
              proven SEO practices.
            </li>
            <li>
              <strong>Google Ads (PPC):</strong> Run high-converting paid
              campaigns that give instant results and measurable ROI.
            </li>
            <li>
              <strong>Website Development:</strong> Create fast, responsive, and
              conversion-friendly websites that reflect your brand identity.
            </li>
            <li>
              <strong>Content Marketing & Branding:</strong> Develop compelling
              content and brand stories that make a lasting impression.
            </li>
            <li>
              <strong>Training & Consultation:</strong> Learn digital marketing
              from industry experts. We also offer coaching to aspiring
              marketers and business owners.
            </li>
          </ul>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-red-600">
            Why Choose Us?
          </h2>
          <ul className="space-y-2 text-lg text-gray-800">
            <li>
              ✅ <strong>Experienced Team</strong> with local market
              understanding
            </li>
            <li>
              ✅ <strong>Results-Oriented Approach</strong> focused on ROI
            </li>
            <li>
              ✅ <strong>Customized Strategies</strong> tailored to your brand
              goals
            </li>
            <li>
              ✅ <strong>Transparent Reporting</strong> and regular performance
              updates
            </li>
            <li>
              ✅ <strong>Affordable Packages</strong> for all business sizes
            </li>
          </ul>
          <p className="mt-6 text-lg max-w-3xl mx-auto text-center text-gray-700">
            We don’t just offer services — we build partnerships that grow
            stronger with every click, impression, and conversion.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-red-600">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700">
            To empower businesses in Sonipat and beyond by unlocking their full
            digital potential with performance-driven marketing solutions.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-red-600">
            Our Vision
          </h2>
          <p className="text-lg text-gray-700">
            To become Haryana’s most trusted digital marketing hub, fostering
            innovation, impact, and transformation in the online space.
          </p>
        </div>

        <footer className="mt-16 border-t pt-6 text-center text-gray-600 text-sm">
          <p>
            📍{" "}
            <span className="font-medium">
              Based in Sonipat, Working Pan-India
            </span>
          </p>
          <p className="mt-1">📞 Let's create digital success together.</p>
        </footer>
      </section>
    </main>
  );
};

export default AboutSection;
