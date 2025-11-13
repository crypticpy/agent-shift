import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, RotateCcw, Sparkles, Brain, FileText, Clock } from "lucide-react";

interface CleanedSection {
  heading: string;
  content: string;
}

interface ThoughtCaptureData {
  rawInput: string;
  cleanedOutput: {
    sections: CleanedSection[];
  };
  timeSaved: string;
  normalityMessage: string;
}

interface ThoughtCaptureSimulatorProps {
  data: ThoughtCaptureData;
  duration?: number;
}

const MessyTypewriter = ({
  text,
  isPlaying,
  onComplete
}: {
  text: string;
  isPlaying: boolean;
  onComplete?: () => void;
}) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!isPlaying) {
      if (displayedText === "") {
        return;
      }
      return;
    }

    setDisplayedText("");
    let currentIndex = 0;
    const baseSpeed = 40;

    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
        onComplete?.();
      }
    }, baseSpeed + Math.random() * 30); // Variable speed for natural feel

    return () => clearInterval(interval);
  }, [text, isPlaying, onComplete]);

  return <>{displayedText}</>;
};

export default function ThoughtCaptureSimulator({ data, duration = 14000 }: ThoughtCaptureSimulatorProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [phase, setPhase] = useState<"ready" | "thinking" | "processing" | "cleaned" | "complete">("ready");
  const [currentSection, setCurrentSection] = useState(0);
  const [showTimeSaved, setShowTimeSaved] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;

    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      setElapsedTime(elapsed);

      // Phase transitions
      if (elapsed < 5000) {
        setPhase("thinking");
      } else if (elapsed < 7000) {
        setPhase("processing");
      } else if (elapsed < duration - 2000) {
        setPhase("cleaned");
      } else {
        setPhase("complete");
        setShowTimeSaved(true);
      }

      if (elapsed >= duration) {
        setIsPlaying(false);
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isPlaying, duration]);

  // Reveal sections sequentially
  useEffect(() => {
    if (phase === "cleaned" && data.cleanedOutput.sections.length > 0) {
      let sectionIndex = 0;
      const sectionInterval = setInterval(() => {
        if (sectionIndex < data.cleanedOutput.sections.length) {
          setCurrentSection(sectionIndex);
          sectionIndex++;
        } else {
          clearInterval(sectionInterval);
        }
      }, 1500);

      return () => clearInterval(sectionInterval);
    }
  }, [phase, data.cleanedOutput.sections.length]);

  const handleStart = useCallback(() => {
    setElapsedTime(0);
    setPhase("thinking");
    setCurrentSection(0);
    setShowTimeSaved(false);
    setIsPlaying(true);
  }, []);

  const handleReset = useCallback(() => {
    setElapsedTime(0);
    setPhase("ready");
    setCurrentSection(0);
    setShowTimeSaved(false);
    setIsPlaying(false);
  }, []);

  return (
    <div className="my-8">
      {/* Title */}
      <div className="text-center mb-6">
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Your Messy Thoughts Are a Feature, Not a Bug
        </h3>
        <p className="text-base text-muted-foreground max-w-2xl mx-auto">
          Watch AI transform unfiltered thinking into polished content—no editing required
        </p>
      </div>

      {/* Main Demo Card */}
      <Card className="border-2 border-primary/30 shadow-xl overflow-hidden">
        <div className="p-6">
          {/* Normality Message (Always Visible) */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 border-2 border-purple-200 dark:border-purple-800 rounded-2xl p-4"
          >
            <div className="flex items-start gap-3">
              <Brain className="h-6 w-6 text-purple-600 flex-shrink-0" />
              <div>
                <p className="font-bold text-sm text-purple-900 dark:text-purple-100 mb-1">This is NORMAL:</p>
                <p className="text-sm text-purple-700 dark:text-purple-300 italic">
                  {data.normalityMessage}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Two-Panel Layout */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Left Panel: Raw Stream of Consciousness */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Brain className="h-5 w-5 text-amber-600" />
                <h4 className="font-bold text-sm">Your Raw Thoughts</h4>
                {phase === "thinking" && (
                  <Badge variant="secondary" className="ml-auto">
                    <span className="animate-pulse">● Recording</span>
                  </Badge>
                )}
              </div>

              <Card className="border-2 border-amber-200 dark:border-amber-900 bg-amber-50/30 dark:bg-amber-950/20 min-h-[300px]">
                <div className="p-4">
                  {phase !== "ready" ? (
                    <div className="prose prose-sm max-w-none">
                      <p className="text-sm text-foreground leading-relaxed whitespace-pre-wrap font-mono">
                        {phase === "thinking" ? (
                          <MessyTypewriter
                            text={data.rawInput}
                            isPlaying={isPlaying && phase === "thinking"}
                          />
                        ) : (
                          data.rawInput
                        )}
                        {phase === "thinking" && <span className="animate-pulse">|</span>}
                      </p>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-64 text-muted-foreground">
                      <div className="text-center">
                        <Brain className="h-12 w-12 mx-auto mb-2 opacity-30" />
                        <p className="text-sm">Click "Start Thinking" to begin</p>
                      </div>
                    </div>
                  )}

                  {/* Filler word highlights */}
                  {phase === "processing" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-3 pt-3 border-t border-amber-300 dark:border-amber-800"
                    >
                      <p className="text-xs text-amber-700 dark:text-amber-300 mb-2">
                        <Sparkles className="h-3 w-3 inline mr-1" />
                        AI is removing filler words, organizing ideas...
                      </p>
                    </motion.div>
                  )}
                </div>
              </Card>
            </div>

            {/* Right Panel: Cleaned Output */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FileText className="h-5 w-5 text-emerald-600" />
                <h4 className="font-bold text-sm">Polished Output</h4>
                {(phase === "cleaned" || phase === "complete") && (
                  <Badge className="ml-auto bg-emerald-500 text-white">
                    <Sparkles className="h-3 w-3 mr-1" />
                    Ready
                  </Badge>
                )}
              </div>

              <Card className="border-2 border-emerald-200 dark:border-emerald-900 bg-emerald-50/30 dark:bg-emerald-950/20 min-h-[300px]">
                <div className="p-4">
                  {phase === "ready" || phase === "thinking" ? (
                    <div className="flex items-center justify-center h-64 text-muted-foreground">
                      <div className="text-center">
                        <FileText className="h-12 w-12 mx-auto mb-2 opacity-30" />
                        <p className="text-sm">Cleaned content will appear here</p>
                      </div>
                    </div>
                  ) : phase === "processing" ? (
                    <div className="flex items-center justify-center h-64">
                      <div className="text-center">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                          <Sparkles className="h-12 w-12 mx-auto mb-2 text-emerald-600" />
                        </motion.div>
                        <p className="text-sm text-muted-foreground">Structuring your thoughts...</p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {data.cleanedOutput.sections.map((section, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{
                            opacity: index <= currentSection ? 1 : 0.3,
                            y: 0
                          }}
                          transition={{ duration: 0.4 }}
                          className={index <= currentSection ? "" : "blur-sm"}
                        >
                          <h5 className="font-bold text-sm text-emerald-900 dark:text-emerald-100 mb-1">
                            {section.heading}
                          </h5>
                          <p className="text-sm text-foreground leading-relaxed">
                            {section.content}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </Card>
            </div>
          </div>

          {/* Time Saved Banner */}
          {showTimeSaved && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950 border-2 border-emerald-200 dark:border-emerald-800 rounded-xl p-4"
            >
              <div className="flex items-start gap-3">
                <Clock className="h-6 w-6 text-emerald-600 flex-shrink-0" />
                <div>
                  <p className="font-bold text-base text-emerald-900 dark:text-emerald-100 mb-1">Time Saved</p>
                  <p className="text-sm text-emerald-700 dark:text-emerald-300 mb-2">
                    <strong>{data.timeSaved}</strong> compared to traditional type-edit-revise workflow
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Stream-of-consciousness capture lets you think freely while AI handles the heavy lifting of organization,
                    grammar, and structure. Your job is to generate ideas—AI's job is to make them presentable.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Summary Message */}
          {phase === "complete" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-2 border-blue-200 dark:border-blue-800 rounded-xl p-4"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">🚀</span>
                <div>
                  <p className="font-bold text-base text-blue-900 dark:text-blue-100 mb-1">The Unlock</p>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Stop editing yourself while thinking. Stream-of-consciousness dictation removes the mental barrier between
                    thought and capture, letting creativity flow uninterrupted. The AI handles cleanup—you focus on ideas.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Control Button */}
          <div className="mt-6 flex justify-center">
            {phase === "ready" ? (
              <Button
                size="lg"
                onClick={handleStart}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-5 text-base"
              >
                <Brain className="mr-2 h-5 w-5" />
                Start Thinking
              </Button>
            ) : (
              <Button
                size="lg"
                variant="outline"
                onClick={handleReset}
                className="border-2 border-primary px-6 py-5 text-base"
              >
                <RotateCcw className="mr-2 h-5 w-5" />
                Try Again
              </Button>
            )}
          </div>
        </div>
      </Card>

      {/* Supporting Content: Why This Works */}
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        <Card className="border border-slate-200 dark:border-slate-800 p-4">
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-3">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <h5 className="font-bold text-sm mb-2">Natural Thinking</h5>
            <p className="text-xs text-muted-foreground">
              Thoughts don't emerge in paragraphs—they loop, interrupt, and wander. That's how creativity works.
            </p>
          </div>
        </Card>

        <Card className="border border-slate-200 dark:border-slate-800 p-4">
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mx-auto mb-3">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <h5 className="font-bold text-sm mb-2">AI as Editor</h5>
            <p className="text-xs text-muted-foreground">
              AI doesn't judge your messy first draft—it structures, clarifies, and polishes automatically.
            </p>
          </div>
        </Card>

        <Card className="border border-slate-200 dark:border-slate-800 p-4">
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mx-auto mb-3">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <h5 className="font-bold text-sm mb-2">Massive Time Savings</h5>
            <p className="text-xs text-muted-foreground">
              Capture thoughts at speaking speed (150-200 wpm) vs typing speed (40 wpm). Skip the editing phase entirely.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
