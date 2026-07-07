import React, { ReactNode } from 'react';
import { useScrollReveal, useStaggeredReveal } from '@/hooks/useScrollReveal';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
  duration?: number;
  threshold?: number;
  className?: string;
}

/**
 * Reveal component - wraps a single element with scroll-based animation
 */
export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  direction = 'up',
  duration = 700,
  threshold = 0.15,
  className = '',
}) => {
  const { ref, style } = useScrollReveal({
    delay,
    direction,
    duration,
    threshold,
  });

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
};

interface StaggeredRevealProps {
  children: React.ReactNode[];
  delay?: number;
  direction?: 'up' | 'left' | 'right';
  duration?: number;
  staggerDelay?: number;
  threshold?: number;
  className?: string;
  childClassName?: string;
}

/**
 * StaggeredReveal component - animates multiple children with stagger effect
 */
export const StaggeredReveal: React.FC<StaggeredRevealProps> = ({
  children,
  delay = 0,
  direction = 'up',
  duration = 700,
  staggerDelay = 100,
  threshold = 0.15,
  className = '',
  childClassName = '',
}) => {
  const { containerRef, isRevealed, getChildStyle } = useStaggeredReveal({
    delay,
    direction,
    duration,
    threshold,
  });

  return (
    <div ref={containerRef} className={className}>
      {React.Children.map(children, (child, index) => (
        <div key={index} style={getChildStyle(index)} className={childClassName}>
          {child}
        </div>
      ))}
    </div>
  );
};

interface CountUpProps {
  target: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  threshold?: number;
  className?: string;
  format?: (value: number) => string;
}

/**
 * CountUp component - animates numbers counting up
 */
import { useCountUp } from '@/hooks/useScrollReveal';

export const CountUp: React.FC<CountUpProps> = ({
  target,
  duration = 1500,
  suffix = '',
  prefix = '',
  threshold = 0.15,
  className = '',
  format,
}) => {
  const { ref, count } = useCountUp(target, duration, threshold);

  const displayValue = format ? format(count) : count.toLocaleString();

  return (
    <div ref={ref} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </div>
  );
};

interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

/**
 * Parallax component - creates depth effect with slower scroll speed
 */
import { useParallax } from '@/hooks/useScrollReveal';

export const Parallax: React.FC<ParallaxProps> = ({
  children,
  speed = 0.3,
  className = '',
}) => {
  const { ref, style } = useParallax(speed);

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
};

/**
 * ScrollIndicator component - bouncing scroll indicator
 */
export const ScrollIndicator: React.FC<{ className?: string }> = ({
  className = '',
}) => {
  return (
    <div
      className={`flex flex-col items-center gap-2 ${className}`}
      style={{
        animation: 'bounce 2s infinite',
      }}
    >
      <span className="text-sm text-gray-400">Scroll</span>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-gray-400"
      >
        <path d="M12 5v14M19 12l-7 7-7-7" />
      </svg>
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </div>
  );
};
