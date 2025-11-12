import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Search, Building2, HeartPulse, Scale, Siren, ShieldCheck, Code, Filter, ExternalLink, CheckCircle2, AlertCircle, TrendingUp, Users, Database, Globe, GitCompare } from "lucide-react";
import { Link } from "wouter";
import { APP_TITLE } from "@/const";
import { Particles } from "@/components/Particles";
import { CardMagicDust } from "@/components/CardMagicDust";

interface Tool {
  name: string;
  description: string;
  category: string;
  capabilities: string[];
  pricing: string;
  website: string;
  compliance: string[];
  use_cases: string[];
  government_fit: string;
}

interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  government_relevance: string;
  adoption_maturity: string;
  subcategories: string[];
  tools: Tool[];
}

interface CatalogData {
  metadata: {
    title: string;
    subtitle: string;
    version: string;
    last_updated: string;
    total_tools: number;
    total_categories: number;
    research_sources: number;
  };
  categories: Category[];
  statistics: {
    by_government_relevance: Record<string, number>;
    by_adoption_maturity: Record<string, number>;
    by_pricing_model: Record<string, number>;
    by_compliance: Record<string, number>;
  };
  insights: Array<{
    title: string;
    description: string;
  }>;
}

const iconMap: Record<string, any> = {
  "building-2": Building2,
  "heart-pulse": HeartPulse,
  "scale": Scale,
  "siren": Siren,
  "shield-check": ShieldCheck,
  "code": Code,
};

export default function Home() {
  const [catalogData, setCatalogData] = useState<CatalogData | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
  const [relevanceFilter, setRelevanceFilter] = useState<string>("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/catalog_data_v2.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load catalog data");
        return res.json();
      })
      .then((data) => {
        setCatalogData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading catalog:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center gradient-mesh">
        <div className="text-center glass rounded-2xl p-8 backdrop-blur-md">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary/20 border-t-primary mx-auto mb-4"></div>
          <p className="text-foreground font-medium">Loading comprehensive catalog...</p>
        </div>
      </div>
    );
  }

  if (error || !catalogData) {
    return (
      <div className="min-h-screen flex items-center justify-center gradient-mesh">
        <Card className="max-w-md shadow-2xl">
          <CardHeader>
            <CardTitle className="text-destructive flex items-center gap-2">
              <AlertCircle className="h-5 w-5" />
              Error Loading Catalog
            </CardTitle>
            <CardDescription>{error || "Unable to load catalog data"}</CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  const filteredCategories = catalogData.categories.filter((cat) => {
    const matchesCategory = selectedCategory === "all" || cat.id === selectedCategory;
    const matchesRelevance = relevanceFilter === "all" || cat.government_relevance === relevanceFilter;
    return matchesCategory && matchesRelevance;
  });

  const allTools = filteredCategories.flatMap((cat) => 
    (cat.tools || []).map(tool => ({ ...tool, category: cat.name }))
  );
  const filteredTools = allTools.filter((tool) =>
    tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (tool.category && tool.category.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const getRelevanceBadgeColor = (relevance: string) => {
    switch (relevance) {
      case "Critical": return "bg-red-100 text-red-800 border-red-300";
      case "High": return "bg-orange-100 text-orange-800 border-orange-300";
      case "Moderate": return "bg-yellow-100 text-yellow-800 border-yellow-300";
      default: return "bg-muted text-muted-foreground border-border";
    }
  };

  const getMaturityBadgeColor = (maturity: string) => {
    switch (maturity) {
      case "Emerging": return "bg-amber-100 text-amber-700 border-amber-300 hover:bg-amber-200 transition-colors";
      case "Moderate": return "bg-emerald-100 text-emerald-700 border-emerald-300 hover:bg-emerald-200 transition-colors";
      case "Advanced": return "bg-blue-100 text-blue-700 border-blue-300 hover:bg-blue-200 transition-colors";
      default: return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Animated Gradient Mesh */}
      <div className="relative animated-gradient text-white overflow-hidden">
        {/* Floating Particles */}
        <Particles count={60} />

        {/* Subtle animated overlay pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold mb-6 tracking-tight">{catalogData.metadata.title}</h1>
            <p className="text-2xl text-white/90 mb-4 font-light leading-relaxed">{catalogData.metadata.subtitle}</p>

            <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              You're not just browsing tools—you're building your team of specialized AI agents. Each tool handles a different part of your work. You orchestrate them. They execute.
            </p>

            <div className="flex justify-center mb-10">
              <Link href="/compare">
                <Button size="lg" className="glass hover:scale-105 transition-all duration-300 shadow-2xl text-lg px-8 py-6">
                  <GitCompare className="mr-3 h-6 w-6" />
                  Compare Tools Side-by-Side
                </Button>
              </Link>
            </div>

            {/* Statistics with modern card design */}
            <div className="flex flex-wrap justify-center gap-8 text-base">
              <div className="glass card-lift rounded-lg p-4">
                <div className="text-3xl font-bold text-orange-500">{catalogData.metadata.total_tools}+</div>
                <div className="text-sm text-slate-600">AI Tools</div>
              </div>
              <div className="glass card-lift rounded-lg p-4">
                <div className="text-3xl font-bold text-amber-500">{catalogData.metadata.total_categories}</div>
                <div className="text-sm text-slate-600">Categories</div>
              </div>
              <div className="glass card-lift rounded-lg p-4">
                <div className="text-3xl font-bold text-teal-500">{catalogData.metadata.research_sources}+</div>
                <div className="text-sm text-slate-600">Sources</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters - moved up to replace statistics dashboard */}
      <div className="container mx-auto px-4 mt-12 mb-8 relative z-20">
        <div className="relative px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50/40 via-amber-50/30 to-teal-50/40" style={{
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)'
          }}></div>
          <div className="relative pt-8 pb-10">
            <div className="container mx-auto px-4">
              <Card className="glass shadow-lg border-2 border-orange-200/50">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-3 h-5 w-5 text-orange-600" />
                      <Input
                        placeholder="Search tools by name, description, or category..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 border-orange-200/50 focus-visible:border-orange-400"
                      />
                    </div>
                    <div className="flex gap-2">
                      <select
                        value={relevanceFilter}
                        onChange={(e) => setRelevanceFilter(e.target.value)}
                        className="px-4 py-2 border border-orange-200/50 rounded-md bg-white text-sm hover:border-orange-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200/50 transition-all"
                      >
                        <option value="all">All Relevance</option>
                        <option value="Critical">Critical</option>
                        <option value="High">High</option>
                        <option value="Moderate">Moderate</option>
                      </select>
                    </div>
                  </div>
                  {searchQuery && (
                    <p className="text-sm text-slate-600 mt-3">
                      Found <strong>{filteredTools.length}</strong> tools matching "{searchQuery}"
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-16">
        <Tabs defaultValue="all" value={selectedCategory} onValueChange={setSelectedCategory}>
          <TabsList className="flex flex-wrap h-auto gap-2 bg-card p-3 rounded-xl shadow-lg mb-10 border">
            <TabsTrigger
              value="all"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all duration-300"
            >
              All Categories
            </TabsTrigger>
            {catalogData.categories.map((category) => {
              const IconComponent = iconMap[category.icon] || Building2;
              return (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all duration-300 flex items-center gap-2"
                >
                  <IconComponent className="h-4 w-4" />
                  <span className="hidden sm:inline">{category.name}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          <TabsContent value="all" className="space-y-8">
            {filteredCategories.map((category) => (
              <CategorySection key={category.id} category={category} onToolSelect={setSelectedTool} />
            ))}
          </TabsContent>

          {catalogData.categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <CategorySection category={category} onToolSelect={setSelectedTool} />
            </TabsContent>
          ))}
        </Tabs>

        {/* Key Insights Section - Enhanced */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-foreground mb-8 flex items-center gap-3">
            <div className="p-3 bg-primary/10 rounded-xl">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            Key Insights & Trends
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {catalogData.insights.map((insight, index) => (
              <Card
                key={index}
                className="card-lift shadow-lg border-l-4 border-l-primary bg-gradient-to-br from-card to-card/50 group"
              >
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{insight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{insight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Tool Detail Dialog */}
      {selectedTool && (
        <Dialog open={!!selectedTool} onOpenChange={() => setSelectedTool(null)}>
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto dialog-enhanced">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedTool.name}</DialogTitle>
              <DialogDescription className="text-base">{selectedTool.description}</DialogDescription>
            </DialogHeader>
            <div className="space-y-6 mt-4">
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  Key Capabilities
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedTool.capabilities.map((cap, i) => (
                    <Badge key={i} variant="outline">{cap}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Compliance & Certifications</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedTool.compliance.map((comp, i) => (
                    <Badge key={i} className="bg-green-100 text-green-800">{comp}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Government Use Cases</h4>
                <ul className="list-disc list-inside space-y-1 text-slate-700">
                  {selectedTool.use_cases.map((useCase, i) => (
                    <li key={i}>{useCase}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Government Fit Assessment</h4>
                <p className="text-foreground bg-accent/10 p-4 rounded-lg border border-accent/20">
                  {selectedTool.government_fit}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t">
                <div>
                  <span className="text-sm text-slate-600">Pricing Model:</span>
                  <Badge className="ml-2">{selectedTool.pricing}</Badge>
                </div>
                <Button asChild>
                  <a href={selectedTool.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    Visit Website
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-3">{APP_TITLE}</h3>
              <p className="text-slate-400 text-sm">
                Comprehensive research and analysis of agentic AI tools for government decision-makers.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Research Methodology</h4>
              <p className="text-slate-400 text-sm">
                Based on analysis of 200+ AI agent platforms across 18 categories, with 150+ authoritative sources reviewed.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Last Updated</h4>
              <p className="text-slate-400 text-sm">
                {catalogData.metadata.last_updated} • Version {catalogData.metadata.version}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Enhanced Tool Card with subtle hover effects
function ToolCard({ tool, index, onSelect }: { tool: Tool; index: number; onSelect: (tool: Tool) => void }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Intersection Observer for staggered reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsRevealed(true), index * 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      className={`fade-in-up ${isRevealed ? "revealed" : ""}`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <Card
        className="shadow-lg hover:shadow-xl cursor-pointer group relative overflow-hidden transition-all duration-300 hover:border-primary/50"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => onSelect(tool)}
      >
        {/* Magic Dust Effect */}
        <CardMagicDust isHovered={isHovered} />
        <CardHeader>
          <CardTitle className="text-lg">{tool.name}</CardTitle>
          <CardDescription className="line-clamp-2">{tool.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Capabilities</span>
            <div className="flex flex-wrap gap-1 mt-2">
              {tool.capabilities.slice(0, 3).map((cap, i) => (
                <Badge key={i} variant="outline" className="text-xs hover:bg-accent/10 transition-colors">{cap}</Badge>
              ))}
              {tool.capabilities.length > 3 && (
                <Badge variant="outline" className="text-xs bg-muted">+{tool.capabilities.length - 3} more</Badge>
              )}
            </div>
          </div>
          <div>
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Compliance</span>
            <div className="flex flex-wrap gap-1 mt-2">
              {tool.compliance.slice(0, 3).map((comp, i) => (
                <Badge key={i} className="bg-emerald-100 text-emerald-700 text-xs hover:bg-emerald-200 transition-colors">{comp}</Badge>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between pt-3 border-t">
            <Badge className="bg-primary/10 text-primary border-primary/20">{tool.pricing}</Badge>
            <Button size="sm" variant="outline">
              View Details
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function CategorySection({ category, onToolSelect }: { category: Category; onToolSelect: (tool: Tool) => void }) {
  const IconComponent = iconMap[category.icon] || Building2;
  const getRelevanceBadgeColor = (relevance: string) => {
    switch (relevance) {
      case "Critical": return "bg-red-100 text-red-800 border-red-300";
      case "High": return "bg-orange-100 text-orange-800 border-orange-300";
      case "Moderate": return "bg-yellow-100 text-yellow-800 border-yellow-300";
      default: return "bg-muted text-muted-foreground border-border";
    }
  };

  const getMaturityBadgeColor = (maturity: string) => {
    switch (maturity) {
      case "Emerging": return "bg-amber-100 text-amber-700 border-amber-300 hover:bg-amber-200 transition-colors";
      case "Moderate": return "bg-emerald-100 text-emerald-700 border-emerald-300 hover:bg-emerald-200 transition-colors";
      case "Advanced": return "bg-blue-100 text-blue-700 border-blue-300 hover:bg-blue-200 transition-colors";
      default: return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-card to-muted/30 rounded-2xl border shadow-sm">
        <div className="bg-primary/10 p-4 rounded-xl group-hover:bg-accent/20 transition-colors">
          <IconComponent className="h-8 w-8 text-primary group-hover:text-accent transition-colors" />
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <h3 className="text-3xl font-bold text-foreground">{category.name}</h3>
            <Badge className={getRelevanceBadgeColor(category.government_relevance)}>
              {category.government_relevance} Relevance
            </Badge>
            <Badge className={getMaturityBadgeColor(category.adoption_maturity)}>
              {category.adoption_maturity}
            </Badge>
          </div>
          <p className="text-muted-foreground mb-4 leading-relaxed">{category.description}</p>
          <div className="flex flex-wrap gap-2">
            {category.subcategories.map((sub, i) => (
              <Badge key={i} variant="outline" className="text-xs hover:bg-muted transition-colors">{sub}</Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.tools && category.tools.length > 0 ? (
          category.tools.map((tool, index) => (
            <ToolCard key={index} tool={tool} index={index} onSelect={onToolSelect} />
          ))
        ) : (
          <p className="text-muted-foreground col-span-full text-center py-8">No tools available in this category yet.</p>
        )}
      </div>
    </div>
  );
}
