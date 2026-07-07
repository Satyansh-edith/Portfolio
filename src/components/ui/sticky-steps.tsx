'use client';

import React, { useState, useEffect, useRef } from 'react';

interface Step {
  number: number;
  title: string;
  description: string;
  content?: React.ReactNode;
}

interface StickyStepsProps {
  steps: Step[];
  className?: string;
}

/**
 * Sticky Steps component - section pins in place while content updates
 * Progress shown via highlighted step number and vertical line fill
 */
export const StickySteps: React.FC<StickyStepsProps> = ({
  steps,
  className = '',
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [progressHeight, setProgressHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const scrollPercentage = Math.max(
        0,
        Math.min(1, 1 - (rect.top - window.innerHeight * 0.5) / (rect.height * 0.5))
      );

      const newStep = Math.min(
        steps.length - 1,
        Math.floor(scrollPercentage * steps.length)
      );

      setActiveStep(newStep);
      setProgressHeight((scrollPercentage * 100) % 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [steps.length]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
        {/* Step Numbers & Progress Line (Sticky) */}
        <div
          className="sticky top-1/4 h-fit"
          style={{
            alignSelf: 'start',
          }}
        >
          <div className="relative">
            {/* Vertical progress line */}
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-gray-200">
              <div
                className="absolute top-0 left-0 right-0 w-full bg-gradient-to-b from-blue-500 to-purple-500 transition-all duration-300"
                style={{ height: `${progressHeight}%` }}
              />
            </div>

            {/* Step indicators */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={step.number} className="relative pl-20">
                  {/* Step number circle */}
                  <div
                    className={`
                      absolute left-0 top-1 w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300
                      ${
                        index <= activeStep
                          ? 'bg-blue-500 text-white scale-100'
                          : 'bg-gray-200 text-gray-600 scale-90'
                      }
                    `}
                  >
                    {step.number}
                  </div>

                  {/* Step title (appears next to number) */}
                  <h3
                    className={`
                      font-semibold text-lg transition-all duration-300
                      ${index <= activeStep ? 'text-gray-900' : 'text-gray-400'}
                    `}
                  >
                    {step.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content Panel */}
        <div className="flex items-center min-h-screen">
          <div className="w-full">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`
                  transition-all duration-500 absolute inset-0
                  ${
                    index === activeStep
                      ? 'opacity-100 translate-x-0'
                      : index < activeStep
                      ? 'opacity-0 -translate-x-full'
                      : 'opacity-0 translate-x-full'
                  }
                `}
              >
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {step.description}
                  </p>
                  {step.content && <div>{step.content}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Comparison table with row-by-row animation
 */
interface ComparisonRow {
  label: string;
  feature: string;
  competitor: string;
}

interface ComparisonTableProps {
  rows: ComparisonRow[];
  featureLabel?: string;
  competitorLabel?: string;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({
  rows,
  featureLabel = 'Our Product',
  competitorLabel = 'Competitor',
}) => {
  const [revealedRows, setRevealedRows] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              (entry.target as HTMLElement).getAttribute('data-row') || '0'
            );
            setRevealedRows((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.5 }
    );

    const rowElements = containerRef.current.querySelectorAll('[data-row]');
    rowElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b-2 border-gray-300">
            <th className="text-left py-4 px-4 font-semibold text-gray-700">
              Feature
            </th>
            <th className="text-center py-4 px-4 font-semibold text-blue-600">
              {featureLabel}
            </th>
            <th className="text-center py-4 px-4 font-semibold text-gray-600">
              {competitorLabel}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={index}
              data-row={index}
              className={`
                border-b border-gray-200 transition-all duration-500
                ${
                  revealedRows.has(index)
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-20'
                }
              `}
            >
              <td className="py-4 px-4 text-gray-800 font-medium">
                {row.label}
              </td>
              <td className="py-4 px-4 text-center">
                {row.feature === '✓' ? (
                  <span className="text-green-600 text-2xl">✓</span>
                ) : (
                  <span className="text-gray-600">{row.feature}</span>
                )}
              </td>
              <td className="py-4 px-4 text-center">
                {row.competitor === '✗' ? (
                  <span className="text-red-600 text-2xl">✗</span>
                ) : (
                  <span className="text-gray-600">{row.competitor}</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
