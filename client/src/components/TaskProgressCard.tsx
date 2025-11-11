import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Loader2 } from "lucide-react";

export interface TaskStep {
  icon: string;
  text: string;
  duration: number; // milliseconds to show this step
}

export interface Task {
  title: string;
  emoji: string;
  color: string;
  steps: TaskStep[];
}

interface TaskProgressCardProps {
  task: Task;
  startTime: number; // when to start showing this task (in milliseconds from animation start)
  isPlaying: boolean;
  elapsedTime: number;
  onComplete?: () => void;
}

export default function TaskProgressCard({ task, startTime, isPlaying, elapsedTime, onComplete }: TaskProgressCardProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(-1);
  const [isComplete, setIsComplete] = useState(false);
  const hasCalledOnComplete = useRef(false);

  useEffect(() => {
    if (!isPlaying || elapsedTime < startTime) {
      return;
    }

    const taskElapsed = elapsedTime - startTime;

    // Calculate which step we should be on based on elapsed time
    let accumulatedTime = 0;
    let targetStepIndex = -1;

    for (let i = 0; i < task.steps.length; i++) {
      accumulatedTime += task.steps[i].duration;
      if (taskElapsed < accumulatedTime) {
        targetStepIndex = i;
        break;
      }
    }

    // If we've gone through all steps, mark as complete
    if (targetStepIndex === -1 && taskElapsed >= accumulatedTime) {
      if (!isComplete) {
        setIsComplete(true);
        setCurrentStepIndex(task.steps.length - 1);
        if (!hasCalledOnComplete.current && onComplete) {
          hasCalledOnComplete.current = true;
          onComplete();
        }
      }
    } else if (targetStepIndex !== currentStepIndex) {
      setCurrentStepIndex(targetStepIndex);
    }
  }, [elapsedTime, isPlaying, startTime, task.steps, currentStepIndex, isComplete, onComplete]);

  // Reset when animation restarts
  useEffect(() => {
    if (!isPlaying && elapsedTime === 0) {
      setCurrentStepIndex(-1);
      setIsComplete(false);
      hasCalledOnComplete.current = false;
    }
  }, [isPlaying, elapsedTime]);

  // Don't show card until start time
  if (elapsedTime < startTime) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className={`border-2 transition-all duration-300 ${
        isComplete
          ? "border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30"
          : `border-${task.color}/40 bg-${task.color}/5`
      }`}>
        <CardContent className="p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{task.emoji}</span>
              <h4 className="font-bold text-sm text-foreground">{task.title}</h4>
            </div>
            {isComplete && (
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <Badge className="bg-emerald-500 text-white text-xs">
                  <CheckCircle2 className="h-3 w-3 mr-1" />
                  Done
                </Badge>
              </motion.div>
            )}
          </div>

          {/* Steps */}
          <div className="space-y-1.5 max-h-32 overflow-y-auto">
            {task.steps.map((step, index) => {
              const isCurrentStep = index === currentStepIndex && !isComplete;
              const isPastStep = index < currentStepIndex || isComplete;
              const isFutureStep = index > currentStepIndex && !isComplete;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: isFutureStep ? 0.3 : 1,
                    x: isFutureStep ? -5 : 0
                  }}
                  transition={{ duration: 0.2 }}
                  className={`flex items-start gap-2 text-xs ${
                    isCurrentStep
                      ? "text-foreground font-medium"
                      : isPastStep
                      ? "text-muted-foreground line-through"
                      : "text-muted-foreground/50"
                  }`}
                >
                  {isCurrentStep ? (
                    <Loader2 className="h-3 w-3 animate-spin mt-0.5 text-primary flex-shrink-0" />
                  ) : isPastStep ? (
                    <CheckCircle2 className="h-3 w-3 mt-0.5 text-emerald-500 flex-shrink-0" />
                  ) : (
                    <span className="text-sm flex-shrink-0 opacity-50">{step.icon}</span>
                  )}
                  <span className="leading-tight">{step.text}</span>
                </motion.div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
