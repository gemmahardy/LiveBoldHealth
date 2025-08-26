import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "./ui/button";
import { BarChart3, Zap, Heart, Trophy, Activity } from "lucide-react";

interface AssessmentAnswer {
  questionId: string;
  answer: string;
}

interface AssessmentResults {
  primaryFocus: string;
  recommendedPlan: string;
  timeline: string;
  insights: string[];
}

export function HealthAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<AssessmentAnswer[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [assessmentResults, setAssessmentResults] = useState<AssessmentResults | null>(null);
  const [email, setEmail] = useState("");

  const queryClient = useQueryClient();

  const assessmentMutation = useMutation({
    mutationFn: async (data: { email: string; answers: AssessmentAnswer[]; results: AssessmentResults }) => {
      return apiRequest('POST', '/api/assessments', data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/assessments'] });
    }
  });

  const questions = [
    {
      id: "primary-goal",
      title: "What's your primary health and performance goal?",
      options: [
        {
          value: "energy",
          icon: Zap,
          title: "Increase Energy & Vitality",
          description: "Feel energized throughout demanding days"
        },
        {
          value: "longevity", 
          icon: Heart,
          title: "Optimize for Longevity",
          description: "Enhance healthspan and extend peak performance years"
        },
        {
          value: "performance",
          icon: Trophy,
          title: "Peak Mental Performance", 
          description: "Sharpen focus, memory, and decision-making"
        },
        {
          value: "recovery",
          icon: Activity,
          title: "Stress Management & Recovery",
          description: "Better sleep, recovery, and stress resilience"
        }
      ]
    },
    {
      id: "current-challenges",
      title: "What's your biggest health challenge right now?",
      options: [
        {
          value: "fatigue",
          icon: Zap,
          title: "Chronic Fatigue",
          description: "Feeling tired despite adequate sleep"
        },
        {
          value: "stress",
          icon: Activity,
          title: "High Stress Levels",
          description: "Difficulty managing work-life pressure"
        },
        {
          value: "focus",
          icon: Trophy,
          title: "Mental Fog",
          description: "Struggling with concentration and clarity"
        },
        {
          value: "time",
          icon: Heart,
          title: "No Time for Health",
          description: "Too busy to maintain consistent wellness routines"
        }
      ]
    },
    {
      id: "experience-level",
      title: "What's your experience with health optimization?",
      options: [
        {
          value: "beginner",
          icon: Heart,
          title: "Just Getting Started",
          description: "New to structured health optimization"
        },
        {
          value: "intermediate",
          icon: Trophy,
          title: "Some Experience",
          description: "Have tried various approaches with mixed results"
        },
        {
          value: "advanced",
          icon: Zap,
          title: "Well-Versed",
          description: "Experienced but seeking next-level optimization"
        },
        {
          value: "expert",
          icon: Activity,
          title: "Highly Experienced", 
          description: "Looking for cutting-edge, personalized approaches"
        }
      ]
    }
  ];

  const handleAnswer = (value: string) => {
    const newAnswer: AssessmentAnswer = {
      questionId: questions[currentQuestion].id,
      answer: value
    };
    
    const updatedAnswers = [...answers.filter(a => a.questionId !== questions[currentQuestion].id), newAnswer];
    setAnswers(updatedAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Generate results
      const results = generateResults(updatedAnswers);
      setAssessmentResults(results);
      setShowResults(true);
    }
  };

  const generateResults = (assessmentAnswers: AssessmentAnswer[]): AssessmentResults => {
    const primaryGoal = assessmentAnswers.find(a => a.questionId === "primary-goal")?.answer || "energy";
    const challenge = assessmentAnswers.find(a => a.questionId === "current-challenges")?.answer || "fatigue";
    const experience = assessmentAnswers.find(a => a.questionId === "experience-level")?.answer || "beginner";

    let primaryFocus = "Energy & Vitality";
    let recommendedPlan = "VIP Concierge";
    let timeline = "90-Day Protocol";

    switch (primaryGoal) {
      case "longevity":
        primaryFocus = "Longevity Optimization";
        recommendedPlan = "Founders Circle";
        timeline = "6-Month Program";
        break;
      case "performance":
        primaryFocus = "Mental Performance";
        recommendedPlan = "VIP Concierge";
        timeline = "90-Day Protocol";
        break;
      case "recovery":
        primaryFocus = "Stress & Recovery";
        recommendedPlan = "Essential Concierge";
        timeline = "60-Day Protocol";
        break;
    }

    if (experience === "expert" || experience === "advanced") {
      recommendedPlan = "Founders Circle";
    }

    const insights = [
      `Based on your focus on ${primaryFocus.toLowerCase()}, we recommend starting with advanced diagnostics.`,
      `Your ${challenge} challenges suggest personalized protocols will be most effective.`,
      `With your ${experience} experience level, we can accelerate your optimization journey.`
    ];

    return { primaryFocus, recommendedPlan, timeline, insights };
  };

  const handleSubmitAssessment = async () => {
    if (!email) {
      alert("Please enter your email to continue.");
      return;
    }

    if (assessmentResults) {
      try {
        await assessmentMutation.mutateAsync({
          email,
          answers,
          results: assessmentResults
        });
        alert("Perfect! Your assessment is complete. Sunshine will review your personalized results with you during your consultation.");
      } catch (error) {
        alert("Failed to save assessment. Please try again.");
      }
    }
  };

  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

  if (showResults && assessmentResults) {
    return (
      <section id="assessment" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="luxury-card rounded-2xl p-8">
              <div className="text-center space-y-8">
                <div className="w-24 h-24 bg-sun-gradient rounded-full flex items-center justify-center mx-auto">
                  <BarChart3 className="h-12 w-12 text-white" />
                </div>
                
                <div>
                  <h4 className="font-playfair text-2xl sm:text-3xl font-bold mb-4" data-testid="assessment-results-title">
                    Your Personalized Health Profile
                  </h4>
                  <p className="text-lg sm:text-xl text-gray-600 mb-8">
                    Based on your responses, here's your customized optimization strategy:
                  </p>
                </div>
                
                <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
                  <div className="bg-orange-50 rounded-xl p-6">
                    <h5 className="font-semibold text-lg mb-2">Priority Focus</h5>
                    <p className="text-gray-600" data-testid="assessment-primary-focus">
                      {assessmentResults.primaryFocus}
                    </p>
                  </div>
                  <div className="bg-orange-50 rounded-xl p-6">
                    <h5 className="font-semibold text-lg mb-2">Recommended Plan</h5>
                    <p className="text-gray-600" data-testid="assessment-recommended-plan">
                      {assessmentResults.recommendedPlan}
                    </p>
                  </div>
                  <div className="bg-orange-50 rounded-xl p-6">
                    <h5 className="font-semibold text-lg mb-2">Timeline</h5>
                    <p className="text-gray-600" data-testid="assessment-timeline">
                      {assessmentResults.timeline}
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h5 className="font-semibold text-lg mb-4">Key Insights</h5>
                  <ul className="space-y-2 text-left text-gray-600">
                    {assessmentResults.insights.map((insight, index) => (
                      <li key={index} className="flex items-start space-x-2" data-testid={`assessment-insight-${index}`}>
                        <span className="text-brand-orange mt-1">•</span>
                        <span>{insight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email to continue"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-brand-orange"
                    data-testid="input-assessment-email"
                  />
                  
                  <p className="text-lg font-medium text-luxury-charcoal">
                    Ready to review your personalized results with Sunshine?
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      onClick={() => {
                        handleSubmitAssessment();
                        setTimeout(() => {
                          window.open('https://calendly.com/contact-sunryz/live-bold-consultation', '_blank');
                        }, 1500);
                      }}
                      className="bg-luxury-gradient text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all"
                      disabled={assessmentMutation.isPending}
                      data-testid="button-save-assessment"
                    >
                      {assessmentMutation.isPending ? "Saving..." : "Complete & Book Consultation"}
                    </Button>
                    
                    <Button 
                      onClick={() => window.open('https://calendly.com/contact-sunryz/live-bold-consultation', '_blank')}
                      className="border-2 border-brand-orange text-brand-orange px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand-orange hover:text-white transition-all"
                      data-testid="button-book-consultation-assessment"
                    >
                      Book Consultation Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="assessment" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-luxury-charcoal mb-4">
              Health & Longevity Assessment - VO2 Max & RMR Testing
            </h2>
            <p className="text-xl text-gray-600">
              Discover your personalized path to 10X longevity, peak fitness performance, and optimal wellness with advanced VO2 Max testing and RMR testing.
            </p>
          </div>
          
          <div className="luxury-card rounded-2xl p-8">
            <div className="space-y-8">
              <div className="flex items-center justify-between mb-8">
                <span className="text-sm font-semibold text-brand-copper" data-testid="assessment-progress-text">
                  QUESTION {currentQuestion + 1} OF {questions.length}
                </span>
                <div className="w-64 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-luxury-gradient h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${progressPercentage}%` }}
                    data-testid="assessment-progress-bar"
                  ></div>
                </div>
              </div>
              
              <h4 className="font-playfair text-2xl font-semibold mb-8" data-testid="assessment-question-title">
                {questions[currentQuestion].title}
              </h4>
              
              <div className="grid gap-4">
                {questions[currentQuestion].options.map((option, index) => {
                  const IconComponent = option.icon;
                  return (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(option.value)}
                      className="text-left p-6 border-2 border-gray-200 rounded-xl hover:border-brand-orange hover:bg-orange-50 transition-all"
                      data-testid={`assessment-option-${index}`}
                    >
                      <div className="flex items-center space-x-4">
                        <IconComponent className="h-6 w-6 text-brand-orange" />
                        <div>
                          <p className="font-semibold text-lg">{option.title}</p>
                          <p className="text-gray-600">{option.description}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
