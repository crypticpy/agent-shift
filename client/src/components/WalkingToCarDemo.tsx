import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, RotateCcw } from "lucide-react";
import TaskProgressCard, { Task } from "./TaskProgressCard";

interface WalkingToCarDemoProps {
  voiceInput: string;
  tasks: Task[];
  totalDuration: number; // total animation duration in milliseconds
  imagePath?: string; // path to the walking image
}

const TypewriterText = ({ text, isPlaying }: { text: string; isPlaying: boolean }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!isPlaying) {
      setDisplayedText("");
      return;
    }

    let currentIndex = 0;
    const typingSpeed = 30; // ms per character

    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [text, isPlaying]);

  return <>{displayedText}</>;
};

export default function WalkingToCarDemo({
  voiceInput,
  tasks,
  totalDuration,
  imagePath = "/images/walking-to-car.png",
}: WalkingToCarDemoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [completedTaskCount, setCompletedTaskCount] = useState(0);
  const [showSummary, setShowSummary] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;

    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      setElapsedTime(elapsed);

      if (elapsed >= totalDuration) {
        setIsPlaying(false);
        setShowSummary(true);
        clearInterval(interval);
      }
    }, 50); // Update every 50ms for smooth animation

    return () => clearInterval(interval);
  }, [isPlaying, totalDuration]);

  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleStart = () => {
    setElapsedTime(0);
    setCompletedTaskCount(0);
    setShowSummary(false);
    setIsPlaying(true);
  };

  const handleReset = () => {
    setElapsedTime(0);
    setCompletedTaskCount(0);
    setShowSummary(false);
    setIsPlaying(false);
  };

  const handleTaskComplete = () => {
    setCompletedTaskCount((prev) => prev + 1);
  };

  const progress = Math.min((elapsedTime / totalDuration) * 100, 100);

  // Tasks start at 0ms, 500ms, and 1000ms for overlap
  const taskStartTimes = [0, 500, 1000];

  return (
    <div className="my-8">
      {/* Title and Description */}
      <div className="text-center mb-6">
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Voice Multitasking in Action</h3>
        <p className="text-base text-muted-foreground max-w-2xl mx-auto">
          Watch how a single voice command gets transformed into multiple completed tasks in 30 seconds
        </p>
      </div>

      {/* Main Demo Area */}
      <Card className="border-2 border-primary/30 shadow-xl overflow-hidden">
        <div className="grid md:grid-cols-[35%_65%] gap-0">
          {/* Left Panel: Walking Person */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 flex flex-col items-center justify-center min-h-[300px] md:min-h-[400px] border-r-2 border-primary/20">
            {/* Image Placeholder */}
            <div className="relative w-full max-w-xs mb-4">
              <div className="bg-white/50 rounded-xl p-4 backdrop-blur-sm border-2 border-primary/20">
                <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center relative overflow-hidden">
                  {/* Placeholder for image */}
                  <img
                    src={imagePath}
                    alt="Person walking to car"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      // Fallback if image doesn't exist yet
                      e.currentTarget.style.display = "none";
                      e.currentTarget.parentElement!.innerHTML = '<div class="text-5xl">🚶‍♂️➡️🚗</div>';
                    }}
                  />
                </div>
              </div>

              {/* Progress Bar */}
              {isPlaying && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-3"
                >
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-accent"
                      style={{ width: `${progress}%` }}
                      transition={{ duration: 0.1 }}
                    />
                  </div>
                </motion.div>
              )}
            </div>

            {/* Timer */}
            <div className="text-center mb-4">
              <Badge
                variant="secondary"
                className="text-xl font-bold px-5 py-1.5 bg-white border-2 border-primary/20"
              >
                ⏱️ {formatTime(elapsedTime)}
              </Badge>
            </div>

            {/* Control Button */}
            <div>
              {!isPlaying && !showSummary && (
                <Button
                  size="lg"
                  onClick={handleStart}
                  className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-white px-6 py-5 text-base"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Start Demo
                </Button>
              )}
              {(isPlaying || showSummary) && (
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleReset}
                  className="border-2 border-primary px-6 py-5 text-base"
                >
                  <RotateCcw className="mr-2 h-5 w-5" />
                  Replay
                </Button>
              )}
            </div>
          </div>

          {/* Right Panel: Tasks */}
          <div className="p-6 bg-white dark:bg-slate-950">
            {/* Voice Input Bubble */}
            {isPlaying || showSummary ? (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-2 border-blue-200 dark:border-blue-800 rounded-2xl p-4 relative"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">🎤</span>
                  <div>
                    <p className="text-xs font-semibold text-blue-900 dark:text-blue-100 mb-1">You said:</p>
                    <p className="text-sm text-foreground italic leading-relaxed">
                      "<TypewriterText text={voiceInput} isPlaying={isPlaying && !showSummary} />"
                    </p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="mb-4 bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-2xl p-6 text-center">
                <p className="text-base text-muted-foreground">
                  Click "Start Demo" to see AI agents in action
                </p>
              </div>
            )}

            {/* Task Cards */}
            <div className="space-y-3">
              {isPlaying || showSummary
                ? tasks.map((task, index) => (
                    <TaskProgressCard
                      key={index}
                      task={task}
                      startTime={taskStartTimes[index]}
                      isPlaying={isPlaying}
                      elapsedTime={elapsedTime}
                      onComplete={handleTaskComplete}
                    />
                  ))
                : null}
            </div>

            {/* Summary */}
            {showSummary && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950 border-2 border-emerald-200 dark:border-emerald-800 rounded-xl p-4"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎉</span>
                  <div>
                    <p className="font-bold text-base text-emerald-900 dark:text-emerald-100 mb-1">Mission Complete!</p>
                    <p className="text-xs text-muted-foreground mb-2">
                      <strong>{tasks.length} tasks completed</strong> in 30 seconds
                    </p>
                    <p className="text-xs text-muted-foreground mb-1">
                      Traditional approach: <strong>25-30 minutes</strong> of manual work
                    </p>
                    <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-300 mt-2">
                      Time saved: ~27 minutes (98% faster!)
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}
