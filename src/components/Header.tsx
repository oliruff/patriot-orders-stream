
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-semibold text-patriot-blue">
              Executive Orders
            </h1>
          </div>
          
          <div className="hidden md:flex items-center flex-1 max-w-sm mx-8">
            <div className="relative w-full">
              <Input
                type="search"
                placeholder="Search orders..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-patriot-blue"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-patriot-blue transition-colors">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-patriot-blue transition-colors">
              Orders
            </a>
            <a href="#" className="text-gray-600 hover:text-patriot-blue transition-colors">
              About
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
