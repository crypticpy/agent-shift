import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  Brain,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Lightbulb,
  Target,
  Zap
} from 'lucide-react';

interface QuizQuestion {
  id: number;
  scenario: string;
  question: string;
  options: {
    text: string;
    type: 'doer' | 'delegator' | 'orchestrator';
    explanation: string;
  }[];
}

interface AssessmentResult {
  type: 'doer' | 'delegator' | 'orchestrator';
  score: {
    doer: number;
    delegator: number;
    orchestrator: number;
  };
  title: string;
  description: string;
  strengths: string[];
  nextSteps: string[];
  icon: typeof Brain;
}

const questions: QuizQuestion[] = [
  {
    id: 1,
    scenario: "You need to create a quarterly performance report with data from 5 different systems.",
    question: "What's your first thought?",
    options: [
      {
        text: "I'll log into each system, export the data, and manually compile everything in Excel",
        type: "doer",
        explanation: "Task-focused: doing the work yourself"
      },
      {
        text: "I'll ask my team members to pull data from their respective systems and send it to me",
        type: "delegator",
        explanation: "Delegation: assigning tasks to people"
      },
      {
        text: "I'll set up an automated workflow where AI agents pull, normalize, and compile the data on a schedule",
        type: "orchestrator",
        explanation: "System design: creating automated processes"
      }
    ]
  },
  {
    id: 2,
    scenario: "A customer emails with a technical question that requires research across documentation, past tickets, and knowledge bases.",
    question: "How do you approach this?",
    options: [
      {
        text: "I'll search through all the resources myself and write a detailed response",
        type: "doer",
        explanation: "Manual execution of research and response"
      },
      {
        text: "I'll forward it to the technical team to research and draft a response for my review",
        type: "delegator",
        explanation: "Delegating the task to subject matter experts"
      },
      {
        text: "I'll have an AI agent search all sources, draft a response with citations, then I'll review and personalize before sending",
        type: "orchestrator",
        explanation: "Orchestrating AI to handle research while you focus on quality control"
      }
    ]
  },
  {
    id: 3,
    scenario: "You're starting a new project that involves market research, competitive analysis, and strategic recommendations.",
    question: "What's your planning mindset?",
    options: [
      {
        text: "I'll create a detailed task list of all the research I need to do and start working through it",
        type: "doer",
        explanation: "Breaking work into tasks you'll complete"
      },
      {
        text: "I'll assign different team members to handle market research, competitive analysis, and recommendations",
        type: "delegator",
        explanation: "Dividing work among people"
      },
      {
        text: "I'll design a workflow where specialized agents handle data gathering, analysis runs in parallel, and I synthesize insights",
        type: "orchestrator",
        explanation: "Architecting a system of coordinated agents"
      }
    ]
  },
  {
    id: 4,
    scenario: "You're consistently working late to keep up with routine tasks like status updates, meeting notes, and follow-ups.",
    question: "What's your solution?",
    options: [
      {
        text: "I need to get faster at these tasks - maybe create some templates to speed things up",
        type: "doer",
        explanation: "Optimizing your own efficiency"
      },
      {
        text: "I should hire an assistant to handle these routine tasks for me",
        type: "delegator",
        explanation: "Delegating to another person"
      },
      {
        text: "I'll set up AI agents to automatically generate status updates from project data, transcribe meetings, and draft follow-ups",
        type: "orchestrator",
        explanation: "Automating routine work with AI systems"
      }
    ]
  },
  {
    id: 5,
    scenario: "You need to process 500 customer feedback responses to identify trends and actionable insights.",
    question: "How do you think about this task?",
    options: [
      {
        text: "I'll read through all 500 responses and categorize them in a spreadsheet",
        type: "doer",
        explanation: "Manual processing of all data"
      },
      {
        text: "I'll split the 500 responses among my team and have each person analyze their portion",
        type: "delegator",
        explanation: "Distributing work across people"
      },
      {
        text: "I'll have an AI agent analyze all responses for sentiment, themes, and patterns, then I'll validate the insights",
        type: "orchestrator",
        explanation: "Using AI for pattern recognition at scale"
      }
    ]
  },
  {
    id: 6,
    scenario: "A new industry regulation requires updating 50+ internal documents and processes.",
    question: "What's your first move?",
    options: [
      {
        text: "I'll review the regulation details and start updating each document one by one",
        type: "doer",
        explanation: "Sequential manual updates"
      },
      {
        text: "I'll assign different document types to different team members with update guidelines",
        type: "delegator",
        explanation: "Distributing updates across team"
      },
      {
        text: "I'll create an AI workflow to identify affected sections, suggest compliant language, and route for human approval",
        type: "orchestrator",
        explanation: "Building an AI-assisted compliance system"
      }
    ]
  },
  {
    id: 7,
    scenario: "You're preparing for a major presentation and need industry data, visualizations, talking points, and speaker notes.",
    question: "How do you approach preparation?",
    options: [
      {
        text: "I'll research the data, build the slides, write the talking points, and create my notes",
        type: "doer",
        explanation: "Owning all preparation tasks"
      },
      {
        text: "I'll have the research team gather data, design team create slides, and I'll write the narrative",
        type: "delegator",
        explanation: "Dividing work by specialization"
      },
      {
        text: "I'll orchestrate agents to gather data, generate visualizations, draft talking points, then I'll focus on narrative flow and storytelling",
        type: "orchestrator",
        explanation: "Using AI for content generation while you focus on strategy"
      }
    ]
  },
  {
    id: 8,
    scenario: "When you think about your ideal work week, what excites you most?",
    question: "Choose the statement that resonates:",
    options: [
      {
        text: "Getting into deep focus and completing important tasks myself - I love the satisfaction of hands-on work",
        type: "doer",
        explanation: "Valuing personal execution"
      },
      {
        text: "Coordinating a high-performing team where everyone knows their role and delivers quality results",
        type: "delegator",
        explanation: "Valuing team coordination"
      },
      {
        text: "Designing systems that run efficiently with minimal intervention, freeing me to focus on strategy and creative problem-solving",
        type: "orchestrator",
        explanation: "Valuing system design and strategic thinking"
      }
    ]
  }
];

const assessmentResults: Record<string, AssessmentResult> = {
  doer: {
    type: 'doer',
    score: { doer: 0, delegator: 0, orchestrator: 0 },
    title: 'The Doer',
    description: 'You excel at hands-on execution and take pride in completing tasks yourself. You value quality control through personal involvement and have strong attention to detail.',
    strengths: [
      'Deep understanding through hands-on work',
      'High quality standards through personal oversight',
      'Complete ownership and accountability',
      'Detailed knowledge of every step in your processes'
    ],
    nextSteps: [
      'Identify your 3 most time-consuming routine tasks',
      'Experiment with delegating ONE task to an AI agent this week',
      'Track time saved and quality maintained',
      'Start thinking "Who should do this?" before "How do I do this?"',
      'Read Section 6: The Mindset Phases to understand the progression path'
    ],
    icon: Target
  },
  delegator: {
    type: 'delegator',
    score: { doer: 0, delegator: 0, orchestrator: 0 },
    title: 'The Delegator',
    description: 'You understand the power of delegation and effectively distribute work among people. You balance oversight with empowerment and coordinate team efforts well.',
    strengths: [
      'Effective task distribution and coordination',
      'Understanding of team strengths and capabilities',
      'Balance between delegation and quality control',
      'Experience managing and reviewing work from others'
    ],
    nextSteps: [
      'Identify tasks you currently delegate to people that AI agents could handle',
      'Design your first multi-agent workflow for a routine process',
      'Compare capacity hours released: people vs. AI delegation',
      'Learn hierarchical orchestration patterns for complex workflows',
      'Practice context engineering: give each agent only what it needs'
    ],
    icon: Lightbulb
  },
  orchestrator: {
    type: 'orchestrator',
    score: { doer: 0, delegator: 0, orchestrator: 0 },
    title: 'The Orchestrator',
    description: 'You think in systems and workflows. You design processes where AI agents handle execution while you focus on strategy, creativity, and high-value decision-making.',
    strengths: [
      'Systems thinking and process architecture',
      'Effective AI orchestration and automation',
      'Strategic focus on outcomes vs. tasks',
      'Efficient use of capacity through intelligent delegation'
    ],
    nextSteps: [
      'Document your orchestration patterns to share with others',
      'Measure outcome velocity: how quickly can you achieve results?',
      'Explore advanced patterns: hierarchical delegation, parallel processing',
      'Mentor others in the orchestrator mindset shift',
      'Track new KPIs: capacity hours released, decision latency, escalation rate'
    ],
    icon: Zap
  }
};

export default function MindsetSelfAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, 'doer' | 'delegator' | 'orchestrator'>>({});
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const progress = (Object.keys(answers).length / questions.length) * 100;

  const handleAnswer = (questionId: number, type: 'doer' | 'delegator' | 'orchestrator', optionIndex: number) => {
    setSelectedOption(optionIndex);

    // Add small delay for visual feedback
    setTimeout(() => {
      setAnswers({ ...answers, [questionId]: type });

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        // Quiz complete
        setTimeout(() => setShowResults(true), 500);
      }
    }, 300);
  };

  const calculateResult = (): AssessmentResult => {
    const scores = {
      doer: 0,
      delegator: 0,
      orchestrator: 0
    };

    Object.values(answers).forEach(answer => {
      scores[answer]++;
    });

    let dominantType: 'doer' | 'delegator' | 'orchestrator' = 'doer';
    let maxScore = scores.doer;

    if (scores.delegator > maxScore) {
      dominantType = 'delegator';
      maxScore = scores.delegator;
    }
    if (scores.orchestrator > maxScore) {
      dominantType = 'orchestrator';
      maxScore = scores.orchestrator;
    }

    const result = { ...assessmentResults[dominantType] };
    result.score = scores;
    return result;
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setSelectedOption(null);
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null);
    }
  };

  if (showResults) {
    const result = calculateResult();
    const totalAnswers = Object.keys(answers).length;
    const ResultIcon = result.icon;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="border-2 border-primary/20">
          <CardHeader className="text-center pb-4">
            <div className="flex justify-center mb-4">
              <div className="rounded-full bg-gradient-to-br from-orange-500 to-amber-600 p-6 shadow-lg">
                <ResultIcon className="h-12 w-12 text-white" />
              </div>
            </div>
            <CardTitle className="text-3xl font-bold">You're {result.title}</CardTitle>
            <CardDescription className="text-base mt-2">{result.description}</CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Score Breakdown */}
            <div className="grid grid-cols-3 gap-4">
              {Object.entries(result.score).map(([type, score]) => (
                <div key={type} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">
                    {score}
                  </div>
                  <div className="text-sm text-muted-foreground capitalize">
                    {type}
                  </div>
                  <div className="mt-2">
                    <Progress value={(score / totalAnswers) * 100} className="h-2" />
                  </div>
                </div>
              ))}
            </div>

            {/* Strengths */}
            <div>
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                Your Strengths
              </h3>
              <ul className="space-y-2">
                {result.strengths.map((strength, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-2 text-sm"
                  >
                    <span className="text-orange-500 mt-1">✓</span>
                    <span>{strength}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Next Steps */}
            <div>
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <ArrowRight className="h-5 w-5 text-blue-600" />
                Your Next Steps
              </h3>
              <ol className="space-y-3">
                {result.nextSteps.map((step, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    className="flex items-start gap-3 text-sm"
                  >
                    <Badge variant="outline" className="mt-0.5 shrink-0">
                      {idx + 1}
                    </Badge>
                    <span>{step}</span>
                  </motion.li>
                ))}
              </ol>
            </div>

            {/* Action Button */}
            <div className="pt-4 flex justify-center">
              <Button
                onClick={resetQuiz}
                variant="outline"
                className="gap-2"
              >
                <RotateCcw className="h-4 w-4" />
                Retake Assessment
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="space-y-6">
      {/* Progress Header */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>Question {currentQuestion + 1} of {questions.length}</span>
          <span>{Math.round(progress)}% Complete</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardDescription className="text-sm italic mb-2">
                Scenario
              </CardDescription>
              <CardTitle className="text-lg font-medium leading-relaxed">
                {question.scenario}
              </CardTitle>
              <div className="pt-4">
                <p className="font-semibold text-foreground">
                  {question.question}
                </p>
              </div>
            </CardHeader>

            <CardContent className="space-y-3">
              {question.options.map((option, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => handleAnswer(question.id, option.type, idx)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    selectedOption === idx
                      ? 'border-orange-300 bg-orange-50/60 shadow-md'
                      : 'border-border hover:border-amber-300 hover:bg-amber-50/40'
                  }`}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="font-medium mb-1">{option.text}</div>
                  <div className="text-xs text-muted-foreground italic">
                    {option.explanation}
                  </div>
                </motion.button>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      {currentQuestion > 0 && (
        <div className="flex justify-start">
          <Button
            onClick={goBack}
            variant="ghost"
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Previous Question
          </Button>
        </div>
      )}
    </div>
  );
}
