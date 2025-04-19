export default function terms() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <div className="prose max-w-none">
        <p>Last updated: {new Date().toLocaleDateString()}</p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using our service, you agree to be bound by these
          Terms of Service.
        </p>

        {/* Add more terms of service content here */}
      </div>
    </div>
  );
}
