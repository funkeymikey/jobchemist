import { AlertTriangle, Clock, Users, TrendingDown } from "lucide-react";

export const ProblemSection = () => {
  const problems = [
    {
      icon: Clock,
      title: "Time-Consuming Processes",
      description:
        "Healthcare staffing agencies spend countless hours on manual tasks that could be automated, reducing time for candidate relationships.",
    },
    {
      icon: Users,
      title: "Poor Candidate Experience",
      description:
        "Lengthy, impersonal processes frustrate healthcare professionals, causing them to choose other agencies.",
    },
    {
      icon: TrendingDown,
      title: "Low Placement Rates",
      description:
        "Mismatched placements lead to dissatisfied facilities and candidates, hurting your agency's reputation and revenue.",
    },
    {
      icon: AlertTriangle,
      title: "Administrative Burden",
      description:
        "Recruiters spend too much time on paperwork and data entry instead of building relationships and closing placements.",
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The Healthcare Staffing Challenge
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Healthcare staffing agencies struggle with outdated processes that
            waste time, frustrate candidates, and ultimately limit growth and
            profitability.
          </p>
        </div>

        {/* Include image of recruiter */}
        <div className="mb-12 text-center">
          <img
            src="/recruiter.png"
            alt="Recruiter"
            className="mx-auto w-full max-w-md rounded-lg shadow-lg"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-200"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                <problem.icon className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {problem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
