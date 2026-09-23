
import React, { useState, useEffect } from 'react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans selection:bg-red-600 selection:text-white">
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-red-900/30 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-gradient-to-tr from-red-700 to-red-500 flex items-center justify-center shadow-lg shadow-red-600/30">
              <span className="text-white font-black text-xl tracking-wider">V</span>
            </div>
            <span className="text-xl font-bold tracking-wider text-white">VORTEX<span className="text-red-600">.</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#features" className="hover:text-red-500 transition-colors">Features</a>
            <a href="#showcase" className="hover:text-red-500 transition-colors">Showcase</a>
            <a href="#pricing" className="hover:text-red-500 transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-red-500 transition-colors">FAQ</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-semibold text-gray-300 hover:text-white px-4 py-2 transition-colors">
              Sign In
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-5 py-2.5 rounded-md shadow-lg shadow-red-600/30 transition-all transform hover:-translate-y-0.5">
              Get Started
            </button>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-zinc-950 border-b border-red-900/30 px-6 py-6 flex flex-col gap-4 shadow-2xl">
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-red-500 font-medium py-2">Features</a>
            <a href="#showcase" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-red-500 font-medium py-2">Showcase</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-red-500 font-medium py-2">Pricing</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-red-500 font-medium py-2">FAQ</a>
            <div className="pt-4 border-t border-zinc-800 flex flex-col gap-3">
              <button className="w-full text-center text-sm font-semibold text-gray-300 hover:text-white py-2">Sign In</button>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white text-sm font-semibold py-3 rounded-md shadow-lg shadow-red-600/30">Get Started</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-red-800/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/50 border border-red-800/40 text-red-400 text-xs font-semibold mb-8 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
            Vortex 2.0 is now live — Explore the update
          </div>

          <h1 className="text-4xl md:text-7xl font-black tracking-tight max-w-4xl mx-auto leading-none mb-8">
            ENGINEERED FOR <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-rose-600">DOMINANCE</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
            Unleash unmatched performance with our next-gen platform. Blazing speed, bulletproof security, and an aggressive red & black design interface.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-md shadow-xl shadow-red-600/30 transition-all transform hover:-translate-y-0.5">
              Start Free Trial
            </button>
            <button className="w-full sm:w-auto bg-zinc-900 hover:bg-zinc-800 text-gray-200 border border-zinc-800 font-bold px-8 py-4 rounded-md transition-all">
              Watch Demo
            </button>
          </div>

          {/* Hero Image / Dashboard Mockup */}
          <div className="mt-16 md:mt-24 relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 h-full w-full pointer-events-none"></div>
            <div className="rounded-md border border-red-900/40 bg-zinc-950 shadow-2xl shadow-red-950/50 overflow-hidden">
              <div className="bg-zinc-900 px-4 py-3 border-b border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-600/80"></div>
                  <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                  <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                </div>
                <div className="text-xs text-zinc-400 font-mono">vortex-core-v2.0.exe</div>
                <div className="w-12"></div>
              </div>
              <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="bg-zinc-900/60 p-6 rounded-md border border-zinc-800/80">
                  <div className="text-red-500 text-xs font-mono mb-2 uppercase tracking-wider">System Load</div>
                  <div className="text-3xl font-black text-white mb-1">98.4%</div>
                  <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden mt-4">
                    <div className="bg-red-600 h-full w-[98%]" style={{ width: '98%' }}></div>
                  </div>
                </div>
                <div className="bg-zinc-900/60 p-6 rounded-md border border-zinc-800/80">
                  <div className="text-red-500 text-xs font-mono mb-2 uppercase tracking-wider">Active Nodes</div>
                  <div className="text-3xl font-black text-white mb-1">1,429</div>
                  <div className="text-xs text-green-500 mt-4 flex items-center gap-1 font-medium">
                    <span>▲ +14% from last hour</span>
                  </div>
                </div>
                <div className="bg-zinc-900/60 p-6 rounded-md border border-zinc-800/80">
                  <div className="text-red-500 text-xs font-mono mb-2 uppercase tracking-wider">Latency Rate</div>
                  <div className="text-3xl font-black text-white mb-1">0.4ms</div>
                  <div className="text-xs text-zinc-400 mt-4 font-medium">Global CDN Optimized</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands / Partners Section */}
      <section className="py-12 border-y border-zinc-900 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-8">Trusted by elite engineering teams worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all">
            <span className="text-xl font-black tracking-widest text-white">NEXUS</span>
            <span className="text-xl font-black tracking-widest text-white">SYNDICATE</span>
            <span className="text-xl font-black tracking-widest text-white">OBSIDIAN</span>
            <span className="text-xl font-black tracking-widest text-white">APEX</span>
            <span className="text-xl font-black tracking-widest text-white">VANGUARD</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-mono uppercase tracking-widest text-red-500 mb-3">Core Capabilities</h2>
            <h3 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-6">BUILT FOR ABSOLUTE PERFORMANCE</h3>
            <p className="text-zinc-400">Everything you need to accelerate development, secure infrastructure, and scale effortlessly.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-950 border border-zinc-900 p-8 rounded-md hover:border-red-900/50 transition-all group">
              <div className="w-12 h-12 rounded-md bg-red-950/60 border border-red-900/50 flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Hyper-Velocity Speed</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">Optimized assembly algorithms and edge caching deliver lightning-fast responses globally with zero drag.</p>
            </div>

            <div className="bg-zinc-950 border border-zinc-900 p-8 rounded-md hover:border-red-900/50 transition-all group">
              <div className="w-12 h-12 rounded-md bg-red-950/60 border border-red-900/50 flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Military-Grade Security</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">End-to-end quantum-resistant encryption safeguards your data against advanced cyber threats.</p>
            </div>

            <div className="bg-zinc-950 border border-zinc-900 p-8 rounded-md hover:border-red-900/50 transition-all group">
              <div className="w-12 h-12 rounded-md bg-red-950/60 border border-red-900/50 flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Real-Time Telemetry</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">Granular dashboards provide instant insights into resource utilization, traffic bottlenecks, and system health.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase / Split Section */}
      <section id="showcase" className="py-24 bg-zinc-950/40 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-red-500 mb-3">Advanced Interface</h2>
            <h3 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-6">COMMAND EVERYTHING FROM ONE SINGLE SCREEN</h3>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              No more jumping between scattered tools. Our crimson-accented dark UI is designed to reduce eye strain during long coding sessions while keeping critical metrics front and center.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-zinc-300">
                <div className="w-5 h-5 rounded-full bg-red-950 border border-red-800 flex items-center justify-center text-red-500 text-xs">✓</div>
                Customizable modular widgets
              </li>
              <li className="flex items-center gap-3 text-zinc-300">
                <div className="w-5 h-5 rounded-full bg-red-950 border border-red-800 flex items-center justify-center text-red-500 text-xs">✓</div>
                Dark mode native architecture
              </li>
              <li className="flex items-center gap-3 text-zinc-300">
                <div className="w-5 h-5 rounded-full bg-red-950 border border-red-800 flex items-center justify-center text-red-500 text-xs">✓</div>
                Instant command palette (Cmd+K)
              </li>
            </ul>
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-md shadow-lg shadow-red-600/30 transition-all">
              Explore Documentation
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-red-600/20 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="relative rounded-md border border-red-900/50 bg-black p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-900">
                <span className="font-mono text-sm text-red-500">terminal@vortex-os:~</span>
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-600"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
                </div>
              </div>
              <div className="font-mono text-xs text-zinc-300 space-y-2">
                <p className="text-zinc-500"># Initializing deployment sequence...</p>
                <p><span className="text-red-500">→</span> loading core modules [OK]</p>
                <p><span className="text-red-500">→</span> connecting to secure cluster [OK]</p>
                <p><span className="text-red-500">→</span> allocating memory buffers [OK]</p>
                <p className="text-green-500 font-bold">✔ System operational. 0 errors detected.</p>
                <div className="pt-4 flex items-center gap-2 text-zinc-500">
                  <span>$</span>
                  <span className="inline-block w-2 h-4 bg-red-600 animate-pulse"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-mono uppercase tracking-widest text-red-500 mb-3">Transparent Plans</h2>
            <h3 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-6">CHOOSE YOUR POWER LEVEL</h3>
            <p className="text-zinc-400">Scale your resources up or down at any time. No hidden fees.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <div className="bg-zinc-950 border border-zinc-900 rounded-md p-8 flex flex-col justify-between hover:border-zinc-800 transition-all">
              <div>
                <h4 className="text-lg font-bold text-white mb-2">Starter</h4>
                <p className="text-zinc-400 text-sm mb-6">For hobbyists and personal exploratory projects.</p>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-black text-white">$0</span>
                  <span className="text-zinc-500 text-sm">/ month</span>
                </div>
                <ul className="space-y-4 mb-8 text-sm text-zinc-300">
                  <li className="flex items-center gap-3">
                    <span className="text-red-500">✓</span> 1 User Account
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-red-500">✓</span> 10GB Secure Storage
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-red-500">✓</span> Standard Support
                  </li>
                </ul>
              </div>
              <button className="w-full bg-zinc-900 hover:bg-zinc-800 text-white font-semibold py-3 rounded-md transition-all border border-zinc-800">
                Get Started Free
              </button>
            </div>

            {/* Pro Plan - Highlighted */}
            <div className="bg-zinc-950 border-2 border-red-600 rounded-md p-8 flex flex-col justify-between relative shadow-2xl shadow-red-950/50">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                Most Popular
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">Professional</h4>
                <p className="text-zinc-400 text-sm mb-6">For growing teams and professional developers.</p>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-black text-white">$49</span>
                  <span className="text-zinc-500 text-sm">/ month</span>
                </div>
                <ul className="space-y-4 mb-8 text-sm text-zinc-300">
                  <li className="flex items-center gap-3">
                    <span className="text-red-500">✓</span> Up to 10 Team Members
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-red-500">✓</span> 500GB Quantum Storage
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-red-500">✓</span> Real-Time Analytics
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-red-500">✓</span> Priority 24/7 Support
                  </li>
                </ul>
              </div>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-md shadow-lg shadow-red-600/30 transition-all">
                Upgrade to Pro
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-zinc-950 border border-zinc-900 rounded-md p-8 flex flex-col justify-between hover:border-zinc-800 transition-all">
              <div>
                <h4 className="text-lg font-bold text-white mb-2">Enterprise</h4>
                <p className="text-zinc-400 text-sm mb-6">For large-scale operations requiring maximum custom power.</p>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-black text-white">$199</span>
                  <span className="text-zinc-500 text-sm">/ month</span>
                </div>
                <ul className="space-y-4 mb-8 text-sm text-zinc-300">
                  <li className="flex items-center gap-3">
                    <span className="text-red-500">✓</span> Unlimited Team Members
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-red-500">✓</span> Unlimited Storage
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-red-500">✓</span> Dedicated Account Manager
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-red-500">✓</span> Custom SLA Agreements
                  </li>
                </ul>
              </div>
              <button className="w-full bg-zinc-900 hover:bg-zinc-800 text-white font-semibold py-3 rounded-md transition-all border border-zinc-800">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-zinc-950/40 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-xs font-mono uppercase tracking-widest text-red-500 mb-3">Support</h2>
            <h3 className="text-3xl font-black tracking-tight text-white mb-4">FREQUENTLY ASKED QUESTIONS</h3>
            <p className="text-zinc-400">Got questions? We've got answers.</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What is Vortex and how does it work?",
                a: "Vortex is a high-performance infrastructure and developer platform engineered for maximum speed, security, and real-time data telemetry in a sleek red-and-black dark environment."
              },
              {
                q: "Can I switch plans later?",
                a: "Yes, you can upgrade, downgrade, or cancel your subscription at any time directly from your billing dashboard without any penalties."
              },
              {
                q: "Is my data secure?",
                a: "Absolutely. We utilize quantum-resistant encryption protocols and adhere to strict security compliances to ensure your infrastructure remains bulletproof."
              },
              {
                q: "Do you offer custom enterprise solutions?",
                a: "Yes, our Enterprise tier includes dedicated account management, custom SLAs, and custom on-premise deployment options. Contact our sales team for details."
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className="bg-zinc-950 border border-zinc-900 rounded-md overflow-hidden transition-all"
              >
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left font-semibold text-white flex items-center justify-between focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <span className={`text-red-500 transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {activeFaq === index && (
                  <div className="px-6 pb-4 text-sm text-zinc-400 leading-relaxed border-t border-zinc-900 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-red-950/20 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h3 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-4">READY TO TAKE CONTROL?</h3>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">Join thousands of elite engineers already running their infrastructure on Vortex.</p>
          
          {subscribed ? (
            <div className="bg-red-950/60 border border-red-900 text-red-300 p-4 rounded-md max-w-md mx-auto font-medium">
              ✓ Thanks for subscribing. Check your inbox for updates.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your work email..." 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-zinc-900 border border-zinc-800 rounded-md px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-red-600 flex-1 text-sm"
              />
              <button 
                type="submit" 
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-md shadow-lg shadow-red-600/30 transition-all text-sm"
              >
                Join Waitlist
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-900 py-12 text-zinc-500 text-sm">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-md bg-gradient-to-tr from-red-700 to-red-500 flex items-center justify-center">
                <span className="text-white font-black text-sm tracking-wider">V</span>
              </div>
              <span className="text-lg font-bold tracking-wider text-white">VORTEX<span className="text-red-600">.</span></span>
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Engineered for absolute dominance. High-performance software infrastructure in red and black.
            </p>
          </div>

          <div>
            <h5 className="font-semibold text-white mb-4 text-xs uppercase tracking-wider">Product</h5>
            <ul className="space-y-2 text-xs">
              <li><a href="#features" className="hover:text-red-500 transition-colors">Features</a></li>
              <li><a href="#showcase" className="hover:text-red-500 transition-colors">Command Center</a></li>
              <li><a href="#pricing" className="hover:text-red-500 transition-colors">Pricing Plans</a></li>
              <li><a href="#faq" className="hover:text-red-500 transition-colors">Documentation</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-white mb-4 text-xs uppercase tracking-wider">Company</h5>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-red-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Careers <span className="bg-red-950 text-red-500 text-[10px] px-1.5 py-0.5 rounded ml-1">We're hiring</span></a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Press Kit</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-white mb-4 text-xs uppercase tracking-wider">Legal</h5>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-red-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Security Overview</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-xs">
          <p>© {new Date().getFullYear()} Vortex Technologies, Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">Discord</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
```