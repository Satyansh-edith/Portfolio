# Scroll Animations - Quick Start Guide

## 🚀 Getting Started (5 Minutes)

### 1. View the Demo

Open your browser:
```
http://localhost:3000/scroll-animations
```

### 2. Copy Components You Need

All components are in:
- **Hooks**: `src/hooks/useScrollReveal.ts`
- **Components**: `src/components/ui/reveal.tsx`
- **Sticky/Comparison**: `src/components/ui/sticky-steps.tsx`

### 3. Use in Your Page

```tsx
import { Reveal, StaggeredReveal, CountUp } from '@/components/ui/reveal';

export default function MyPage() {
  return (
    <section>
      {/* Single element fade-in */}
      <Reveal>
        <h1>Welcome</h1>
      </Reveal>

      {/* List with stagger effect */}
      <StaggeredReveal>
        {items.map((item) => <Card key={item.id} {...item} />)}
      </StaggeredReveal>

      {/* Animated counter */}
      <CountUp target={50000} suffix="+" />
    </section>
  );
}
```

---

## 📦 Component Cheat Sheet

### Simple Reveal
```tsx
<Reveal delay={0} direction="up">
  Your content
</Reveal>
```

### Staggered Grid
```tsx
<StaggeredReveal staggerDelay={100}>
  {items.map((item, i) => <Item key={i} {...item} />)}
</StaggeredReveal>
```

### Counter
```tsx
<CountUp target={1000000} suffix="+" duration={2000} />
```

### Parallax
```tsx
<Parallax speed={0.3}>
  <Background />
</Parallax>
```

### Sticky Steps
```tsx
<StickySteps steps={[
  { number: 1, title: 'Step 1', description: '...' },
  { number: 2, title: 'Step 2', description: '...' },
]} />
```

### Comparison Table
```tsx
<ComparisonTable rows={[
  { label: 'Feature', feature: '✓', competitor: '✗' },
]} />
```

---

## ⚙️ Props Overview

### Reveal
- `delay` - Delay in ms
- `direction` - 'up', 'left', 'right'
- `duration` - Animation duration in ms
- `threshold` - Visibility threshold (0-1)
- `className` - CSS class

### StaggeredReveal
- `staggerDelay` - Delay between children (default 100ms)
- `childClassName` - Class for each child
- All Reveal props

### CountUp
- `target` - Target number
- `duration` - Count duration in ms
- `prefix` - Text before number
- `suffix` - Text after number
- `format` - Custom formatter function

### Parallax
- `speed` - Scroll multiplier (0-1)

### StickySteps
- `steps` - Array of step objects

---

## 🎨 Common Patterns

### Hero with Parallax
```tsx
<section className="min-h-screen flex items-center">
  <Parallax speed={0.3} className="absolute inset-0">
    <Background />
  </Parallax>
  
  <Reveal className="relative z-10">
    <h1>Your heading</h1>
  </Reveal>
</section>
```

### Feature Grid
```tsx
<StaggeredReveal className="grid md:grid-cols-3 gap-8">
  {features.map((f) => <FeatureCard key={f.id} {...f} />)}
</StaggeredReveal>
```

### Pricing Cards
```tsx
<StaggeredReveal staggerDelay={120}>
  {plans.map((p) => <PricingCard key={p.id} {...p} />)}
</StaggeredReveal>
```

### Stats Section
```tsx
<StaggeredReveal className="grid md:grid-cols-4 gap-8 text-center">
  {stats.map((s) => (
    <div key={s.label}>
      <CountUp target={s.value} />
      <p>{s.label}</p>
    </div>
  ))}
</StaggeredReveal>
```

---

## 🔍 Troubleshooting

| Issue | Solution |
|-------|----------|
| Animation not showing | Check element is 15% visible from bottom |
| Jittery animation | Use `transform` and `opacity` only |
| Too fast/slow | Adjust `duration` prop |
| No animation on mobile | Check CSS breakpoints, test on actual device |
| Animation replays | This is intentional - only plays once on first reveal |

---

## 📊 Animation Specs

```
Fade-in: 0 → 1 opacity
Slide-up: translateY(40px) → 0
Duration: 700ms (configurable)
Easing: cubic-bezier(0.16, 1, 0.3, 1) [easeOutExpo]
Trigger: 15% visible from viewport bottom
Respects: prefers-reduced-motion
```

---

## ♿ Accessibility

All components automatically:
- ✅ Respect `prefers-reduced-motion`
- ✅ Maintain semantic HTML
- ✅ Support keyboard navigation
- ✅ Work without JavaScript (graceful degradation)

---

## 📝 Real-World Examples

### Example 1: Landing Page Hero
```tsx
<section className="min-h-screen">
  <Parallax speed={0.3} className="absolute inset-0 -z-10">
    <PatternBg />
  </Parallax>
  
  <div className="relative z-10 text-center py-20">
    <Reveal>
      <h1 className="text-5xl font-bold">Reveal Animation System</h1>
    </Reveal>
    
    <Reveal delay={200}>
      <p className="text-xl text-gray-600 mt-4">
        Beautiful, performant scroll animations
      </p>
    </Reveal>
    
    <Reveal delay={400}>
      <button className="mt-8 px-8 py-3 bg-blue-600 rounded">
        Get Started
      </button>
    </Reveal>
  </div>
</section>
```

### Example 2: Features Section
```tsx
<section className="py-20">
  <Reveal>
    <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
  </Reveal>
  
  <StaggeredReveal 
    className="grid md:grid-cols-3 gap-8"
    staggerDelay={100}
  >
    {[
      { icon: '⚡', title: 'Fast', desc: 'Lightning quick' },
      { icon: '🎨', title: 'Beautiful', desc: 'Great design' },
      { icon: '📱', title: 'Mobile', desc: 'Works everywhere' },
    ].map((f, i) => (
      <div key={i} className="p-6 rounded-lg bg-gray-100">
        <div className="text-4xl">{f.icon}</div>
        <h3 className="text-xl font-bold mt-3">{f.title}</h3>
        <p className="text-gray-600 mt-2">{f.desc}</p>
      </div>
    ))}
  </StaggeredReveal>
</section>
```

### Example 3: Stats with Counters
```tsx
<section className="py-20 bg-blue-600 text-white">
  <h2 className="text-4xl font-bold text-center mb-12">By The Numbers</h2>
  
  <StaggeredReveal className="grid md:grid-cols-4 gap-8 text-center">
    {[
      { label: 'Users', value: 50000 },
      { label: 'Downloads', value: 500000 },
      { label: 'Rating', value: 48, suffix: '/50' },
      { label: 'Countries', value: 150 },
    ].map((stat) => (
      <div key={stat.label}>
        <div className="text-5xl font-bold">
          <CountUp target={stat.value} suffix={stat.suffix || ''} />
        </div>
        <p className="text-blue-100 mt-2">{stat.label}</p>
      </div>
    ))}
  </StaggeredReveal>
</section>
```

---

## 🧪 Testing Your Animations

### 1. Check Intersection Observer
```tsx
const { ref, isRevealed } = useScrollReveal();
console.log('Is revealed:', isRevealed);
```

### 2. Force Animation
```tsx
// Add this to test without scrolling:
const [isRevealed, setIsRevealed] = useState(true);
```

### 3. Test Reduced Motion
Open DevTools → Rendering → Enable "Emulate CSS media feature prefers-reduced-motion"

### 4. Mobile Testing
Test on actual device to ensure smooth 60fps animations

---

## 🎯 Pro Tips

1. **Stagger delays**: Keep under 120ms for smooth cascade
2. **Element spacing**: Add gap/margin so animations don't feel cramped
3. **Scroll distance**: Longer page = more time for reveals
4. **Mobile**: Test animations are smooth on lower-end devices
5. **Accessibility**: Always provide fallbacks for animations
6. **Performance**: Limit simultaneous animations for smooth 60fps

---

## 📖 Full Documentation

See `SCROLL_ANIMATIONS_GUIDE.md` for comprehensive documentation.

---

## 🔗 Live Demo

View all animations in action:
```
http://localhost:3000/scroll-animations
```

Scroll through the page to see:
- ✅ Fade-in animations
- ✅ Parallax effects
- ✅ Stagger animations
- ✅ Counter animations
- ✅ Sticky steps
- ✅ Comparison table
- ✅ Scroll indicator

---

## 💡 Need Help?

1. Check the demo page implementation
2. Read `SCROLL_ANIMATIONS_GUIDE.md`
3. Review component source code
4. Test in browser DevTools

Happy animating! 🚀
