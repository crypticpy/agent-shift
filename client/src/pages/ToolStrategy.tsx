import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { ToolStrategyNav } from "@/components/tool-strategy/ToolStrategyNav";
import { DecisionTreeQuiz } from "@/components/tool-strategy/DecisionTreeQuiz";
import { PlatformVendorCards } from "@/components/tool-strategy/PlatformVendorCards";
import { BestOfBreedShowcase } from "@/components/tool-strategy/BestOfBreedShowcase";
import { HybridArchitectureDiagram } from "@/components/tool-strategy/HybridArchitectureDiagram";
import { ConcernAccordion } from "@/components/tool-strategy/ConcernAccordion";
import { ActionPlanBuilder } from "@/components/tool-strategy/ActionPlanBuilder";

export default function ToolStrategy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50/30">
      {/* Sticky Navigation */}
      <ToolStrategyNav />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/40 via-amber-50/30 to-blue-100/40" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-300/20 to-amber-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-300/20 to-purple-300/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/80 backdrop-blur-sm border border-orange-200">
            <Sparkles className="h-4 w-4 text-orange-600" />
            <span className="text-sm font-medium text-orange-900">Comprehensive Tool Selection Guide</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 px-2 leading-tight bg-gradient-to-r from-slate-900 via-orange-900 to-slate-900 bg-clip-text text-transparent [-webkit-background-clip:text]">
            Hire Your Agent Team
          </h1>

          <p className="text-xl md:text-2xl text-slate-700 mb-4 max-w-3xl mx-auto">
            Choose the right agent per task, no matter who makes it.
          </p>

          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Think of this as building your team. Do you want everyone from the same staffing agency, or do you want to hire the best person for each role?
          </p>

          {/* Quick Navigation Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <a href="#decision-framework" className="px-4 py-2 rounded-full bg-white hover:bg-orange-50 border border-slate-200 hover:border-orange-300 text-sm font-medium text-slate-700 hover:text-orange-900 transition-all">
              Decision Framework
            </a>
            <a href="#platform-deep-dive" className="px-4 py-2 rounded-full bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-sm font-medium text-slate-700 hover:text-blue-900 transition-all">
              Platform Vendors
            </a>
            <a href="#best-of-breed" className="px-4 py-2 rounded-full bg-white hover:bg-green-50 border border-slate-200 hover:border-green-300 text-sm font-medium text-slate-700 hover:text-green-900 transition-all">
              Best-of-Breed
            </a>
            <a href="#hybrid-approach" className="px-4 py-2 rounded-full bg-white hover:bg-purple-50 border border-slate-200 hover:border-purple-300 text-sm font-medium text-slate-700 hover:text-purple-900 transition-all">
              Hybrid Approach
            </a>
            <a href="#action-plan" className="px-4 py-2 rounded-full bg-white hover:bg-amber-50 border border-slate-200 hover:border-amber-300 text-sm font-medium text-slate-700 hover:text-amber-900 transition-all">
              Your Action Plan
            </a>
          </div>

          <Link href="/guidance">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
              Get Guidance & Calculate ROI
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        {/* Section 1: Decision Framework */}
        <section id="decision-framework" className="mb-24 scroll-mt-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Interactive Decision Framework
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Answer a few questions to get a personalized recommendation for your organization
            </p>
          </div>
          <DecisionTreeQuiz />
        </section>

        {/* Section 2: Platform Vendors Deep-Dive */}
        <section id="platform-deep-dive" className="mb-24 scroll-mt-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Platform Vendors: Deep Dive
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Understanding the strengths and limitations of integrated platform solutions
            </p>
          </div>
          <PlatformVendorCards />
        </section>

        {/* Section 3: Best-of-Breed Showcase */}
        <section id="best-of-breed" className="mb-24 scroll-mt-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Best-of-Breed Advantages
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Specialized tools that excel at specific tasks
            </p>
          </div>
          <BestOfBreedShowcase />
        </section>

        {/* Section 4: Hybrid Approach */}
        <section id="hybrid-approach" className="mb-24 scroll-mt-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-purple-100 border border-purple-300">
              <span className="text-sm font-bold text-purple-900">RECOMMENDED</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              The Hybrid Approach
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Get the best of both worlds: platform stability + specialist innovation
            </p>
          </div>
          <HybridArchitectureDiagram />
        </section>

        {/* Section 5: Common Concerns */}
        <section id="common-concerns" className="mb-24 scroll-mt-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Common Concerns Addressed
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Thoughtful answers to the questions you're asking
            </p>
          </div>
          <ConcernAccordion />
        </section>

        {/* Section 6: Your Action Plan */}
        <section id="action-plan" className="mb-24 scroll-mt-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Your Action Plan
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A step-by-step roadmap to implement your tool strategy
            </p>
          </div>
          <ActionPlanBuilder />
        </section>

        {/* Research & Data Quality Section */}
        <section className="mb-24">
          <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50/50 to-slate-50">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-blue-600" />
                Research-Backed Analysis
              </h3>
              <p className="text-slate-700 mb-6">
                All data, timelines, and recommendations on this page are backed by comprehensive research from
                leading technology analysts, academic institutions, and real-world implementations. Our analysis
                is continuously updated to reflect the latest developments in AI tooling.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <p className="font-semibold text-slate-900 mb-2">Industry Analysis</p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• McKinsey State of AI 2025</li>
                    <li>• Gartner Market Analysis 2025</li>
                    <li>• Forrester Research Reports 2025</li>
                    <li>• IBM EMEA AI Study (Sept 2025)</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <p className="font-semibold text-slate-900 mb-2">Academic Research</p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• MIT GenAI Divide Study 2025</li>
                    <li>• Harvard Business School AI Studies</li>
                    <li>• Stanford HAI Reports 2025</li>
                    <li>• Constellation Research 2025</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <p className="font-semibold text-slate-900 mb-2">Real-World Data (Nov 2025)</p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• G2 & Product Hunt Reviews (2025)</li>
                    <li>• Vendor Release Timelines (GPT-5, Claude 4.5)</li>
                    <li>• Enterprise Case Studies (2025)</li>
                    <li>• Official Vendor Announcements</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-100 border-l-4 border-blue-600 p-4 rounded">
                <p className="text-sm text-blue-900">
                  <strong>Data Transparency (November 2025):</strong> All statistics cited on this page include source attribution.
                  Feature release dates are verified from official vendor announcements. Pricing reflects November 2025
                  published rates. User ratings are aggregated from multiple review platforms. Model versions (GPT-5, Claude 4.5, Gemini 3.0)
                  reflect current November 2025 releases.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 p-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Ready to Calculate Your ROI?
            </h3>
            <p className="text-lg text-slate-700 mb-6 max-w-2xl mx-auto">
              Use our ROI calculator to see exactly how much time and money you'll save with AI tools
            </p>
            <Link href="/guidance">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                Go to ROI Calculator
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </Card>
        </section>
      </div>
    </div>
  );
}
