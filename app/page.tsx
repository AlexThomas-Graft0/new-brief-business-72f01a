'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, Zap, MessageSquare, ArrowRight, CheckCircle2, Palette, Layers, Target } from 'lucide-react';

const designs = [
  { id: 1, title: 'Modern SaaS UI', category: 'Web Design', img: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'Minimalist Brand Identity', category: 'Branding', img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'E-commerce Flow', category: 'UX/UI', img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800' },
  { id: 4, title: 'Abstract Vector Art', category: 'Illustration', img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800' },
  { id: 5, title: 'Tech Startup Pitch Deck', category: 'Presentation', img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800' },
  { id: 6, title: 'Typography System', category: 'Branding', img: 'https://images.unsplash.com/photo-1629904979884-a164f9f44923?auto=format&fit=crop&q=80&w=800' },
];

export default function GhostDesignsLanding() {
  const [request, setRequest] = useState('');

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-indigo-500 selection:text-white">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold tracking-tighter">GHOST DESIGNS</span>
          <a href="#request" className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-zinc-200 transition">
            Start a Request
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent"
          >
            Design, delivered on demand.
          </motion.h1>
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
            The subscription-based design service for brands that don't want to wait. High-end visuals, zero overhead.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#work" className="px-8 py-4 bg-indigo-600 rounded-full font-bold hover:bg-indigo-700 transition">View Portfolio</a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          {[
            { icon: <Zap />, title: 'Rapid Turnaround', desc: 'Designs delivered in 48 hours or less.' },
            { icon: <Layers />, title: 'Unlimited Requests', desc: 'Add as many tasks to your queue as you need.' },
            { icon: <Palette />, title: 'Premium Quality', desc: 'Top-tier branding and UI design expertise.' }
          ].map((feat, i) => (
            <div key={i} className="p-8 border border-zinc-800 rounded-2xl bg-zinc-950">
              <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 mb-6">{feat.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feat.title}</h3>
              <p className="text-zinc-400">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="work" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Selected Work</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {designs.map((d) => (
            <motion.div 
              key={d.id} 
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              <img src={d.img} alt={d.title} className="w-full h-80 object-cover opacity-80 group-hover:opacity-100 transition duration-500" />
              <div className="absolute bottom-0 p-6">
                <p className="text-indigo-400 text-sm font-bold">{d.category}</p>
                <h3 className="text-xl font-bold">{d.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Request Form */}
      <section id="request" className="py-20 px-6">
        <div className="max-w-3xl mx-auto bg-white text-black p-12 rounded-3xl">
          <h2 className="text-4xl font-bold mb-6">Let's build something.</h2>
          <p className="mb-8 text-zinc-600">Tell us about your project requirements and we'll get started.</p>
          <textarea 
            className="w-full h-40 p-4 border border-zinc-200 rounded-xl mb-6 focus:ring-2 focus:ring-indigo-500 outline-none"
            placeholder="Describe your design needs..."
            value={request}
            onChange={(e) => setRequest(e.target.value)}
          />
          <button className="w-full py-4 bg-black text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-zinc-800 transition">
            Submit Request <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-900 text-center text-zinc-600">
        <p>© {new Date().getFullYear()} Ghost Designs. All rights reserved.</p>
      </footer>
    </div>
  );
}