
import { TrendingUp, Clock, DollarSign, Users } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "60% Time Savings",
      description: "Reduce administrative tasks significantly",
      metric: "More time for relationships",
      color: "blue"
    },
    {
      icon: DollarSign,
      title: "Higher Margins",
      description: "Increase efficiency and placement rates",
      metric: "Improved profitability",
      color: "green"
    },
    {
      icon: TrendingUp,
      title: "Better Placements",
      description: "Improved candidate-facility matching",
      metric: "Higher satisfaction",
      color: "purple"
    },
    {
      icon: Users,
      title: "Stronger Relationships",
      description: "More personal recruiter interactions",
      metric: "Increased loyalty",
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-600 border-blue-200",
      green: "bg-green-100 text-green-600 border-green-200",
      purple: "bg-purple-100 text-purple-600 border-purple-200",
      orange: "bg-orange-100 text-orange-600 border-orange-200"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="benefits" className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Measurable Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Healthcare staffing agencies using JobChemist see immediate improvements in efficiency, 
            placement quality, and recruiter satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-all duration-300">
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 border-2 ${getColorClasses(benefit.color)} group-hover:scale-110 transition-transform duration-200`}>
                <benefit.icon className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 mb-2">{benefit.description}</p>
              <p className="text-sm font-semibold text-blue-600">{benefit.metric}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Transform Your Agency?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Join healthcare staffing agencies already using JobChemist to build better relationships and increase placements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 hover:scale-105"
            >
              Schedule Your Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
