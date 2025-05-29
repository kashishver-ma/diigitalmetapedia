"use client";
import React, { useState } from "react";
import {
  ArrowRight,
  Target,
  DollarSign,
  Users,
  Zap,
  CheckCircle,
  Download,
  Share2,
} from "lucide-react";
import { useRouter } from "next/navigation";

const StrategyGenerator = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    businessType: "",
    targetAudience: "",
    budgetRange: 5000,
    primaryGoal: "",
    industry: "",
    experience: "",
  });
  type Strategy = {
    platforms: { name: string; priority: string; reason: string }[];
    adTypes: { type: string; description: string }[];
    budget: {
      total: number;
      breakdown: { platform: string; amount: number; percentage: number }[];
    };
    timeline: { phase: string; tasks: string[] }[];
    tools: { name: string; purpose: string }[];
    kpis: { metric: string; target: string }[];
  };

  const [generatedStrategy, setGeneratedStrategy] = useState<Strategy | null>(
    null
  );
  const [isGenerating, setIsGenerating] = useState(false);

  const businessTypes = [
    "E-commerce Store",
    "Local Service Business",
    "B2B Software/SaaS",
    "Restaurant/Food Service",
    "Healthcare/Medical",
    "Real Estate",
    "Education/Training",
    "Fitness/Wellness",
    "Professional Services",
    "Other",
  ];

  const primaryGoals = [
    "Increase Brand Awareness",
    "Generate More Leads",
    "Boost Online Sales",
    "Drive Website Traffic",
    "Improve Customer Engagement",
    "Launch New Product/Service",
  ];

  const targetAudiences = [
    "18-25 years (Gen Z)",
    "26-35 years (Millennials)",
    "36-45 years (Gen X)",
    "46-55 years (Older Gen X)",
    "55+ years (Baby Boomers)",
    "Mixed Age Groups",
  ];

  const handleInputChange = (
    field: keyof typeof formData,
    value: string | number
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const generateStrategy = () => {
    setIsGenerating(true);

    // Simulate AI generation with realistic delay
    setTimeout(() => {
      const strategy = createStrategy(formData);
      setGeneratedStrategy(strategy);
      setIsGenerating(false);
    }, 2000);
  };

  const createStrategy = (data: typeof formData) => {
    // This would typically call your AI API, but here's a smart rule-based system
    const strategies = {
      platforms: getPlatformRecommendations(data),
      adTypes: getAdTypeRecommendations(data),
      budget: getBudgetBreakdown(data),
      timeline: getTimelineRecommendations(data),
      tools: getToolRecommendations(data),
      kpis: getKPIRecommendations(data),
    };

    return strategies;
  };

  const getPlatformRecommendations = (data: typeof formData) => {
    const platforms = [];

    if (
      data.targetAudience.includes("18-25") ||
      data.targetAudience.includes("26-35")
    ) {
      platforms.push({
        name: "Instagram",
        priority: "High",
        reason: "Perfect for younger demographics",
      });
      platforms.push({
        name: "TikTok",
        priority: "High",
        reason: "Massive reach among Gen Z and Millennials",
      });
    }

    if (
      data.businessType.includes("B2B") ||
      data.businessType.includes("Professional")
    ) {
      platforms.push({
        name: "LinkedIn",
        priority: "High",
        reason: "Essential for B2B and professional services",
      });
    }

    platforms.push({
      name: "Facebook",
      priority: "Medium",
      reason: "Broad reach across all demographics",
    });
    platforms.push({
      name: "Google Ads",
      priority: "High",
      reason: "Captures high-intent searches",
    });

    return platforms.slice(0, 4);
  };

  const getAdTypeRecommendations = (data: typeof formData) => {
    const adTypes = [];

    if (data.primaryGoal.includes("Brand Awareness")) {
      adTypes.push({
        type: "Video Ads",
        description: "Build brand recognition with engaging video content",
      });
      adTypes.push({
        type: "Display Ads",
        description: "Visual brand exposure across websites",
      });
    }

    if (data.primaryGoal.includes("Leads")) {
      adTypes.push({
        type: "Lead Generation Ads",
        description: "Capture contact info directly",
      });
      adTypes.push({
        type: "Search Ads",
        description: "Target high-intent keywords",
      });
    }

    if (data.primaryGoal.includes("Sales")) {
      adTypes.push({
        type: "Shopping Ads",
        description: "Showcase products directly in search",
      });
      adTypes.push({
        type: "Retargeting Ads",
        description: "Re-engage visitors who didn't convert",
      });
    }

    return adTypes.slice(0, 3);
  };

  const getBudgetBreakdown = (data: typeof formData) => {
    const budget = parseInt(data.budgetRange as unknown as string);
    return {
      total: budget,
      breakdown: [
        {
          platform: "Google Ads",
          amount: Math.round(budget * 0.4),
          percentage: 40,
        },
        {
          platform: "Facebook/Instagram",
          amount: Math.round(budget * 0.35),
          percentage: 35,
        },
        {
          platform: "Other Platforms",
          amount: Math.round(budget * 0.25),
          percentage: 25,
        },
      ],
    };
  };

  const getTimelineRecommendations = (data: typeof formData) => {
    return [
      {
        phase: "Week 1-2",
        tasks: ["Set up campaigns", "Create ad creatives", "Install tracking"],
      },
      {
        phase: "Week 3-4",
        tasks: ["Launch campaigns", "Monitor performance", "A/B test ads"],
      },
      {
        phase: "Month 2",
        tasks: [
          "Optimize based on data",
          "Scale winning campaigns",
          "Adjust targeting",
        ],
      },
      {
        phase: "Month 3+",
        tasks: ["Expand to new platforms", "Refine strategy", "Maximize ROI"],
      },
    ];
  };

  const getToolRecommendations = (data: typeof formData) => {
    return [
      {
        name: "Google Analytics",
        purpose: "Track website performance and conversions",
      },
      {
        name: "Facebook Pixel",
        purpose: "Track social media campaign performance",
      },
      { name: "Canva", purpose: "Create professional ad creatives easily" },
      { name: "Hootsuite", purpose: "Schedule and manage social media posts" },
    ];
  };

  const getKPIRecommendations = (data: typeof formData) => {
    const kpis = [];

    if (data.primaryGoal.includes("Brand Awareness")) {
      kpis.push({
        metric: "Reach & Impressions",
        target: "Increase by 50% monthly",
      });
      kpis.push({
        metric: "Brand Mention Tracking",
        target: "Monitor social mentions",
      });
    }

    if (data.primaryGoal.includes("Leads")) {
      kpis.push({
        metric: "Cost Per Lead (CPL)",
        target: "Under Rs.50 per lead",
      });
      kpis.push({
        metric: "Lead Quality Score",
        target: "Maintain 70%+ qualification rate",
      });
    }

    if (data.primaryGoal.includes("Sales")) {
      kpis.push({
        metric: "Return on Ad Spend (ROAS)",
        target: "4:1 or higher",
      });
      kpis.push({ metric: "Conversion Rate", target: "Improve by 25%" });
    }

    kpis.push({
      metric: "Click-Through Rate (CTR)",
      target: "Above industry average (2%+)",
    });

    return kpis;
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      generateStrategy();
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (generatedStrategy) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Your Personalized Marketing Strategy
            </h1>
            <p className="text-xl text-gray-600">
              Tailored specifically for your{" "}
              {formData.businessType.toLowerCase()}
            </p>
          </div>

          {/* Strategy Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Platform Recommendations */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Target className="w-6 h-6 mr-2 text-blue-600" />
                Recommended Platforms
              </h3>
              <div className="space-y-4">
                {generatedStrategy.platforms.map((platform, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold text-lg">{platform.name}</h4>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          platform.priority === "High"
                            ? "bg-red-100 text-red-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {platform.priority} Priority
                      </span>
                    </div>
                    <p className="text-gray-600 mt-1">{platform.reason}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Budget Breakdown */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <DollarSign className="w-6 h-6 mr-2 text-green-600" />
                Budget Allocation
              </h3>
              <div className="space-y-4">
                {generatedStrategy.budget.breakdown.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <span className="font-medium">{item.platform}</span>
                    <div className="text-right">
                      <div className="font-bold text-lg">
                        Rs. {item.amount.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500">
                        {item.percentage}%
                      </div>
                    </div>
                  </div>
                ))}
                <div className="border-t pt-4 flex justify-between items-center font-bold text-lg">
                  <span>Total Monthly Budget</span>
                  <span>
                    Rs. {generatedStrategy.budget.total.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Ad Types */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Zap className="w-6 h-6 mr-2 text-purple-600" />
              Recommended Ad Types
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {generatedStrategy.adTypes.map((adType, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <h4 className="font-semibold text-lg mb-2">{adType.type}</h4>
                  <p className="text-gray-600">{adType.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Implementation Timeline
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {generatedStrategy.timeline.map((phase, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <h4 className="font-semibold text-lg mb-3 text-blue-600">
                    {phase.phase}
                  </h4>
                  <ul className="space-y-2">
                    {phase.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* KPIs */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Key Performance Indicators
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {generatedStrategy.kpis.map((kpi, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
                >
                  <div>
                    <h4 className="font-semibold">{kpi.metric}</h4>
                    <p className="text-sm text-gray-600">
                      Target: {kpi.target}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Recommended Tools
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {generatedStrategy.tools.map((tool, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 border rounded-lg"
                >
                  <div>
                    <h4 className="font-semibold text-lg">{tool.name}</h4>
                    <p className="text-gray-600">{tool.purpose}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Implement Your Strategy?
            </h3>
            <p className="text-xl mb-6">
              Let our experts help you execute this plan and achieve your
              marketing goals!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push("/#contact")}
                className="bg-blue-100200 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors flex items-center justify-center"
              >
                Contact Us for more Recommendations
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI-Powered Marketing Strategy Generator
          </h1>
          <p className="text-xl text-gray-600">
            Get a personalized digital marketing strategy in under 2 minutes
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-gray-700">
              Step {currentStep} of 3
            </span>
            <span className="text-sm font-medium text-gray-700">
              {Math.round((currentStep / 3) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          {isGenerating ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Generating Your Strategy...
              </h3>
              <p className="text-gray-600">
                Our AI is analyzing your business and creating a personalized
                plan
              </p>
            </div>
          ) : (
            <>
              {currentStep === 1 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Tell us about your business
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        What type of business do you run?
                      </label>
                      <select
                        value={formData.businessType}
                        onChange={(e) =>
                          handleInputChange("businessType", e.target.value)
                        }
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select your business type</option>
                        {businessTypes.map((type, index) => (
                          <option key={index} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        What's your primary marketing goal?
                      </label>
                      <select
                        value={formData.primaryGoal}
                        onChange={(e) =>
                          handleInputChange("primaryGoal", e.target.value)
                        }
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select your primary goal</option>
                        {primaryGoals.map((goal, index) => (
                          <option key={index} value={goal}>
                            {goal}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Who is your target audience?
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Primary age group of your customers
                      </label>
                      <select
                        value={formData.targetAudience}
                        onChange={(e) =>
                          handleInputChange("targetAudience", e.target.value)
                        }
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select age group</option>
                        {targetAudiences.map((audience, index) => (
                          <option key={index} value={audience}>
                            {audience}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your experience with digital marketing
                      </label>
                      <select
                        value={formData.experience}
                        onChange={(e) =>
                          handleInputChange("experience", e.target.value)
                        }
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select your experience level</option>
                        <option value="beginner">
                          Beginner - Just getting started
                        </option>
                        <option value="intermediate">
                          Intermediate - Some experience
                        </option>
                        <option value="advanced">
                          Advanced - Very experienced
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    What's your budget?
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Monthly marketing budget (INR)
                      </label>
                      <div className="px-3 py-2">
                        <input
                          type="range"
                          min="1000"
                          max="50000"
                          step="1000"
                          value={formData.budgetRange}
                          onChange={(e) =>
                            handleInputChange("budgetRange", e.target.value)
                          }
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between text-sm text-gray-500 mt-2">
                          <span>Rs.1,000</span>
                          <span className="font-bold text-lg text-blue-600">
                            Rs.{formData.budgetRange.toLocaleString()}
                          </span>
                          <span>Rs.50,000+</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-900 mb-2">
                        Ready to generate your strategy!
                      </h4>
                      <p className="text-blue-700 text-sm">
                        We'll create a personalized marketing plan based on your
                        business type, goals, audience, and budget.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                    currentStep === 1
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  Previous
                </button>

                <button
                  onClick={nextStep}
                  disabled={
                    (currentStep === 1 &&
                      (!formData.businessType || !formData.primaryGoal)) ||
                    (currentStep === 2 &&
                      (!formData.targetAudience || !formData.experience)) ||
                    (currentStep === 3 && !formData.budgetRange)
                  }
                  className={`px-8 py-3 rounded-lg font-semibold transition-colors flex items-center ${
                    (currentStep === 1 &&
                      (!formData.businessType || !formData.primaryGoal)) ||
                    (currentStep === 2 &&
                      (!formData.targetAudience || !formData.experience)) ||
                    (currentStep === 3 && !formData.budgetRange)
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  {currentStep === 3 ? "Generate Strategy" : "Next Step"}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </>
          )}
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            Trusted by 500+ businesses to grow their digital presence
          </p>
          <div className="flex justify-center items-center space-x-8 text-gray-400">
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              <span>10,000+ strategies generated</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>AI-powered insights</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategyGenerator;
