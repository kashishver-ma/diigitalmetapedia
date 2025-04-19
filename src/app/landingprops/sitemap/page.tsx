import Link from "next/link";

export default function sitemap() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Sitemap</h1>
      <div className="prose max-w-none">
        <h2>Main Pages</h2>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        <h2>Legal Pages</h2>
        <ul>
          <li>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/terms-of-service">Terms of Service</Link>
          </li>
        </ul>

        {/* Add more sitemap sections and links here */}
      </div>
    </div>
  );
}
