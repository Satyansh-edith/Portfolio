'use client';

import React, { ReactNode } from 'react';
import { useScrollReveal, useStaggeredReveal } from '@/hooks/useScrollReveal';

interface AdvancedRevealProps {
  children: ReactNode;
  variant?: 'slide-fade' | 'blur-in' | 'scale-fade' | 'rotate-slide' | 'clip-path' | 'gradient-reveal' | 'glass-morphism' | 'bounce-in';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

/**
 * Advanced Reveal Component with multiple aesthetic animation variants
 */
export const AdvancedReveal: React.FC<AdvancedRevealProps> = ({
  children,
  variant = 'slide-fade',
  delay = 0,
  duration = 700,
  threshold = 0.15,
  className = '',
}) => {
  const { ref, style } = useScrollReveal({
    delay,
    duration,
    threshold,
  });

  const getVariantStyles = (): React.CSSProperties => {
    const baseTransition = `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`;

    switch (variant) {
      case 'blur-in':
        return {
          filter: style.opacity === 1 ? 'blur(0px)' : 'blur(10px)',
          opacity: style.opacity,
          transition: baseTransition,
        };

      case 'scale-fade':
        return {
          transform: style.opacity === 1 ? 'scale(1)' : 'scale(0.8)',
          opacity: style.opacity,
          transition: baseTransition,
        };

      case 'rotate-slide':
        return {
          transform: style.opacity === 1 ? 'translateY(0px) rotateX(0deg)' : 'translateY(40px) rotateX(10deg)',
          opacity: style.opacity,
          perspective: '1000px',
          transition: baseTransition,
        };

      case 'clip-path':
        return {
          clipPath: style.opacity === 1 ? 'inset(0%)' : 'inset(100% 0% 0% 0%)',
          opacity: style.opacity,
          transition: baseTransition,
        };

      case 'gradient-reveal':
        return {
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          opacity: style.opacity,
          transform: style.opacity === 1 ? 'translateY(0px)' : 'translateY(40px)',
          transition: baseTransition,
        };

      case 'glass-morphism':
        return {
          backdropFilter: style.opacity === 1 ? 'blur(0px)' : 'blur(20px)',
          WebkitBackdropFilter: style.opacity === 1 ? 'blur(0px)' : 'blur(20px)',
          opacity: style.opacity,
          transform: style.opacity === 1 ? 'translateY(0px)' : 'translateY(40px)',
          transition: baseTransition,
        };

      case 'bounce-in':
        return {
          transform:
            style.opacity === 1
              ? 'translateY(0px) scale(1)'
              : 'translateY(40px) scale(0.8)',
          opacity: style.opacity,
          transition: `all ${duration}ms cubic-bezier(0.68, -0.55, 0.27, 1.55) ${delay}ms`,
        };

      case 'slide-fade':
      default:
        return {
          opacity: style.opacity,
          transform: style.opacity === 1 ? 'translateY(0px)' : 'translateY(40px)',
          transition: baseTransition,
        };
    }
  };

  return (
    <div ref={ref} style={getVariantStyles()} className={className}>
      {children}
    </div>
  );
};

interface MorphingRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

/**
 * Morphing Reveal - Elements morph and fade in
 */
export const MorphingReveal: React.FC<MorphingRevealProps> = ({
  children,
  delay = 0,
  duration = 800,
  className = '',
}) => {
  const { ref, style } = useScrollReveal({
    delay,
    duration,
    threshold: 0.15,
  });

  return (
    <div
      ref={ref}
      style={{
        opacity: style.opacity,
        transform:
          style.opacity === 1
            ? 'translateY(0px) scale(1)'
            : 'translateY(60px) scale(0.7)',
        filter: style.opacity === 1 ? 'blur(0px)' : 'blur(8px)',
        transition: `all ${duration}ms cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms`,
      }}
      className={className}
    >
      {children}
    </div>
  );
};

/**
 * Text Reveal - Reveals text line by line
 */
export const TextReveal: React.FC<{
  children: string;
  delay?: number;
  duration?: number;
  className?: string;
}> = ({ children, delay = 0, duration = 700, className = '' }) => {
  const { ref, isRevealed } = useScrollReveal({
    delay,
    duration,
    threshold: 0.15,
  });

  const lines = children.split('\n');

  return (
    <div ref={ref} className={className}>
      {lines.map((line, i) => (
        <div
          key={i}
          style={{
            opacity: isRevealed ? 1 : 0,
            transform: isRevealed ? 'translateY(0px)' : 'translateY(20px)',
            transition: `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${
              delay + i * 100
            }ms`,
          }}
        >
          {line}
        </div>
      ))}
    </div>
  );
};

/**
 * Word Reveal - Reveals words one by one
 */
export const WordReveal: React.FC<{
  children: string;
  delay?: number;
  duration?: number;
  className?: string;
}> = ({ children, delay = 0, duration = 600, className = '' }) => {
  const { ref, isRevealed } = useScrollReveal({
    delay,
    duration,
    threshold: 0.15,
  });

  const words = children.split(' ');

  return (
    <div ref={ref} className={`inline-flex flex-wrap gap-2 ${className}`}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            opacity: isRevealed ? 1 : 0,
            transform: isRevealed ? 'translateX(0px)' : 'translateX(-20px)',
            transition: `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${
              delay + i * 50
            }ms`,
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
};

/**
 * Split Text Reveal - Text slides in from both sides
 */
export const SplitTextReveal: React.FC<{
  children: string;
  delay?: number;
  duration?: number;
  className?: string;
}> = ({ children, delay = 0, duration = 800, className = '' }) => {
  const { ref, isRevealed } = useScrollReveal({
    delay,
    duration,
    threshold: 0.15,
  });

  const mid = Math.ceil(children.length / 2);
  const leftText = children.slice(0, mid);
  const rightText = children.slice(mid);

  return (
    <div ref={ref} className={`flex items-center justify-center ${className}`}>
      <div
        style={{
          opacity: isRevealed ? 1 : 0,
          transform: isRevealed ? 'translateX(0px)' : 'translateX(-40px)',
          transition: `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
          textAlign: 'right',
        }}
      >
        {leftText}
      </div>
      <div
        style={{
          opacity: isRevealed ? 1 : 0,
          transform: isRevealed ? 'translateX(0px)' : 'translateX(40px)',
          transition: `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
          textAlign: 'left',
        }}
      >
        {rightText}
      </div>
    </div>
  );
};

/**
 * Char Reveal - Reveals text character by character
 */
export const CharReveal: React.FC<{
  children: string;
  delay?: number;
  duration?: number;
  className?: string;
  staggerDelay?: number;
}> = ({ children, delay = 0, duration = 600, className = '', staggerDelay = 30 }) => {
  const { ref, isRevealed } = useScrollReveal({
    delay,
    duration,
    threshold: 0.15,
  });

  const chars = children.split('');

  return (
    <div ref={ref} className={className}>
      {chars.map((char, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            opacity: isRevealed ? 1 : 0,
            transform: isRevealed ? 'scale(1)' : 'scale(0.5)',
            transition: `all ${duration}ms cubic-bezier(0.34, 1.56, 0.64, 1) ${
              delay + i * staggerDelay
            }ms`,
            transformOrigin: 'center',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
};

interface AdvancedStaggeredRevealProps {
  children: React.ReactNode[];
  variant?: 'cascade' | 'wave' | 'circle' | 'zig-zag' | 'spiral' | 'bounce';
  delay?: number;
  duration?: number;
  staggerDelay?: number;
  threshold?: number;
  className?: string;
  childClassName?: string;
}

/**
 * Advanced Staggered Reveal with multiple animation patterns
 */
export const AdvancedStaggeredReveal: React.FC<AdvancedStaggeredRevealProps> = ({
  children,
  variant = 'cascade',
  delay = 0,
  duration = 700,
  staggerDelay = 100,
  threshold = 0.15,
  className = '',
  childClassName = '',
}) => {
  const { containerRef, isRevealed, getChildStyle } = useStaggeredReveal({
    delay,
    duration,
    threshold,
  });

  const getVariantTransform = (index: number) => {
    const childDelay = delay + index * staggerDelay;

    switch (variant) {
      case 'wave':
        return {
          opacity: isRevealed ? 1 : 0,
          transform: isRevealed
            ? 'translateY(0px) rotateZ(0deg)'
            : `translateY(40px) rotateZ(${-10 + index * 2}deg)`,
          transition: `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${childDelay}ms`,
        };

      case 'circle':
        return {
          opacity: isRevealed ? 1 : 0,
          transform: isRevealed
            ? 'translate(0px, 0px) scale(1)'
            : `translate(${Math.cos((index * Math.PI) / 3) * 40}px, ${
                Math.sin((index * Math.PI) / 3) * 40
              }px) scale(0)`,
          transition: `all ${duration}ms cubic-bezier(0.34, 1.56, 0.64, 1) ${childDelay}ms`,
        };

      case 'zig-zag':
        return {
          opacity: isRevealed ? 1 : 0,
          transform: isRevealed
            ? 'translateX(0px) translateY(0px)'
            : `translateX(${index % 2 === 0 ? -40 : 40}px) translateY(40px)`,
          transition: `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${childDelay}ms`,
        };

      case 'spiral':
        return {
          opacity: isRevealed ? 1 : 0,
          transform: isRevealed
            ? 'translateX(0px) translateY(0px) rotate(0deg)'
            : `translateX(${Math.cos((index * Math.PI) / 4) * 50}px) translateY(${
                Math.sin((index * Math.PI) / 4) * 50
              }px) rotate(${-180}deg)`,
          transition: `all ${duration}ms cubic-bezier(0.34, 1.56, 0.64, 1) ${childDelay}ms`,
        };

      case 'bounce':
        return {
          opacity: isRevealed ? 1 : 0,
          transform: isRevealed ? 'translateY(0px) scale(1)' : 'translateY(60px) scale(0.6)',
          transition: `all ${duration}ms cubic-bezier(0.68, -0.55, 0.27, 1.55) ${childDelay}ms`,
        };

      case 'cascade':
      default:
        return {
          opacity: isRevealed ? 1 : 0,
          transform: isRevealed ? 'translateY(0px)' : 'translateY(40px)',
          transition: `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${childDelay}ms`,
        };
    }
  };

  return (
    <div ref={containerRef} className={className}>
      {React.Children.map(children, (child, index) => (
        <div key={index} style={getVariantTransform(index)} className={childClassName}>
          {child}
        </div>
      ))}
    </div>
  );
};

/**
 * Border Reveal - Draws border as element reveals
 */
export const BorderReveal: React.FC<{
  children: ReactNode;
  borderColor?: string;
  borderWidth?: number;
  delay?: number;
  duration?: number;
  className?: string;
}> = ({
  children,
  borderColor = 'rgba(59, 130, 246, 0.5)',
  borderWidth = 2,
  delay = 0,
  duration = 1000,
  className = '',
}) => {
  const { ref, isRevealed } = useScrollReveal({
    delay,
    duration,
    threshold: 0.15,
  });

  return (
    <div
      ref={ref}
      style={{
        borderTop: `${borderWidth}px solid ${isRevealed ? borderColor : 'transparent'}`,
        borderRight: `${borderWidth}px solid ${isRevealed ? borderColor : 'transparent'}`,
        borderBottom: `${borderWidth}px solid ${isRevealed ? borderColor : 'transparent'}`,
        borderLeft: `${borderWidth}px solid ${isRevealed ? borderColor : 'transparent'}`,
        boxShadow: isRevealed
          ? `inset 0 0 0 ${borderWidth}px ${borderColor}`
          : 'inset 0 0 0 0 transparent',
        transition: `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
      className={className}
    >
      {children}
    </div>
  );
};

/**
 * Shimmer Reveal - Text with shimmer effect
 */
export const ShimmerReveal: React.FC<{
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}> = ({ children, delay = 0, duration = 1500, className = '' }) => {
  const { ref, isRevealed } = useScrollReveal({
    delay,
    duration,
    threshold: 0.15,
  });

  return (
    <div
      ref={ref}
      className={className}
      style={{
        background: isRevealed
          ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)'
          : 'transparent',
        backgroundPosition: isRevealed ? '200% center' : '0% center',
        backgroundSize: '200% 100%',
        animation: isRevealed
          ? `shimmer ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
          : 'none',
      }}
    >
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
      {children}
    </div>
  );
};

/**
 * Gradient Text Reveal - Animated gradient text
 */
export const GradientTextReveal: React.FC<{
  children: string;
  from?: string;
  to?: string;
  delay?: number;
  duration?: number;
  className?: string;
}> = ({
  children,
  from = '#3b82f6',
  to = '#8b5cf6',
  delay = 0,
  duration = 800,
  className = '',
}) => {
  const { ref, isRevealed } = useScrollReveal({
    delay,
    duration,
    threshold: 0.15,
  });

  return (
    <div
      ref={ref}
      style={{
        background: `linear-gradient(90deg, ${from}, ${to})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: isRevealed ? 'transparent' : 'currentColor',
        backgroundClip: 'text',
        opacity: isRevealed ? 1 : 0.3,
        transform: isRevealed ? 'translateY(0px)' : 'translateY(40px)',
        transition: `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
      className={className}
    >
      {children}
    </div>
  );
};

/**
 * Icon Reveal - Icon with rotation and scale
 */
export const IconReveal: React.FC<{
  children: ReactNode;
  delay?: number;
  duration?: number;
  rotation?: number;
  className?: string;
}> = ({ children, delay = 0, duration = 800, rotation = 360, className = '' }) => {
  const { ref, isRevealed } = useScrollReveal({
    delay,
    duration,
    threshold: 0.15,
  });

  return (
    <div
      ref={ref}
      style={{
        opacity: isRevealed ? 1 : 0,
        transform: isRevealed
          ? 'scale(1) rotate(0deg)'
          : `scale(0) rotate(${-rotation}deg)`,
        transition: `all ${duration}ms cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms`,
      }}
      className={className}
    >
      {children}
    </div>
  );
};
