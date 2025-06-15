import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img
              src="logo.svg"
              alt="JobChemist Logo"
              className="h-8 w-auto mr-4"
            />
            {/* <div className="text-2xl font-bold text-blue-600">JobChemist</div> */}
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("solution")}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Solution
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Benefits
            </button>
          </div>

          <Button
            onClick={() => scrollToSection("demo")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-200 hover:scale-105"
          >
            Book Demo
          </Button>
        </div>
      </div>
    </nav>
  );
};
