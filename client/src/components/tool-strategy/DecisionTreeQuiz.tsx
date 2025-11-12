import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight, RefreshCw } from "lucide-react";

interface Question {
  id: string;
  text: string;
  options: {
    text: string;
    score: { platform: number; bestOfBreed: number; hybrid: number };
  }[];
}

const questions: Question[] = [
  {
    id: "integration",
    text: "How important is automatic integration between your tools?",
    options: [
      { text: "Critical - everything must work together seamlessly", score: { platform: 3, bestOfBreed: 0, hybrid: 1 } },
      { text: "Important - willing to use APIs/connectors", score: { platform: 1, bestOfBreed: 1, hybrid: 3 } },
      { text: "Not essential - I can work across separate tools", score: { platform: 0, bestOfBreed: 3, hybrid: 2 } }
    ]
  },
  {
    id: "control",
    text: "Does IT need centralized control over all AI tools?",
    options: [
      { text: "Yes - strict governance required", score: { platform: 3, bestOfBreed: 0, hybrid: 1 } },
      { text: "Some control - reasonable security requirements", score: { platform: 1, bestOfBreed: 1, hybrid: 3 } },
      { text: "Minimal - trust users to select best tools", score: { platform: 0, bestOfBreed: 3, hybrid: 2 } }
    ]
  },
  {
    id: "budget",
    text: "What's your budget flexibility?",
    options: [
      { text: "Fixed - need bundled predictable pricing", score: { platform: 3, bestOfBreed: 0, hybrid: 1 } },
      { text: "Flexible - can adjust per-tool spending", score: { platform: 0, bestOfBreed: 3, hybrid: 2 } },
      { text: "Performance-based - pay for what delivers ROI", score: { platform: 0, bestOfBreed: 2, hybrid: 3 } }
    ]
  },
  {
    id: "platform-commitment",
    text: "How deeply committed are you to a platform ecosystem (Microsoft/Google)?",
    options: [
      { text: "Fully committed - use it for everything", score: { platform: 3, bestOfBreed: 0, hybrid: 1 } },
      { text: "Moderately - core infrastructure only", score: { platform: 1, bestOfBreed: 1, hybrid: 3 } },
      { text: "Not committed - open to alternatives", score: { platform: 0, bestOfBreed: 3, hybrid: 2 } }
    ]
  },
  {
    id: "innovation",
    text: "How important is access to latest AI features?",
    options: [
      { text: "Not important - stability over innovation", score: { platform: 3, bestOfBreed: 0, hybrid: 1 } },
      { text: "Somewhat important - adopt proven features", score: { platform: 1, bestOfBreed: 1, hybrid: 3 } },
      { text: "Very important - want latest capabilities", score: { platform: 0, bestOfBreed: 3, hybrid: 2 } }
    ]
  },
  {
    id: "quality",
    text: "What matters more: integration or best-in-class quality per task?",
    options: [
      { text: "Integration - everything in one place", score: { platform: 3, bestOfBreed: 0, hybrid: 1 } },
      { text: "Balanced - good enough quality with integration", score: { platform: 1, bestOfBreed: 1, hybrid: 3 } },
      { text: "Quality - want the absolute best for each task", score: { platform: 0, bestOfBreed: 3, hybrid: 2 } }
    ]
  }
];

export function DecisionTreeQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [scores, setScores] = useState({ platform: 0, bestOfBreed: 0, hybrid: 0 });
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionId: string, optionIndex: number) => {
    const option = questions[currentQuestion].options[optionIndex];

    setAnswers({ ...answers, [questionId]: optionIndex });
    setScores({
      platform: scores.platform + option.score.platform,
      bestOfBreed: scores.bestOfBreed + option.score.bestOfBreed,
      hybrid: scores.hybrid + option.score.hybrid
    });

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    } else {
      setTimeout(() => setShowResults(true), 300);
    }
  };

  const reset = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setScores({ platform: 0, bestOfBreed: 0, hybrid: 0 });
    setShowResults(false);
  };

  const getRecommendation = () => {
    const max = Math.max(scores.platform, scores.bestOfBreed, scores.hybrid);
    if (scores.platform === max) return "platform";
    if (scores.bestOfBreed === max) return "bestOfBreed";
    return "hybrid";
  };

  const recommendations = {
    platform: {
      title: "Platform Bundle Approach",
      color: "blue",
      description: "Based on your answers, a unified platform solution (Microsoft 365 Copilot or Google Workspace AI) would work well for your organization.",
      benefits: [
        "Single vendor relationship simplifies procurement and support",
        "Automatic integration with your existing infrastructure",
        "Centralized IT governance and security controls",
        "Predictable bundled pricing"
      ],
      considerations: [
        "3-6 month lag for latest AI features",
        "Ecosystem lock-in limits flexibility",
        "Higher cost per user ($30-60/month)"
      ],
      nextSteps: "Review the Platform Vendors section below for detailed comparisons."
    },
    bestOfBreed: {
      title: "Best-of-Breed Approach",
      color: "green",
      description: "Based on your answers, specialized tools for each use case would deliver the best results for your organization.",
      benefits: [
        "Access to latest AI capabilities immediately",
        "Best-in-class quality for each specific task",
        "No vendor lock-in - switch tools as needed",
        "Lower cost ($15-25/month per tool)"
      ],
      considerations: [
        "Requires managing multiple vendor relationships",
        "Integration setup needed (APIs, Zapier)",
        "More user training for different interfaces"
      ],
      nextSteps: "Explore the Best-of-Breed Showcase below to see specialized tools."
    },
    hybrid: {
      title: "Hybrid Approach (Recommended)",
      color: "purple",
      description: "Based on your answers, a hybrid strategy combining platform infrastructure with specialist AI tools would be optimal.",
      benefits: [
        "Platform handles core infrastructure (email, storage, identity)",
        "Best-of-breed tools for productivity and analysis",
        "Balance of integration and innovation",
        "Cost-effective and flexible"
      ],
      considerations: [
        "Requires thoughtful integration planning",
        "Need to manage both platform and specialist tools",
        "Team training on multiple interfaces"
      ],
      nextSteps: "Check out the Hybrid Approach section below for detailed architecture."
    }
  };

  if (showResults) {
    const recommendation = getRecommendation();
    const rec = recommendations[recommendation];

    return (
      <Card className={`border-2 border-${rec.color}-300 bg-gradient-to-br from-${rec.color}-50/50 to-white`}>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl">Your Recommendation</CardTitle>
            <Button variant="outline" size="sm" onClick={reset}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Retake Quiz
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Badge className={`bg-${rec.color}-100 text-${rec.color}-900 border-${rec.color}-300 text-lg px-4 py-2`}>
              {rec.title}
            </Badge>
          </div>

          <p className="text-lg text-slate-700">{rec.description}</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Why This Works for You:</h4>
              <ul className="space-y-2">
                {rec.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle2 className={`h-4 w-4 text-${rec.color}-600 mt-0.5 flex-shrink-0`} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Things to Consider:</h4>
              <ul className="space-y-2">
                {rec.considerations.map((consideration, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-amber-600 font-bold mt-0.5">•</span>
                    <span>{consideration}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={`bg-${rec.color}-50 p-4 rounded-lg border border-${rec.color}-200`}>
            <p className="font-semibold text-slate-900 mb-2">Next Steps:</p>
            <p className="text-sm text-slate-700">{rec.nextSteps}</p>
          </div>

          <div className="text-center pt-4">
            <p className="text-sm text-slate-600 mb-4">
              Your scores: Platform {scores.platform} • Best-of-Breed {scores.bestOfBreed} • Hybrid {scores.hybrid}
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <Card className="border-2 border-orange-200">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <CardTitle className="text-xl">Question {currentQuestion + 1} of {questions.length}</CardTitle>
          <Badge variant="outline">{Math.round(progress)}% Complete</Badge>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2">
          <div
            className="bg-orange-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <h3 className="text-lg font-semibold text-slate-900">{question.text}</h3>

        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(question.id, index)}
              className="w-full text-left p-4 rounded-lg border-2 border-slate-200 hover:border-orange-300 hover:bg-orange-50 transition-all group"
            >
              <div className="flex items-center justify-between">
                <span className="text-slate-700 group-hover:text-slate-900">{option.text}</span>
                <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-orange-600 transition-colors" />
              </div>
            </button>
          ))}
        </div>

        {currentQuestion > 0 && (
          <div className="pt-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCurrentQuestion(currentQuestion - 1)}
              className="text-slate-600"
            >
              ← Previous Question
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
