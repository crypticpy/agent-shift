import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { HelpCircle, Shield, Settings, Users, Search, ChevronDown, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { WatercolorDrops } from "@/components/WatercolorDrops";

interface RelatedLink {
  text: string;
  href: string;
}

interface Question {
  id: string;
  question: string;
  answer: string;
  relatedLinks?: RelatedLink[];
}

interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  questions: Question[];
}

interface FAQData {
  metadata: {
    title: string;
    description: string;
    lastUpdated: string;
    totalQuestions: number;
  };
  categories: Category[];
}

const iconMap: Record<string, any> = {
  "HelpCircle": HelpCircle,
  "Shield": Shield,
  "Settings": Settings,
  "Users": Users,
};

export default function FAQ() {
  const [faqData, setFaqData] = useState<FAQData | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [openQuestions, setOpenQuestions] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    fetch("/faq-data.json")
      .then((res) => res.json())
      .then((data: FAQData) => {
        setFaqData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading FAQ data:", error);
        setLoading(false);
      });
  }, []);

  const toggleQuestion = (questionId: string) => {
    const newOpen = new Set(openQuestions);
    if (newOpen.has(questionId)) {
      newOpen.delete(questionId);
    } else {
      newOpen.add(questionId);
    }
    setOpenQuestions(newOpen);
  };

  const getFilteredQuestions = (): Array<{ category: Category; question: Question }> => {
    if (!faqData) return [];

    let results: Array<{ category: Category; question: Question }> = [];

    faqData.categories.forEach((category) => {
      if (selectedCategory !== "all" && category.id !== selectedCategory) {
        return;
      }

      category.questions.forEach((question) => {
        if (searchQuery) {
          const query = searchQuery.toLowerCase();
          const matchesQuestion = question.question.toLowerCase().includes(query);
          const matchesAnswer = question.answer.toLowerCase().includes(query);

          if (matchesQuestion || matchesAnswer) {
            results.push({ category, question });
          }
        } else {
          results.push({ category, question });
        }
      });
    });

    return results;
  };

  const filteredResults = getFilteredQuestions();

  if (loading) {
    return (
      <div className="min-h-screen animated-gradient from-slate-50 via-white to-orange-50/30 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading FAQ...</p>
        </div>
      </div>
    );
  }

  if (!faqData) {
    return (
      <div className="min-h-screen animated-gradient from-slate-50 via-white to-orange-50/30 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-2">Error loading FAQ data</p>
          <p className="text-slate-600 text-sm">Please check the console for details</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen animated-gradient from-slate-50 via-white to-orange-50/30">
      {/* Hero */}
      <div className="relative hero-color-cycle text-white py-16 overflow-hidden">
        <WatercolorDrops opacity={0.3} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 glass backdrop-blur px-4 py-2 rounded-full text-sm font-medium mb-6">
              <HelpCircle className="h-4 w-4" />
              {faqData.metadata.totalQuestions} Questions Answered
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {faqData.metadata.title}
            </h1>
            <p className="text-xl opacity-95">
              {faqData.metadata.description}
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="glass mb-8">
            <CardContent className="pt-6">
              {/* Search Bar */}
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <Input
                  type="text"
                  placeholder="Search questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 text-base"
                />
              </div>

              {/* Category Filter Tabs */}
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    selectedCategory === "all"
                      ? "bg-orange-500 text-white"
                      : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  All Questions ({faqData.metadata.totalQuestions})
                </button>
                {faqData.categories.map((category) => {
                  const Icon = iconMap[category.icon] || HelpCircle;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-md transition-colors flex items-center gap-2 ${
                        selectedCategory === category.id
                          ? "bg-orange-500 text-white"
                          : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {category.name} ({category.questions.length})
                    </button>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Results Count */}
          {searchQuery && (
            <div className="mb-4 text-sm text-slate-600">
              Found {filteredResults.length} result{filteredResults.length !== 1 ? "s" : ""} for "{searchQuery}"
            </div>
          )}

          {/* Questions */}
          <div className="space-y-4">
            {filteredResults.length === 0 ? (
              <Card className="border-2 border-slate-200">
                <CardContent className="py-12 text-center">
                  <HelpCircle className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                  <p className="text-slate-600 text-lg mb-2">No questions found</p>
                  <p className="text-slate-500 text-sm">
                    Try adjusting your search or filters
                  </p>
                </CardContent>
              </Card>
            ) : (
              filteredResults.map(({ category, question }) => {
                const isOpen = openQuestions.has(question.id);
                const Icon = iconMap[category.icon] || HelpCircle;

                return (
                  <Collapsible
                    key={question.id}
                    open={isOpen}
                    onOpenChange={() => toggleQuestion(question.id)}
                  >
                    <Card className={`border-2 transition-all ${
                      isOpen ? "border-orange-300 shadow-lg" : "border-slate-200 hover:border-slate-300"
                    }`}>
                      <CollapsibleTrigger className="w-full text-left">
                        <CardHeader className="cursor-pointer">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-start gap-3 flex-1">
                              <div className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                <Icon className="h-5 w-5 text-slate-600" />
                              </div>
                              <div className="flex-1">
                                <CardTitle className="text-lg font-semibold text-slate-900 leading-snug">
                                  {question.question}
                                </CardTitle>
                                {!isOpen && (
                                  <Badge variant="outline" className="mt-2 text-xs">
                                    {category.name}
                                  </Badge>
                                )}
                              </div>
                            </div>
                            <ChevronDown
                              className={`h-5 w-5 text-slate-400 flex-shrink-0 transition-transform ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            />
                          </div>
                        </CardHeader>
                      </CollapsibleTrigger>

                      <CollapsibleContent>
                        <CardContent className="pt-0">
                          <div className="pl-13">
                            <div className="prose prose-slate max-w-none">
                              <div className="text-slate-700 leading-relaxed whitespace-pre-line">
                                {question.answer}
                              </div>
                            </div>

                            {question.relatedLinks && question.relatedLinks.length > 0 && (
                              <div className="mt-4 pt-4 border-t border-slate-200">
                                <p className="text-sm font-semibold text-slate-700 mb-2">
                                  Related Resources:
                                </p>
                                <div className="flex flex-wrap gap-2">
                                  {question.relatedLinks.map((link, idx) => (
                                    <Link key={idx} href={link.href}>
                                      <a className="inline-flex items-center gap-1 text-sm text-orange-600 hover:text-orange-700 hover:underline">
                                        {link.text}
                                        <ExternalLink className="h-3 w-3" />
                                      </a>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </CollapsibleContent>
                    </Card>
                  </Collapsible>
                );
              })
            )}
          </div>

          {/* Category Descriptions */}
          {selectedCategory !== "all" && !searchQuery && (
            <Card className="mt-8 border-2 border-orange-100 bg-orange-50/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {(() => {
                    const category = faqData.categories.find(c => c.id === selectedCategory);
                    const Icon = category ? iconMap[category.icon] : HelpCircle;
                    return <Icon className="h-5 w-5 text-orange-600" />;
                  })()}
                  {faqData.categories.find(c => c.id === selectedCategory)?.name}
                </CardTitle>
                <CardDescription className="text-base">
                  {faqData.categories.find(c => c.id === selectedCategory)?.description}
                </CardDescription>
              </CardHeader>
            </Card>
          )}

          {/* Still Have Questions CTA */}
          <Card className="mt-12 border-2 border-slate-200 bg-gradient-to-br from-slate-50 to-white">
            <CardContent className="py-8 text-center">
              <HelpCircle className="h-12 w-12 text-slate-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Still have questions?
              </h3>
              <p className="text-slate-600 mb-4 max-w-md mx-auto">
                Can't find what you're looking for? Check out our other resources or reach out for help.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/getting-started">
                  <a className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors font-medium">
                    Getting Started Guide
                  </a>
                </Link>
                <Link href="/use-cases">
                  <a className="inline-flex items-center justify-center px-6 py-3 bg-white text-slate-700 border-2 border-slate-200 rounded-md hover:bg-slate-50 transition-colors font-medium">
                    Browse Use Cases
                  </a>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
