# 🎬 Scroll-Based Reveal Animation System

> **Beautiful, performant scroll animations with Intersection Observer, stagger effects, parallax depth, and accessibility support.**

## ✨ Features

### Core Animations
- ✅ **Fade-In & Slide-Up**: Elements reveal with opacity and transform
- ✅ **Staggered Groups**: Child elements cascade in sequence
- ✅ **Parallax Depth**: Background moves slower than scroll speed
- ✅ **Counter Animations**: Numbers count up from 0 to target
- ✅ **Sticky Steps**: Section pins while content updates
- ✅ **Comparison Tables**: Row-by-row animations

### Performance & Accessibility
- ✅ **Intersection Observer**: No scroll listeners (optimal performance)
- ✅ **Prefers Reduced Motion**: Respects user accessibility settings
- ✅ **GPU-Accelerated**: Uses `transform` and `opacity` only
- ✅ **One-Time Animation**: Elements animate only once
- ✅ **Mobile-Optimized**: Smooth 60fps on all devices
- ✅ **Zero Dependencies**: Pure React, no external libraries

## 📂 Project Structure

```
src/
├── hooks/
│   └── useScrollReveal.ts          # Custom hooks for animations
├── components/
│   └── ui/
│       ├── reveal.tsx              # Reveal, StaggeredReveal, CountUp components
│       └── sticky-steps.tsx         # StickySteps, ComparisonTable components
├── app/
│   └── scroll-animations/
│       └── page.tsx                # Demo landing page
└── components/
    └── demo-landing.tsx            # Full-featured demo implementation

Documentation/
├── SCROLL_ANIMATIONS_GUIDE.md      # Comprehensive documentation (11 sections)
├── SCROLL_ANIMATIONS_QUICK_START.md # 5-minute quick start
└── SCROLL_ANIMATIONS_README.md     # This file
```

## 🚀 Quick Start

### 1. View the Demo
```bash
npm run dev
# Open http://localhost:3000/scroll-animations
```

### 2. Basic Usage

```tsx
import { Reveal, StaggeredReveal, CountUp } from '@/components/ui/reveal';

export default function MyPage() {
  return (
    <>
      {/* Single element reveal */}
      <Reveal delay={100}>
        <h1>Welcome</h1>
      </Reveal>

      {/* Multiple elements with stagger */}
      <StaggeredReveal staggerDelay={100}>
        {items.map((item) => <Card key={item.id} {...item} />)}
      </StaggeredReveal>

      {/* Animated counter */}
      <CountUp target={50000} suffix="+" />
    </>
  );
}
```

### 3. Customize Animation

```tsx
<Reveal
  delay={0}                    // Delay before animation (ms)
  direction="up"               // 'up', 'left', 'right'
  duration={700}               // Animation duration (ms)
  threshold={0.15}             // Visibility threshold (0-1)
>
  Your content
</Reveal>
```

## 📦 Components

### `<Reveal />`
Single element fade-in and slide animation.

```tsx
<Reveal delay={100} direction="up">
  <h1>Your content</h1>
</Reveal>
```

### `<StaggeredReveal />`
Multiple elements with staggered entrance.

```tsx
<StaggeredReveal staggerDelay={100}>
  {items.map((item) => <Item key={item.id} {...item} />)}
</StaggeredReveal>
```

### `<CountUp />`
Animated number counter.

```tsx
<CountUp 
  target={50000}
  suffix="+"
  duration={2000}
  format={(val) => (val / 1000).toFixed(1) + 'K'}
/>
```

### `<Parallax />`
Parallax scrolling effect.

```tsx
<Parallax speed={0.3}>
  <Background />
</Parallax>
```

### `<StickySteps />`
Sticky section with step-by-step progression.

```tsx
<StickySteps steps={[
  { number: 1, title: 'Step 1', description: '...' },
  { number: 2, title: 'Step 2', description: '...' },
]} />
```

### `<ComparisonTable />`
Animated comparison table with row reveals.

```tsx
<ComparisonTable
  rows={[
    { label: 'Feature', feature: '✓', competitor: '✗' },
  ]}
  featureLabel="Our Product"
  competitorLabel="Competitor"
/>
```

### `<ScrollIndicator />`
Bouncing scroll indicator.

```tsx
<ScrollIndicator className="mt-8" />
```

## 🎯 Common Use Cases

### Hero Section
```tsx
<section className="min-h-screen flex flex-col items-center justify-center">
  <Parallax speed={0.3} className="absolute inset-0 -z-10">
    <HeroBackground />
  </Parallax>
  
  <div className="relative z-10 text-center space-y-8">
    <Reveal delay={0}>
      <h1>Your Heading</h1>
    </Reveal>
    <Reveal delay={200}>
      <p>Your subtitle</p>
    </Reveal>
  </div>
</section>
```

### Feature Grid
```tsx
<StaggeredReveal className="grid md:grid-cols-3 gap-8">
  {features.map((f) => <FeatureCard key={f.id} {...f} />)}
</StaggeredReveal>
```

### Stats Section
```tsx
<StaggeredReveal className="grid md:grid-cols-4 gap-8 text-center">
  {stats.map((stat) => (
    <div key={stat.label}>
      <CountUp target={stat.value} />
      <p>{stat.label}</p>
    </div>
  ))}
</StaggeredReveal>
```

### Pricing Cards
```tsx
<StaggeredReveal staggerDelay={120}>
  {plans.map((plan) => <PricingCard key={plan.id} {...plan} />)}
</StaggeredReveal>
```

## ⚙️ Animation Specs

| Property | Value |
|----------|-------|
| Duration | 700ms (configurable) |
| Easing | `cubic-bezier(0.16, 1, 0.3, 1)` (easeOutExpo) |
| Trigger | 15% visible from viewport bottom |
| One-Time | Yes (no re-trigger on scroll back) |
| Stagger | 80-120ms between children |
| Parallax | 30% of scroll speed (configurable) |
| Counter | 1500ms (configurable) |

## ♿ Accessibility

All animations automatically:
- 🎯 Respect `prefers-reduced-motion` setting
- 🎯 Maintain semantic HTML structure
- 🎯 Support keyboard navigation
- 🎯 Include ARIA labels where needed
- 🎯 Degrade gracefully without JavaScript

### Test Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 🔧 Custom Hooks

### `useScrollReveal(options)`
Hook for single-element reveals.

```typescript
const { ref, isRevealed, style } = useScrollReveal({
  delay: 100,
  direction: 'up',
  duration: 700,
  threshold: 0.15,
  onReveal: () => console.log('Revealed!'),
});
```

### `useStaggeredReveal(options)`
Hook for staggered child animations.

```typescript
const { containerRef, isRevealed, getChildStyle } = useStaggeredReveal({
  delay: 0,
  direction: 'up',
  duration: 700,
  staggerDelay: 100,
  threshold: 0.15,
});
```

### `useCountUp(target, duration, threshold)`
Hook for animated counters.

```typescript
const { ref, count } = useCountUp(50000, 1500, 0.15);
```

### `useParallax(speed)`
Hook for parallax effect.

```typescript
const { ref, style } = useParallax(0.3);
```

## 📊 Performance

### Why Intersection Observer?
- ✅ **Native**: Built into browsers
- ✅ **Efficient**: No continuous scroll listeners
- ✅ **Throttled**: Only fires when needed
- ✅ **Passive**: No performance degradation
- ✅ **Supported**: 96%+ browser coverage

### Animation Performance
- Uses `transform` and `opacity` (GPU-accelerated)
- Avoids layout-triggering properties
- Respects 60fps target on all devices
- Optimized for mobile performance

## 📖 Documentation

### Quick Reference
- 📄 [Quick Start Guide](./SCROLL_ANIMATIONS_QUICK_START.md) - 5-minute setup
- 📄 [Comprehensive Guide](./SCROLL_ANIMATIONS_GUIDE.md) - Full documentation with 11 sections
- 📄 [This README](./SCROLL_ANIMATIONS_README.md) - Overview

## 🎨 Demo Landing Page

Full-featured demo with all animations:
- Hero section with parallax
- Split section (merchants vs shoppers)
- 3-step process
- Feature grid
- Sticky steps process
- Stats with counters
- Pricing cards
- Comparison table
- Final CTA

**View**: http://localhost:3000/scroll-animations

## 🛠️ Browser Support

| Browser | Support |
|---------|---------|
| Chrome | ✅ 51+ |
| Firefox | ✅ 55+ |
| Safari | ✅ 12.1+ |
| Edge | ✅ 16+ |
| iOS Safari | ✅ 12.2+ |
| Android | ✅ 5.0+ |

## 💡 Best Practices

1. ✅ Use `Reveal` for single elements
2. ✅ Use `StaggeredReveal` for lists/grids
3. ✅ Keep stagger delays under 120ms
4. ✅ Test with `prefers-reduced-motion`
5. ✅ Use `transform` + `opacity` only
6. ✅ Cleanup observers in useEffect
7. ✅ Provide meaningful delays
8. ✅ Test on mobile devices
9. ✅ Use semantic HTML
10. ✅ Monitor performance with DevTools

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Animation not showing | Check 15% visibility from bottom |
| Jittery animation | Use transform/opacity only |
| Too fast/slow | Adjust `duration` prop |
| No mobile animation | Test on actual device |
| Animation replays | Intentional - only plays once |
| Reduced motion ignored | Check media query in browser |

## 📚 File Reference

```
src/hooks/useScrollReveal.ts
├── useScrollReveal()           → Single element reveals
├── useStaggeredReveal()        → Staggered animations
├── useCountUp()                → Number counters
└── useParallax()               → Parallax effects

src/components/ui/reveal.tsx
├── <Reveal />                  → Single element wrapper
├── <StaggeredReveal />         → Staggered children wrapper
├── <CountUp />                 → Counter display
├── <Parallax />                → Parallax wrapper
└── <ScrollIndicator />         → Scroll hint

src/components/ui/sticky-steps.tsx
├── <StickySteps />             → Sticky step process
└── <ComparisonTable />         → Animated comparison table

src/components/demo-landing.tsx
└── <DemoLanding />             → Full demo page with all animations
```

## 🚀 Getting Started

1. **Install dependencies** (if not already done)
   ```bash
   npm install
   ```

2. **Start dev server**
   ```bash
   npm run dev
   ```

3. **View demo**
   ```
   http://localhost:3000/scroll-animations
   ```

4. **Copy components to your page**
   - Import from `@/components/ui/reveal`
   - Import from `@/hooks/useScrollReveal`

5. **Customize for your needs**
   - Adjust delays, durations, directions
   - Modify stagger timing
   - Combine components as needed

## 📝 License

MIT - Free to use in personal and commercial projects

## 🤝 Contributing

Improvements and bug reports welcome!

## 💬 Support

Questions? Check:
1. [Quick Start Guide](./SCROLL_ANIMATIONS_QUICK_START.md)
2. [Comprehensive Guide](./SCROLL_ANIMATIONS_GUIDE.md)
3. Demo page implementation
4. Component source code

---

**Built with ❤️ for performant, accessible web animations**

**Last Updated**: July 7, 2025
**Version**: 1.0.0
