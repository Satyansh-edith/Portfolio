'use client';

import React from 'react';
import {
  AdvancedReveal,
  MorphingReveal,
  TextReveal,
  WordReveal,
  CharReveal,
  AdvancedStaggeredReveal,
  BorderReveal,
  GradientTextReveal,
  IconReveal,
} from '@/components/ui/advanced-reveal';
import { Parallax, ScrollIndicator, CountUp } from '@/components/ui/reveal';

export const EnhancedLanding = () => {
  return (
    <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* ========== HERO SECTION ========== */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
        <Parallax speed={0.25} className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-slate-900/30" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </Parallax>

        <div className="relative z-10 text-center space-y-8 max-w-4xl">
          <GradientTextReveal
            delay={0}
            duration={900}
            from="#3b82f6"
            to="#ec4899"
            className="text-6xl md:text-8xl font-black leading-tight"
          >
            Aesthetic Scroll Animations
          </GradientTextReveal>

          <WordReveal
            delay={300}
            duration={600}
            className="text-xl md:text-2xl text-gray-300 font-light"
          >
            Elevate your website with stunning, performance-optimized scroll reveals
          </WordReveal>

          <div className="pt-8">
            <AdvancedReveal variant="bounce-in" delay={600} duration={900}>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all">
                Explore Now
              </button>
            </AdvancedReveal>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-700/50">
            <ScrollIndicator />
          </div>
        </div>
      </section>

      {/* ========== FEATURES WITH BLUR-IN ========== */}
      <section className="py-24 px-4 max-w-6xl mx-auto">
        <AdvancedReveal variant="blur-in" delay={0}>
          <h2 className="text-5xl md:text-6xl font-black text-center mb-4">
            Why Choose Our Animations?
          </h2>
        </AdvancedReveal>

        <AdvancedReveal variant="blur-in" delay={200}>
          <p className="text-gray-400 text-center text-lg mb-16 max-w-2xl mx-auto">
            Crafted with precision for both performance and aesthetics
          </p>
        </AdvancedReveal>

        <AdvancedStaggeredReveal
          variant="wave"
          className="grid md:grid-cols-3 gap-8"
          staggerDelay={150}
          childClassName="group"
        >
          {[
            {
              icon: '⚡',
              title: 'Lightning Fast',
              desc: 'GPU-accelerated with Intersection Observer',
            },
            {
              icon: '♿',
              title: 'Accessible',
              desc: 'Respects prefers-reduced-motion setting',
            },
            {
              icon: '🎨',
              title: 'Beautiful',
              desc: '8+ aesthetic animation variants',
            },
            {
              icon: '📱',
              title: 'Mobile First',
              desc: '60fps smooth animations everywhere',
            },
            {
              icon: '🔧',
              title: 'Customizable',
              desc: 'Full control over timing and direction',
            },
            {
              icon: '📦',
              title: 'Zero Dependencies',
              desc: 'Pure React, no external libraries',
            },
          ].map((feature, idx) => (
            <BorderReveal
              key={idx}
              borderColor="rgba(59, 130, 246, 0.3)"
              borderWidth={1}
              delay={idx * 100}
              duration={1200}
              className="p-8 rounded-xl bg-slate-800/30 hover:bg-slate-800/50 transition-colors"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </BorderReveal>
          ))}
        </AdvancedStaggeredReveal>
      </section>

      {/* ========== ANIMATION VARIANTS SHOWCASE ========== */}
      <section className="py-24 px-4 max-w-6xl mx-auto">
        <AdvancedReveal variant="scale-fade" delay={0}>
          <h2 className="text-5xl md:text-6xl font-black text-center mb-16">
            Animation Variants
          </h2>
        </AdvancedReveal>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Variant 1: Slide-Fade */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-blue-400">Slide Fade</h3>
            <AdvancedReveal variant="slide-fade" delay={100}>
              <div className="p-8 bg-gradient-to-br from-blue-900/30 to-blue-900/10 rounded-lg border border-blue-800/30">
                Smooth fade with upward slide motion
              </div>
            </AdvancedReveal>
          </div>

          {/* Variant 2: Blur-In */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-purple-400">Blur In</h3>
            <AdvancedReveal variant="blur-in" delay={100}>
              <div className="p-8 bg-gradient-to-br from-purple-900/30 to-purple-900/10 rounded-lg border border-purple-800/30">
                Elegant blur transition with opacity fade
              </div>
            </AdvancedReveal>
          </div>

          {/* Variant 3: Scale-Fade */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-pink-400">Scale Fade</h3>
            <AdvancedReveal variant="scale-fade" delay={100}>
              <div className="p-8 bg-gradient-to-br from-pink-900/30 to-pink-900/10 rounded-lg border border-pink-800/30">
                Subtle scale effect with smooth fade
              </div>
            </AdvancedReveal>
          </div>

          {/* Variant 4: Rotate-Slide */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-cyan-400">Rotate Slide</h3>
            <AdvancedReveal variant="rotate-slide" delay={100}>
              <div className="p-8 bg-gradient-to-br from-cyan-900/30 to-cyan-900/10 rounded-lg border border-cyan-800/30">
                3D rotation with forward perspective
              </div>
            </AdvancedReveal>
          </div>

          {/* Variant 5: Clip-Path */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-green-400">Clip Path</h3>
            <AdvancedReveal variant="clip-path" delay={100}>
              <div className="p-8 bg-gradient-to-br from-green-900/30 to-green-900/10 rounded-lg border border-green-800/30">
                Reveals from top downward with clip animation
              </div>
            </AdvancedReveal>
          </div>

          {/* Variant 6: Glass-Morphism */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-orange-400">Glass Effect</h3>
            <AdvancedReveal variant="glass-morphism" delay={100}>
              <div className="p-8 bg-gradient-to-br from-orange-900/30 to-orange-900/10 rounded-lg border border-orange-800/30 backdrop-blur">
                Frosted glass blur-in effect
              </div>
            </AdvancedReveal>
          </div>

          {/* Variant 7: Bounce-In */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-indigo-400">Bounce In</h3>
            <AdvancedReveal variant="bounce-in" delay={100}>
              <div className="p-8 bg-gradient-to-br from-indigo-900/30 to-indigo-900/10 rounded-lg border border-indigo-800/30">
                Fun bounce effect with elastic easing
              </div>
            </AdvancedReveal>
          </div>

          {/* Variant 8: Gradient-Reveal */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-red-400">Gradient Reveal</h3>
            <AdvancedReveal variant="gradient-reveal" delay={100}>
              <div className="p-8 bg-gradient-to-br from-red-900/30 to-red-900/10 rounded-lg border border-red-800/30">
                Gradient-clipped text animation
              </div>
            </AdvancedReveal>
          </div>
        </div>
      </section>

      {/* ========== MORPHING REVEAL ========== */}
      <section className="py-24 px-4 max-w-6xl mx-auto">
        <MorphingReveal delay={0} duration={1000}>
          <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl font-black">
              Morphing Animation
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl">
              Combines scale, blur, and translate for a sophisticated morphing effect
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {[1, 2, 3, 4].map((i) => (
                <MorphingReveal key={i} delay={i * 150} duration={900}>
                  <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-colors">
                    <div className="text-4xl mb-4">✨</div>
                    <h3 className="text-xl font-bold mb-2">Feature {i}</h3>
                    <p className="text-gray-400">
                      Morphing animation {i} with enhanced aesthetic appeal
                    </p>
                  </div>
                </MorphingReveal>
              ))}
            </div>
          </div>
        </MorphingReveal>
      </section>

      {/* ========== TEXT ANIMATIONS ========== */}
      <section className="py-24 px-4 max-w-6xl mx-auto">
        <AdvancedReveal variant="scale-fade" delay={0}>
          <h2 className="text-5xl md:text-6xl font-black text-center mb-16">
            Text Animation Effects
          </h2>
        </AdvancedReveal>

        <div className="space-y-12">
          {/* Word Reveal */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-blue-400">Word Reveal</h3>
            <WordReveal
              delay={100}
              duration={600}
              className="text-3xl font-bold leading-relaxed"
            >
              Each word slides in smoothly creating a flowing entrance
            </WordReveal>
          </div>

          {/* Character Reveal */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-purple-400">Character Reveal</h3>
            <CharReveal
              delay={50}
              duration={700}
              staggerDelay={40}
              className="text-3xl font-bold leading-relaxed"
            >
              Character by character animation for dramatic effect
            </CharReveal>
          </div>

          {/* Line Reveal */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-pink-400">Line Reveal</h3>
            <TextReveal
              delay={100}
              duration={700}
              className="text-2xl leading-relaxed space-y-3"
            >
              This is the first line
              This is the second line
              This is the third line
            </TextReveal>
          </div>
        </div>
      </section>

      {/* ========== ADVANCED STAGGER PATTERNS ========== */}
      <section className="py-24 px-4 max-w-6xl mx-auto">
        <AdvancedReveal variant="blur-in" delay={0}>
          <h2 className="text-5xl md:text-6xl font-black text-center mb-16">
            Advanced Stagger Patterns
          </h2>
        </AdvancedReveal>

        <div className="space-y-24">
          {/* Cascade Pattern */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-blue-400">Cascade Pattern</h3>
            <AdvancedStaggeredReveal
              variant="cascade"
              className="grid md:grid-cols-4 gap-6"
              staggerDelay={120}
            >
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="h-32 rounded-lg bg-gradient-to-br from-blue-600/30 to-blue-900/30 border border-blue-500/30 flex items-center justify-center font-bold"
                >
                  {i + 1}
                </div>
              ))}
            </AdvancedStaggeredReveal>
          </div>

          {/* Wave Pattern */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-purple-400">Wave Pattern</h3>
            <AdvancedStaggeredReveal
              variant="wave"
              className="grid md:grid-cols-4 gap-6"
              staggerDelay={100}
            >
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="h-32 rounded-lg bg-gradient-to-br from-purple-600/30 to-purple-900/30 border border-purple-500/30 flex items-center justify-center font-bold"
                >
                  {i + 1}
                </div>
              ))}
            </AdvancedStaggeredReveal>
          </div>

          {/* Circle Pattern */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-pink-400">Circle Pattern</h3>
            <AdvancedStaggeredReveal
              variant="circle"
              className="grid md:grid-cols-4 gap-6"
              staggerDelay={150}
            >
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="h-32 rounded-lg bg-gradient-to-br from-pink-600/30 to-pink-900/30 border border-pink-500/30 flex items-center justify-center font-bold"
                >
                  {i + 1}
                </div>
              ))}
            </AdvancedStaggeredReveal>
          </div>

          {/* Zig-Zag Pattern */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-cyan-400">Zig-Zag Pattern</h3>
            <AdvancedStaggeredReveal
              variant="zig-zag"
              className="grid md:grid-cols-4 gap-6"
              staggerDelay={100}
            >
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="h-32 rounded-lg bg-gradient-to-br from-cyan-600/30 to-cyan-900/30 border border-cyan-500/30 flex items-center justify-center font-bold"
                >
                  {i + 1}
                </div>
              ))}
            </AdvancedStaggeredReveal>
          </div>

          {/* Spiral Pattern */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-green-400">Spiral Pattern</h3>
            <AdvancedStaggeredReveal
              variant="spiral"
              className="grid md:grid-cols-4 gap-6"
              staggerDelay={120}
            >
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="h-32 rounded-lg bg-gradient-to-br from-green-600/30 to-green-900/30 border border-green-500/30 flex items-center justify-center font-bold"
                >
                  {i + 1}
                </div>
              ))}
            </AdvancedStaggeredReveal>
          </div>

          {/* Bounce Pattern */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-orange-400">Bounce Pattern</h3>
            <AdvancedStaggeredReveal
              variant="bounce"
              className="grid md:grid-cols-4 gap-6"
              staggerDelay={130}
            >
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="h-32 rounded-lg bg-gradient-to-br from-orange-600/30 to-orange-900/30 border border-orange-500/30 flex items-center justify-center font-bold"
                >
                  {i + 1}
                </div>
              ))}
            </AdvancedStaggeredReveal>
          </div>
        </div>
      </section>

      {/* ========== ICON REVEALS ========== */}
      <section className="py-24 px-4 max-w-6xl mx-auto">
        <AdvancedReveal variant="scale-fade" delay={0}>
          <h2 className="text-5xl md:text-6xl font-black text-center mb-16">
            Icon Animations
          </h2>
        </AdvancedReveal>

        <AdvancedStaggeredReveal
          variant="bounce"
          className="grid md:grid-cols-4 gap-8 text-center"
          staggerDelay={150}
        >
          {['🚀', '💎', '🎨', '⚡', '🔥', '✨', '🌟', '💫'].map((icon, i) => (
            <IconReveal key={i} delay={0} duration={1000} rotation={360}>
              <div className="text-8xl">{icon}</div>
            </IconReveal>
          ))}
        </AdvancedStaggeredReveal>
      </section>

      {/* ========== STATS WITH COUNTERS ========== */}
      <section className="py-24 px-4 max-w-6xl mx-auto">
        <AdvancedReveal variant="blur-in" delay={0}>
          <h2 className="text-5xl md:text-6xl font-black text-center mb-16">
            Impressive Results
          </h2>
        </AdvancedReveal>

        <AdvancedStaggeredReveal
          variant="circle"
          className="grid md:grid-cols-4 gap-8 text-center"
          staggerDelay={150}
        >
          {[
            { label: 'Users', value: 100000 },
            { label: 'Downloads', value: 500000 },
            { label: 'Animations', value: 50 },
            { label: 'Performance', value: 98, suffix: '%' },
          ].map((stat, i) => (
            <div key={i} className="space-y-2">
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                <CountUp target={stat.value} suffix={stat.suffix || ''} duration={2000} />
              </div>
              <p className="text-gray-400 text-lg">{stat.label}</p>
            </div>
          ))}
        </AdvancedStaggeredReveal>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="py-24 px-4 max-w-4xl mx-auto text-center">
        <MorphingReveal delay={0} duration={1200}>
          <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl font-black">
              Ready to Transform Your Website?
            </h2>
            <p className="text-xl text-gray-300">
              Use these aesthetic scroll animations to captivate your audience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <AdvancedReveal variant="bounce-in" delay={200}>
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all">
                  Get Started
                </button>
              </AdvancedReveal>
              <AdvancedReveal variant="bounce-in" delay={400}>
                <button className="px-8 py-4 border-2 border-blue-600 text-blue-400 hover:bg-blue-600/10 rounded-lg font-bold text-lg transition-all">
                  View Docs
                </button>
              </AdvancedReveal>
            </div>
          </div>
        </MorphingReveal>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 py-12 px-4 text-center text-gray-400">
        <p>&copy; 2025 Enhanced Scroll Animations. Crafted with aesthetic precision.</p>
      </footer>
    </div>
  );
};
