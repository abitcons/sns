import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

export default function AnimatedCounter({ 
  end, 
  duration = 2,
  prefix = '',
  suffix = ''
}: AnimatedCounterProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [isClient, setIsClient] = useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (inView) {
      animate(count, end, {
        duration,
        ease: "easeOut",
      });
    }
  }, [count, end, inView, duration]);

  // Fallback for non-JS environments
  if (!isClient) {
    return (
      <span className="text-3xl font-bold text-primary">
        {prefix}{end}{suffix}
      </span>
    );
  }

  return (
    <div ref={ref} className="text-3xl font-bold text-primary">
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </div>
  );
}