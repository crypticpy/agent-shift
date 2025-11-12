import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, FileText, Presentation, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ConversationPlaybook } from "./guidance/ConversationPlaybook";
import { PurchaseRequestBuilder } from "./guidance/PurchaseRequestBuilder";
import { ExecutivePresentationBuilder } from "./guidance/ExecutivePresentationBuilder";
import { VendorComparisonBrief } from "./guidance/VendorComparisonBrief";

interface CalculationResult {
  timeSavedPerTask: number;
  tasksPerWeek: number;
  totalWeeklySavings: number;
  totalAnnualHours: number;
  dollarValue: number;
  breakEvenWeeks: number;
}

interface BusinessCaseGuidanceProps {
  result: CalculationResult | null;
  taskType: string;
  taskPresets: Record<string, { name: string; manual: number; ai: number; savings: number }>;
}

export function BusinessCaseGuidance({ result, taskType, taskPresets }: BusinessCaseGuidanceProps) {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-3">
          Making Your Business Case: A Practical Guide
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Choose your scenario below to get tailored guidance, templates, and positioning strategies
          backed by research from 50+ peer-reviewed sources.
        </p>
      </div>

      {/* Scenario Accordion */}
      <Card className="border-2 border-primary/20 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Select Your Scenario</CardTitle>
          <CardDescription>
            Expand any section below for specific guidance, templates, and talking points
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="space-y-4">
            {/* Conversation Playbook */}
            <AccordionItem value="conversation" className="border-2 border-primary/20 rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3 text-left">
                  <div className="h-10 w-10 bg-gradient-to-br from-primary to-chart-1 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Having a Conversation (Informal)</div>
                    <div className="text-sm text-slate-600">Elevator pitches, analogies, and objection handling</div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <ConversationPlaybook result={result} taskType={taskType} taskPresets={taskPresets} />
              </AccordionContent>
            </AccordionItem>

            {/* RFP/Purchase Request */}
            <AccordionItem value="rfp" className="border-2 border-chart-2/20 rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3 text-left">
                  <div className="h-10 w-10 bg-gradient-to-br from-chart-2 to-chart-5 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Writing a Purchase Request/RFP</div>
                    <div className="text-sm text-slate-600">Structured templates, vendor comparisons, and compliance checklists</div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <PurchaseRequestBuilder result={result} taskType={taskType} taskPresets={taskPresets} />
              </AccordionContent>
            </AccordionItem>

            {/* Executive Presentation */}
            <AccordionItem value="executive" className="border-2 border-accent/20 rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3 text-left">
                  <div className="h-10 w-10 bg-gradient-to-br from-accent to-chart-3 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Presentation className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Presenting to Executives</div>
                    <div className="text-sm text-slate-600">Slide deck outlines, speaker notes, and anticipated questions</div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <ExecutivePresentationBuilder result={result} taskType={taskType} taskPresets={taskPresets} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* Vendor Comparison Brief */}
      <VendorComparisonBrief />

      {/* Link to Full Business Case */}
      <Card className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
        <CardContent className="py-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="font-semibold text-blue-900 mb-2 text-lg">
                Want the full research-backed business case?
              </div>
              <div className="text-sm text-blue-700">
                Explore 50+ peer-reviewed citations, strategic benefits, industry examples, and implementation guidance
              </div>
            </div>
            <Link href="/business-case">
              <Button variant="default" className="bg-blue-600 hover:bg-blue-700 text-white flex-shrink-0">
                View Full Business Case
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
