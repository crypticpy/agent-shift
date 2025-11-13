import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Book, Search, Sparkles, Shield, Code, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { WatercolorDrops } from "@/components/WatercolorDrops";

interface Term {
  id: string;
  term: string;
  category: string;
  definition: string;
  example: string;
  relatedTerms: string[];
  usedIn: string[];
  aliases: string[];
}

interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

interface GlossaryData {
  metadata: {
    title: string;
    description: string;
    lastUpdated: string;
    totalTerms: number;
  };
  categories: Category[];
  terms: Term[];
}

const iconMap: Record<string, any> = {
  "Sparkles": Sparkles,
  "Shield": Shield,
  "Code": Code,
};

export default function Glossary() {
  const [glossaryData, setGlossaryData] = useState<GlossaryData | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedLetter, setSelectedLetter] = useState<string>("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    fetch("/glossary-data.json")
      .then((res) => res.json())
      .then((data: GlossaryData) => {
        setGlossaryData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading glossary data:", error);
        setLoading(false);
      });
  }, []);

  const getFilteredTerms = (): Term[] => {
    if (!glossaryData) return [];

    let results = glossaryData.terms;

    // Filter by category
    if (selectedCategory !== "all") {
      results = results.filter((term) => term.category === selectedCategory);
    }

    // Filter by first letter
    if (selectedLetter !== "all") {
      results = results.filter((term) =>
        term.term.toLowerCase().startsWith(selectedLetter.toLowerCase())
      );
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(
        (term) =>
          term.term.toLowerCase().includes(query) ||
          term.definition.toLowerCase().includes(query) ||
          term.aliases.some((alias) => alias.toLowerCase().includes(query))
      );
    }

    // Sort alphabetically
    return results.sort((a, b) => a.term.localeCompare(b.term));
  };

  const filteredTerms = getFilteredTerms();

  // Get unique first letters from all terms
  const availableLetters = glossaryData
    ? Array.from(
        new Set(
          glossaryData.terms.map((term) => term.term.charAt(0).toUpperCase())
        )
      ).sort()
    : [];

  if (loading) {
    return (
      <div className="min-h-screen animated-gradient from-slate-50 via-white to-orange-50/30 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading glossary...</p>
        </div>
      </div>
    );
  }

  if (!glossaryData) {
    return (
      <div className="min-h-screen animated-gradient from-slate-50 via-white to-orange-50/30 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-2">Error loading glossary data</p>
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
              <Book className="h-4 w-4" />
              {glossaryData.metadata.totalTerms} Terms Defined
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {glossaryData.metadata.title}
            </h1>
            <p className="text-xl opacity-95">
              {glossaryData.metadata.description}
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filters - Unified Container */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="mb-6 border-2 border-slate-200 shadow-lg">
            <CardContent className="p-6 space-y-6">
              {/* Search Bar */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Search className="h-5 w-5 text-orange-600" />
                  <h3 className="text-sm font-semibold text-slate-700">Search Terms</h3>
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <Input
                    type="text"
                    placeholder="Search terms, definitions, or aliases..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12 text-base"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="border-t border-slate-200 pt-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                    Filter
                  </Badge>
                  <h3 className="text-sm font-semibold text-slate-700">By Category</h3>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className={`px-4 py-2 rounded-md transition-colors ${
                      selectedCategory === "all"
                        ? "bg-orange-500 text-white"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300"
                    }`}
                  >
                    All Categories ({glossaryData.metadata.totalTerms})
                  </button>
                  {glossaryData.categories.map((category) => {
                    const Icon = iconMap[category.icon] || Book;
                    const categoryCount = glossaryData.terms.filter(
                      (t) => t.category === category.id
                    ).length;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`px-4 py-2 rounded-md transition-colors flex items-center gap-2 ${
                          selectedCategory === category.id
                            ? "bg-orange-500 text-white"
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        {category.name} ({categoryCount})
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Alphabetical Navigation */}
              <div className="border-t border-slate-200 pt-6">
                <div className="flex items-center gap-2 mb-3">
                  <Book className="h-5 w-5 text-orange-600" />
                  <h3 className="text-sm font-semibold text-slate-700">Jump to Letter</h3>
                </div>
                <div className="flex flex-wrap gap-1">
                  <button
                    onClick={() => setSelectedLetter("all")}
                    className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                      selectedLetter === "all"
                        ? "bg-orange-500 text-white"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    All
                  </button>
                  {availableLetters.map((letter) => (
                    <button
                      key={letter}
                      onClick={() => setSelectedLetter(letter)}
                      className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                        selectedLetter === letter
                          ? "bg-orange-500 text-white"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      {letter}
                    </button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results Count */}
          {(searchQuery || selectedCategory !== "all" || selectedLetter !== "all") && (
            <div className="mb-4 text-sm text-slate-600">
              Found {filteredTerms.length} term{filteredTerms.length !== 1 ? "s" : ""}
              {searchQuery && ` matching "${searchQuery}"`}
            </div>
          )}

          {/* Terms List */}
          <div className="space-y-4">
            {filteredTerms.length === 0 ? (
              <Card className="border-2 border-slate-200">
                <CardContent className="py-12 text-center">
                  <Book className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                  <p className="text-slate-600 text-lg mb-2">No terms found</p>
                  <p className="text-slate-500 text-sm">
                    Try adjusting your search or filters
                  </p>
                </CardContent>
              </Card>
            ) : (
              filteredTerms.map((term) => {
                const category = glossaryData.categories.find(
                  (c) => c.id === term.category
                );
                const Icon = category ? iconMap[category.icon] : Book;

                return (
                  <Card
                    key={term.id}
                    className="border-2 border-slate-200 hover:border-orange-300 transition-all"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3 flex-1">
                          <div className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                            {Icon && <Icon className="h-5 w-5 text-slate-600" />}
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-xl font-bold text-slate-900 leading-snug mb-1">
                              {term.term}
                            </CardTitle>
                            {term.aliases.length > 0 && (
                              <p className="text-sm text-slate-500 italic">
                                Also known as: {term.aliases.join(", ")}
                              </p>
                            )}
                          </div>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {category?.name}
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <div className="space-y-4">
                        {/* Definition */}
                        <div>
                          <p className="text-slate-700 leading-relaxed">
                            {term.definition}
                          </p>
                        </div>

                        {/* Example */}
                        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                          <p className="text-sm font-semibold text-blue-900 mb-1">
                            Example:
                          </p>
                          <p className="text-sm text-blue-800 leading-relaxed">
                            {term.example}
                          </p>
                        </div>

                        {/* Related Terms */}
                        {term.relatedTerms.length > 0 && (
                          <div>
                            <p className="text-sm font-semibold text-slate-700 mb-2">
                              Related Terms:
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {term.relatedTerms.map((relatedTerm, idx) => (
                                <Badge
                                  key={idx}
                                  variant="secondary"
                                  className="cursor-pointer hover:bg-slate-200"
                                  onClick={() => setSearchQuery(relatedTerm)}
                                >
                                  {relatedTerm}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Used In */}
                        {term.usedIn.length > 0 && (
                          <div className="pt-3 border-t border-slate-200">
                            <p className="text-sm font-semibold text-slate-700 mb-2">
                              Used on these pages:
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {term.usedIn.map((page, idx) => (
                                <Link key={idx} href={page}>
                                  <a className="inline-flex items-center gap-1 text-sm text-orange-600 hover:text-orange-700 hover:underline">
                                    {page === "/" ? "Home" : page.replace("/", "").replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())}
                                    <ExternalLink className="h-3 w-3" />
                                  </a>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
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
                    const category = glossaryData.categories.find(
                      (c) => c.id === selectedCategory
                    );
                    const Icon = category ? iconMap[category.icon] : Book;
                    return <Icon className="h-5 w-5 text-orange-600" />;
                  })()}
                  {
                    glossaryData.categories.find((c) => c.id === selectedCategory)
                      ?.name
                  }
                </CardTitle>
                <CardDescription className="text-base">
                  {
                    glossaryData.categories.find((c) => c.id === selectedCategory)
                      ?.description
                  }
                </CardDescription>
              </CardHeader>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
