import { useEffect, useRef, useState } from 'react';

interface RevealOptions {
  delay?: number;
  direction?: 'up' | 'left' | 'right';
  duration?: number;
  stagger?: boolean;
  threshold?: number;
  onReveal?: () => void;
}

/**
 * Custom hook for scroll-based reveal animations
 * Uses Intersection Observer API for optimal performance
 */
export const useScrollReveal = (options: RevealOptions = {}) => {
  const {
    delay = 0,
    direction = 'up',
    duration = 700,
    stagger = false,
    threshold = 0.15,
    onReveal,
  } = options;

  const ref = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isRevealed) {
          setIsRevealed(true);
          onReveal?.();
          
          // Stop observing after reveal
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -85px 0px', // Trigger when 15% visible from bottom
      }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isRevealed, threshold, onReveal]);

  const getAnimationStyle = () => {
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return {};
    }

    const easing = 'cubic-bezier(0.16, 1, 0.3, 1)'; // easeOutExpo

    let transform = 'translateY(40px)';
    if (direction === 'left') transform = 'translateX(20px)';
    if (direction === 'right') transform = 'translateX(-20px)';

    return {
      opacity: isRevealed ? 1 : 0,
      transform: isRevealed ? 'translate(0, 0)' : transform,
      transition: `all ${duration}ms ${easing} ${delay}ms`,
    };
  };

  return { ref, isRevealed, style: getAnimationStyle() };
};

/**
 * Hook for staggered animations on child elements
 */
export const useStaggeredReveal = (options: RevealOptions = {}) => {
  const {
    delay = 0,
    direction = 'up',
    duration = 700,
    staggerDelay = 100, // Delay between each child (80-120ms)
    threshold = 0.15,
  } = { ...options, staggerDelay: 100 };

  const containerRef = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isRevealed) {
          setIsRevealed(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -85px 0px',
      }
    );

    observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [isRevealed, threshold]);

  const getChildStyle = (index: number) => {
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return {};
    }

    const easing = 'cubic-bezier(0.16, 1, 0.3, 1)';
    const childDelay = delay + index * staggerDelay;

    let transform = 'translateY(40px)';
    if (direction === 'left') transform = 'translateX(20px)';
    if (direction === 'right') transform = 'translateX(-20px)';

    return {
      opacity: isRevealed ? 1 : 0,
      transform: isRevealed ? 'translate(0, 0)' : transform,
      transition: `all ${duration}ms ${easing} ${childDelay}ms`,
    };
  };

  return { containerRef, isRevealed, getChildStyle };
};

/**
 * Hook for animated counters
 */
export const useCountUp = (
  target: number,
  duration: number = 1500,
  threshold: number = 0.15
) => {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!ref.current || isActive) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActive(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -85px 0px',
      }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isActive, threshold]);

  useEffect(() => {
    if (!isActive) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      setCount(target);
      return;
    }

    let animationFrame: number;
    const startTime = Date.now();

    const easeOutQuad = (t: number) => 1 - (1 - t) * (1 - t); // easeOutQuad

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuad(progress);

      setCount(Math.floor(target * eased));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isActive, target, duration]);

  return { ref, count };
};

/**
 * Hook for parallax effect
 */
export const useParallax = (speed: number = 0.3) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setOffset(scrollY * speed);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return {
    ref,
    style: {
      transform: `translateY(${offset}px)`,
    },
  };
};
