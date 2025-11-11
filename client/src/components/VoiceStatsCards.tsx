import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, MessageCircle, Target, Brain } from "lucide-react";

interface Stat {
  value: string;
  label: string;
  description: string;
  icon: "zap" | "message" | "target" | "brain";
  color: string;
  citation: {
    text: string;
    url: string;
  };
}

interface VoiceStatsCardsProps {
  stats: Stat[];
}

const iconMap = {
  zap: Zap,
  message: MessageCircle,
  target: Target,
  brain: Brain,
};

const AnimatedNumber = ({ value }: { value: string }) => {
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    // Extract number from value string (e.g., "3x" -> 3, "150" -> 150, "20%" -> 20)
    const numMatch = value.match(/(\d+)/);
    if (!numMatch) {
      setDisplayValue(value);
      return;
    }

    const targetNum = parseInt(numMatch[1]);
    const suffix = value.replace(/\d+/, "");
    const duration = 1500; // 1.5 seconds
    const steps = 30;
    const increment = targetNum / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current += increment;
      if (step >= steps) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current) + suffix);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{displayValue}</span>;
};

export default function VoiceStatsCards({ stats }: VoiceStatsCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
      {stats.map((stat, index) => {
        const Icon = iconMap[stat.icon];
        const isPrimary = index === 0; // First card is featured

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card
              className={`relative overflow-hidden border-2 transition-all duration-300 hover:shadow-xl ${
                isPrimary
                  ? "md:col-span-2 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30 hover:border-primary"
                  : `bg-gradient-to-br ${stat.color} border-${stat.color.split("/")[0]}/30`
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
              <CardContent className={`${isPrimary ? "p-8" : "p-6"} relative z-10`}>
                <div className={`flex items-start gap-${isPrimary ? "6" : "4"} ${isPrimary ? "md:flex-row flex-col md:items-center" : "flex-col"}`}>
                  {/* Icon */}
                  <div
                    className={`${
                      isPrimary ? "h-20 w-20" : "h-14 w-14"
                    } bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                  >
                    <Icon className={`${isPrimary ? "h-10 w-10" : "h-7 w-7"} text-white`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className={`${isPrimary ? "text-6xl md:text-7xl" : "text-5xl"} font-bold text-foreground mb-2`}>
                      <AnimatedNumber value={stat.value} />
                    </div>
                    <p className={`${isPrimary ? "text-xl md:text-2xl" : "text-lg"} font-semibold text-foreground mb-2`}>
                      {stat.label}
                    </p>
                    <p className={`${isPrimary ? "text-base md:text-lg" : "text-sm"} text-muted-foreground mb-4`}>
                      {stat.description}
                    </p>

                    {/* Citation Badge */}
                    <a
                      href={stat.citation.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <Badge
                        variant="secondary"
                        className="text-xs hover:bg-primary/20 transition-colors cursor-pointer"
                      >
                        📚 {stat.citation.text}
                      </Badge>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
