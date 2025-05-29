"use client";
import React, { useState } from "react";
import {
  ArrowRight,
  Zap,
  Target,
  Users,
  CheckCircle,
  Star,
  Play,
  TrendingUp,
  Award,
  Clock,
  Brain,
  Rocket,
} from "lucide-react";

import Link from "next/link";

const StrategyTeaserSections = () => {
  const [activeTeaser, setActiveTeaser] = useState("hero");

  const teaserOptions = [
    { id: "hero", name: "Hero Banner", placement: "Top of page - Primary CTA" },
  ];

  // Hero Banner Teaser (Primary placement)
  const HeroBannerTeaser = () => (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-6 rounded-2xl mb-12">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-semibold text-sm flex items-center">
            <Zap className="w-4 h-4 mr-1" />
            FREE STRATEGY TOOL
          </div>
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Discover Your Perfect Marketing Strategy in
          <span className="text-yellow-400"> 2 Minutes</span>
        </h2>

        <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
          Our AI-powered tool analyzes your business and creates a personalized
          marketing plan that actually works.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="flex items-center justify-center">
            <Clock className="w-6 h-6 mr-2 text-yellow-400" />
            <span>2-Minute Setup</span>
          </div>
          <div className="flex items-center justify-center">
            <Brain className="w-6 h-6 mr-2 text-yellow-400" />
            <span>AI-Powered Insights</span>
          </div>
          <div className="flex items-center justify-center">
            <Target className="w-6 h-6 mr-2 text-yellow-400" />
            <span>Personalized Results</span>
          </div>
        </div>

        <button className="bg-yellow-400 text-gray-900 font-bold py-4 px-8 rounded-xl hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 inline-flex items-center text-lg">
          <Link
            href={"/landingprops/teaser/strategy"}
            className="flex items-center"
          >
            Get My Free Strategy Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </button>

        <p className="text-sm text-blue-200 mt-4">
          ✨ 5,000+ businesses already generated their strategy
        </p>
      </div>
    </div>
  );

  const renderActiveTeaser = () => {
    switch (activeTeaser) {
      case "hero":
        return <HeroBannerTeaser />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Strategy Generator Landing Page Integration
          </h1>
          <p className="text-xl text-gray-600">
            Choose the best placement for your strategy generator teaser
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {teaserOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setActiveTeaser(option.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTeaser === option.id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              <div className="text-center">
                <div className="font-semibold">{option.name}</div>
                <div className="text-sm opacity-75">{option.placement}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Active Teaser Preview */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-4">
            <h3 className="font-semibold">
              Preview:{" "}
              {teaserOptions.find((opt) => opt.id === activeTeaser)?.name}
            </h3>
            <p className="text-sm text-gray-300">
              {teaserOptions.find((opt) => opt.id === activeTeaser)?.placement}
            </p>
          </div>

          <div className="p-6">{renderActiveTeaser()}</div>
        </div>

        {/* Implementation Tips */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-6">💡 Implementation Tips</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-3 text-blue-600">
                Best Practices
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Use urgency words like "Now", "Free", "2 Minutes"
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Add social proof numbers (5,000+ users)
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Make benefits specific to outcome
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Use contrasting colors for CTA buttons
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-3 text-purple-600">
                Conversion Optimization
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <Target className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                  A/B test different headlines
                </li>
                <li className="flex items-start">
                  <Target className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                  Track click-through rates from each section
                </li>
                <li className="flex items-start">
                  <Target className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                  Mobile-optimize for thumb-friendly buttons
                </li>
                <li className="flex items-start">
                  <Target className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                  Use exit-intent popups strategically
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Recommended Implementation */}
        <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 border border-green-200">
          <h3 className="text-2xl font-bold mb-4 text-green-800">
            🚀 Recommended Implementation
          </h3>
          <div className="space-y-4 text-gray-700">
            <p>
              <strong>Primary:</strong> Hero Banner - Maximum visibility and
              impact
            </p>
            <p>
              <strong>Secondary:</strong> Value Section - Catch users who
              scrolled past hero
            </p>
            <p>
              <strong>Support:</strong> Floating CTA - Always accessible without
              being intrusive
            </p>
            <p>
              <strong>Convert:</strong> Social Proof Section - Build trust
              before final push
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategyTeaserSections;
