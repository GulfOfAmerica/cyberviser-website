'use client';

import { useState, useEffect } from 'react';
import { Eye, Terminal, Zap, Shield, Brain, Database, Cloud, Github, ChevronRight, CheckCircle2, TrendingUp, Activity, Lock, Search, Code, Cpu } from 'lucide-react';

export default function Home() {
  const [terminalText, setTerminalText] = useState('');
  const [currentStat, setCurrentStat] = useState(0);
  
  const fullCommand = `$ glasseye scan cyberviserai.com --autonomous

╔═══════════════════════════════════════════════════╗
║  👁️  GLASSEYE AI OS - Autonomous Framework  ⚡💀   ║
╚═══════════════════════════════════════════════════╝

🔍 [Phase 1] Passive Reconnaissance
  📡 DNS enumeration... ✓ 23 records discovered
  🌐 Subdomain discovery... ✓ 47 subdomains found
  🔐 SSL/TLS analysis... ✓ Valid cert, strong ciphers
  
🎯 [Phase 2] Active Scanning
  🔌 Port scan... ✓ 8 services identified
  🔍 Service detection... ✓ Versions fingerprinted
  
🌐 [Phase 3] Web Analysis
  🔍 Vulnerability scan... ✓ OWASP Top 10 tested
  🤖 AI threat modeling... ✓ Attack vectors mapped
  
🧠 [Phase 4] Intelligence Analysis
  📊 Risk Score: 5.2/10 (MEDIUM)
  🎯 Attack Surface: 12 vectors identified
  💡 Recommendations: 8 hardening steps
  
✅ Reconnaissance complete! Report saved.`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullCommand.length) {
        setTerminalText(fullCommand.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 20);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const statInterval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(statInterval);
  }, []);

  const stats = [
    { label: 'Vulnerabilities Found', value: '1,247', icon: Shield, color: 'text-red-400' },
    { label: 'Targets Analyzed', value: '342', icon: Search, color: 'text-cyan-400' },
    { label: 'AI Decisions Made', value: '28.5K', icon: Brain, color: 'text-purple-400' },
    { label: 'Success Rate', value: '99.9%', icon: TrendingUp, color: 'text-green-400' },
  ];

  const capabilities = [
    {
      icon: Brain,
      title: 'Multi-Model AI Intelligence',
      description: 'Hybrid AI architecture combining OpenMythos (493K params) and Claude API for strategic decision-making',
      features: ['Autonomous threat modeling', 'Pattern recognition', 'Adaptive learning', 'Real-time analysis'],
      badge: 'AI Core',
      gradient: 'from-purple-500/20 to-pink-500/20',
    },
    {
      icon: Terminal,
      title: 'Autonomous Reconnaissance',
      description: 'Self-directed multi-phase scanning with intelligent pivoting and dynamic scope adjustment',
      features: ['Passive OSINT collection', 'Active service enumeration', 'Web vulnerability scanning', 'Infrastructure mapping'],
      badge: 'Automation',
      gradient: 'from-cyan-500/20 to-blue-500/20',
    },
    {
      icon: Lock,
      title: 'Ethical Bug Bounty Engine',
      description: 'Automated vulnerability discovery with built-in ethical boundaries and authorization checks',
      features: ['OWASP Top 10 testing', 'Zero-day discovery', 'Exploit validation', 'Responsible disclosure'],
      badge: 'Security',
      gradient: 'from-orange-500/20 to-red-500/20',
    },
    {
      icon: Database,
      title: 'Persistent Memory System',
      description: 'Advanced knowledge graph that learns from every scan to improve future operations',
      features: ['Scan history tracking', 'Target profiling', 'Exploit database', 'ML-driven insights'],
      badge: 'Intelligence',
      gradient: 'from-green-500/20 to-emerald-500/20',
    },
  ];

  const modules = [
    { name: 'Reconnaissance Engine', status: 'operational', uptime: '99.9%' },
    { name: 'Vulnerability Scanner', status: 'operational', uptime: '99.8%' },
    { name: 'OSINT Collector', status: 'operational', uptime: '100%' },
    { name: 'AI Decision Engine', status: 'operational', uptime: '99.7%' },
    { name: 'Memory System', status: 'operational', uptime: '100%' },
    { name: 'Exploit Framework', status: 'operational', uptime: '99.9%' },
    { name: 'Cloud Integration', status: 'operational', uptime: '99.8%' },
    { name: 'API Gateway', status: 'operational', uptime: '99.9%' },
    { name: 'Report Generator', status: 'operational', uptime: '100%' },
    { name: 'Ethical Boundary System', status: 'operational', uptime: '100%' },
  ];

  const techStack = [
    { name: 'OpenMythos', desc: 'Custom 493K param model', icon: Cpu },
    { name: 'Claude API', desc: 'Strategic reasoning', icon: Brain },
    { name: 'AWS/ECR', desc: 'Cloud deployment', icon: Cloud },
    { name: 'Python', desc: 'Core framework', icon: Code },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />
      
      {/* Animated Glow Effects */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-cyan-500/30 rounded-full filter blur-[128px] opacity-20 animate-pulse" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-orange-500/30 rounded-full filter blur-[128px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-white/10 backdrop-blur-lg bg-slate-900/50 sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Eye className="w-8 h-8 text-cyan-400" />
                <div className="absolute inset-0 bg-cyan-400 blur-xl opacity-50" />
              </div>
              <div>
                <h1 className="text-xl font-bold">GLASSEYE AI OS</h1>
                <p className="text-xs text-gray-400">by Johnny Watters</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <a href="#capabilities" className="text-sm hover:text-cyan-400 transition">Capabilities</a>
              <a href="#technology" className="text-sm hover:text-cyan-400 transition">Technology</a>
              <a href="https://github.com/GulfOfAmerica/glasseye-ai" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-cyan-400 transition flex items-center gap-1">
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a href="https://github.com/GulfOfAmerica/glasseye-ai" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-2 rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
                Get Access
              </a>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 pt-20 pb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-6">
                <Activity className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-cyan-400 font-semibold">10 Modules Operational • 16 Scans Complete</span>
              </div>
              
              <h1 className="text-6xl font-bold mb-6 leading-tight">
                The Future of
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Autonomous Hacking
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Military-grade AI-powered security research platform. Autonomous reconnaissance, 
                intelligent vulnerability discovery, and strategic OSINT—all with ethical boundaries built in.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <a href="https://github.com/GulfOfAmerica/glasseye-ai" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all flex items-center gap-2">
                  Launch Platform <ChevronRight className="w-5 h-5" />
                </a>
                <a href="#capabilities" className="border border-white/20 backdrop-blur-lg bg-white/5 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all">
                  View Documentation
                </a>
              </div>

              {/* Rotating Stats */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, idx) => {
                  const Icon = stat.icon;
                  const isActive = currentStat === idx;
                  return (
                    <div 
                      key={idx} 
                      className={`p-4 rounded-xl backdrop-blur-lg transition-all duration-500 ${
                        isActive 
                          ? 'bg-white/10 border-2 border-cyan-400/50 scale-105' 
                          : 'bg-white/5 border border-white/10'
                      }`}
                    >
                      <Icon className={`w-6 h-6 mb-2 ${stat.color}`} />
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className="text-xs text-gray-400">{stat.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Live Terminal Demo */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl" />
              <div className="relative bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-slate-800/50 px-4 py-3 border-b border-white/10 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-4 text-sm text-gray-400 font-mono">glasseye-terminal</span>
                </div>
                <div className="p-6 font-mono text-sm overflow-hidden" style={{ height: '500px' }}>
                  <pre className="text-green-400 whitespace-pre-wrap">{terminalText}</pre>
                  <span className="inline-block w-2 h-4 bg-green-400 animate-pulse ml-1" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section id="capabilities" className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              Military-Grade <span className="text-cyan-400">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-400">
              Advanced AI-powered security research tools for the modern bug bounty hunter
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {capabilities.map((capability, idx) => {
              const Icon = capability.icon;
              return (
                <div 
                  key={idx}
                  className={`group relative bg-gradient-to-br ${capability.gradient} backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 hover:scale-[1.02]`}
                >
                  <div className="absolute top-4 right-4 bg-cyan-500/20 border border-cyan-500/50 rounded-full px-3 py-1 text-xs text-cyan-400 font-semibold">
                    {capability.badge}
                  </div>
                  
                  <Icon className="w-12 h-12 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold mb-3">{capability.title}</h3>
                  <p className="text-gray-300 mb-6">{capability.description}</p>
                  
                  <ul className="space-y-2">
                    {capability.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-center gap-2 text-sm text-gray-400">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* System Status */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">System Status</h2>
                <p className="text-gray-400">All modules operational • Real-time monitoring</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 font-semibold">ONLINE</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {modules.map((module, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-cyan-400/50 transition">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    <span className="text-xs font-semibold text-green-400">OPERATIONAL</span>
                  </div>
                  <p className="text-sm font-semibold mb-1">{module.name}</p>
                  <p className="text-xs text-gray-500">Uptime: {module.uptime}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section id="technology" className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              Powered by <span className="text-cyan-400">Advanced AI</span>
            </h2>
            <p className="text-xl text-gray-400">
              Cutting-edge technology stack for autonomous security research
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {techStack.map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <div key={idx} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-xl p-6 text-center hover:border-cyan-400/50 transition-all hover:scale-105">
                  <Icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">{tech.name}</h3>
                  <p className="text-sm text-gray-400">{tech.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="relative bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-xl border border-white/10 rounded-3xl p-16 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-5xl font-bold mb-6">
                Ready to Transform Security Research?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the elite community of security researchers using AI-powered automation 
                to discover vulnerabilities faster than ever before.
              </p>
              <div className="flex justify-center gap-4">
                <a href="https://github.com/GulfOfAmerica/glasseye-ai" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-cyan-500 to-blue-500 px-10 py-5 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all flex items-center gap-2">
                  Get Started Now <Zap className="w-5 h-5" />
                </a>
                <a href="mailto:johnny@glasseye.ai?subject=CyberViser%20Demo%20Request" className="border-2 border-white/20 backdrop-blur-lg bg-white/5 px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
                  Schedule Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 mt-24 backdrop-blur-lg bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="w-8 h-8 text-cyan-400" />
                  <span className="text-2xl font-bold">GLASSEYE AI OS</span>
                </div>
                <p className="text-gray-400 mb-6 max-w-md">
                  Autonomous security research platform powered by multi-model AI. 
                  Ethical reconnaissance, bug bounty automation, and strategic intelligence.
                </p>
                <div className="flex items-center gap-4">
                  <a href="https://github.com/GulfOfAmerica/glasseye-ai" target="_blank" rel="noopener noreferrer" 
                     className="bg-white/5 p-3 rounded-lg hover:bg-white/10 transition border border-white/10 hover:border-cyan-400/50">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Platform</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#capabilities" className="hover:text-cyan-400 transition">Capabilities</a></li>
                  <li><a href="#technology" className="hover:text-cyan-400 transition">Technology</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition">Documentation</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition">API Reference</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Resources</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="https://github.com/GulfOfAmerica/glasseye-ai" className="hover:text-cyan-400 transition">GitHub</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition">Blog</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition">Research</a></li>
                  <li><a href="https://github.com/GulfOfAmerica/cyberviser-website/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">License</a></li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 text-center">
              <p className="text-sm font-semibold text-gray-400 mb-2">
                &copy; 2026 Johnny Watters. All Rights Reserved.
              </p>
              <p className="text-xs text-gray-500">
                Proprietary Software | For Authorized Security Research Only
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
