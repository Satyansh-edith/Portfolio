# Scroll-Based Reveal Animation System

Complete guide for implementing beautiful, performant scroll animations with Intersection Observer, stagger effects, parallax depth, and accessibility support.

## 📋 Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Components & Hooks](#components--hooks)
3. [Implementation Guide](#implementation-guide)
4. [Performance Optimization](#performance-optimization)
5. [Accessibility](#accessibility)
6. [Examples](#examples)

---

## Architecture Overview

### Key Principles

- **Intersection Observer API**: Uses native browser API instead of scroll listeners (no throttling needed)
- **Prefers Reduced Motion**: Respects user's motion preferences
- **One-Time Animation**: Elements animate only once when entering viewport
- **Stagger Effects**: Child elements cascade in with configurable delays
- **Parallax Depth**: Background elements move slower than scroll speed
- **No External Dependencies**: Pure React, no GSAP or AOS required

### Browser Support

- ✅ Chrome 51+
- ✅ Firefox 55+
- ✅ Safari 12.1+
- ✅ Edge 16+
- ✅ iOS Safari 12.2+

---

## Components & Hooks

### 1. **useScrollReveal** Hook

Custom hook for single-element scroll reveals with Intersection Observer.

```typescript
interface RevealOptions {
  delay?: number;              // Delay before animation (ms)
  direction?: 'up' | 'left' | 'right'; // Direction of entry
  duration?: number;           // Animation duration (ms)
  threshold?: number;          // Visibility threshold (0-1)
  onReveal?: () => void;       // Callback when revealed
}

const { ref, isRevealed, style } = useScrollReveal(options);
```

**Usage:**
```tsx
const { ref, style } = useScrollReveal({
  delay: 100,
  direction: 'up',
  duration: 700,
});

return <div ref={ref} style={style}>Content</div>;
```

---

### 2. **useStaggeredReveal** Hook

Hook for animating multiple children with staggered delays.

```typescript
const { containerRef, isRevealed, getChildStyle } = useStaggeredReveal({
  delay: 0,
  direction: 'up',
  duration: 700,
  staggerDelay: 100,  // 80-120ms between children
  threshold: 0.15,
});
```

**Usage:**
```tsx
const { containerRef, getChildStyle } = useStaggeredReveal();

return (
  <div ref={containerRef}>
    {children.map((child, i) => (
      <div key={i} style={getChildStyle(i)}>
        {child}
      </div>
    ))}
  </div>
);
```

---

### 3. **useCountUp** Hook

Animates numbers counting up from 0 to target value.

```typescript
const { ref, count } = useCountUp(
  target: number,        // Target value
  duration: number,      // Count duration (ms) - default 1500ms
  threshold: number      // Visibility threshold - default 0.15
);
```

**Usage:**
```tsx
const { ref, count } = useCountUp(50000, 2000);

return (
  <div ref={ref}>
    {count.toLocaleString()}+
  </div>
);
```

**With CountUp Component:**
```tsx
<CountUp 
  target={50000}
  suffix="+"
  format={(num) => (num / 1000).toFixed(1) + 'K'}
/>
```

---

### 4. **useParallax** Hook

Creates parallax effect with slower scroll speed.

```typescript
const { ref, style } = useParallax(speed: number);
// speed = 0.3 means background moves at 30% of scroll speed
```

**Usage:**
```tsx
const { ref, style } = useParallax(0.3);

return (
  <div ref={ref} style={style}>
    Background content
  </div>
);
```

---

### 5. **Reveal** Component

Wrapper component for single-element reveals.

```tsx
<Reveal delay={100} direction="up" duration={700}>
  <h1>Your content here</h1>
</Reveal>
```

**Props:**
- `children` - Element to reveal
- `delay` - Delay before animation (ms)
- `direction` - 'up' | 'left' | 'right'
- `duration` - Animation duration (ms)
- `threshold` - Visibility threshold (0-1)
- `className` - CSS class for wrapper

---

### 6. **StaggeredReveal** Component

Animates multiple children with stagger effect.

```tsx
<StaggeredReveal staggerDelay={100}>
  {items.map((item, i) => (
    <div key={i}>{item}</div>
  ))}
</StaggeredReveal>
```

**Props:**
- `children` - Array of ReactNodes
- `staggerDelay` - Delay between each child (ms) - default 100ms
- `direction` - Animation direction
- `duration` - Animation duration
- `childClassName` - Class for each child wrapper

---

### 7. **CountUp** Component

Displays animated counter.

```tsx
<CountUp 
  target={50000}
  duration={1500}
  prefix="$"
  suffix="M+"
  format={(val) => val.toLocaleString()}
/>
```

**Props:**
- `target` - Target number
- `duration` - Count duration (ms)
- `prefix` - Text before number
- `suffix` - Text after number
- `format` - Custom formatting function
- `threshold` - Visibility threshold

---

### 8. **Parallax** Component

Wrapper for parallax effect.

```tsx
<Parallax speed={0.3} className="absolute inset-0">
  <div>Background content</div>
</Parallax>
```

---

### 9. **ScrollIndicator** Component

Bouncing scroll indicator with arrow.

```tsx
<ScrollIndicator className="mt-8" />
```

---

### 10. **StickySteps** Component

Sticky section with step-by-step content reveal.

```tsx
<StickySteps
  steps={[
    {
      number: 1,
      title: 'Step One',
      description: 'Description here',
      content: <CustomContent />,
    },
    // ... more steps
  ]}
/>
```

**Features:**
- Vertical progress line fills as you scroll
- Step number highlights as active
- Content panel transitions between steps
- Sticky positioning on left side

---

### 11. **ComparisonTable** Component

Row-by-row animated comparison table.

```tsx
<ComparisonTable
  rows={[
    { label: 'Feature', feature: '✓', competitor: '✗' },
    // ... more rows
  ]}
  featureLabel="Our Product"
  competitorLabel="Competitor"
/>
```

**Features:**
- Rows animate in on scroll
- Horizontal slide animation
- ✓/✗ icon support
- Configurable column labels

---

## Implementation Guide

### Basic Implementation

1. **Import hooks and components:**
```tsx
import { Reveal, StaggeredReveal, CountUp } from '@/components/ui/reveal';
import { useScrollReveal } from '@/hooks/useScrollReveal';
```

2. **Use Reveal for single elements:**
```tsx
<Reveal delay={100}>
  <h1>Section Title</h1>
</Reveal>
```

3. **Use StaggeredReveal for lists/grids:**
```tsx
<StaggeredReveal staggerDelay={80}>
  {features.map((feature, i) => (
    <FeatureCard key={i} {...feature} />
  ))}
</StaggeredReveal>
```

4. **Add parallax to hero:**
```tsx
<Parallax speed={0.3}>
  <HeroBackground />
</Parallax>
```

---

### Advanced Implementation

#### Custom Reveal with Callback

```tsx
const { ref, isRevealed, style } = useScrollReveal({
  onReveal: () => {
    console.log('Element revealed!');
    // Trigger additional effects
  },
});
```

#### Cascading reveals with delays

```tsx
<Reveal delay={0}><Section1 /></Reveal>
<Reveal delay={200}><Section2 /></Reveal>
<Reveal delay={400}><Section3 /></Reveal>
```

#### Complex grid with stagger

```tsx
<StaggeredReveal
  staggerDelay={100}
  className="grid md:grid-cols-3 gap-8"
  childClassName="rounded-lg p-6"
>
  {cards.map((card) => <Card key={card.id} {...card} />)}
</StaggeredReveal>
```

---

## Performance Optimization

### 1. **Intersection Observer Benefits**

- **Native**: Built into browser, no library overhead
- **Efficient**: No continuous scroll listeners
- **Throttled**: Only fires when needed
- **Lazy**: Only observes what's in DOM

### 2. **Memory Management**

```typescript
useEffect(() => {
  const observer = new IntersectionObserver(callback);
  observer.observe(ref.current);
  
  // Always cleanup
  return () => observer.unobserve(ref.current);
}, []);
```

### 3. **Animation Performance**

- Uses `transform` and `opacity` (GPU-accelerated)
- Avoids animating `left`, `top`, `width`, `height` (causes reflow)
- Cubic-bezier easing for smooth motion

### 4. **Prefers Reduced Motion**

```typescript
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

if (prefersReducedMotion) {
  // Skip animations
  return {};
}
```

---

## Accessibility

### 1. **Prefers Reduced Motion Support**

All animations automatically disable for users with `prefers-reduced-motion: reduce`:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 2. **Semantic HTML**

```tsx
<Reveal>
  <h1>Important Heading</h1>
  <p>Content here</p>
</Reveal>
```

### 3. **ARIA Labels**

```tsx
<div
  role="region"
  aria-label="Animated features section"
>
  <StaggeredReveal>
    {/* content */}
  </StaggeredReveal>
</div>
```

### 4. **Focus Management**

```tsx
<button 
  onFocus={() => {
    // Ensure button is visible
  }}
>
  Click me
</button>
```

---

## Examples

### Hero Section

```tsx
<section className="min-h-screen flex flex-col items-center justify-center">
  <Parallax speed={0.3} className="absolute inset-0">
    <HeroBackground />
  </Parallax>
  
  <div className="relative z-10 text-center space-y-8">
    <Reveal delay={0}>
      <h1 className="text-5xl font-bold">Welcome</h1>
    </Reveal>
    
    <Reveal delay={200}>
      <p className="text-xl text-gray-600">Beautiful animations</p>
    </Reveal>
    
    <div className="mt-16">
      <ScrollIndicator />
    </div>
  </div>
</section>
```

### Feature Grid

```tsx
<section className="py-20">
  <Reveal>
    <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
  </Reveal>
  
  <StaggeredReveal 
    className="grid md:grid-cols-3 gap-8"
    staggerDelay={80}
  >
    {features.map((feature) => (
      <FeatureCard key={feature.id} {...feature} />
    ))}
  </StaggeredReveal>
</section>
```

### Stats Section

```tsx
<section className="py-20">
  <StaggeredReveal className="grid md:grid-cols-4 gap-8 text-center">
    {[
      { label: 'Users', value: 50000 },
      { label: 'Transactions', value: 1000000 },
      { label: 'Revenue', value: 100, prefix: '$', suffix: 'M' },
    ].map((stat) => (
      <div key={stat.label}>
        <div className="text-4xl font-bold">
          <CountUp target={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
        </div>
        <p className="text-gray-600">{stat.label}</p>
      </div>
    ))}
  </StaggeredReveal>
</section>
```

### Pricing Cards

```tsx
<StaggeredReveal
  className="grid md:grid-cols-3 gap-8"
  staggerDelay={120}
>
  {pricingPlans.map((plan) => (
    <PricingCard key={plan.id} {...plan} />
  ))}
</StaggeredReveal>
```

### Comparison Table

```tsx
<section className="py-20">
  <Reveal>
    <h2 className="text-4xl font-bold text-center mb-12">How We Compare</h2>
  </Reveal>
  
  <ComparisonTable
    rows={comparisonData}
    featureLabel="Our Product"
    competitorLabel="Competitor"
  />
</section>
```

---

## Animation Specs

### Default Animation

- **Duration**: 700ms
- **Easing**: `cubic-bezier(0.16, 1, 0.3, 1)` (easeOutExpo)
- **Trigger**: Element 15% visible from viewport bottom
- **Trigger Once**: Doesn't re-animate on scroll back up

### Stagger Animation

- **Duration**: Same as parent (700ms default)
- **Stagger Delay**: 100ms between children (customizable 80-120ms)
- **Cascade Effect**: Sequential entrance

### Parallax

- **Speed**: 0.3 (background moves at 30% of scroll speed)
- **Customizable**: Any speed value

### Counter Animation

- **Duration**: 1500ms (customizable)
- **Easing**: easeOutQuad
- **Format**: Configurable via `format` prop

---

## Troubleshooting

### Animation not triggering

1. Check element visibility: `console.log(isRevealed)`
2. Verify threshold value (should be 0.1-0.2)
3. Check CSS doesn't have `opacity: 0` or `visibility: hidden`

### Animation stuttering

1. Ensure `transform` and `opacity` only (not `left`, `top`)
2. Check for heavy JavaScript during scroll
3. Disable other animations during reveal

### Elements jump on load

1. Add fallback styles:
```css
[data-reveal] {
  opacity: 0;
  transform: translateY(40px);
}
```

2. Or use component's built-in styles

---

## Best Practices

1. ✅ Use `Reveal` for single elements
2. ✅ Use `StaggeredReveal` for lists/grids
3. ✅ Test with `prefers-reduced-motion`
4. ✅ Keep stagger delays under 120ms
5. ✅ Use transform + opacity only for animations
6. ✅ Cleanup observers in useEffect
7. ✅ Provide meaningful delays (don't animate everything at once)
8. ✅ Test on mobile devices
9. ✅ Use semantic HTML
10. ✅ Consider page performance with many animations

---

## Browser DevTools Tips

### Chrome DevTools

1. Open DevTools → Rendering → Paint flashing
2. Scroll to see what repaints
3. Check Performance tab for frame rate

### Accessibility Inspector

1. DevTools → Accessibility tab
2. Check for `aria-labels` and semantic HTML
3. Test with keyboard navigation

### Prefers Reduced Motion

```
DevTools → Rendering → Emulate CSS media feature prefers-reduced-motion
```

---

## Future Enhancements

- [ ] Scroll-linked animations (Scroll Timeline API)
- [ ] Gesture-based reveals (touch interactions)
- [ ] SVG animation support
- [ ] Scroll progress indicators
- [ ] Performance monitoring dashboard

---

## License

MIT - Free to use in personal and commercial projects

---

## Support

For questions or issues:
1. Check this guide first
2. Review component source code
3. Test in CodeSandbox
4. Check browser compatibility

**Created with ❤️ for performant, accessible web animations**
