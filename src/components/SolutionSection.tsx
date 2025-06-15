import { CheckCircle, Zap, Target, BarChart3 } from "lucide-react";

export const SolutionSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Automated Workflows",
      description:
        "Streamline repetitive tasks like credential tracking, compliance checks, and candidate communications.",
    },
    {
      icon: Target,
      title: "Smart Matching",
      description:
        "Advanced algorithms help match healthcare professionals to the right facilities based on skills, preferences, and availability.",
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description:
        "Real-time insights help you track placement success, candidate satisfaction, and agency performance metrics.",
    },
    {
      icon: CheckCircle,
      title: "Enhanced Relationships",
      description:
        "Remove the tedium so your recruiters can focus on building meaningful connections with candidates and facilities.",
    },
  ];

  return (
    <section
      id="solution"
      className="py-20 px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Meet JobChemist
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The intelligent platform that streamlines healthcare staffing
            operations, so your team can focus on what matters most -
            relationships and placements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="aspect-square bg-gradient-to-br from-blue-100 via-purple-50 to-indigo-100 rounded-xl flex items-center justify-center">
              <img
                src="/screenshot.png"
                alt="JobChemist Screenshot"
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
