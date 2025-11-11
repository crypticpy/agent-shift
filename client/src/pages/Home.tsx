import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Search, Building2, HeartPulse, Scale, Siren, ShieldCheck, Code, Filter, ExternalLink, CheckCircle2, AlertCircle, TrendingUp, Users, Database, Globe, GitCompare } from "lucide-react";
import { Link } from "wouter";
import { APP_TITLE } from "@/const";

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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600 font-medium">Loading comprehensive catalog...</p>
        </div>
      </div>
    );
  }

  if (error || !catalogData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle className="text-red-600 flex items-center gap-2">
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
      default: return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  const getMaturityBadgeColor = (maturity: string) => {
    switch (maturity) {
      case "Emerging": return "bg-blue-100 text-blue-800 border-blue-300";
      case "Moderate": return "bg-green-100 text-green-800 border-green-300";
      case "Advanced": return "bg-purple-100 text-purple-800 border-purple-300";
      default: return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">{catalogData.metadata.title}</h1>
            <p className="text-xl text-blue-100 mb-6">{catalogData.metadata.subtitle}</p>
            <div className="flex justify-center mb-6">
              <Link href="/compare">
                <Button size="lg" variant="secondary" className="bg-white text-blue-900 hover:bg-blue-50">
                  <GitCompare className="mr-2 h-5 w-5" />
                  Compare Tools Side-by-Side
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Database className="h-5 w-5 text-blue-300" />
                <span><strong>{catalogData.metadata.total_tools}+</strong> AI Tools</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-blue-300" />
                <span><strong>{catalogData.metadata.total_categories}</strong> Categories</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-300" />
                <span><strong>{catalogData.metadata.research_sources}+</strong> Sources</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Dashboard */}
      <div className="container mx-auto px-4 -mt-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="shadow-lg border-2 border-blue-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-600">Government Relevance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Critical</span>
                  <Badge className="bg-red-100 text-red-800">{catalogData.statistics.by_government_relevance.Critical}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">High</span>
                  <Badge className="bg-orange-100 text-orange-800">{catalogData.statistics.by_government_relevance.High}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Moderate</span>
                  <Badge className="bg-yellow-100 text-yellow-800">{catalogData.statistics.by_government_relevance.Moderate}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-2 border-green-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-600">Adoption Maturity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Emerging</span>
                  <Badge className="bg-blue-100 text-blue-800">{catalogData.statistics.by_adoption_maturity.Emerging}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Moderate</span>
                  <Badge className="bg-green-100 text-green-800">{catalogData.statistics.by_adoption_maturity.Moderate}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-2 border-purple-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-600">Pricing Models</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-xs">Open Source</span>
                  <Badge variant="outline">{catalogData.statistics.by_pricing_model["Free/Open Source"]}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Subscription</span>
                  <Badge variant="outline">{catalogData.statistics.by_pricing_model.Subscription}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Enterprise</span>
                  <Badge variant="outline">{catalogData.statistics.by_pricing_model.Enterprise}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-2 border-indigo-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-600">Top Compliance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">SOC 2</span>
                  <Badge variant="outline">{catalogData.statistics.by_compliance["SOC 2"]}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">FedRAMP</span>
                  <Badge variant="outline">{catalogData.statistics.by_compliance.FedRAMP}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">HIPAA</span>
                  <Badge variant="outline">{catalogData.statistics.by_compliance.HIPAA}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="container mx-auto px-4 mb-8">
        <Card className="shadow-lg">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                <Input
                  placeholder="Search tools by name, description, or category..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <select
                  value={relevanceFilter}
                  onChange={(e) => setRelevanceFilter(e.target.value)}
                  className="px-4 py-2 border rounded-md bg-white text-sm"
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

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-16">
        <Tabs defaultValue="all" value={selectedCategory} onValueChange={setSelectedCategory}>
          <TabsList className="flex flex-wrap h-auto gap-2 bg-white p-2 rounded-lg shadow-md mb-8">
            <TabsTrigger value="all" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              All Categories
            </TabsTrigger>
            {catalogData.categories.map((category) => {
              const IconComponent = iconMap[category.icon] || Building2;
              return (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white flex items-center gap-2"
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

        {/* Key Insights Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <TrendingUp className="h-8 w-8 text-blue-600" />
            Key Insights & Trends
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {catalogData.insights.map((insight, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow border-l-4 border-l-blue-600">
                <CardHeader>
                  <CardTitle className="text-lg">{insight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{insight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Tool Detail Dialog */}
      {selectedTool && (
        <Dialog open={!!selectedTool} onOpenChange={() => setSelectedTool(null)}>
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
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
                <p className="text-slate-700 bg-blue-50 p-3 rounded-md border border-blue-200">
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

function CategorySection({ category, onToolSelect }: { category: Category; onToolSelect: (tool: Tool) => void }) {
  const IconComponent = iconMap[category.icon] || Building2;
  const getRelevanceBadgeColor = (relevance: string) => {
    switch (relevance) {
      case "Critical": return "bg-red-100 text-red-800 border-red-300";
      case "High": return "bg-orange-100 text-orange-800 border-orange-300";
      case "Moderate": return "bg-yellow-100 text-yellow-800 border-yellow-300";
      default: return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  const getMaturityBadgeColor = (maturity: string) => {
    switch (maturity) {
      case "Emerging": return "bg-blue-100 text-blue-800 border-blue-300";
      case "Moderate": return "bg-green-100 text-green-800 border-green-300";
      case "Advanced": return "bg-purple-100 text-purple-800 border-purple-300";
      default: return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-start gap-4">
        <div className="bg-blue-100 p-3 rounded-lg">
          <IconComponent className="h-8 w-8 text-blue-600" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-2xl font-bold text-slate-900">{category.name}</h3>
            <Badge className={getRelevanceBadgeColor(category.government_relevance)}>
              {category.government_relevance} Relevance
            </Badge>
            <Badge className={getMaturityBadgeColor(category.adoption_maturity)}>
              {category.adoption_maturity}
            </Badge>
          </div>
          <p className="text-slate-600 mb-3">{category.description}</p>
          <div className="flex flex-wrap gap-2">
            {category.subcategories.map((sub, i) => (
              <Badge key={i} variant="outline" className="text-xs">{sub}</Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.tools && category.tools.length > 0 ? (
          category.tools.map((tool, index) => (
            <Card key={index} className="shadow-md hover:shadow-xl transition-all cursor-pointer border-2 border-transparent hover:border-blue-300">
              <CardHeader>
                <CardTitle className="text-lg">{tool.name}</CardTitle>
                <CardDescription className="line-clamp-2">{tool.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <span className="text-xs font-semibold text-slate-600">Capabilities:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {tool.capabilities.slice(0, 3).map((cap, i) => (
                      <Badge key={i} variant="outline" className="text-xs">{cap}</Badge>
                    ))}
                    {tool.capabilities.length > 3 && (
                      <Badge variant="outline" className="text-xs">+{tool.capabilities.length - 3} more</Badge>
                    )}
                  </div>
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-600">Compliance:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {tool.compliance.slice(0, 3).map((comp, i) => (
                      <Badge key={i} className="bg-green-100 text-green-800 text-xs">{comp}</Badge>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between pt-3 border-t">
                  <Badge>{tool.pricing}</Badge>
                  <Button size="sm" variant="outline" onClick={() => onToolSelect(tool)}>
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-slate-500 col-span-full text-center py-8">No tools available in this category yet.</p>
        )}
      </div>
    </div>
  );
}
