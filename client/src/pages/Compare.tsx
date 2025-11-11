import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import {
  ArrowLeft,
  CheckCircle2,
  XCircle,
  DollarSign,
  Shield,
  TrendingUp,
  ExternalLink,
  X
} from "lucide-react";

interface Tool {
  name: string;
  category: string;
  description: string;
  capabilities: string[];
  pricing: string;
  website: string;
  governmentRelevance: string;
  adoptionMaturity: string;
  compliance: string[];
  useCases: string[];
}

export default function Compare() {
  const [catalogData, setCatalogData] = useState<any>(null);
  const [selectedTools, setSelectedTools] = useState<Tool[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("/catalog_data_v2.json")
      .then((res) => res.json())
      .then((data) => setCatalogData(data))
      .catch((err) => console.error("Error loading catalog:", err));
  }, []);

  const allTools: Tool[] = catalogData?.categories?.flatMap((cat: any) =>
    (cat.tools || []).map((tool: any) => ({
      ...tool,
      category: cat.name,
    }))
  ) || [];

  const filteredTools = allTools.filter((tool) =>
    tool.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addTool = (tool: Tool) => {
    if (selectedTools.length < 3 && !selectedTools.find(t => t.name === tool.name)) {
      setSelectedTools([...selectedTools, tool]);
    }
  };

  const removeTool = (toolName: string) => {
    setSelectedTools(selectedTools.filter(t => t.name !== toolName));
  };

  const getRelevanceBadgeColor = (relevance: string) => {
    switch (relevance) {
      case "Critical": return "bg-red-100 text-red-800 border-red-300";
      case "High": return "bg-orange-100 text-orange-800 border-orange-300";
      case "Moderate": return "bg-yellow-100 text-yellow-800 border-yellow-300";
      default: return "bg-slate-100 text-slate-800 border-slate-300";
    }
  };

  const getMaturityBadgeColor = (maturity: string) => {
    switch (maturity) {
      case "Advanced": return "bg-green-100 text-green-800 border-green-300";
      case "Moderate": return "bg-blue-100 text-blue-800 border-blue-300";
      case "Emerging": return "bg-purple-100 text-purple-800 border-purple-300";
      default: return "bg-slate-100 text-slate-800 border-slate-300";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/catalog">
              <Button variant="ghost" className="text-white hover:bg-white/20 mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Tools Catalog
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Compare AI Agent Tools
            </h1>
            <p className="text-xl opacity-95">
              Select up to 3 tools to compare side-by-side
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Tool Selection */}
          {selectedTools.length < 3 && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Select Tools to Compare ({selectedTools.length}/3)</CardTitle>
              </CardHeader>
              <CardContent>
                <input
                  type="text"
                  placeholder="Search for tools..."
                  className="w-full p-3 border border-slate-300 rounded-lg mb-4"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-h-96 overflow-y-auto">
                  {filteredTools.map((tool) => {
                    const isSelected = selectedTools.find(t => t.name === tool.name);
                    return (
                      <button
                        key={tool.name}
                        onClick={() => addTool(tool)}
                        disabled={!!isSelected}
                        className={`p-3 rounded-lg border-2 text-left transition-all ${
                          isSelected
                            ? "bg-slate-100 border-slate-300 cursor-not-allowed opacity-50"
                            : "bg-white border-slate-200 hover:border-purple-400 hover:shadow-md"
                        }`}
                      >
                        <div className="font-semibold text-sm">{tool.name}</div>
                        <div className="text-xs text-slate-600 mt-1">{tool.category}</div>
                      </button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Selected Tools */}
          {selectedTools.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Selected Tools:</h3>
              <div className="flex flex-wrap gap-2">
                {selectedTools.map((tool) => (
                  <Badge key={tool.name} className="text-sm py-2 px-3 bg-purple-100 text-purple-800">
                    {tool.name}
                    <button
                      onClick={() => removeTool(tool.name)}
                      className="ml-2 hover:text-purple-900"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Comparison Table */}
          {selectedTools.length >= 2 && (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                    <tr>
                      <th className="p-4 text-left font-semibold">Feature</th>
                      {selectedTools.map((tool) => (
                        <th key={tool.name} className="p-4 text-left font-semibold min-w-64">
                          {tool.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {/* Category */}
                    <tr className="border-b border-slate-200">
                      <td className="p-4 font-semibold bg-slate-50">Category</td>
                      {selectedTools.map((tool) => (
                        <td key={tool.name} className="p-4">
                          <Badge variant="outline">{tool.category}</Badge>
                        </td>
                      ))}
                    </tr>

                    {/* Description */}
                    <tr className="border-b border-slate-200">
                      <td className="p-4 font-semibold bg-slate-50">Description</td>
                      {selectedTools.map((tool) => (
                        <td key={tool.name} className="p-4 text-sm text-slate-700">
                          {tool.description}
                        </td>
                      ))}
                    </tr>

                    {/* Government Relevance */}
                    <tr className="border-b border-slate-200">
                      <td className="p-4 font-semibold bg-slate-50 flex items-center gap-2">
                        <Shield className="h-4 w-4" />
                        Government Relevance
                      </td>
                      {selectedTools.map((tool) => (
                        <td key={tool.name} className="p-4">
                          <Badge className={getRelevanceBadgeColor(tool.governmentRelevance)}>
                            {tool.governmentRelevance}
                          </Badge>
                        </td>
                      ))}
                    </tr>

                    {/* Adoption Maturity */}
                    <tr className="border-b border-slate-200">
                      <td className="p-4 font-semibold bg-slate-50 flex items-center gap-2">
                        <TrendingUp className="h-4 w-4" />
                        Adoption Maturity
                      </td>
                      {selectedTools.map((tool) => (
                        <td key={tool.name} className="p-4">
                          <Badge className={getMaturityBadgeColor(tool.adoptionMaturity)}>
                            {tool.adoptionMaturity}
                          </Badge>
                        </td>
                      ))}
                    </tr>

                    {/* Pricing */}
                    <tr className="border-b border-slate-200">
                      <td className="p-4 font-semibold bg-slate-50 flex items-center gap-2">
                        <DollarSign className="h-4 w-4" />
                        Pricing
                      </td>
                      {selectedTools.map((tool) => (
                        <td key={tool.name} className="p-4 text-sm">
                          {tool.pricing}
                        </td>
                      ))}
                    </tr>

                    {/* Compliance */}
                    <tr className="border-b border-slate-200">
                      <td className="p-4 font-semibold bg-slate-50">Compliance</td>
                      {selectedTools.map((tool) => (
                        <td key={tool.name} className="p-4">
                          <div className="flex flex-wrap gap-1">
                            {tool.compliance && tool.compliance.length > 0 ? (
                              tool.compliance.map((cert) => (
                                <Badge key={cert} variant="outline" className="text-xs">
                                  {cert}
                                </Badge>
                              ))
                            ) : (
                              <span className="text-sm text-slate-500">None specified</span>
                            )}
                          </div>
                        </td>
                      ))}
                    </tr>

                    {/* Capabilities */}
                    <tr className="border-b border-slate-200">
                      <td className="p-4 font-semibold bg-slate-50">Key Capabilities</td>
                      {selectedTools.map((tool) => (
                        <td key={tool.name} className="p-4">
                          <ul className="space-y-1">
                            {tool.capabilities?.slice(0, 5).map((cap, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm">
                                <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                <span>{cap}</span>
                              </li>
                            ))}
                          </ul>
                        </td>
                      ))}
                    </tr>

                    {/* Use Cases */}
                    <tr className="border-b border-slate-200">
                      <td className="p-4 font-semibold bg-slate-50">Use Cases</td>
                      {selectedTools.map((tool) => (
                        <td key={tool.name} className="p-4">
                          <ul className="space-y-1">
                            {tool.useCases?.slice(0, 3).map((useCase, idx) => (
                              <li key={idx} className="text-sm text-slate-700">
                                • {useCase}
                              </li>
                            ))}
                          </ul>
                        </td>
                      ))}
                    </tr>

                    {/* Website */}
                    <tr>
                      <td className="p-4 font-semibold bg-slate-50">Website</td>
                      {selectedTools.map((tool) => (
                        <td key={tool.name} className="p-4">
                          <a
                            href={tool.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm"
                          >
                            Visit Website
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {selectedTools.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-600 text-lg">
                Select at least 2 tools from above to start comparing
              </p>
            </div>
          )}

          {selectedTools.length === 1 && (
            <div className="text-center py-12">
              <p className="text-slate-600 text-lg">
                Select at least 1 more tool to compare
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
