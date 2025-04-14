"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/dmlogo .jpg";
import dashboardd from "../../public/dashboard.jpg";

import { Menu, X, ChevronRight, ArrowRight } from "lucide-react";
import { db } from "../../lib/firebase"; // Make sure the path is correct
import { collection, addDoc } from "firebase/firestore";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [adminMenuOpen, setAdminMenuOpen] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Add state for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Add state for form submission
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitError("Please fill in all fields");
      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitError("");

      // Add document to 'contacts' collection
      await addDoc(collection(db, "contacts"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        createdAt: new Date(),
      });

      // Reset form and show success message
      setFormData({ name: "", email: "", message: "" });
      setSubmitSuccess(true);

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Services data
  const services = [
    {
      icon: "🚀",
      title: "Digital Strategy",
      description:
        "Comprehensive digital strategies tailored to meet your business goals and drive growth.",
    },
    {
      icon: "🎯",
      title: "Social Media Marketing",
      description:
        "Engage your audience and build brand awareness with effective social media campaigns.",
    },
    {
      icon: "📈",
      title: "SEO Optimization",
      description:
        "Improve your visibility and ranking on search engines to attract more organic traffic.",
    },
    {
      icon: "✏️",
      title: "Content Creation",
      description:
        "High-quality, engaging content that resonates with your audience and adds value.",
    },
  ];
  const projects = [
    {
      id: 1,
      title: "Puja Rawal Gynec",
      description: "Brand identity and digital campaign",
      image: "/p1.jpg", // Assuming p1.jpg is directly in the public folder
    },
    {
      id: 2,
      title: "SK Dental",
      description: "Social media marketing and content creation",
      image: "/p2.jpg",
    },
    {
      id: 3,
      title: "Fashion Diaries",
      description: "Marketing strategy and instagram SEO",
      image: "/p3.jpg",
    },
  ];

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "py-2 bg-white shadow-lg" : "py-4 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 relative">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              {logo ? (
                <Link href="/" className="flex items-center">
                  <Image
                    src={logo}
                    alt="Digital Metapedia Logo"
                    width={100}
                    height={50}
                    className="h-10 mr-3"
                  />
                </Link>
              ) : (
                <h1 className="text-2xl font-bold text-red-600">
                  DIGITAL METAPEDIA
                </h1>
              )}
            </div>

            {/* Main Navigation - Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <X size={24} className="text-gray-900" />
              ) : (
                <Menu size={24} className="text-gray-900" />
              )}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="#services"
                className="text-gray-800 hover:text-red-600 transition-colors"
              >
                Services
              </Link>
              <Link
                href="#portfolio"
                className="text-gray-800 hover:text-red-600 transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="#about"
                className="text-gray-800 hover:text-red-600 transition-colors"
              >
                About Us
              </Link>
              <Link
                href="#contact"
                className="text-gray-800 hover:text-red-600 transition-colors"
              >
                Contact
              </Link>

              {/* Admin access - subtle */}
              <div className="relative">
                <button
                  className="text-gray-500 hover:text-gray-700 text-sm"
                  onClick={() => setAdminMenuOpen(!adminMenuOpen)}
                >
                  Admin
                </button>

                {adminMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link
                      href="/dashboard"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                    >
                      Dashboard
                    </Link>
                    <Link
                      href="/login"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                    >
                      Login
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ${
              menuOpen
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              <Link
                href="#services"
                className="text-gray-800 hover:text-red-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#portfolio"
                className="text-gray-800 hover:text-red-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="#about"
                className="text-gray-800 hover:text-red-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="#contact"
                className="text-gray-800 hover:text-red-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>

              {/* Admin access on mobile */}
              <div className="pt-2 border-t border-gray-200">
                <p className="text-xs text-gray-500 mb-2">Admin Access:</p>
                <div className="flex space-x-4">
                  <Link href="/dashboard" className="text-sm text-gray-600">
                    Dashboard
                  </Link>
                  <Link href="/login" className="text-sm text-gray-600">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Animation */}
      <header className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-white overflow-hidden">
        {/* Animated Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-16 -left-16 w-64 h-64 bg-red-600 rounded-full opacity-10 animate-pulse"></div>
          <div
            className="absolute top-40 right-20 w-40 h-40 bg-yellow-400 rounded-full opacity-10 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-10 left-1/4 w-52 h-52 bg-red-500 rounded-full opacity-10 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0 relative z-10">
              <div className="animate-fadeIn">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
                  We Make <span className="text-red-600">Digital</span>{" "}
                  <span className="text-yellow-500">Magic</span> Happen
                </h1>
                <p className="text-xl mb-8 text-gray-700 max-w-lg">
                  Transform your brand with cutting-edge digital strategies that
                  deliver real results and outshine your competition.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#contact"
                    className="bg-red-600 text-white px-8 py-4 rounded-md font-bold hover:bg-red-700 transition flex items-center group"
                  >
                    Get Started
                    <ChevronRight
                      size={20}
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                  <a
                    href="#services"
                    className="bg-transparent border-2 border-yellow-500 text-yellow-500 px-6 py-3 rounded-md font-medium hover:bg-yellow-500 hover:text-white transition"
                  >
                    Our Services
                  </a>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 relative z-10">
              {/* The three-panel image */}
              <div className="relative h-80 md:h-96 w-full overflow-hidden rounded-lg animate-fadeInUp">
                <Image
                  src={dashboardd}
                  alt="Digital Marketing Panels"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our <span className="text-yellow-500">Services</span>
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We deliver comprehensive digital solutions that help your business
              grow and succeed in today's competitive market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg border border-gray-100 shadow-md hover:border-yellow-400 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-red-600">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center mt-4 text-yellow-500 hover:text-yellow-600 transition-colors group"
                >
                  Learn more{" "}
                  <ArrowRight
                    size={16}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our <span className="text-red-600">Work</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Browse through our portfolio of successful projects and see how
              we've helped businesses like yours achieve their goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="relative group overflow-hidden rounded-lg h-64 cursor-pointer shadow-md"
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-yellow-500 opacity-40 group-hover:opacity-20 transition-opacity z-10" />

                {/* Image */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Text */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-300 z-20">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    {project.description}
                  </p>
                  <a
                    href="#"
                    className="text-yellow-400 flex items-center opacity-0 group-hover:opacity-100 transition-opacity delay-200"
                  >
                    View Case Study <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Who <span className="text-red-600">We</span> Are
              </h2>
              <div className="w-24 h-1 bg-yellow-500 mb-6"></div>
              <p className="text-gray-700 mb-6">
                We're a team of digital enthusiasts, creatives, and strategists
                passionate about helping brands succeed in the digital
                landscape.
              </p>
              <p className="text-gray-700 mb-6">
                With over a decade of experience, we've helped businesses of all
                sizes transform their digital presence and achieve remarkable
                growth.
              </p>
              <div className="flex items-center space-x-4 mt-8">
                <div className="flex space-x-2">
                  <span className="text-4xl font-bold text-yellow-500">3</span>
                  <span className="text-gray-600 text-sm leading-tight">
                    Years
                    <br />
                    Experience
                  </span>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div className="flex space-x-2">
                  <span className="text-4xl font-bold text-red-600">50+</span>
                  <span className="text-gray-600 text-sm leading-tight">
                    Projects
                    <br />
                    Completed
                  </span>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div className="flex space-x-2">
                  <span className="text-4xl font-bold text-yellow-500">
                    10+
                  </span>
                  <span className="text-gray-600 text-sm leading-tight">
                    Team
                    <br />
                    Members
                  </span>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 md:pl-12">
              <div className="relative">
                <div className="absolute -left-4 -top-4 w-24 h-24 border-2 border-yellow-500 rounded-md"></div>
                <div className="relative z-10 bg-white p-6 rounded-md shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">
                    Our Mission
                  </h3>
                  <p className="text-gray-600 mb-6">
                    To empower businesses with innovative digital solutions that
                    drive growth, enhance brand visibility, and create
                    meaningful connections with their audiences.
                  </p>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">
                    Our Vision
                  </h3>
                  <p className="text-gray-600">
                    To be the leading digital agency that consistently delivers
                    exceptional results through creativity, technology, and
                    strategic thinking.
                  </p>
                </div>
                <div className="absolute -right-4 -bottom-4 w-24 h-24 border-2 border-red-600 rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Get In <span className="text-yellow-500">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Ready to take your digital presence to the next level? Let's talk
              about your project and how we can help.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  Send Us a Message
                </h3>
                {/* Inside your Contact Section, replace the existing form with this */}
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-gray-600 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 mb-2">Message</label>
                    <textarea
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500 transition"
                    ></textarea>
                  </div>

                  {submitError && (
                    <div className="text-red-600 text-sm">{submitError}</div>
                  )}

                  {submitSuccess && (
                    <div className="text-green-600 text-sm">
                      Thank you! Your message has been sent successfully.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-red-600 text-white py-3 rounded-md font-medium hover:bg-red-700 transition ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>

              <div className="md:w-1/2 bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 border-l border-gray-200">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1 text-gray-900">
                        Address
                      </h4>
                      <p className="text-gray-600">Sonipat,Haryana</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1 text-gray-900">
                        Email
                      </h4>
                      <p className="text-gray-600">
                        digitalmetapedia@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1 text-gray-900">
                        Phone
                      </h4>
                      <p className="text-gray-600">+91 7015524262</p>
                    </div>
                  </div>

                  <div className="pt-6">
                    <h4 className="text-lg font-medium mb-4 text-gray-900">
                      Follow Us
                    </h4>
                    <div className="flex space-x-4">
                      <a
                        href="https://www.facebook.com/share/15xafRJdDG/?mibextid=wwXIfr"
                        className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white hover:border-red-600 transition"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                      </a>
                      <a
                        href="https://www.instagram.com/digitalmetapedia"
                        className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white hover:border-red-600 transition"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-black py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-bold text-yellow-500 mb-4">
                DIGITAL METAPEDIA
              </h3>
              <p className="text-gray-700 max-w-md">
                Your partner for digital growth. We create innovative digital
                marketing strategies that drive results.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-yellow-500">
                  Quick Links
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#services"
                      className="text-gray-700 hover:text-yellow-500 transition"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#portfolio"
                      className="text-gray-700 hover:text-yellow-500 transition"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="text-gray-700 hover:text-yellow-500 transition"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="text-gray-700 hover:text-yellow-500 transition"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-yellow-500">
                  Services
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 hover:text-yellow-500 transition"
                    >
                      Social Media
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 hover:text-yellow-500 transition"
                    >
                      SEO
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 hover:text-yellow-500 transition"
                    >
                      Content Creation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 hover:text-yellow-500 transition"
                    >
                      Email Marketing
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h4 className="text-lg font-semibold mb-4 text-yellow-500">
                  Newsletter
                </h4>
                <p className="text-gray-700 mb-4">
                  Stay updated with our latest news and offers.
                </p>
                {/* <form className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-yellow-500 w-full"
                  />
                  <button
                    type="submit"
                    className="bg-red-600 text-white px-4 py-2 rounded-r-md hover:bg-red-700 transition"
                  >
                    Subscribe
                  </button>
                </form> */}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500">
              &copy; {new Date().getFullYear()} DIGITAL METAPEDIA. All rights
              reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-700 hover:text-yellow-500 transition"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-yellow-500 transition"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-yellow-500 transition"
                >
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.15;
          }
          100% {
            transform: scale(1);
            opacity: 0.1;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-pulse {
          animation: pulse 4s infinite ease-in-out;
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out 0.3s both;
        }
      `}</style>
    </div>
  );
}
