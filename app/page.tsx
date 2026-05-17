'use client';

import { Eye, Github, Zap, Brain, Target, Shield, Database, Activity } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const stats = {
    scans: 16,
    targets: 5,
    models: 2,
    uptime: '99.9%'
  };

  const features = [
    {
      title: "Autonomous Reconnaissance",
      description: "AI-powered passive and active scanning with strategic decision-making",
      badge: "Core"
    },
    {
      title: "Multi-Model AI Engine",
      description: "OpenMythos + Claude API for intelligent vulnerability analysis",
      badge: "AI"
    },
    {
      title: "Bug Bounty Automation",
      description: "Automated vulnerability discovery with ethical boundaries",
      badge: "Premium"
    },
    {
      title: "OSINT Intelligence",
      description: "Strategic reconnaissance with OPSEC-first methodology",
      badge: "Pro"
    },
    {
      title: "Memory System",
      description: "Persistent intelligence with learning from past scans",
      badge: "Core"
    },
    {
      title: "Cloud Integration",
      description: "Native AWS, GitHub, and Azure integration",
      badge: "Enterprise"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm mb-8">
              <Activity className="w-4 h-4" />
              <span>10 Modules Operational • {stats.scans} Scans Complete</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-orange-500 via-white to-cyan-400 bg-clip-text text-transparent">
                Glasseye AI OS
              </span>
            </h1>
            
            <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Autonomous security research platform powered by multi-model AI. 
              Ethical reconnaissance, bug bounty automation, and strategic intelligence.
            </p>
            
            <div className="flex flex-wrap gap-6 justify-center mb-16">
              <button className="px-10 py-5 rounded-xl bg-gradient-to-r from-orange-500 to-cyan-400 text-white text-lg font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all transform hover:scale-105">
                Launch Platform
              </button>
              <Link href="/docs" className="px-10 py-5 rounded-xl border-2 border-white/20 hover:bg-white/10 text-lg transition transform hover:scale-105">
                View Documentation
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-5xl font-bold text-orange-500 mb-2">{stats.scans}</div>
                <div className="text-gray-400">Total Scans</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-cyan-400 mb-2">{stats.targets}</div>
                <div className="text-gray-400">Active Targets</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-orange-500 mb-2">{stats.models}</div>
                <div className="text-gray-400">AI Models</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-cyan-400 mb-2">{stats.uptime}</div>
                <div className="text-gray-400">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-orange-500 to-cyan-400 bg-clip-text text-transparent">
            Powered by Advanced AI
          </span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-400/50 transition-all transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              <span className="inline-block text-xs px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-400">{feature.badge}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="rounded-3xl bg-gradient-to-r from-orange-500/30 to-cyan-400/30 border border-white/20 p-16 text-center">
          <Eye className="w-24 h-24 mx-auto mb-8 text-cyan-400" />
          <h2 className="text-5xl font-bold mb-6">Ready to Transform Security Research?</h2>
          <p className="text-2xl text-gray-300 mb-12">Join the future of autonomous ethical hacking</p>
          <button className="px-12 py-6 rounded-xl bg-white text-gray-900 text-xl font-bold hover:shadow-2xl hover:shadow-white/50 transition-all transform hover:scale-105">
            Get Started Now
          </button>
        </div>
      </section>

      <footer className="border-t border-white/10 mt-24">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Eye className="w-8 h-8 text-cyan-400" />
            <span className="text-2xl font-bold">CyberViser AI</span>
          </div>
          <p className="text-gray-400 mb-8">Autonomous Security Research Platform</p>
          <div className="flex justify-center gap-8 mb-8">
            <a href="https://github.com/GulfOfAmerica/glasseye-ai" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
              <Github className="w-6 h-6" />
            </a>
          </div>
          <div className="text-sm text-gray-500 space-y-2">
            <p className="font-semibold text-gray-400">&copy; 2026 Johnny Watters. All Rights Reserved.</p>
            <p>Proprietary Software | For Authorized Security Research Only</p>
            <p className="text-xs">
              <a href="https://github.com/GulfOfAmerica/cyberviser-website/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
                View License
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
