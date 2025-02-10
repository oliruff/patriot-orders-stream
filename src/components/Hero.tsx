
const Hero = () => {
  return (
    <div className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-patriot-blue to-patriot-blue/90 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtMS4zNDYgMC0yLjU5OC0uNDctMy41ODItMS4yNTVhNCA0IDAgMCAwIDEuNTAyLTMuMTI1YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0YzAgMS4yNDUuNTY4IDIuMzUyIDEuNDYgMy4wOTJBNS45OTMgNS45OTMgMCAwIDAgMjQgMThjLTMuMzE0IDAtNiAyLjY4Ni02IDZzMi42ODYgNiA2IDYgNi0yLjY4NiA2LTYtMi42ODYtNi02LTZ6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10" />
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Executive Orders Tracker
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Stay informed with the latest executive orders and their impacts
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 bg-white text-patriot-blue rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              View Latest Orders
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
