import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Presentation, Copy, Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface CalculationResult {
  timeSavedPerTask: number;
  tasksPerWeek: number;
  totalWeeklySavings: number;
  totalAnnualHours: number;
  dollarValue: number;
  breakEvenWeeks: number;
}

interface ExecutivePresentationBuilderProps {
  result: CalculationResult | null;
  taskType: string;
  taskPresets: Record<string, { name: string; manual: number; ai: number; savings: number }>;
}

export function ExecutivePresentationBuilder({ result, taskType, taskPresets }: ExecutivePresentationBuilderProps) {
  const preset = taskType ? taskPresets[taskType as keyof typeof taskPresets] : null;

  const slides = result && preset ? [
    {
      number: 1,
      title: "The Opportunity",
      headline: `Reclaim ${result.totalWeeklySavings.toFixed(1)} Hours Per Week with AI Agents`,
      bullets: [
        `Current process: ${preset.name} consumes ${result.totalWeeklySavings.toFixed(1)} hours weekly`,
        `That's ${(result.totalAnnualHours / 8).toFixed(0)} full workdays per year on routine tasks`,
        `AI automation can reduce this by ${preset.savings}% while improving quality`
      ],
      speakerNotes: `Start with the pain point they understand - time spent on routine work. Frame the opportunity in terms they care about: reclaimed capacity for strategic initiatives.`
    },
    {
      number: 2,
      title: "The Numbers",
      headline: `$${result.dollarValue.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} Net Annual Value`,
      bullets: [
        `Break even in ${result.breakEvenWeeks < 1 ? "less than 1 week" : `${result.breakEvenWeeks.toFixed(1)} weeks`}`,
        `${result.totalAnnualHours.toFixed(0)} hours reclaimed annually`,
        `${((result.dollarValue / 240) * 100).toFixed(0)}% ROI on $240 annual tool cost`
      ],
      speakerNotes: `Lead with the break-even time - that's what executives remember. The ROI percentage is massive, so emphasize it. These aren't projections; they're based on proven time savings from our actual work.`
    },
    {
      number: 3,
      title: "Beyond Time Savings",
      headline: "This Isn't Just About Efficiency",
      bullets: [
        `Capability expansion: Do work that previously required specialists`,
        `Handle 3-5x more volume without additional headcount`,
        `Quality improvement: Harvard/MIT research shows 40% higher output quality`,
        `Strategic capacity: Redirect ${result.totalWeeklySavings.toFixed(1)} hours/week to high-value work`
      ],
      speakerNotes: `Executives care about capability, not just cost savings. Emphasize that this lets us punch above our weight class and compete with larger organizations. The Harvard/MIT research citation adds credibility.`
    },
    {
      number: 4,
      title: "Market Context",
      headline: "Why Now?",
      bullets: [
        `85% of organizations already using AI agents (2025)`,
        `40% of Fortune 100 use AutoGen framework`,
        `Early adopters seeing 171% ROI (Google Cloud Study)`,
        `$17.5T market by 2030 (McKinsey, BCG, Deloitte, PwC)`
      ],
      speakerNotes: `This isn't experimental anymore - it's becoming table stakes. If our competitors are doing this and we're not, we fall behind. The Fortune 100 stat shows this isn't risky; it's prudent. Mention that waiting means we pay the opportunity cost every week we delay.`
    },
    {
      number: 5,
      title: "Risk Mitigation",
      headline: "How We Reduce Risk",
      bullets: [
        `90-day pilot with 3-5 users before full deployment`,
        `Enterprise-grade security: FedRAMP, SOC 2, HIPAA certified`,
        `No long-term contract; data export capability`,
        `Proven technology from established vendors`
      ],
      speakerNotes: `Address concerns before they're raised. The pilot approach makes this a low-risk experiment, not a big bet. Security compliance is non-negotiable for us, and all major tools meet our standards. The no-lock-in aspect is key - we're not trapped if it doesn't work.`
    },
    {
      number: 6,
      title: "Implementation Plan",
      headline: "Path to Value",
      bullets: [
        `Week 1-2: Pilot with actual work tasks`,
        `Week 3-4: Measure results and user feedback`,
        `Month 2: Scale to full team`,
        `Success metrics: 60%+ time savings, 4/5 user satisfaction`
      ],
      speakerNotes: `Keep it simple and fast. We can start Monday and have data in two weeks. No lengthy procurement, no massive training program. The metrics are concrete and measurable - we'll know quickly if this works for us.`
    },
    {
      number: 7,
      title: "What We Need",
      headline: "The Ask",
      bullets: [
        `Budget: $240/year for 90-day pilot`,
        `Permission: Use approved enterprise tools`,
        `Timeline: Start immediately to capture Q1 gains`
      ],
      speakerNotes: `Make the ask crystal clear and small. $240 is a rounding error in our budget, but the $${result.dollarValue.toFixed(0)} return is real money. Frame the timeline around capturing gains this quarter - every week we wait costs us $${(result.totalWeeklySavings * (result.dollarValue / result.totalAnnualHours)).toFixed(0)} in lost productivity.`
    },
    {
      number: 8,
      title: "The Cost of Waiting",
      headline: "What Happens If We Don't Act",
      bullets: [
        `Lost opportunity: $${result.dollarValue.toFixed(0)}/year in unrealized productivity`,
        `Competitive disadvantage: Competitors move faster while we fall behind`,
        `Talent risk: Top performers expect modern tools and will seek them elsewhere`,
        `Compounding delay: Every quarter we wait = $${(result.dollarValue / 4).toFixed(0)} lost`
      ],
      speakerNotes: `End with urgency, not fear. The "do nothing" option has real costs we're paying right now. Our competitors aren't waiting, and neither are the people we want to recruit. Frame this as a competitive move, not just an efficiency play. The quarterly breakdown makes the delay cost concrete.`
    }
  ] : [];

  const generateSpeakerNotes = () => {
    if (!slides.length) return "";

    return slides.map(slide => `
SLIDE ${slide.number}: ${slide.title}
${slide.speakerNotes}
`).join('\n');
  };

  const copyPresentation = () => {
    if (!result || !preset) return;

    const presentation = slides.map(slide => `
SLIDE ${slide.number}: ${slide.title}
Headline: ${slide.headline}

• ${slide.bullets.join('\n• ')}

Speaker Notes:
${slide.speakerNotes}
`).join('\n---\n');

    navigator.clipboard.writeText(presentation);
  };

  return (
    <div className="space-y-6">
      <Card className="border-accent/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Presentation className="h-5 w-5" />
            8-Slide Executive Deck
          </CardTitle>
          <CardDescription>
            {result ? "Ready-to-present slide outline with speaker notes" : "Calculate ROI above to generate your presentation"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {result && preset ? (
            <div className="space-y-6">
              {slides.map((slide, idx) => (
                <div
                  key={slide.number}
                  className={`border-l-4 pl-4 py-3 ${
                    idx === 0 ? 'border-primary' :
                    idx === 1 ? 'border-accent' :
                    idx === slides.length - 1 ? 'border-destructive' :
                    'border-chart-2'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline" className="text-xs">Slide {slide.number}</Badge>
                    <span className="text-xs text-slate-500">{slide.title}</span>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{slide.headline}</h4>
                  <ul className="space-y-1 text-sm text-slate-700 mb-3">
                    {slide.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-accent font-bold mt-0.5">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-slate-50 p-3 rounded text-xs text-slate-600 border border-slate-200">
                    <strong className="text-slate-700">Speaker Notes:</strong> {slide.speakerNotes}
                  </div>
                </div>
              ))}

              <div className="flex gap-3 pt-4 border-t">
                <Button onClick={copyPresentation} className="flex-1" variant="default">
                  <Copy className="h-4 w-4 mr-2" />
                  Copy All Slides
                </Button>
                <Button variant="outline" className="flex-1">
                  <Download className="h-4 w-4 mr-2" />
                  Export to PowerPoint
                </Button>
              </div>
            </div>
          ) : (
            <div className="text-center py-8 text-slate-600">
              <Presentation className="h-12 w-12 mx-auto mb-3 text-slate-300" />
              <p>Calculate your ROI using the calculator above to generate a customized executive presentation.</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Anticipated Questions */}
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="text-lg">Anticipated Questions & Answers</CardTitle>
          <CardDescription>Be ready for these</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm">
          <div>
            <p className="font-semibold text-slate-900 mb-1">Q: "Can't we just use what Microsoft/Google already provides?"</p>
            <p className="text-slate-700">
              A: "Platform tools are good baseline options, but specialized tools deliver 2-3x better results for specific tasks.
              It's like using a Swiss Army knife vs. specialized tools - both work, but one works much better. Plus, best-of-breed tools
              innovate faster and we're not locked into one ecosystem."
            </p>
          </div>

          <div>
            <p className="font-semibold text-slate-900 mb-1">Q: "How do we know the quality will be acceptable?"</p>
            <p className="text-slate-700">
              A: "That's exactly why we're proposing a pilot. Two weeks of real-world testing with actual tasks will show us the quality
              level. The Harvard/MIT research shows 40% quality improvement, but we'll validate it ourselves before committing."
            </p>
          </div>

          <div>
            <p className="font-semibold text-slate-900 mb-1">Q: "What if the vendor goes out of business?"</p>
            <p className="text-slate-700">
              A: "Major AI vendors are backed by billion-dollar investments and have Fortune 500 customers. More importantly,
              we can export our data and switch tools in days, not months. No long-term contracts or proprietary formats."
            </p>
          </div>

          <div>
            <p className="font-semibold text-slate-900 mb-1">Q: "Will people resist using it?"</p>
            <p className="text-slate-700">
              A: "Early adopters in other organizations report high user satisfaction because these tools genuinely make work easier.
              People resist change that makes their jobs harder, not change that saves them hours every week. The 30-minute learning
              curve helps too."
            </p>
          </div>

          <div>
            <p className="font-semibold text-slate-900 mb-1">Q: "Can we afford to do this across the whole organization?"</p>
            <p className="text-slate-700">
              A: "At $20-30/user/month, yes - and the ROI is massive. But we don't need to decide that today. The pilot will show us
              which roles benefit most, and we can scale strategically. Even a small deployment generates significant returns."
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Presentation Tips */}
      <Card className="bg-gradient-to-br from-accent/5 to-chart-3/5 border-accent/20">
        <CardContent className="pt-6">
          <h4 className="font-semibold text-slate-900 mb-3">Presentation Tips:</h4>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold">•</span>
              <span><strong>Start with slide 2 (the numbers).</strong> Hook them with ROI, then explain the opportunity.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold">•</span>
              <span><strong>Pause after slide 4 (market context).</strong> Let urgency sink in before moving to risk mitigation.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold">•</span>
              <span><strong>Emphasize the pilot approach.</strong> Low risk, fast results, easy to cancel if it doesn't work.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold">•</span>
              <span><strong>End with slide 8 (cost of waiting).</strong> Make inaction feel riskier than action.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold">•</span>
              <span><strong>Have the full Business Case ready.</strong> If they want deeper research, you can share the 50+ citation version.</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
