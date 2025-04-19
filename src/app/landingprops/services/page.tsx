"use client";

import React from "react";
import Link from "next/link"; // Import Link component for routing

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
    link: "/landingprops/services/digital-marketing", // Link to Digital Marketing page
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
    link: "/landingprops/services/socialmedia-marketing", // Link to Digital Marketing page
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
    link: "/landingprops/services/web-development", // Link to Web Development page
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
    link: "/landingprops/services/ui-ux-design", // Link to UI/UX Design page
  },
  // Adding new services cards for Web Development, App Development, Digital Marketing, and UI/UX Design
  {
    icon: "🌐",
    title: "Web Development",
    overview:
      "We build responsive, SEO-friendly websites that meet your business goals. From custom solutions to CMS development, we handle all aspects of web development.",
    link: "/landingprops/services/web-development", // Link to Web Development page
  },
  {
    icon: "📱",
    title: "App Development",
    overview:
      "Our team develops innovative, user-friendly mobile apps tailored to your business needs. We build both iOS and Android apps that deliver seamless user experiences.",
    link: "/nav/app-development", // Link to App Development page
  },
  {
    icon: "📊",
    title: "Digital Marketing",
    overview:
      "We help you grow your online presence with strategies that include SEO, paid advertising, email marketing, and more, targeting the right audience at the right time.",
    link: "/digital-marketing", // Link to Digital Marketing page
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    overview:
      "We create visually stunning and user-centric designs that offer intuitive navigation and seamless user experiences. Our designs turn visitors into loyal customers.",
    link: "/landingprops/services/ui-ux-design", // Link to UI/UX Design page
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

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
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
            <Link
              href={service.link}
              className="text-yellow-600 mt-4 inline-block text-lg font-semibold hover:underline"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
