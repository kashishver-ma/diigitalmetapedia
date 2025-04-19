export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <header className="bg-blue-600 text-white p-4 text-center text-xl font-semibold">
        Simple Header
      </header>

      <main className="flex-grow p-6">{children}</main>

      <footer className="bg-gray-800 text-white text-center p-4">
        © 2025 Simple Footer
      </footer>
    </div>
  );
}
