import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Mail, Phone, CheckCircle } from "lucide-react";
import { JotForm } from "./ui/jotform";

export const CTASection = () => {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !company) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    // console.log("Demo request submitted:", { email, company });

    window.open(
      "mailto:mike.kozelsky@gmail.com?subject=Job chemist demo request&body=${email} - ${company}",
      "_blank"
    );

    setIsSubmitted(true);

    toast({
      title: "Demo Requested!",
      description:
        "We'll contact you within 24 hours to schedule your personalized demo.",
    });
  };

  if (isSubmitted) {
    return (
      <section
        id="demo"
        className="py-20 px-6 lg:px-8 bg-gradient-to-br from-green-50 to-blue-50"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Thank You!</h2>
          <p className="text-xl text-gray-600 mb-8">
            Your demo request has been received. Our team will contact you
            within 24 hours to schedule your personalized JobChemist
            demonstration.
          </p>
          <div className="bg-white rounded-xl p-6 max-w-md mx-auto">
            <h3 className="font-semibold text-gray-900 mb-4">What's Next?</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-600" />
                <span className="text-gray-600">
                  We'll call you to schedule
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-blue-600" />
                <span className="text-gray-600">
                  30-minute personalized demo
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-600" />
                <span className="text-gray-600">Follow-up resources</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="demo"
      className="py-20 px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-purple-700"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center text-white mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            See JobChemist in Action
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Book a personalized demo and discover how JobChemist can transform
            your hiring process. No commitment required.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-2xl">
          <JotForm />

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              By requesting a demo, you agree to our Privacy Policy. We'll never
              share your information.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600">30 min</div>
              <div className="text-sm text-gray-600">Demo Duration</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">24 hrs</div>
              <div className="text-sm text-gray-600">Response Time</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">Free</div>
              <div className="text-sm text-gray-600">No Commitment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
