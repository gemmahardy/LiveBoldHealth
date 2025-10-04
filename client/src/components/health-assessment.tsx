import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "./ui/button";
import { SunLogo } from "./ui/sun-logo";
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
    let recommendedPlan = "Community Membership + Private Coaching";
    let timeline = "90-Day Protocol";

    switch (primaryGoal) {
      case "longevity":
        primaryFocus = "Longevity Optimization";
        recommendedPlan = "Community Membership + Elite Longevity Lab";
        timeline = "6-Month Program";
        break;
      case "performance":
        primaryFocus = "Mental Performance";
        recommendedPlan = "Community Membership + Performance Tracking";
        timeline = "90-Day Protocol";
        break;
      case "recovery":
        primaryFocus = "Stress & Recovery";
        recommendedPlan = "Community Membership + Recovery Suite";
        timeline = "60-Day Protocol";
        break;
    }

    if (experience === "expert" || experience === "advanced") {
      recommendedPlan = "Community Membership + Executive Performance";
    }

    const insights = [
      `Based on your focus on ${primaryFocus.toLowerCase()}, we recommend starting with VO₂ Max & RMR testing.`,
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
      <section id="assessment" className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/4 w-[700px] sm:w-[850px] h-[700px] sm:h-[850px] opacity-35 -rotate-12">
          <SunLogo className="w-full h-full text-brand-blue" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
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
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h5 className="font-semibold text-lg mb-2">Priority Focus</h5>
                    <p className="text-gray-600" data-testid="assessment-primary-focus">
                      {assessmentResults.primaryFocus}
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h5 className="font-semibold text-lg mb-2">Recommended Plan</h5>
                    <p className="text-gray-600" data-testid="assessment-recommended-plan">
                      {assessmentResults.recommendedPlan}
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-6">
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
                        <span className="text-brand-blue mt-1">•</span>
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-brand-blue"
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
                      className="border-2 border-brand-blue text-brand-blue px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand-blue hover:text-white transition-all"
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
    <section id="assessment" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-white via-blue-50/20 to-luxury-gray relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[800px] sm:w-[950px] h-[800px] sm:h-[950px] opacity-38 rotate-12">
        <SunLogo className="w-full h-full text-brand-gold" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-luxury-charcoal mb-3 sm:mb-4 px-2">
              Health & Longevity Assessment
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-brand-blue mb-3 sm:mb-4 px-2">
              VO₂ Max & RMR Testing
            </p>
            <p className="text-base sm:text-lg md:text-xl text-brand-slate max-w-3xl mx-auto px-4">
              Discover your personalized path to 10X longevity, peak fitness performance, and optimal wellness with advanced VO₂ Max testing and RMR testing.
            </p>
            <blockquote className="text-sm sm:text-base md:text-lg font-medium text-brand-blue italic mt-6 border-l-4 border-brand-blue pl-4 max-w-3xl mx-auto mx-4">
              "Knowing your VO₂ Max is the greatest predictor of lifespan" — Dr. Peter Attia
            </blockquote>
          </div>
          
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-brand-blue/10">
            <div className="space-y-6 sm:space-y-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 sm:mb-8">
                <span className="text-xs sm:text-sm font-semibold text-brand-slate" data-testid="assessment-progress-text">
                  QUESTION {currentQuestion + 1} OF {questions.length}
                </span>
                <div className="w-full sm:w-64 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-600 to-yellow-500 h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${progressPercentage}%` }}
                    data-testid="assessment-progress-bar"
                  ></div>
                </div>
              </div>
              
              <h4 className="font-playfair text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 px-2" data-testid="assessment-question-title">
                {questions[currentQuestion].title}
              </h4>
              
              <div className="grid gap-3 sm:gap-4">
                {questions[currentQuestion].options.map((option, index) => {
                  const IconComponent = option.icon;
                  return (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(option.value)}
                      className="text-left p-4 sm:p-6 border-2 border-gray-200 rounded-xl hover:border-brand-blue hover:bg-blue-50 transition-all active:scale-[0.98]"
                      data-testid={`assessment-option-${index}`}
                    >
                      <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                        <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-brand-blue flex-shrink-0 mt-0.5 sm:mt-0" />
                        <div>
                          <p className="font-semibold text-base sm:text-lg text-luxury-charcoal">{option.title}</p>
                          <p className="text-sm sm:text-base text-brand-slate mt-1">{option.description}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
              
              {currentQuestion === 0 && (
                <div className="mt-6 sm:mt-8 pt-6 border-t border-gray-200">
                  <blockquote className="text-sm sm:text-base italic text-brand-slate border-l-4 border-brand-gold pl-4">
                    "Adventure is a health tool. When you engage your body and mind in new ways, you unlock more than just strength and stamina — you ignite your energy, build resilience, and boost your ability to take on life with boldness and joy."
                    <span className="block mt-2 not-italic font-semibold text-luxury-charcoal text-sm sm:text-base">— Sunshine</span>
                  </blockquote>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
