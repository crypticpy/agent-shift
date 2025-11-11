import { Card } from "@/components/ui/card";

interface StatPullQuoteProps {
  stat: string;
  description: string;
  source: string;
  sourceUrl: string;
  color?: "blue" | "green" | "purple" | "orange";
}

export function StatPullQuote({ stat, description, source, sourceUrl, color = "blue" }: StatPullQuoteProps) {
  const colorClasses = {
    blue: "text-blue-600 border-blue-200 bg-blue-50/50",
    green: "text-green-600 border-green-200 bg-green-50/50",
    purple: "text-purple-600 border-purple-200 bg-purple-50/50",
    orange: "text-orange-600 border-orange-200 bg-orange-50/50",
  };

  return (
    <Card className={`p-6 border-2 ${colorClasses[color]} hover:shadow-md transition-shadow`}>
      <div className="flex items-start gap-4">
        <div className="text-4xl">💡</div>
        <div className="flex-1">
          <div className={`text-4xl font-bold mb-2 ${colorClasses[color].split(' ')[0]}`}>
            {stat}
          </div>
          <p className="text-slate-700 font-medium mb-3">{description}</p>
          <p className="text-xs text-slate-500">
            Source: <a 
              href={sourceUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:underline"
            >
              {source}
            </a>
          </p>
        </div>
      </div>
    </Card>
  );
}
