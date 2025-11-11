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
  Sparkles
} from "lucide-react";

interface CalculationResult {
  timeSavedPerTask: number;
  tasksPerWeek: number;
  totalWeeklySavings: number;
  totalAnnualHours: number;
  dollarValue: number;
  breakEvenWeeks: number;
}

export default function Calculator() {
  const [taskType, setTaskType] = useState<string>("");
  const [currentTime, setCurrentTime] = useState<string>("");
  const [frequency, setFrequency] = useState<string>("");
  const [hourlyRate, setHourlyRate] = useState<string>("");
  const [toolCost, setToolCost] = useState<string>("20");
  const [result, setResult] = useState<CalculationResult | null>(null);

  const taskPresets = {
    "email-response": { name: "Email Response", manual: 15, ai: 3, savings: 80 },
    "meeting-summary": { name: "Meeting Summary", manual: 30, ai: 10, savings: 67 },
    "research-brief": { name: "Research Brief", manual: 120, ai: 15, savings: 88 },
    "report-writing": { name: "Report Writing", manual: 300, ai: 45, savings: 85 },
    "presentation": { name: "Presentation Creation", manual: 240, ai: 30, savings: 88 },
    "data-analysis": { name: "Data Analysis", manual: 480, ai: 120, savings: 75 },
    "content-creation": { name: "Content Creation", manual: 90, ai: 15, savings: 83 },
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

    const manualMinutes = parseFloat(currentTime);
    const preset = taskPresets[taskType as keyof typeof taskPresets];
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
    const rate = parseFloat(hourlyRate);
    const annualValue = annualHours * rate;
    const monthlyCost = parseFloat(toolCost);
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
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              ROI Calculator
            </h1>
            <p className="text-xl opacity-95">
              Calculate how much time and money you can save with AI agents
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <Card className="border-2 border-cyan-200 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                    <CalculatorIcon className="h-6 w-6 text-cyan-600" />
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
                  onClick={calculateROI}
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-lg py-6"
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
                  <Card className="border-2 border-green-300 bg-gradient-to-br from-green-50 to-emerald-50 shadow-lg">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="h-10 w-10 bg-green-600 rounded-lg flex items-center justify-center">
                          <Sparkles className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-2xl text-green-900">Your Results</CardTitle>
                      </div>
                      <CardDescription className="text-green-700">
                        Here's what AI agents can do for you
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-white p-5 rounded-lg border-2 border-green-200">
                        <div className="flex items-center gap-3 mb-2">
                          <Clock className="h-5 w-5 text-green-600" />
                          <span className="text-sm font-medium text-slate-600">Time Saved Per Task</span>
                        </div>
                        <div className="text-3xl font-bold text-green-900">
                          {result.timeSavedPerTask.toFixed(0)} minutes
                        </div>
                      </div>

                      <div className="bg-white p-5 rounded-lg border-2 border-blue-200">
                        <div className="flex items-center gap-3 mb-2">
                          <TrendingUp className="h-5 w-5 text-blue-600" />
                          <span className="text-sm font-medium text-slate-600">Weekly Time Savings</span>
                        </div>
                        <div className="text-3xl font-bold text-blue-900">
                          {result.totalWeeklySavings.toFixed(1)} hours
                        </div>
                        <p className="text-sm text-slate-600 mt-1">
                          Based on {result.tasksPerWeek} tasks per week
                        </p>
                      </div>

                      <div className="bg-white p-5 rounded-lg border-2 border-purple-200">
                        <div className="flex items-center gap-3 mb-2">
                          <Clock className="h-5 w-5 text-purple-600" />
                          <span className="text-sm font-medium text-slate-600">Annual Time Savings</span>
                        </div>
                        <div className="text-3xl font-bold text-purple-900">
                          {result.totalAnnualHours.toFixed(0)} hours
                        </div>
                        <p className="text-sm text-slate-600 mt-1">
                          That's {(result.totalAnnualHours / 8).toFixed(0)} full work days!
                        </p>
                      </div>

                      <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 rounded-lg text-white">
                        <div className="flex items-center gap-3 mb-3">
                          <DollarSign className="h-6 w-6" />
                          <span className="text-sm font-medium opacity-90">Annual Dollar Value</span>
                        </div>
                        <div className="text-4xl font-bold mb-2">
                          ${result.dollarValue.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </div>
                        <p className="text-sm opacity-90">
                          Net value after tool costs (${toolCost}/month)
                        </p>
                      </div>

                      <div className="bg-cyan-50 p-5 rounded-lg border-2 border-cyan-200">
                        <div className="flex items-center gap-3 mb-2">
                          <CalculatorIcon className="h-5 w-5 text-cyan-600" />
                          <span className="text-sm font-medium text-slate-600">Break-Even Time</span>
                        </div>
                        <div className="text-2xl font-bold text-cyan-900">
                          {result.breakEvenWeeks < 1 ? "Less than 1 week" : `${result.breakEvenWeeks.toFixed(1)} weeks`}
                        </div>
                        <p className="text-sm text-slate-600 mt-1">
                          Time until the tool pays for itself
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-blue-200">
                    <CardHeader>
                      <CardTitle className="text-xl">What This Means</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 text-slate-700">
                      <p>
                        By using AI agents for this task, you'll save <strong>{result.totalWeeklySavings.toFixed(1)} hours every week</strong>. 
                        That's time you can spend on higher-value work, strategic thinking, or just going home earlier.
                      </p>
                      <p>
                        Over a year, that adds up to <strong>{result.totalAnnualHours.toFixed(0)} hours</strong> - 
                        equivalent to <strong>{(result.totalAnnualHours / 8).toFixed(0)} full work days</strong> of productivity.
                      </p>
                      <p>
                        The financial value of this time is <strong>${result.dollarValue.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</strong> per year, 
                        even after paying for the AI tools.
                      </p>
                    </CardContent>
                  </Card>
                </>
              ) : (
                <Card className="border-2 border-slate-200">
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
              <Card className="border-2 border-blue-200">
                <CardHeader>
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
                    <div className="flex justify-between text-green-700 font-bold">
                      <span>Annual Savings:</span>
                      <span>$13,260</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200">
                <CardHeader>
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
                    <div className="flex justify-between text-green-700 font-bold">
                      <span>Annual Savings:</span>
                      <span>$17,160</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200">
                <CardHeader>
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
                    <div className="flex justify-between text-green-700 font-bold">
                      <span>Annual Savings:</span>
                      <span>$7,020</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Saving?</h3>
            <p className="text-lg mb-6 opacity-95">
              Check out our workflow recipes to see exactly how to implement these time savings
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/workflows">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  View Workflows
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/catalog">
                <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 hover:bg-white/20 text-white border-white">
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
