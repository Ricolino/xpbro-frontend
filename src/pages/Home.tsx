//import { Link } from "react-router-dom";

import { 
  Rocket, 
  Gamepad2, 
  Dice5, 
  Users2, 
  Sparkles,
  Trophy,
  Activity
} from 'lucide-react';

export default function Home() {

  return (
    <div className="min-h-screen bg-[#0a0c10] text-slate-100 font-sans selection:bg-indigo-500 selection:text-white relative overflow-hidden">
      
      {/* Background ambient lighting / glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-indigo-600/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-[40%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-[60%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[160px] rounded-full pointer-events-none" />

      {/* Hero Section */}
      <header className="relative z-10 max-w-5xl mx-auto px-6 pt-12 pb-20 text-center">
        
        {/* Coming Soon Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-medium text-indigo-400 mb-8 shadow-inner">
          <Rocket className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
          <span>In the Making • Coming Soon</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
          From the Tabletop to the Screen. <br />
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Track Everything You Play.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 mb-10 leading-relaxed">
          XPBRO is the universal hub for your gaming life. Sync your Steam library, log your board game sessions, track your stats, and build your squad.
        </p>

        
      </header>

      {/* Visual / Mockup Section */}
      <section id="preview" className="relative z-10 max-w-6xl mx-auto px-6 pb-28">
        <div className="relative rounded-2xl p-2 bg-gradient-to-b from-slate-800/80 to-slate-900/40 border border-slate-800/80 shadow-2xl backdrop-blur-xl">
          
          {/* Top Browser/App Bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800/60">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="px-4 py-1 rounded-lg bg-slate-950/60 border border-slate-800 text-xs text-slate-400 font-mono">
              app.xpbro.com/dashboard
            </div>
            <div className="flex items-center gap-2 text-slate-500 text-xs">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Live Preview</span>
            </div>
          </div>

          {/* Mockup Dashboard Content */}
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-3 gap-6 bg-slate-950/60 rounded-xl">
            
            {/* Card 1: Steam Integration */}
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5 text-indigo-400">
                    <Gamepad2 className="w-5 h-5" />
                    <span className="font-semibold text-sm text-white">Steam Activity</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-indigo-500/10 text-indigo-400 font-mono uppercase tracking-wider border border-indigo-500/20">Synced</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950/60 border border-slate-800/50">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center font-bold text-xs text-indigo-300">CS2</div>
                      <div>
                        <div className="text-xs font-semibold text-white">Counter-Strike 2</div>
                        <div className="text-[10px] text-slate-500">Last played 2h ago</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-300">1,420 hrs</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950/60 border border-slate-800/50">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center font-bold text-xs text-purple-300">CP</div>
                      <div>
                        <div className="text-xs font-semibold text-white">Cyberpunk 2077</div>
                        <div className="text-[10px] text-slate-500">Achievement Unlocked</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-300">245 hrs</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-800/50 flex items-center justify-between text-xs text-slate-400">
                <span>Total Library: 184 Games</span>
                <span className="text-indigo-400 font-medium">View all →</span>
              </div>
            </div>

            {/* Card 2: Tabletop & BGStats */}
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5 text-purple-400">
                    <Dice5 className="w-5 h-5" />
                    <span className="font-semibold text-sm text-white">Tabletop Sessions</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-purple-500/10 text-purple-400 font-mono uppercase tracking-wider border border-purple-500/20">BGStats</span>
                </div>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/50">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-semibold text-white">Catan: Seafarers</span>
                      <span className="text-[10px] text-emerald-400 font-mono">Won (10VP)</span>
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-500">
                      <span>Played yesterday</span>
                      <span>4 Players</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/50">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-semibold text-white">Wingspan</span>
                      <span className="text-[10px] text-slate-400 font-mono">84 pts</span>
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-500">
                      <span>3 days ago</span>
                      <span>European Exp.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-800/50 flex items-center justify-between text-xs text-slate-400">
                <span>Shelf: 42 Board Games</span>
                <span className="text-purple-400 font-medium">Log match →</span>
              </div>
            </div>

            {/* Card 3: The Squad & Stats */}
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5 text-blue-400">
                    <Users2 className="w-5 h-5" />
                    <span className="font-semibold text-sm text-white">The Squad</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-blue-500/10 text-blue-400 font-mono uppercase tracking-wider border border-blue-500/20">Active</span>
                </div>
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/50">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-[10px] text-white">AX</div>
                      <div>
                        <div className="text-xs font-medium text-white">Alex_Gamer</div>
                        <div className="text-[10px] text-emerald-400 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Playing Helldivers 2
                        </div>
                      </div>
                    </div>
                    <Trophy className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/50">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center font-bold text-[10px] text-white">MK</div>
                      <div>
                        <div className="text-xs font-medium text-white">MariaK</div>
                        <div className="text-[10px] text-slate-500">Offline • 4h ago</div>
                      </div>
                    </div>
                    <Activity className="w-4 h-4 text-slate-600" />
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-800/50 flex items-center justify-between text-xs text-slate-400">
                <span>Squad Leaderboard</span>
                <span className="text-blue-400 font-medium">View rankings →</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section id="features" className="relative z-10 max-w-6xl mx-auto px-6 pb-32">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Built for digital and analog gamers alike.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            No more switching between a dozen apps, spreadsheets, and notes. Everything you play, unified in one sleek interface.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Feature 1 */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/80 border border-slate-800/80 shadow-xl relative group hover:border-indigo-500/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
              <Gamepad2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Steam Integration</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Sync your entire digital library instantly. Track total playtime, recent achievements, and gaming activity straight from your PC profile.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/80 border border-slate-800/80 shadow-xl relative group hover:border-purple-500/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
              <Dice5 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Tabletop & BGStats</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Keep precise records of physical board game sessions, import your history smoothly from BGStats, and organize your physical game shelf.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/80 border border-slate-800/80 shadow-xl relative group hover:border-blue-500/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
              <Users2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Squads & Stats</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Create custom groups with your friends, see who currently dominates the leaderboards, and easily compare gaming statistics side-by-side.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
