import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, X, Filter } from "lucide-react";

interface UseCaseFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedDifficulty: string;
  onDifficultyChange: (difficulty: string) => void;
  categories: Array<{ id: string; name: string; count: number }>;
  difficulties: string[];
  totalResults: number;
  onClearFilters: () => void;
}

export default function UseCaseFilters({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedDifficulty,
  onDifficultyChange,
  categories,
  difficulties,
  totalResults,
  onClearFilters
}: UseCaseFiltersProps) {
  const hasActiveFilters = searchQuery || selectedCategory !== "all" || selectedDifficulty !== "all";

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
        <Input
          type="text"
          placeholder="Search by title, tools, or description..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 pr-10"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange("")}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Filters Container */}
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="flex flex-col md:flex-row gap-4 flex-1">
          {/* Category Filter */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide flex items-center gap-2">
              <Filter className="h-3 w-3" />
              Category
            </label>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant={selectedCategory === "all" ? "default" : "outline"}
                className={`cursor-pointer transition-all ${
                  selectedCategory === "all"
                    ? "bg-orange-500 hover:bg-orange-600"
                    : "hover:bg-slate-100"
                }`}
                onClick={() => onCategoryChange("all")}
              >
                All ({categories.reduce((sum, cat) => sum + cat.count, 0)})
              </Badge>
              {categories.map((category) => (
                <Badge
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  className={`cursor-pointer transition-all ${
                    selectedCategory === category.id
                      ? "bg-orange-500 hover:bg-orange-600"
                      : "hover:bg-slate-100"
                  }`}
                  onClick={() => onCategoryChange(category.id)}
                >
                  {category.name} ({category.count})
                </Badge>
              ))}
            </div>
          </div>

          {/* Difficulty Filter */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide flex items-center gap-2">
              <Filter className="h-3 w-3" />
              Difficulty
            </label>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant={selectedDifficulty === "all" ? "default" : "outline"}
                className={`cursor-pointer transition-all ${
                  selectedDifficulty === "all"
                    ? "bg-blue-500 hover:bg-blue-600"
                    : "hover:bg-slate-100"
                }`}
                onClick={() => onDifficultyChange("all")}
              >
                All Levels
              </Badge>
              {difficulties.map((difficulty) => (
                <Badge
                  key={difficulty}
                  variant={selectedDifficulty === difficulty ? "default" : "outline"}
                  className={`cursor-pointer transition-all ${
                    selectedDifficulty === difficulty
                      ? "bg-blue-500 hover:bg-blue-600"
                      : "hover:bg-slate-100"
                  }`}
                  onClick={() => onDifficultyChange(difficulty)}
                >
                  {difficulty}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Clear Filters & Results Count */}
        <div className="flex items-center gap-4">
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearFilters}
              className="flex items-center gap-2"
            >
              <X className="h-4 w-4" />
              Clear Filters
            </Button>
          )}
          <div className="text-sm text-slate-600 font-medium">
            {totalResults} {totalResults === 1 ? "result" : "results"}
          </div>
        </div>
      </div>
    </div>
  );
}
