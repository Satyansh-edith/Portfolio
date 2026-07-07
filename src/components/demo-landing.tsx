'use client';

import React from 'react';
import {
  Reveal,
  StaggeredReveal,
  CountUp,
  Parallax,
  ScrollIndicator,
} from '@/components/ui/reveal';
import { StickySteps, ComparisonTable } from '@/components/ui/sticky-steps';

export const DemoLanding = () => {
  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* ========== HERO SECTION ========== */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <Parallax speed={0.3} className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
          <svg
            className="w-full h-full opacity-10"
            viewBox="0 0 1200 600"
            preserveAspectRatio="xMidYMid slice"
          >
            <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="currentColor" />
            </pattern>
            <rect width="1200" height="600" fill="url(#dots)" />
          </svg>
        </Parallax>

        <div className="relative z-10 text-center px-4 space-y-8">
          <Reveal delay={0} duration={800}>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Scroll-Based Reveal Animations
            </h1>
          </Reveal>

          <Reveal delay={100} duration={800}>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Beautiful, performant scroll animations with Intersection Observer,
              stagger effects, and parallax depth
            </p>
          </Reveal>

          <Reveal delay={200} duration={800}>
            <button className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
              Get Started
            </button>
          </Reveal>

          <div className="mt-16 pt-8 border-t border-gray-700">
            <ScrollIndicator />
          </div>
        </div>
      </section>

      {/* ========== SPLIT SECTION: MERCHANTS VS SHOPPERS ========== */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Built for Everyone
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Merchants */}
          <Reveal direction="left" delay={0}>
            <div className="space-y-6 p-8 rounded-xl bg-gradient-to-br from-blue-900/30 to-blue-900/10 border border-blue-800/30 hover:border-blue-700/50 transition-colors">
              <div className="text-5xl">🏪</div>
              <h3 className="text-2xl font-bold">For Merchants</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Sell digital & physical products</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Real-time analytics dashboard</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Automated inventory management</span>
                </li>
              </ul>
            </div>
          </Reveal>

          {/* Shoppers */}
          <Reveal direction="right" delay={0}>
            <div className="space-y-6 p-8 rounded-xl bg-gradient-to-br from-purple-900/30 to-purple-900/10 border border-purple-800/30 hover:border-purple-700/50 transition-colors">
              <div className="text-5xl">🛍️</div>
              <h3 className="text-2xl font-bold">For Shoppers</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Browse curated products</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Secure checkout experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Instant digital delivery</span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========== 3-STEP PROCESS ========== */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            How It Works
          </h2>
        </Reveal>

        <StaggeredReveal
          className="grid md:grid-cols-3 gap-8"
          childClassName="group"
        >
          {[
            {
              number: 1,
              title: 'Create Account',
              description: 'Sign up in seconds with your email',
            },
            {
              number: 2,
              title: 'Set Up Store',
              description: 'Customize your storefront in minutes',
            },
            {
              number: 3,
              title: 'Start Selling',
              description: 'List products and accept payments',
            },
          ].map((step) => (
            <div
              key={step.number}
              className="relative p-8 rounded-lg bg-slate-700/50 border border-slate-600/50 hover:border-blue-500/50 transition-colors group-hover:bg-slate-700/80"
            >
              <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mt-4">{step.title}</h3>
              <p className="text-gray-400 mt-2">{step.description}</p>
            </div>
          ))}
        </StaggeredReveal>
      </section>

      {/* ========== FEATURE GRID ========== */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Powerful Features
          </h2>
        </Reveal>

        <StaggeredReveal
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          staggerDelay={80}
          childClassName="p-6 rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600/50 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10"
        >
          {[
            { icon: '💳', title: 'Easy Payments', desc: 'Multiple payment methods' },
            { icon: '📊', title: 'Analytics', desc: 'Track sales in real-time' },
            { icon: '🔒', title: 'Secure', desc: 'Enterprise-grade security' },
            { icon: '🚀', title: 'Fast', desc: 'Optimized performance' },
            { icon: '📱', title: 'Mobile-First', desc: 'Works on all devices' },
            { icon: '🎨', title: 'Customizable', desc: 'Make it your own' },
          ].map((feature, idx) => (
            <div key={idx} className="space-y-3">
              <div className="text-4xl">{feature.icon}</div>
              <h3 className="text-lg font-bold">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </StaggeredReveal>
      </section>

      {/* ========== STICKY STEPS SECTION ========== */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Sticky Step Process
          </h2>
        </Reveal>

        <StickySteps
          steps={[
            {
              number: 1,
              title: 'Onboard',
              description:
                'Create your account and complete your merchant profile with business details.',
            },
            {
              number: 2,
              title: 'Configure',
              description: 'Set up your products, pricing, and payment methods.',
            },
            {
              number: 3,
              title: 'Launch',
              description:
                'Go live and start accepting orders from customers worldwide.',
            },
          ]}
        />
      </section>

      {/* ========== STATS / COUNTERS ========== */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            By The Numbers
          </h2>
        </Reveal>

        <StaggeredReveal className="grid md:grid-cols-4 gap-8 text-center">
          {[
            { label: 'Active Users', value: 50000, suffix: '+' },
            { label: 'Transactions', value: 1000000, suffix: '+' },
            { label: 'Revenue Generated', value: 100, prefix: '$', suffix: 'M+' },
            { label: 'Countries', value: 150, suffix: '+' },
          ].map((stat, idx) => (
            <div key={idx} className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-blue-400">
                <CountUp
                  target={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  duration={2000}
                />
              </div>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </StaggeredReveal>
      </section>

      {/* ========== PRICING CARDS ========== */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Simple Pricing
          </h2>
        </Reveal>

        <StaggeredReveal
          className="grid md:grid-cols-3 gap-8"
          staggerDelay={120}
          childClassName="p-8 rounded-xl border-2 transition-all hover:shadow-2xl hover:shadow-blue-500/20"
        >
          {[
            {
              name: 'Starter',
              price: '$29',
              features: [
                'Up to 100 products',
                'Basic analytics',
                'Email support',
                '2.9% + $0.30 per transaction',
              ],
              highlight: false,
            },
            {
              name: 'Professional',
              price: '$99',
              features: [
                'Unlimited products',
                'Advanced analytics',
                'Priority support',
                '2.2% + $0.30 per transaction',
              ],
              highlight: true,
            },
            {
              name: 'Enterprise',
              price: 'Custom',
              features: [
                'Everything in Pro',
                'API access',
                'Dedicated manager',
                'Custom rates',
              ],
              highlight: false,
            },
          ].map((plan, idx) => (
            <div
              key={idx}
              className={`${
                plan.highlight
                  ? 'border-blue-500 bg-blue-500/10 scale-105 md:scale-100'
                  : 'border-slate-600 bg-slate-700/30'
              }`}
            >
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <div className="text-4xl font-bold text-blue-400 mt-2">
                {plan.price}
              </div>
              {plan.price !== 'Custom' && (
                <p className="text-gray-400 text-sm">/month</p>
              )}
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-gray-300 flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full mt-8 py-2 rounded-lg font-semibold transition-all ${
                  plan.highlight
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-slate-700 hover:bg-slate-600 text-gray-200'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </StaggeredReveal>
      </section>

      {/* ========== COMPARISON TABLE ========== */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            How We Compare
          </h2>
        </Reveal>

        <Reveal>
          <ComparisonTable
            rows={[
              {
                label: 'No Setup Fees',
                feature: '✓',
                competitor: '✗',
              },
              {
                label: 'Instant Payouts',
                feature: '✓',
                competitor: 'Weekly',
              },
              {
                label: 'API Access',
                feature: '✓',
                competitor: '✗',
              },
              {
                label: '24/7 Support',
                feature: '✓',
                competitor: '✗',
              },
              {
                label: 'Mobile App',
                feature: '✓',
                competitor: '✓',
              },
            ]}
          />
        </Reveal>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <Reveal className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300">
            Join thousands of merchants already selling on our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
              Start Free Trial
            </button>
            <button className="px-8 py-3 border-2 border-blue-600 text-blue-400 hover:bg-blue-600/10 rounded-lg font-semibold transition-colors">
              Schedule Demo
            </button>
          </div>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 py-12 px-4 text-center text-gray-400">
        <p>&copy; 2025 Scroll Reveal Demo. Built with performance & accessibility in mind.</p>
      </footer>
    </div>
  );
};
