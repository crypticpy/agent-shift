import { Link } from "wouter";
import { Github, Mic2, Sparkles, Building2, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-auto">
      {/* Voice-Built Claim Banner - The Showstopper */}
      <div className="relative overflow-hidden py-12 bg-gradient-to-r from-[#FF6B35] via-[#FFC107] via-[#10B981] to-[#14B8A6]" style={{ backgroundSize: '400% 400%', animation: 'gradientShift 31.2s ease infinite' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4 hover:bg-white/30 transition-all duration-200">
              <Mic2 className="h-5 w-5 animate-pulse" />
              <span className="text-sm font-semibold">Practicing What We Preach</span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
              100% Voice-Built.
            </h3>

            <p className="text-lg md:text-xl mb-2 opacity-95">
              No, really. No IDE. No typing. Not even a little bit.
            </p>

            <p className="text-base opacity-90 mb-6">
              Just Alt+Space and Ctrl+C, Ctrl+V on occasion.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
              <span className="opacity-90 font-medium">Orchestrated with:</span>
              <div className="flex flex-wrap items-center justify-center gap-2">
                <a
                  href="https://superwhisper.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full font-medium hover:bg-white/30 hover:scale-105 transition-all duration-200 cursor-pointer"
                >
                  SuperWhisper
                </a>
                <a
                  href="https://www.anthropic.com/claude"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full font-medium hover:bg-white/30 hover:scale-105 transition-all duration-200 cursor-pointer"
                >
                  Claude
                </a>
                <a
                  href="https://openai.com/index/openai-codex/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full font-medium hover:bg-white/30 hover:scale-105 transition-all duration-200 cursor-pointer"
                >
                  OpenAI Codex
                </a>
                <a
                  href="https://www.minimaxi.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full font-medium hover:bg-white/30 hover:scale-105 transition-all duration-200 cursor-pointer"
                >
                  Minimax
                </a>
                <a
                  href="https://kimi.moonshot.cn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full font-medium hover:bg-white/30 hover:scale-105 transition-all duration-200 cursor-pointer"
                >
                  Kimi K2
                </a>
                <a
                  href="https://manus.im"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full font-medium hover:bg-white/30 hover:scale-105 transition-all duration-200 cursor-pointer"
                >
                  Manus
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="glass border-t border-slate-200">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8">
                  <img src="/favicon.svg" alt="Agent Shift Logo" className="h-full w-full" />
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-[#FF6B35] via-[#FFC107] via-[#10B981] to-[#14B8A6] bg-clip-text text-transparent">
                  Agent Shift
                </span>
              </div>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                Stop doing. Start guiding. Your complete catalog and learning platform for AI agents.
              </p>
              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-amber-500" />
                  <span className="font-medium">Above Earth Productions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-teal-500" />
                  <span>City of Austin</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                <Link href="/getting-started">
                  <a className="block text-sm text-slate-600 hover:text-orange-600 transition-all duration-200 hover:translate-x-1">
                    Getting Started
                  </a>
                </Link>
                <Link href="/catalog">
                  <a className="block text-sm text-slate-600 hover:text-amber-600 transition-all duration-200 hover:translate-x-1">
                    Tool Catalog
                  </a>
                </Link>
                <Link href="/learn">
                  <a className="block text-sm text-slate-600 hover:text-green-600 transition-all duration-200 hover:translate-x-1">
                    Learn
                  </a>
                </Link>
                <Link href="/workflows">
                  <a className="block text-sm text-slate-600 hover:text-teal-600 transition-all duration-200 hover:translate-x-1">
                    Workflows
                  </a>
                </Link>
                <Link href="/business-case">
                  <a className="block text-sm text-slate-600 hover:text-orange-600 transition-all duration-200 hover:translate-x-1">
                    Business Case
                  </a>
                </Link>
                <Link href="/resources">
                  <a className="block text-sm text-slate-600 hover:text-amber-600 transition-all duration-200 hover:translate-x-1">
                    Resources
                  </a>
                </Link>
              </div>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Connect</h4>
              <div className="space-y-3">
                <a
                  href="https://github.com/crypticpy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-all duration-200 group hover:translate-x-1"
                >
                  <Github className="h-4 w-4 group-hover:text-orange-500 transition-colors" />
                  <span>crypticpy (personal)</span>
                </a>
                <a
                  href="https://github.com/aphchris"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-all duration-200 group hover:translate-x-1"
                >
                  <Github className="h-4 w-4 group-hover:text-teal-500 transition-colors" />
                  <span>aphchris (work)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
            <div className="flex items-center gap-1">
              <span>© {new Date().getFullYear()} Above Earth Productions</span>
              <Heart className="h-3 w-3 text-red-400 inline" />
            </div>
            <div className="flex flex-wrap items-center gap-3 md:gap-4">
              <Link href="/case-study">
                <a className="text-xs text-orange-600 hover:text-orange-700 font-medium transition-colors hover:underline flex items-center gap-1">
                  <Sparkles className="h-3 w-3" />
                  The Numbers
                </a>
              </Link>
              <span className="text-xs text-slate-300 hidden md:inline">•</span>
              <Link href="/making-of">
                <a className="text-xs text-amber-600 hover:text-amber-700 font-medium transition-colors hover:underline flex items-center gap-1">
                  <Building2 className="h-3 w-3" />
                  Making the Sausage
                </a>
              </Link>
              <span className="text-xs text-slate-300 hidden md:inline">•</span>
              <span className="text-xs">MIT License</span>
              <span className="text-xs opacity-60">From Do to Orchestrate</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
