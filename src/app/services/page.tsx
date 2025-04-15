import React from "react";

const services = [
  {
    icon: "🚀",
    title: "Digital Strategy",
    overview:
      "We craft tailored digital strategies that align with your unique business objectives. Whether you're just starting out or scaling up, we dive deep into your market, audience, and goals to build a strategic roadmap that drives sustainable growth.",
    features: [
      "Competitor & Market Analysis",
      "Digital Transformation Planning",
      "User Persona Development",
      "Channel-Specific Strategy (SEO, Ads, Social)",
      "KPIs & ROI Mapping",
    ],
    importance:
      "A strong strategy saves time and money, focuses your efforts, and helps you stand out in a crowded digital space.",
  },
  {
    icon: "🎯",
    title: "Social Media Marketing",
    overview:
      "We help you connect with your audience where they spend most of their time — on social platforms. From content calendars to viral campaigns, we manage your presence and build a loyal community around your brand.",
    features: [
      "Platform-Specific Strategy (Instagram, LinkedIn, Twitter, etc.)",
      "Content Creation & Scheduling",
      "Paid Social Ads & Retargeting",
      "Influencer Collaborations",
      "Community Management & Engagement",
    ],
    importance:
      "Social media humanizes your brand and drives real-time engagement, trust, and conversions.",
  },
  {
    icon: "📈",
    title: "SEO Optimization",
    overview:
      "Get found on Google — the smart way. Our SEO services are built on real data and evolving algorithms. We optimize your website and content so you rank higher, get more clicks, and drive organic traffic consistently.",
    features: [
      "Technical SEO Audit",
      "Keyword Research & Targeting",
      "On-Page SEO (Meta, Headers, Content)",
      "Off-Page SEO (Link Building)",
      "Performance & Ranking Reports",
    ],
    importance:
      "75% of users never scroll past the first page. SEO gets you there — and keeps you there.",
  },
  {
    icon: "✏️",
    title: "Content Creation",
    overview:
      "Content is the foundation of every successful marketing strategy. We create powerful, engaging content that educates, entertains, and converts — across every format and platform.",
    features: [
      "Blog Articles & Website Copy",
      "Video Scripts & Storyboards",
      "Infographics & Visual Content",
      "Email Campaigns & Newsletters",
      "Product Descriptions & Case Studies",
    ],
    importance:
      "Quality content builds trust, boosts SEO, and keeps your audience coming back for more.",
  },
];

const Services = () => {
  return (
    <div className="bg-white min-h-screen px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Our Services
      </h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        We offer a wide range of services to help you grow your online presence
        and reach your target audience effectively.
      </p>

      <div className="grid gap-10 md:grid-cols-2">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-yellow-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h2 className="text-2xl font-semibold text-yellow-800 mb-4">
              {service.title}
            </h2>
            <p className="text-gray-700 mb-4">{service.overview}</p>
            <h3 className="font-medium text-yellow-700 mb-2">What we offer:</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
              {service.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <h3 className="font-medium text-yellow-700 mb-1">
              Why it matters:
            </h3>
            <p className="text-gray-700">{service.importance}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
