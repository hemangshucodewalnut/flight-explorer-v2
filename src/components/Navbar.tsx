export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-sky-600">AirSearch</h1>
          </div>
          <button
            className="px-6 py-2 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700 transition-colors duration-200"
            onClick={() => alert('Waitlist feature coming soon!')}
          >
            Waitlist
          </button>
        </div>
      </div>
    </nav>
  );
}
