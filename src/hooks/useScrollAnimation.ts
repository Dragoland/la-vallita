import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationOptions {
  y?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  start?: string;
  ease?: string;
  scale?: number;
}

export function useScrollAnimation(options: ScrollAnimationOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);

  const {
    y = 50,
    duration = 0.8,
    delay = 0,
    stagger = 0,
    start = 'top 80%',
    ease = 'power2.out',
    scale,
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const children = stagger > 0 ? el.children : el;

    const fromVars: gsap.TweenVars = {
      opacity: 0,
      y: y,
    };

    if (scale !== undefined) {
      fromVars.scale = scale;
    }

    const toVars: gsap.TweenVars = {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease,
      stagger: stagger > 0 ? stagger : undefined,
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: 'play none none none',
      },
    };

    if (scale !== undefined) {
      toVars.scale = 1;
    }

    gsap.fromTo(children, fromVars, toVars);

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [y, duration, delay, stagger, start, ease, scale]);

  return ref;
}
