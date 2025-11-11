import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const EMAIL_TEXT = "Hi Nancy,\n\nI wanted to follow up on the office supplies order we discussed. Can you provide a status update on the delivery timeline? We need the equipment by next Friday for the team workshop.\n\nThanks,";

const SPEEDS = [
  { label: "Average Typing", wpm: 40, emoji: "🐌", color: "from-red-500 to-orange-500" },
  { label: "Fast Typing", wpm: 70, emoji: "🏃", color: "from-yellow-500 to-amber-500" },
  { label: "Speaking", wpm: 150, emoji: "🚀", color: "from-emerald-500 to-teal-500" }
];

export default function SpeedComparison() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showReplay, setShowReplay] = useState(false);
  const [typedChars, setTypedChars] = useState([0, 0, 0]);

  const startAnimation = () => {
    setIsAnimating(true);
    setShowReplay(false);
    setTypedChars([0, 0, 0]);

    // Calculate characters per second for each speed
    // WPM / 60 seconds * 5 characters per word average = chars per second
    const charsPerSecond = SPEEDS.map(s => (s.wpm / 60) * 5);

    const intervals: NodeJS.Timeout[] = [];

    // Start typing animation for each lane
    SPEEDS.forEach((speed, index) => {
      const interval = setInterval(() => {
        setTypedChars(prev => {
          const newChars = [...prev];
          if (newChars[index] < EMAIL_TEXT.length) {
            newChars[index] += 1;
          } else {
            clearInterval(interval);

            // Check if all animations are done
            if (newChars.every(c => c >= EMAIL_TEXT.length)) {
              setShowReplay(true);
            }
          }
          return newChars;
        });
      }, 1000 / charsPerSecond[index]);

      intervals.push(interval);
    });

    // Cleanup intervals
    return () => intervals.forEach(clearInterval);
  };

  const replay = () => {
    setTypedChars([0, 0, 0]);
    setShowReplay(false);
    setTimeout(() => startAnimation(), 100);
  };

  const getProgress = (chars: number) => {
    return (chars / EMAIL_TEXT.length) * 100;
  };

  return (
    <div className="space-y-6">
      <AnimatePresence mode="wait">
        {!isAnimating ? (
          // Initial State: Three Cards
          <motion.div
            key="cards"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {SPEEDS.map((speed, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="glass border-2 hover:border-primary/30 transition-all h-full">
                  <CardContent className="pt-6 text-center space-y-4">
                    <div className="text-6xl">{speed.emoji}</div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{speed.label}</h3>
                      <div className="mt-2">
                        <Badge variant="secondary" className="text-lg px-4 py-1">
                          {speed.wpm} WPM
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          // Racing Lanes
          <motion.div
            key="racing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            {SPEEDS.map((speed, index) => {
              const progress = getProgress(typedChars[index]);
              const isWinner = typedChars[index] >= EMAIL_TEXT.length;

              return (
                <motion.div
                  key={index}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <Card className={`border-2 ${isWinner ? 'border-emerald-500 shadow-lg shadow-emerald-500/20' : 'border-primary/20'} transition-all`}>
                    <CardContent className="pt-6 space-y-3">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl">{speed.emoji}</span>
                          <div>
                            <p className="text-sm font-bold text-foreground">{speed.label}</p>
                            <p className="text-xs text-muted-foreground">{speed.wpm} WPM</p>
                          </div>
                        </div>
                        {isWinner && (
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring", stiffness: 200 }}
                          >
                            <Badge className="bg-emerald-500 text-white text-sm px-3 py-1">
                              🏆 {index === 2 ? '3x Faster!' : 'Done!'}
                            </Badge>
                          </motion.div>
                        )}
                      </div>

                      {/* Progress Bar */}
                      <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className={`absolute inset-y-0 left-0 bg-gradient-to-r ${speed.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={{ width: `${progress}%` }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>

                      {/* Email Text */}
                      <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg min-h-[120px] font-mono text-xs leading-relaxed">
                        <span className="whitespace-pre-wrap">
                          {EMAIL_TEXT.substring(0, typedChars[index])}
                        </span>
                        {typedChars[index] < EMAIL_TEXT.length && (
                          <motion.span
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ duration: 0.5, repeat: Infinity }}
                            className="inline-block w-2 h-4 bg-primary ml-0.5"
                          />
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Control Button */}
      <div className="flex justify-center">
        {!isAnimating ? (
          <Button
            size="lg"
            onClick={startAnimation}
            className="text-lg px-8 py-6 bg-gradient-to-r from-accent/90 to-accent hover:from-accent hover:to-accent/80 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            ⚡ See The Speed Difference
          </Button>
        ) : showReplay ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Button
              size="lg"
              onClick={replay}
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-accent rounded-lg font-semibold hover:bg-accent/10"
            >
              ▶ Replay Animation
            </Button>
          </motion.div>
        ) : null}
      </div>
    </div>
  );
}
