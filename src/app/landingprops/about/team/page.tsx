import React from "react";

const company = () => {
  const team = [
    {
      name: "Royas Bhatia",
      role: "Founder & CEO",
      icon: "👨‍💼",
      image: "/team3.jpg",
      desc: "With over a decade of experience in digital marketing, Royas founded Digital Metapedia to help businesses thrive in an ever-evolving digital world. His leadership, vision, and passion for innovation drive the company forward and ensure every client receives top-tier strategy and execution.",
    },
    {
      name: "Priya Sharma",
      role: "Creative Director",
      icon: "🎨",
      image: "/team.jpg",
      desc: "Priya blends creativity with strategy. With deep experience in design and branding, she ensures that every visual element aligns perfectly with brand goals. Her work helps clients make bold and lasting impressions online.",
    },
    {
      name: "Marcus Chen",
      role: "SEO Specialist",
      icon: "📈",
      image: "/tem6.jpg",
      desc: "Marcus is the backbone of our SEO strategies. Always ahead of algorithm updates, he fine-tunes client websites for maximum visibility, traffic, and conversions. His analytical mindset ensures results that speak volumes.",
    },
    {
      name: "Sophia Rodriguez",
      role: "Social Media Manager",
      icon: "📱",
      image: "/team4.jpg",
      desc: "Sophia is the voice behind your brand online. She crafts engaging, impactful, and interactive social media strategies that connect with the right audience and keep them coming back. Her creativity and trend-savviness make every brand stand out.",
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 py-16 text-gray-800">
      <section className="mb-20">
        <h2 className="text-4xl font-bold text-red-600 text-center mb-6">
          Meet Our Team
        </h2>
        <p className="text-lg text-center mb-10 font-medium">
          The Minds Behind Your Brand’s Digital Success
        </p>
        <p className="text-lg text-center max-w-3xl mx-auto mb-16">
          At <span className="italic font-semibold">Digital Metapedia</span>, we
          believe that great results start with great people. Our team is a
          dynamic mix of strategists, creators, and tech enthusiasts who bring
          energy, creativity, and expertise to every project. Together, we build
          brands, drive results, and shape digital success stories.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map(({ name, role, icon, desc, image }) => (
            <div
              key={name}
              className="bg-white flex flex-col shadow-md rounded-2xl overflow-hidden border hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={image}
                  alt={`${name} profile`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold mb-1">
                  {icon} {name}
                </h3>
                <h4 className="text-sm text-indigo-600 font-medium mb-3">
                  {role}
                </h4>
                <p className="text-sm text-gray-700">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold mb-4">
            💡 Why Our Team Stands Out
          </h3>
          <ul className="text-lg space-y-2">
            <li>✅ Collaborative & innovative mindset</li>
            <li>✅ Client-centric approach to every campaign</li>
            <li>✅ Expertise across all major digital channels</li>
            <li>✅ Driven by passion, powered by performance</li>
          </ul>
          <p className="mt-6 text-lg max-w-2xl mx-auto">
            👉 At{" "}
            <span className="italic font-semibold">Digital Metapedia</span>,
            it’s not just about delivering services — it’s about creating a
            digital experience that grows with your business.{" "}
            <strong>
              Get to know us. Work with us. Let’s achieve greatness together.
            </strong>
          </p>
        </div>
      </section>

      <footer className="mt-12 border-t pt-6 text-center text-gray-600 text-sm">
        <p>
          📍{" "}
          <span className="font-medium">
            Based in Sonipat, Working Pan-India
          </span>
        </p>
        <p className="mt-1">📞 Let's create digital success together.</p>
      </footer>
    </main>
  );
};

export default company;
