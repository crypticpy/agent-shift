import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import { WatercolorDrops } from "@/components/WatercolorDrops";
import { useParticleBurst } from "@/hooks/useParticleBurst";
import UseCaseFilters from "@/components/UseCaseFilters";
import EnhancedWorkflowCard from "@/components/EnhancedWorkflowCard";
import RoleSetupCard from "@/components/RoleSetupCard";

interface WorkflowStep {
  step: number;
  tool: string;
  action: string;
  duration: string;
}

interface CompleteWorkflowUseCase {
  id: string;
  type: "workflow";
  icon: string;
  title: string;
  difficulty: string;
  timeTraditional: string;
  timeAI: string;
  savings: string;
  estimatedSetupTime: string;
  workflow: WorkflowStep[];
  tools: string[];
  videoUrl: string | null;
  whyTheseTools: string;
  color?: string;
  scenario?: string;
  outcome?: string;
}

interface RoleSetupUseCase {
  id: string;
  type: "role-setup";
  scenario: string;
  description: string;
  difficulty: string;
  technicalLevel: string;
  timeSaved: string;
  automationLevel: number;
  estimatedSetupTime: string;
  tools: {
    dataSources: Array<{ name: string; type: string; icon: string }>;
    orchestration: { name: string; icon: string };
    aiAgent: { name: string; icon: string };
  };
  icon: string;
  prerequisites: string[];
  traditionalWorkflow: string[];
  aiWorkflow: string[];
  whyTheseTools: string;
  videoUrl: string | null;
}

type UseCase = CompleteWorkflowUseCase | RoleSetupUseCase;

interface Category {
  id: string;
  name: string;
  description?: string;
  useCases: UseCase[];
}

interface UseCasesData {
  metadata: {
    title: string;
    totalUseCases: number;
  };
  categories: Category[];
}

export default function UseCases() {
  const handleBurst = useParticleBurst();
  const [data, setData] = useState<UseCasesData | null>(null);
  const [loading, setLoading] = useState(true);

  // Filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");

  useEffect(() => {
    window.scrollTo(0, 0);

    // Load use cases data from JSON
    fetch("/use-cases-data.json")
      .then((res) => res.json())
      .then((jsonData: UseCasesData) => {
        setData(jsonData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading use cases data:", error);
        setLoading(false);
      });
  }, []);

  // Filter and search logic
  const getFilteredUseCases = (): UseCase[] => {
    if (!data) return [];

    let allUseCases: UseCase[] = [];

    // Flatten all use cases from all categories
    data.categories.forEach((category) => {
      allUseCases = [...allUseCases, ...category.useCases];
    });

    // Apply category filter
    if (selectedCategory !== "all") {
      const category = data.categories.find((cat) => cat.id === selectedCategory);
      allUseCases = category ? category.useCases : [];
    }

    // Apply difficulty filter
    if (selectedDifficulty !== "all") {
      allUseCases = allUseCases.filter((useCase) => {
        if (useCase.type === "workflow") {
          return useCase.difficulty === selectedDifficulty;
        } else {
          return useCase.difficulty === selectedDifficulty;
        }
      });
    }

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      allUseCases = allUseCases.filter((useCase) => {
        if (useCase.type === "workflow") {
          const titleMatch = useCase.title.toLowerCase().includes(query);
          const scenarioMatch = useCase.scenario?.toLowerCase().includes(query) || false;
          const toolsMatch = useCase.tools.some((tool) =>
            tool.toLowerCase().includes(query)
          );
          const whyToolsMatch = useCase.whyTheseTools.toLowerCase().includes(query);
          return titleMatch || scenarioMatch || toolsMatch || whyToolsMatch;
        } else {
          const scenarioMatch = useCase.scenario.toLowerCase().includes(query);
          const descriptionMatch = useCase.description.toLowerCase().includes(query);
          const toolsMatch =
            useCase.tools.dataSources.some((source) =>
              source.name.toLowerCase().includes(query)
            ) ||
            useCase.tools.orchestration.name.toLowerCase().includes(query) ||
            useCase.tools.aiAgent.name.toLowerCase().includes(query);
          const whyToolsMatch = useCase.whyTheseTools.toLowerCase().includes(query);
          return scenarioMatch || descriptionMatch || toolsMatch || whyToolsMatch;
        }
      });
    }

    return allUseCases;
  };

  const filteredUseCases = getFilteredUseCases();

  // Get unique difficulty levels
  const getAllDifficulties = (): string[] => {
    if (!data) return [];
    const difficulties = new Set<string>();
    data.categories.forEach((category) => {
      category.useCases.forEach((useCase) => {
        difficulties.add(useCase.difficulty);
      });
    });
    return Array.from(difficulties).sort();
  };

  // Get category counts
  const getCategoriesWithCounts = (): Array<{ id: string; name: string; count: number }> => {
    if (!data) return [];
    return data.categories.map((category) => ({
      id: category.id,
      name: category.name,
      count: category.useCases.length
    }));
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedDifficulty("all");
  };

  if (loading) {
    return (
      <div className="min-h-screen animated-gradient from-slate-50 via-white to-orange-50/30 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading use cases...</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen animated-gradient from-slate-50 via-white to-orange-50/30 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-2">Error loading use cases data</p>
          <p className="text-slate-600 text-sm">Please check the console for details</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen animated-gradient from-slate-50 via-white to-orange-50/30">
      {/* Hero */}
      <div className="relative hero-color-cycle text-white py-16 overflow-hidden">
        {/* Watercolor Drops - Organic Paint Diffusion */}
        <WatercolorDrops opacity={0.3} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 glass backdrop-blur px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              Real-World Examples
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {data.metadata.title}
            </h1>
            <p className="text-xl opacity-95">
              Discover complete workflows and role-specific connection setups. From quick wins to advanced automation—find the perfect starting point for your AI orchestration journey.
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
            <UseCaseFilters
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              selectedDifficulty={selectedDifficulty}
              onDifficultyChange={setSelectedDifficulty}
              categories={getCategoriesWithCounts()}
              difficulties={getAllDifficulties()}
              totalResults={filteredUseCases.length}
              onClearFilters={handleClearFilters}
            />
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="container mx-auto px-4 pb-12">
        <div className="max-w-6xl mx-auto space-y-8">
          {filteredUseCases.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-600 text-lg mb-2">No use cases found</p>
              <p className="text-slate-500 text-sm">
                Try adjusting your filters or search query
              </p>
            </div>
          ) : (
            filteredUseCases.map((useCase) => {
              if (useCase.type === "workflow") {
                return (
                  <EnhancedWorkflowCard
                    key={useCase.id}
                    id={useCase.id}
                    icon={useCase.icon}
                    title={useCase.title}
                    difficulty={useCase.difficulty}
                    timeTraditional={useCase.timeTraditional}
                    timeAI={useCase.timeAI}
                    savings={useCase.savings}
                    estimatedSetupTime={useCase.estimatedSetupTime}
                    workflow={useCase.workflow}
                    tools={useCase.tools}
                    videoUrl={useCase.videoUrl}
                    whyTheseTools={useCase.whyTheseTools}
                    color={useCase.color}
                    scenario={useCase.scenario}
                    outcome={useCase.outcome}
                  />
                );
              } else {
                return (
                  <RoleSetupCard
                    key={useCase.id}
                    id={useCase.id}
                    scenario={useCase.scenario}
                    description={useCase.description}
                    difficulty={useCase.difficulty}
                    technicalLevel={useCase.technicalLevel}
                    timeSaved={useCase.timeSaved}
                    automationLevel={useCase.automationLevel}
                    estimatedSetupTime={useCase.estimatedSetupTime}
                    tools={useCase.tools}
                    icon={useCase.icon}
                    prerequisites={useCase.prerequisites}
                    traditionalWorkflow={useCase.traditionalWorkflow}
                    aiWorkflow={useCase.aiWorkflow}
                    whyTheseTools={useCase.whyTheseTools}
                    videoUrl={useCase.videoUrl}
                  />
                );
              }
            })
          )}
        </div>
      </div>
    </div>
  );
}
