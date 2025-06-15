import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  const scrollToDemo = () => {
    const element = document.getElementById("demo");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-24 pb-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Transform Your
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Healthcare Staffing{" "}
            </span>
            Process
          </h1>

          <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
            JobChemist removes the tedium from healthcare staffing, giving your
            recruiters more time to build meaningful relationships with
            candidates and healthcare facilities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={scrollToDemo}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Book Your Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
