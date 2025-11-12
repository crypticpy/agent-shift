import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useParticleBurst } from '@/hooks/useParticleBurst';
import { useComplementaryColors } from '@/hooks/useComplementaryColors';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Play, RotateCcw, Mic, ArrowRight, CheckCircle2 } from 'lucide-react';

interface Task {
  title: string;
  description: string;
  emoji: string;
}

interface EnhancedWalkingDemoProps {
  tasks: Task[];
  totalDuration?: number;
  taskStartDelay?: number;
}

const TypewriterText = ({ text, isPlaying, onComplete }: {
  text: string;
  isPlaying: boolean;
  onComplete?: () => void;
}) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (!isPlaying) {
      setDisplayedText('');
      return;
    }

    let currentIndex = 0;
    const typingSpeed = 30;

    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
        onComplete?.();
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [text, isPlaying, onComplete]);

  return <>{displayedText}</>;
};

export default function EnhancedWalkingDemo({
  tasks = [
    {
      title: 'Draft Follow-up Email',
      description: 'Agent writes professional email to Sarah with action items',
      emoji: '📧'
    },
    {
      title: 'Schedule Team Reminder',
      description: 'Agent creates calendar reminder for Friday deadline',
      emoji: '🗓️'
    },
    {
      title: 'Update IT Ticket',
      description: 'Agent checks server status and updates ticket with findings',
      emoji: '🔧'
    }
  ],
  totalDuration = 15000,
  taskStartDelay = 1000
}: EnhancedWalkingDemoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [typewriterComplete, setTypewriterComplete] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const { particleBurst } = useParticleBurst();
  const { particleHue, complementaryHue, complementLight, complementDark, cssVariables } = useComplementaryColors(75000); // 75 seconds, 2x slower

  useEffect(() => {
    if (!isPlaying) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      return;
    }

    const startTime = Date.now() - elapsedTime;

    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      setElapsedTime(elapsed);

      if (elapsed >= totalDuration) {
        setIsPlaying(false);
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      }
    }, 50);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, totalDuration, elapsedTime]);

  // Celebration effects when typing and tasks complete
  useEffect(() => {
    if (typewriterComplete && isPlaying) {
      particleBurst({
        x: window.innerWidth / 2,
        y: window.innerHeight / 3,
        color: `oklch(0.65 0.18 ${particleHue})`
      });
    }
    if (elapsedTime >= totalDuration) {
      particleBurst({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        color: `oklch(0.65 0.18 ${complementaryHue})`
      });
    }
  }, [typewriterComplete, elapsedTime, totalDuration, isPlaying, particleBurst, particleHue, complementaryHue]);

  const formatTime = (ms: number): string => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleStart = () => {
    setElapsedTime(0);
    setTypewriterComplete(false);
    setIsPlaying(true);
  };

  const handleReset = () => {
    setElapsedTime(0);
    setTypewriterComplete(false);
    setIsPlaying(false);
  };

  const handleTypewriterComplete = () => {
    setTypewriterComplete(true);
  };

  const progress = Math.min((elapsedTime / totalDuration) * 100, 100);
  const typewriterProgress = Math.min(elapsedTime / 3000, 1); // ~3 seconds

  const demoStartTime = taskStartDelay;
  const allTasksStarted = elapsedTime >= demoStartTime;
  const allTasksShouldComplete = allTasksStarted;

  const startButtonStyle = {
    background: `linear-gradient(135deg, oklch(0.65 0.18 ${particleHue}), oklch(0.6 0.2 ${complementDark}))`,
    boxShadow: `0 4px 20px oklch(0 0 0 / 15%)`
  };

  return (
    <div className="my-8" style={cssVariables as React.CSSProperties}>
      {/* Title */}
      <div className="text-center mb-6">
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Voice Multitasking Enhanced</h3>
        <p className="text-base text-muted-foreground max-w-2xl mx-auto">
          Multi-layered experience: voice input visualization + ambient task progress
        </p>
      </div>

      <Card
        className="border-2 shadow-xl overflow-hidden"
        style={{
          borderColor: `oklch(0.7 0.12 ${complementDark})`
        }}
      >
        <div className="grid md:grid-cols-[30%_70%] gap-0">
          {/* Left Panel: With Visual Effects */}
          <div
            className="p-6 flex flex-col items-center justify-center border-r-2"
            style={{
              background: `linear-gradient(135deg, oklch(0.95 0.05 ${complementLight}), oklch(0.92 0.06 ${particleHue})), oklch(0.1 0 0 / 5%)`,
              borderColor: `oklch(0.7 0.1 ${complementDark})`
            }}
          >
            {/* Walking Progress */}
            <div className="relative w-32 h-32 mb-6">
              <motion.div
                animate={{
                  x: isPlaying ? (elapsedTime / totalDuration) * 100 : 0
                }}
                transition={{ type: 'tween', ease: 'linear' }}
                className="absolute inset-0 flex items-center justify-center text-5xl"
              >
                🚶‍♂️
              </motion.div>

              {/* Progress ring around walker */}
              <svg className="absolute -inset-2 transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="oklch(0.85 0.02 65)"
                  strokeWidth="8"
                  fill="none"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke={`oklch(0.65 0.18 ${particleHue})`}
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={251}
                  strokeDashoffset={251 - (251 * progress / 100)}
                />
              </svg>
            </div>

            {/* Time Display */}
            <div className="mb-4">
              <Badge
                variant="secondary"
                className="px-5 py-1.5 text-lg font-bold backdrop-blur-sm"
                style={{
                  borderColor: `oklch(0.8 0.1 ${particleHue})` as any,
                  background: `oklch(0.95 0.05 ${particleHue})`
                }}
              >
                🕐 {formatTime(elapsedTime)} / 0:15
              </Badge>
            </div>

            {/* Phase Indicator */}
            <div className="mb-6 p-4 w-full rounded-xl" style={{ background: `oklch(0.95 0.05 ${complementLight})` }}>
              {!isPlaying && !typewriterComplete && (
                <>
                  <div className="text-sm font-semibold" style={{ color: `oklch(0.45 0.1 ${complementLight})` }}>Phase 1: Voice Input</div>
                  <div className="text-xs text-slate-600">Recording your voice command...</div>
                </>
              )}
              {isPlaying && !typewriterComplete && (
                <>
                  <div className="text-sm font-semibold" style={{ color: `oklch(0.45 0.1 ${complementLight})` }}>Phase 2: Command Processing</div>
                  <div className="text-xs text-slate-600">AI agents interpreting your request...</div>
                  <motion.div
                    className="mt-2 h-2 rounded-full overflow-hidden"
                    style={{ background: `oklch(0.85 0.03 ${complementLight})` }}
                  >
                    <motion.div
                      animate={{ width: `${typewriterProgress * 100}%` }}
                      className="h-full"
                      transition={{ type: 'tween', ease: 'linear' }}
                      style={{ background: `oklch(0.65 0.18 ${complementLight})` }}
                    />
                  </motion.div>
                </>
              )}
              {typewriterComplete && (
                <>
                  <div className="text-sm font-semibold" style={{ color: `oklch(0.45 0.1 ${complementLight})` }}>Phase 3: Task Execution</div>
                  <div className="text-xs text-slate-600">Agent swarm processing tasks...</div>
                </>
              )}
            </div>

            {/* Control Button */}
            <div>
              {!isPlaying || elapsedTime >= totalDuration || (
                <Button
                  onClick={handleStart}
                  className="font-bold px-6 py-5 text-base"
                  style={startButtonStyle as React.CSSProperties}
                >
                  <Mic className="w-5 h-5 mr-2" />
                  Start Walking Demo
                </Button>
              )}
              {isPlaying && elapsedTime >= totalDuration && (
                <Button
                  onClick={handleReset}
                  variant="outline"
                  className="px-6 py-5 text-base"
                >
                  <RotateCcw className="w-5 h-5 mr-2" />
                  Replay Demo
                </Button>
              )}
            </div>
          </div>

          {/* Right Panel: Tasks with Enhanced Visuals */}
          <div className="p-6 bg-white dark:bg-slate-950">
            {/* Voice Input */}
            {isPlaying || elapsedTime >= totalDuration ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="mb-6 rounded-xl p-5 border-2 relative backdrop-blur-sm"
                style={{
                  background: `oklch(0.95 0.05 ${particleHue})`,
                  borderColor: `oklch(0.7 0.12 ${particleHue})`
                }}
              >
                <div className="flex items-start gap-3">
                  <div className="text-3xl" style={{ color: `oklch(0.55 0.2 ${particleHue})` }}>🎤</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Mic className="h-4 w-4" style={{ color: `oklch(0.55 0.2 ${particleHue})` }} />
                      <span className="text-sm font-semibold" style={{ color: `oklch(0.45 0.15 ${particleHue})` }}>
                        Your Voice Command
                      </span>
                    </div>
                    <p className="text-sm text-slate-700 italic leading-relaxed">
                      "<TypewriterText
                        text="I need to follow up with Sarah about the budget meeting, send the team a reminder about Friday's deadline, and check in with IT "
                        isPlaying={isPlaying && !typewriterComplete}
                        onComplete={handleTypewriterComplete}
                      />"
                    </p>
                    <span className="inline-block mt-2 px-2 py-1 rounded-full text-xs" style={{
                      background: `oklch(0.9 0.08 ${complementLight})`,
                      color: `oklch(0.35 0.1 ${complementDark})`
                    }}>
                      Duration: ~3 seconds
                    </span>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="mb-6 p-6 text-center rounded-xl">
                <p className="text-slate-500">Click "Start Demo" to experience the enhanced AI agent workflow</p>
              </div>
            )}

            {/* Task Grid */}
            <div className="grid gap-4">
              {tasks.map((task, index) => {
                const taskDelayIndex = index * 2000;
                const taskShouldStart = allTasksStarted && elapsedTime >= demoStartTime + index * 5000 / 3;
                const taskProgress = taskShouldStart
                  ? Math.max(0, (elapsedTime - demoStartTime - index * 5000 / 3) / 5000)
                  : 0;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{
                      opacity: taskShouldStart ? 1 : 0,
                      x: taskShouldStart ? 0 : 20
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card
                      className="transition-all border-2"
                      style={{
                        borderColor: taskProgress >= 1
                          ? `oklch(0.75 0.1 ${particleHue})`
                          : `oklch(0.85 0.05 ${complementLight})`,
                        boxShadow: taskProgress >= 1
                          ? `0 4px 15px oklch(0 0 0 / 10%)`
                          : 'none'
                      }}
                    >
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-3">
                          <motion.div
                            animate={{
                              scale: taskProgress > 0.1 ? 1 : 0.9,
                              rotate: taskProgress > 0.8 ? 360 : 0
                            }}
                            transition={{ duration: 0.5 }}
                            className="text-2xl"
                            style={{ color: `oklch(0.55 0.2 ${complementLight})` }}
                          >
                            {task.emoji}
                          </motion.div>
                          <div className="flex-1">
                            <CardTitle className="text-base" style={{ color: `oklch(0.4 0.15 ${complementDark})` }}>
                              {task.title}
                            </CardTitle>
                            <CardDescription>{task.description}</CardDescription>
                          </div>
                          <Badge
                            variant="secondary"
                            style={{
                              backgroundColor: taskProgress >= 1
                                ? `oklch(0.9 0.1 ${particleHue})`
                                : `oklch(0.95 0.03 ${complementLight})`,
                              color: taskProgress >= 1
                                ? `oklch(0.35 0.1 ${complementDark})`
                                : `oklch(0.5 0.1 ${complementLight})`
                            }}
                          >
                            {taskProgress >= 1 ? '✓ Complete' : `Processing (${Math.round(taskProgress * 100)}%)`}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <motion.div
                          className="h-2 rounded-full overflow-hidden"
                          style={{ background: `oklch(0.9 0.02 ${complementLight})` }}
                        >
                          <motion.div
                            className="h-full"
                            animate={{ width: `${Math.min(taskProgress * 100, 100)}%` }}
                            transition={{ type: 'tween', ease: 'linear' }}
                            style={{ background: `oklch(0.65 0.18 ${particleHue})` }}
                          />
                        </motion.div>
                        <div className="flex items-center justify-between mt-2 text-xs text-slate-500">
                          <span>Agent ID: #{index + 1}</span>
                          <span>Est. time: {5 - index * 1.5}s</span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Completion Summary */}
            {elapsedTime >= totalDuration && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mt-6 rounded-xl p-6 border-2"
                style={{
                  background: `linear-gradient(135deg, oklch(0.95 0.12 ${complementLight}), oklch(0.92 0.12 ${particleHue}))`,
                  borderColor: `oklch(0.75 0.1 ${complementaryHue})`
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="text-4xl">🎊</div>
                  <div>
                    <h4 className="text-lg font-bold" style={{ color: `oklch(0.45 0.18 ${complementDark})` }}>
                      Workflow Complete!
                    </h4>
                    <p className="text-slate-700 mb-2">
                      {tasks.length} tasks completed in {formatTime(elapsedTime)}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge style={{
                        background: `oklch(0.9 0.1 ${particleHue})`,
                        color: `oklch(0.35 0.1 ${complementDark})`
                      }}>
                        99% faster
                      </Badge>
                      <Badge style={{
                        background: `oklch(0.9 0.1 ${complementLight})`,
                        color: `oklch(0.35 0.1 ${complementDark})`
                      }}>
                        Multi-threaded
                      </Badge>
                      <Badge style={{
                        background: `oklch(0.9 0.1 ${complementaryHue})`,
                        color: `oklch(0.35 0.1 ${complementDark})`
                      }}>
                        Autonomous
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-600 mt-3">
                      Traditional approach: ~25-30 minutes of manual work
                    </p>
                    <p className="text-sm text-slate-600">
                      You got home and actually relaxed. Your evening was yours.
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
