export default function privacypolicy() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="prose max-w-none">
        <p>Last updated: {new Date().toLocaleDateString()}</p>

        <h2>1. Introduction</h2>
        <p>
          Welcome to Your Company's Privacy Policy. This document explains how
          we collect, use, and share your information when you use our services.
        </p>

        {/* Add more privacy policy content here */}
      </div>
    </div>
  );
}
