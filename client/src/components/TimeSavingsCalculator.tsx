import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useParticleBurst } from '@/hooks/useParticleBurst';
import { useComplementaryColors } from '@/hooks/useComplementaryColors';

interface ApplicationScenario {
  id: string;
  category: string;
  name: string;
  description: string;
  baseTime: number; // hours per instance
  aiTime: number; // hours per instance with AI
  icon: string;
}

const applicationScenarios: ApplicationScenario[] = [
  {
    id: 'calendar',
    category: 'home',
    name: 'Family Calendar Management',
    description: 'Managing schedules, reminders, appointments, and coordination',
    baseTime: 0.5, // 30 minutes
    aiTime: 0.083, // 5 minutes
    icon: '🗓️'
  },
  {
    id: 'meal',
    category: 'home',
    name: 'Meal Planning & Shopping',
    description: 'Planning meals, creating shopping lists, and grocery ordering',
    baseTime: 1, // 1 hour
    aiTime: 0.08, // 5 minutes
    icon: '🍽️'
  },
  {
    id: 'maintenance',
    category: 'home',
    name: 'Home Maintenance',
    description: 'Tracking maintenance schedules and scheduling appointments',
    baseTime: 0.5, // 30 minutes
    aiTime: 0.08, // 5 minutes
    icon: '🔧'
  },
  {
    id: 'finance',
    category: 'home',
    name: 'Financial Management',
    description: 'Expense tracking, budgeting, and tax document preparation',
    baseTime: 2, // 2 hours
    aiTime: 0.16, // 10 minutes
    icon: '💰'
  },
  {
    id: 'reports',
    category: 'work',
    name: 'Report Generation',
    description: 'Data analysis, report writing, and formatting',
    baseTime: 4, // 4 hours
    aiTime: 1, // 1 hour
    icon: '📊'
  },
  {
    id: 'emails',
    category: 'work',
    name: 'Email Management',
    description: 'Sorting, drafting responses, and managing communications',
    baseTime: 3, // 3 hours
    aiTime: 0.5, // 30 minutes
    icon: '📧'
  },
  {
    id: 'research',
    category: 'work',
    name: 'Research & Analysis',
    description: 'Document research, data gathering, and analysis',
    baseTime: 5, // 5 hours
    aiTime: 1.5, // 1.5 hours
    icon: '🔍'
  },
  {
    id: 'writing',
    category: 'work',
    name: 'Professional Writing',
    description: 'Proposal writing, documentation, and content creation',
    baseTime: 6, // 6 hours
    aiTime: 2.4, // 2.4 hours (40% reduction)
    icon: '✍️'
  }
];

type FrequencyPeriod = 'daily' | 'weekly' | 'monthly';

export default function TimeSavingsCalculator() {
  const [selectedScenario, setSelectedScenario] = useState<ApplicationScenario | null>(null);
  const [frequency, setFrequency] = useState<number>(1); // times per period
  const [frequencyPeriod, setFrequencyPeriod] = useState<FrequencyPeriod>('weekly');
  const [timeSavedPerWeek, setTimeSavedPerWeek] = useState<number | null>(null);
  const [timeSavedPerMonth, setTimeSavedPerMonth] = useState<number | null>(null);
  const [timeSavedPerYear, setTimeSavedPerYear] = useState<number | null>(null);
  const [productivityGain, setProductivityGain] = useState<number | null>(null);

  const { particleBurst } = useParticleBurst();
  const { particleHue, complementaryHue, complementLight, complementDark, cssVariables } = useComplementaryColors(75000); // 75 seconds, 2x slower

  const calculateSavings = () => {
    if (!selectedScenario) return;

    // Convert frequency to weekly equivalent
    let weeklyFrequency = frequency;
    if (frequencyPeriod === 'daily') {
      weeklyFrequency = frequency * 7;
    } else if (frequencyPeriod === 'monthly') {
      weeklyFrequency = frequency / 4.33;
    }

    const baseTime = selectedScenario.baseTime * weeklyFrequency;
    const aiTime = selectedScenario.aiTime * weeklyFrequency;
    const weeklySavings = baseTime - aiTime;
    const monthlySavings = weeklySavings * 4.33;
    const yearlySavings = weeklySavings * 52;

    setTimeSavedPerWeek(weeklySavings);
    setTimeSavedPerMonth(monthlySavings);
    setTimeSavedPerYear(yearlySavings);

    // Calculate productivity gain percentage
    const gain = ((baseTime - aiTime) / baseTime) * 100;
    setProductivityGain(Math.round(gain));

    // Trigger particle celebration
    particleBurst({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    });
  };

  const formatHours = (hours: number): string => {
    if (hours < 1) {
      const minutes = Math.round(hours * 60);
      return `${minutes} minutes`;
    } else if (hours < 8) {
      return `${hours.toFixed(1)} hours`;
    } else {
      const days = (hours / 8).toFixed(1);
      return `${days} work days`;
    }
  };

  return (
    <div className="space-y-8" style={cssVariables as React.CSSProperties}>
      {/* Application Selection */}
      <Card className="card-lift glass border-2 hover:border-primary/30 transition-all">
        <CardHeader>
          <CardTitle className="text-xl">Choose Your Application</CardTitle>
          <CardDescription>
            Select a task you regularly perform to calculate your potential time savings
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {applicationScenarios.map((scenario) => (
              <button
                key={scenario.id}
                onClick={() => setSelectedScenario(scenario)}
                className={`p-4 rounded-xl border-2 text-left transition-all ${
                  selectedScenario?.id === scenario.id
                    ? 'border-primary bg-gradient-to-br from-primary/10 to-accent/10 shadow-lg'
                    : 'border-oklch(0.7 0.01 65) hover:border-primary hover:bg-primary/5'
                }`}
                style={{
                  borderColor: selectedScenario?.id === scenario.id
                    ? undefined
                    : 'oklch(0.7 0.01 65)'
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{scenario.icon}</div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-slate-800">{scenario.name}</h4>
                      <Badge
                        variant="secondary"
                        className="text-xs"
                        style={{
                          backgroundColor: `oklch(0.85 0.1 ${particleHue})`,
                          color: `oklch(0.35 0.1 ${complementDark})`
                        }}
                      >
                        {scenario.category === 'work' ? 'Work' : 'Home'}
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-600">{scenario.description}</p>
                    <div className="flex gap-4 mt-2 text-xs text-slate-500">
                      <span>Current: {formatHours(scenario.baseTime)}</span>
                      <span>With AI: {formatHours(scenario.aiTime)}</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Frequency Slider */}
      {selectedScenario && (
        <Card className="card-lift glass border-2 hover:border-primary/30 transition-all">
          <CardHeader>
            <CardTitle className="text-xl">How Often Do You Do This?</CardTitle>
            <CardDescription>
              Adjust the frequency to see your personalized time savings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Frequency Period</label>
              <Select value={frequencyPeriod} onValueChange={(value) => setFrequencyPeriod(value as FrequencyPeriod)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-slate-600">
                <span>Times per {frequencyPeriod === 'daily' ? 'day' : frequencyPeriod === 'weekly' ? 'week' : 'month'}:</span>
                <span className="font-bold" style={{ color: `oklch(0.55 0.2 ${particleHue})` }}>
                  {frequency}
                </span>
              </div>
              <Slider
                value={[frequency]}
                onValueChange={([value]) => setFrequency(value)}
                min={1}
                max={20}
                step={1}
              />
            </div>
            <Button
              onClick={calculateSavings}
              className="w-full font-bold"
              style={{
                background: `linear-gradient(135deg, oklch(0.65 0.18 35), oklch(0.7 0.2 65))`,
                boxShadow: `0 4px 20px oklch(0 0 0 / 10%)`
              }}
            >
              💥 Calculate My Savings
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Results */}
      {timeSavedPerWeek !== null && productivityGain !== null && (
        <Card
          className="card-lift border-2 shadow-xl hover:shadow-2xl transition-all"
          style={{
            borderColor: `oklch(0.7 0.12 ${complementDark})`,
            boxShadow: `0 8px 20px oklch(0 0 0 / 10%)`
          }}
        >
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="text-3xl">🎉</div>
              <div>
                <CardTitle className="text-2xl" style={{ color: `oklch(0.45 0.2 ${complementDark})` }}>
                  Your AI Time Savings
                </CardTitle>
                <CardDescription>
                  Estimated time you could reclaim with AI agents
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {/* Time Savings Visualization */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div
                className="text-center p-6 rounded-xl glass border-2 hover:shadow-lg transition-all"
                style={{
                  borderColor: `oklch(0.75 0.1 ${particleHue})`
                }}
              >
                <div className="text-4xl mb-2">📅</div>
                <div className="text-3xl font-bold" style={{ color: `oklch(0.5 0.2 ${particleHue})` }}>
                  {formatHours(timeSavedPerWeek)}
                </div>
                <div className="text-sm text-slate-600 font-medium">per week</div>
              </div>

              <div
                className="text-center p-6 rounded-xl glass border-2 hover:shadow-lg transition-all"
                style={{
                  borderColor: `oklch(0.75 0.1 ${complementaryHue})`
                }}
              >
                <div className="text-4xl mb-2">🗓️</div>
                <div className="text-3xl font-bold" style={{ color: `oklch(0.5 0.2 ${complementaryHue})` }}>
                  {formatHours(timeSavedPerMonth!)}
                </div>
                <div className="text-sm text-slate-600 font-medium">per month</div>
              </div>

              <div
                className="text-center p-6 rounded-xl glass border-2 hover:shadow-lg transition-all"
                style={{
                  borderColor: `oklch(0.75 0.1 ${complementLight})`
                }}
              >
                <div className="text-4xl mb-2">🎆</div>
                <div className="text-3xl font-bold" style={{ color: `oklch(0.5 0.2 ${complementLight})` }}>
                  {formatHours(timeSavedPerYear!)}
                </div>
                <div className="text-sm text-slate-600 font-medium">per year</div>
              </div>
            </div>

            {/* Productivity Gain */}
            <Card className="mb-4" style={{ background: `oklch(0.95 0.12 ${particleHue} / 15%)` }}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="text-3xl">⚡</div>
                  <div>
                    <CardTitle className="text-xl" style={{ color: `oklch(0.45 0.18 ${particleHue})` }}>
                      Productivity Boost
                    </CardTitle>
                    <CardDescription>Time reduction percentage</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center">
                  <div
                    className="relative w-32 h-32 rounded-full flex items-center justify-center"
                    style={{
                      background: `conic-gradient(oklch(0.65 0.18 ${particleHue}) 0deg ${productivityGain * 3.6}deg, oklch(0.9 0.02 65) ${productivityGain * 3.6}deg 360deg)`
                    }}
                  >
                    <div className="absolute w-24 h-24 rounded-full bg-white dark:bg-slate-800"></div>
                    <div className="relative text-3xl font-bold" style={{ color: `oklch(0.45 0.18 ${particleHue})` }}>
                      {productivityGain}%
                    </div>
                  </div>
                  <div className="ml-6">
                    <p className="text-slate-600">
                      You're saving {productivityGain}% of your time on this task
                    </p>
                    <div className="flex gap-3 mt-2">
                      <Badge
                        variant="secondary"
                        style={{
                          backgroundColor: `oklch(0.9 0.1 ${particleHue})`,
                          color: `oklch(0.35 0.1 ${complementDark})`
                        }}
                      >
                        Before: {formatHours(selectedScenario.baseTime * (frequencyPeriod === 'daily' ? frequency * 7 : frequencyPeriod === 'monthly' ? frequency / 4.33 : frequency))}/week
                      </Badge>
                      <Badge
                        variant="secondary"
                        style={{
                          backgroundColor: `oklch(0.9 0.1 ${complementLight})`,
                          color: `oklch(0.35 0.1 ${complementDark})`
                        }}
                      >
                        After: {formatHours(selectedScenario.aiTime * (frequencyPeriod === 'daily' ? frequency * 7 : frequencyPeriod === 'monthly' ? frequency / 4.33 : frequency))}/week
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What You Could Do With Saved Time */}
            <Card style={{ background: `oklch(0.95 0.12 ${complementaryHue} / 15%)` }}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="text-3xl">🚀</div>
                  <div>
                    <CardTitle className="text-xl" style={{ color: `oklch(0.45 0.18 ${complementaryHue})` }}>
                      What Could You Do With That Time?
                    </CardTitle>
                    <CardDescription>Reinvest your reclaimed time</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg" style={{ background: `oklch(0.95 0.08 ${particleHue})` }}>
                    <div className="text-lg mb-2" style={{ color: `oklch(0.45 0.1 ${particleHue})` }}>
                      Strategic Work
                    </div>
                    <p className="text-sm text-slate-600">Focus on high-value activities: relationships, creativity, and strategy</p>
                  </div>
                  <div className="p-4 rounded-lg" style={{ background: `oklch(0.95 0.08 ${complementLight})` }}>
                    <div className="text-lg mb-2" style={{ color: `oklch(0.45 0.1 ${complementLight})` }}>
                      More Projects
                    </div>
                    <p className="text-sm text-slate-600">Take on additional initiatives within the same time constraints</p>
                  </div>
                  <div className="p-4 rounded-lg" style={{ background: `oklch(0.95 0.08 ${complementaryHue})` }}>
                    <div className="text-lg mb-2" style={{ color: `oklch(0.45 0.1 ${complementaryHue})` }}>
                      Better Results
                    </div>
                    <p className="text-sm text-slate-600">Spend more time refining and improving your work quality</p>
                  </div>
                  <div className="p-4 rounded-lg" style={{ background: `oklch(0.95 0.08 ${complementDark})` }}>
                    <div className="text-lg mb-2" style={{ color: `oklch(0.45 0.1 ${complementDark})` }}>
                      Work-Life Balance
                    </div>
                    <p className="text-sm text-slate-600">Leave work at work and reclaim your evenings and weekends</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
