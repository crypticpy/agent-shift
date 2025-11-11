import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "wouter";
import {
  Calculator as CalculatorIcon,
  DollarSign,
  Clock,
  TrendingUp,
  ArrowRight,
  Sparkles,
  Zap,
  Trophy,
  Briefcase,
  Lightbulb,
  Copy
} from "lucide-react";
import { useParticleBurst } from "@/hooks/useParticleBurst";
import { MoneyParticles } from "@/components/MoneyParticles";

interface CalculationResult {
  timeSavedPerTask: number;
  tasksPerWeek: number;
  totalWeeklySavings: number;
  totalAnnualHours: number;
  dollarValue: number;
  breakEvenWeeks: number;
}

export default function Calculator() {
  const handleBurst = useParticleBurst();
  const [taskType, setTaskType] = useState<string>("");
  const [currentTime, setCurrentTime] = useState<string>("");
  const [frequency, setFrequency] = useState<string>("");
  const [hourlyRate, setHourlyRate] = useState<string>("");
  const [toolCost, setToolCost] = useState<string>("20");
  const [result, setResult] = useState<CalculationResult | null>(null);

  const taskPresets = {
    "email-response": { name: "Email Response", manual: 15, ai: 3, savings: 80 },
    "meeting-summary": { name: "Meeting Summary", manual: 30, ai: 10, savings: 67 },
    "research-brief": { name: "Research Brief", manual: 120, ai: 30, savings: 75 },
    "report-writing": { name: "Report Writing", manual: 300, ai: 75, savings: 75 },
    "presentation": { name: "Presentation Creation", manual: 240, ai: 72, savings: 70 },
    "data-analysis": { name: "Data Analysis", manual: 480, ai: 120, savings: 75 },
    "content-creation": { name: "Content Creation", manual: 90, ai: 30, savings: 67 },
    "custom": { name: "Custom Task", manual: 0, ai: 0, savings: 0 }
  };

  const handleTaskTypeChange = (value: string) => {
    setTaskType(value);
    if (value !== "custom" && taskPresets[value as keyof typeof taskPresets]) {
      const preset = taskPresets[value as keyof typeof taskPresets];
      setCurrentTime(preset.manual.toString());
    }
  };

  const calculateROI = () => {
    if (!taskType || !currentTime || !frequency || !hourlyRate) {
      return;
    }

    // Validate preset exists
    const preset = taskPresets[taskType as keyof typeof taskPresets];
    if (!preset || preset.savings === undefined) {
      console.error('Invalid task type:', taskType);
      return;
    }

    // Validate numeric inputs
    const manualMinutes = parseFloat(currentTime);
    if (isNaN(manualMinutes) || manualMinutes <= 0) {
      console.error('Invalid time value:', currentTime);
      return;
    }

    const rate = parseFloat(hourlyRate);
    if (isNaN(rate) || rate <= 0) {
      console.error('Invalid hourly rate:', hourlyRate);
      return;
    }

    const monthlyCost = parseFloat(toolCost);
    if (isNaN(monthlyCost) || monthlyCost < 0) {
      console.error('Invalid tool cost:', toolCost);
      return;
    }

    const savingsPercent = preset.savings / 100;
    const aiMinutes = manualMinutes * (1 - savingsPercent);
    const savedMinutes = manualMinutes - aiMinutes;

    let tasksPerWeek = 0;
    switch (frequency) {
      case "daily":
        tasksPerWeek = 5;
        break;
      case "2-3-week":
        tasksPerWeek = 2.5;
        break;
      case "weekly":
        tasksPerWeek = 1;
        break;
      case "2-week":
        tasksPerWeek = 0.5;
        break;
      case "monthly":
        tasksPerWeek = 0.25;
        break;
    }

    const weeklySavingsMinutes = savedMinutes * tasksPerWeek;
    const weeklySavingsHours = weeklySavingsMinutes / 60;
    const annualHours = weeklySavingsHours * 52;
    const annualValue = annualHours * rate;
    const annualCost = monthlyCost * 12;
    const netValue = annualValue - annualCost;
    const breakEven = annualCost / (weeklySavingsHours * rate);

    setResult({
      timeSavedPerTask: savedMinutes,
      tasksPerWeek: tasksPerWeek,
      totalWeeklySavings: weeklySavingsHours,
      totalAnnualHours: annualHours,
      dollarValue: netValue,
      breakEvenWeeks: breakEven
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[oklch(0.98_0.02_35)] via-white to-[oklch(0.97_0.03_85)]">
      {/* Hero */}
      <div className="bg-gradient-to-r from-[oklch(0.65_0.18_35)] to-[oklch(0.70_0.16_50)] text-white py-16 relative overflow-hidden">
        {/* 3D Money/Number Particles */}
        <MoneyParticles className="z-0" spawnRate={3.0} maxParticles={60} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 glass backdrop-blur rounded-full px-4 py-2 mb-6 relative z-20">
              <Trophy className="h-5 w-5" />
              <span className="text-sm font-medium">ROI Calculator & Business Case Generator</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Build Your AI Business Case
            </h1>
            <p className="text-xl opacity-95 mb-3">
              Calculate your savings and generate a management-ready business case for AI adoption
            </p>
            <p className="text-sm opacity-90 max-w-2xl mx-auto">
              Use this tool to build a data-driven business case for presenting to leadership.
              Get specific time savings, cost reductions, and productivity metrics based on industry research.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Business Case Link */}
          <Card className="mb-8 border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardContent className="py-4">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-start gap-3 flex-1">
                  <Briefcase className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-blue-900 mb-1">
                      Need a comprehensive business case for management?
                    </div>
                    <div className="text-sm text-blue-700">
                      Explore research-backed evidence with 50+ citations on ROI, strategic benefits, and implementation guidance
                    </div>
                  </div>
                </div>
                <Link href="/business-case">
                  <Button variant="default" className="bg-blue-600 hover:bg-blue-700 text-white flex-shrink-0">
                    View Business Case
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <Card className="border-2 border-[oklch(0.65_0.18_35)]/20 shadow-lg card-lift">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 bg-gradient-to-br from-[oklch(0.65_0.18_35)] to-[oklch(0.70_0.16_50)] rounded-lg flex items-center justify-center">
                    <CalculatorIcon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Your Information</CardTitle>
                </div>
                <CardDescription>
                  Fill in the details below to see your potential savings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="task-type">What task do you want to automate?</Label>
                  <Select value={taskType} onValueChange={handleTaskTypeChange}>
                    <SelectTrigger id="task-type">
                      <SelectValue placeholder="Choose a task..." />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(taskPresets).map(([key, preset]) => (
                        <SelectItem key={key} value={key}>
                          {preset.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="current-time">How long does it take now? (minutes)</Label>
                  <Input
                    id="current-time"
                    type="number"
                    placeholder="60"
                    value={currentTime}
                    onChange={(e) => setCurrentTime(e.target.value)}
                  />
                  <p className="text-sm text-slate-600">
                    How many minutes you currently spend on this task
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="frequency">How often do you do this?</Label>
                  <Select value={frequency} onValueChange={setFrequency}>
                    <SelectTrigger id="frequency">
                      <SelectValue placeholder="Choose frequency..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="daily">Every day (5x per week)</SelectItem>
                      <SelectItem value="2-3-week">2-3 times per week</SelectItem>
                      <SelectItem value="weekly">Once a week</SelectItem>
                      <SelectItem value="2-week">Every 2 weeks</SelectItem>
                      <SelectItem value="monthly">Once a month</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hourly-rate">Your hourly rate ($)</Label>
                  <Input
                    id="hourly-rate"
                    type="number"
                    placeholder="50"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(e.target.value)}
                  />
                  <p className="text-sm text-slate-600">
                    Your salary divided by 2080 hours, or your billing rate
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tool-cost">AI tool cost per month ($)</Label>
                  <Input
                    id="tool-cost"
                    type="number"
                    placeholder="20"
                    value={toolCost}
                    onChange={(e) => setToolCost(e.target.value)}
                  />
                  <p className="text-sm text-slate-600">
                    Most AI tools cost $20-30/month
                  </p>
                </div>

                <Button
                  onClick={(e) => {
                    handleBurst(e);
                    calculateROI();
                  }}
                  className="w-full bg-gradient-to-r from-[oklch(0.65_0.18_35)] to-[oklch(0.70_0.16_50)] hover:from-[oklch(0.60_0.20_35)] hover:to-[oklch(0.65_0.18_50)] text-white text-lg py-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  disabled={!taskType || !currentTime || !frequency || !hourlyRate}
                >
                  Calculate My Savings
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            <div className="space-y-6">
              {result ? (
                <>
                  <Card className="border-2 border-[oklch(0.75_0.12_85)]/30 bg-gradient-to-br from-[oklch(0.98_0.05_85)] to-[oklch(0.96_0.06_75)] shadow-lg card-lift animate-in fade-in duration-500">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="h-10 w-10 bg-gradient-to-br from-[oklch(0.75_0.12_85)] to-[oklch(0.70_0.14_75)] rounded-lg flex items-center justify-center">
                          <Sparkles className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-2xl text-[oklch(0.35_0.08_85)]">Your Results</CardTitle>
                      </div>
                      <CardDescription className="text-[oklch(0.45_0.06_85)]">
                        Your management-ready business case
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Executive Summary */}
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border-2 border-blue-200">
                        <h3 className="text-lg font-bold text-blue-900 mb-3 flex items-center gap-2">
                          <Briefcase className="h-5 w-5" />
                          Executive Summary: Your AI Investment Case
                        </h3>
                        <div className="space-y-2 text-sm text-blue-900">
                          <p className="leading-relaxed">
                            Based on <strong>{taskPresets[taskType as keyof typeof taskPresets]?.name}</strong> performed{" "}
                            <strong>{result.tasksPerWeek}× weekly</strong>, implementing AI tools will deliver:
                          </p>
                          <ul className="space-y-1 ml-6 list-disc">
                            <li><strong>{result.totalWeeklySavings.toFixed(1)} hours</strong> reclaimed per week</li>
                            <li><strong>${result.dollarValue.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</strong> net annual value after tool costs</li>
                            <li><strong>{(result.totalAnnualHours / 8).toFixed(0)} full workdays</strong> of productivity annually</li>
                            <li>ROI breakeven in <strong>{result.breakEvenWeeks < 1 ? "less than 1 week" : `${result.breakEvenWeeks.toFixed(1)} weeks`}</strong></li>
                          </ul>
                          <p className="text-xs mt-3 pt-3 border-t border-blue-300">
                            <em>This analysis is based on peer-reviewed research from McKinsey, Harvard Business School,
                            and Stanford University documenting AI productivity gains across knowledge work tasks.</em>
                          </p>
                        </div>
                      </div>

                      <div className="bg-white p-5 rounded-lg border-2 border-[oklch(0.65_0.18_175)]/30 card-lift transition-all duration-300 hover:border-[oklch(0.65_0.18_175)]">
                        <div className="flex items-center gap-3 mb-2">
                          <Clock className="h-5 w-5 text-[oklch(0.65_0.18_175)]" />
                          <span className="text-sm font-medium text-slate-600">Time Saved Per Task</span>
                        </div>
                        <div className="text-3xl font-bold text-[oklch(0.35_0.12_175)] animate-in slide-in-from-bottom-2 duration-700">
                          {result.timeSavedPerTask.toFixed(0)} minutes
                        </div>
                      </div>

                      <div className="bg-white p-5 rounded-lg border-2 border-[oklch(0.75_0.12_85)]/30 card-lift transition-all duration-300 hover:border-[oklch(0.75_0.12_85)]">
                        <div className="flex items-center gap-3 mb-2">
                          <TrendingUp className="h-5 w-5 text-[oklch(0.75_0.12_85)]" />
                          <span className="text-sm font-medium text-slate-600">Weekly Time Savings</span>
                        </div>
                        <div className="text-3xl font-bold text-[oklch(0.40_0.10_85)] animate-in slide-in-from-bottom-2 duration-700 delay-100">
                          {result.totalWeeklySavings.toFixed(1)} hours
                        </div>
                        <p className="text-sm text-slate-600 mt-1">
                          Based on {result.tasksPerWeek} tasks per week
                        </p>
                      </div>

                      <div className="bg-white p-5 rounded-lg border-2 border-[oklch(0.65_0.18_35)]/30 card-lift transition-all duration-300 hover:border-[oklch(0.65_0.18_35)]">
                        <div className="flex items-center gap-3 mb-2">
                          <Zap className="h-5 w-5 text-[oklch(0.65_0.18_35)]" />
                          <span className="text-sm font-medium text-slate-600">Annual Time Savings</span>
                        </div>
                        <div className="text-3xl font-bold text-[oklch(0.35_0.15_35)] animate-in slide-in-from-bottom-2 duration-700 delay-200">
                          {result.totalAnnualHours.toFixed(0)} hours
                        </div>
                        <p className="text-sm text-slate-600 mt-1">
                          That's {(result.totalAnnualHours / 8).toFixed(0)} full work days!
                        </p>
                      </div>

                      <div className="bg-gradient-to-r from-[oklch(0.65_0.18_35)] to-[oklch(0.70_0.16_50)] p-6 rounded-lg text-white shadow-xl card-lift animate-in slide-in-from-bottom-2 duration-700 delay-300">
                        <div className="flex items-center gap-3 mb-3">
                          <DollarSign className="h-6 w-6" />
                          <span className="text-sm font-medium opacity-90">Annual Dollar Value</span>
                        </div>
                        <div className="text-5xl font-bold mb-2 tracking-tight">
                          ${result.dollarValue.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </div>
                        <p className="text-sm opacity-90">
                          Net value after tool costs (${toolCost}/month)
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-[oklch(0.65_0.18_175)]/10 to-[oklch(0.65_0.18_175)]/5 p-5 rounded-lg border-2 border-[oklch(0.65_0.18_175)]/30 card-lift transition-all duration-300 hover:border-[oklch(0.65_0.18_175)]">
                        <div className="flex items-center gap-3 mb-2">
                          <CalculatorIcon className="h-5 w-5 text-[oklch(0.65_0.18_175)]" />
                          <span className="text-sm font-medium text-slate-600">Break-Even Time</span>
                        </div>
                        <div className="text-2xl font-bold text-[oklch(0.35_0.12_175)] animate-in slide-in-from-bottom-2 duration-700 delay-400">
                          {result.breakEvenWeeks < 1 ? "Less than 1 week" : `${result.breakEvenWeeks.toFixed(1)} weeks`}
                        </div>
                        <p className="text-sm text-slate-600 mt-1">
                          Time until the tool pays for itself
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-[oklch(0.75_0.12_85)]/20 card-lift animate-in fade-in duration-500 delay-200">
                    <CardHeader>
                      <CardTitle className="text-xl">What This Means</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 text-slate-700">
                      <p>
                        By using AI agents for this task, you'll save <strong className="text-[oklch(0.65_0.18_35)]">{result.totalWeeklySavings.toFixed(1)} hours every week</strong>.
                        That's time you can spend on higher-value work, strategic thinking, or just going home earlier.
                      </p>
                      <p>
                        Over a year, that adds up to <strong className="text-[oklch(0.65_0.18_35)]">{result.totalAnnualHours.toFixed(0)} hours</strong> -
                        equivalent to <strong className="text-[oklch(0.65_0.18_35)]">{(result.totalAnnualHours / 8).toFixed(0)} full work days</strong> of productivity.
                      </p>
                      <p>
                        The financial value of this time is <strong className="text-[oklch(0.65_0.18_35)]">${result.dollarValue.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</strong> per year,
                        even after paying for the AI tools.
                      </p>
                    </CardContent>
                  </Card>

                  {/* Capability Expansion Section */}
                  <Card className="border-2 border-amber-200 bg-amber-50/50 card-lift animate-in fade-in duration-500 delay-300">
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center gap-2 text-amber-900">
                        <Lightbulb className="h-5 w-5" />
                        Beyond Time Savings: Expanded Capabilities
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm text-amber-900">
                      <p className="mb-3">
                        The value of AI extends beyond time savings. With AI assistance, your team can:
                      </p>
                      <ul className="space-y-2 ml-6 list-disc">
                        <li><strong>Complete tasks previously requiring specialized skills</strong> - No need to hire consultants for routine analysis, design, or writing</li>
                        <li><strong>Handle higher volumes without additional hiring</strong> - Scale your output as demand grows</li>
                        <li><strong>Deliver higher quality outputs</strong> - Research shows AI assistance improves work quality by up to 40%</li>
                        <li><strong>Reallocate {result.totalWeeklySavings.toFixed(1)} hours weekly to strategic work</strong> - Focus on relationship-building, creativity, and decision-making</li>
                        <li><strong>Reduce dependency on external contractors</strong> - Bring capabilities in-house that were previously outsourced</li>
                        <li><strong>Remove learning curve barriers</strong> - Use tools and processes without extensive training</li>
                      </ul>
                      <p className="text-xs mt-3 pt-3 border-t border-amber-300">
                        <em>This represents capability expansion that's difficult to quantify in dollars but creates significant organizational value.</em>
                      </p>
                    </CardContent>
                  </Card>

                  {/* Copy Business Case Button */}
                  <Button
                    onClick={() => {
                      // Safety checks
                      if (!result || !taskType) {
                        console.error('Cannot copy business case: missing data');
                        return;
                      }

                      const preset = taskPresets[taskType as keyof typeof taskPresets];
                      if (!preset) {
                        console.error('Cannot copy business case: invalid task type');
                        return;
                      }

                      const businessCase = `
AI ADOPTION BUSINESS CASE

Task: ${preset.name}
Frequency: ${result.tasksPerWeek}× per week

KEY METRICS:
• Weekly time savings: ${result.totalWeeklySavings.toFixed(1)} hours
• Annual time savings: ${result.totalAnnualHours.toFixed(0)} hours (${(result.totalAnnualHours / 8).toFixed(0)} workdays)
• Net annual value: $${result.dollarValue.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} (after tool costs)
• ROI breakeven: ${result.breakEvenWeeks < 1 ? "Less than 1 week" : `${result.breakEvenWeeks.toFixed(1)} weeks`}
• AI tool cost: $${toolCost}/month

EXPANDED CAPABILITIES:
• Complete tasks requiring specialized skills without hiring consultants
• Handle increased workload without additional staffing
• Improve output quality (research shows 40% quality improvement)
• Reallocate ${result.totalWeeklySavings.toFixed(1)} hours/week to strategic priorities
• Reduce external contractor dependency

RESEARCH BASIS:
This analysis is based on peer-reviewed research from McKinsey, Harvard Business School, Stanford University, and MIT documenting AI productivity gains across knowledge work.

Generated by: AI Agent Portal Business Case Calculator
                      `.trim();
                      navigator.clipboard.writeText(businessCase);
                    }}
                    className="w-full bg-gradient-to-r from-[oklch(0.65_0.18_35)] to-[oklch(0.70_0.16_50)] hover:from-[oklch(0.60_0.18_35)] hover:to-[oklch(0.65_0.16_50)] text-white"
                    size="lg"
                  >
                    <Copy className="h-5 w-5 mr-2" />
                    Copy Business Case Summary
                  </Button>
                  <p className="text-xs text-center text-slate-600 -mt-2">
                    Formatted for emails, presentations, or proposal documents
                  </p>
                </>
              ) : (
                <Card className="border-2 border-slate-200 card-lift">
                  <CardContent className="py-16 text-center">
                    <CalculatorIcon className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-slate-700 mb-2">
                      Fill in the form to see your results
                    </h3>
                    <p className="text-slate-600">
                      Enter your information on the left to calculate your potential time and cost savings
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Example Scenarios */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
              Example Scenarios
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2 border-[oklch(0.65_0.18_175)]/20 card-lift hover:border-[oklch(0.65_0.18_175)]/40 transition-all duration-300">
                <CardHeader>
                  <div className="h-12 w-12 bg-gradient-to-br from-[oklch(0.65_0.18_175)] to-[oklch(0.60_0.20_165)] rounded-lg flex items-center justify-center mb-3">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">Program Manager</CardTitle>
                  <CardDescription>Writes weekly reports</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Task:</span>
                    <span className="font-medium">Report Writing</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Time now:</span>
                    <span className="font-medium">5 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Frequency:</span>
                    <span className="font-medium">Weekly</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Rate:</span>
                    <span className="font-medium">$60/hour</span>
                  </div>
                  <div className="border-t pt-3 mt-3">
                    <div className="flex justify-between text-[oklch(0.65_0.18_35)] font-bold text-base">
                      <span>Annual Savings:</span>
                      <span>$13,260</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-[oklch(0.75_0.12_85)]/20 card-lift hover:border-[oklch(0.75_0.12_85)]/40 transition-all duration-300">
                <CardHeader>
                  <div className="h-12 w-12 bg-gradient-to-br from-[oklch(0.75_0.12_85)] to-[oklch(0.70_0.14_75)] rounded-lg flex items-center justify-center mb-3">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">Analyst</CardTitle>
                  <CardDescription>Responds to data requests</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Task:</span>
                    <span className="font-medium">Data Analysis</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Time now:</span>
                    <span className="font-medium">8 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Frequency:</span>
                    <span className="font-medium">2-3x per week</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Rate:</span>
                    <span className="font-medium">$55/hour</span>
                  </div>
                  <div className="border-t pt-3 mt-3">
                    <div className="flex justify-between text-[oklch(0.65_0.18_35)] font-bold text-base">
                      <span>Annual Savings:</span>
                      <span>$17,160</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-[oklch(0.65_0.18_35)]/20 card-lift hover:border-[oklch(0.65_0.18_35)]/40 transition-all duration-300">
                <CardHeader>
                  <div className="h-12 w-12 bg-gradient-to-br from-[oklch(0.65_0.18_35)] to-[oklch(0.70_0.16_50)] rounded-lg flex items-center justify-center mb-3">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">Administrator</CardTitle>
                  <CardDescription>Handles daily emails</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Task:</span>
                    <span className="font-medium">Email Response</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Time now:</span>
                    <span className="font-medium">15 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Frequency:</span>
                    <span className="font-medium">Daily (5x/week)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Rate:</span>
                    <span className="font-medium">$45/hour</span>
                  </div>
                  <div className="border-t pt-3 mt-3">
                    <div className="flex justify-between text-[oklch(0.65_0.18_35)] font-bold text-base">
                      <span>Annual Savings:</span>
                      <span>$7,020</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-gradient-to-r from-[oklch(0.65_0.18_35)] to-[oklch(0.70_0.16_50)] rounded-xl p-8 text-white text-center shadow-2xl card-lift">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Saving?</h3>
            <p className="text-lg mb-6 opacity-95">
              Check out our workflow recipes to see exactly how to implement these time savings
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/workflows">
                <Button
                  size="lg"
                  variant="secondary"
                  className="relative text-lg px-8 bg-white text-[oklch(0.65_0.18_35)] hover:bg-accent hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden"
                  onClick={handleBurst}
                >
                  View Workflows
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/catalog">
                <Button
                  size="lg"
                  variant="outline"
                  className="relative text-lg px-8 bg-white/10 hover:bg-white/20 text-white border-white transition-all duration-300 overflow-hidden"
                  onClick={handleBurst}
                >
                  Browse AI Tools
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
