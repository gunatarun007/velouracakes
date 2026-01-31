import { useEffect, useRef, type RefObject } from 'react';

interface RevealOptions {
    threshold?: number;
    rootMargin?: string;
    delay?: number;
}

export function useReveal(options: RevealOptions = {}) {
    const { threshold = 0.1, rootMargin = '0px 0px -50px 0px' } = options;

    useEffect(() => {
        const elements = document.querySelectorAll('.reveal, .reveal-blur');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const el = entry.target as HTMLElement;
                        const delay = el.dataset.delay ? parseInt(el.dataset.delay) : 0;

                        setTimeout(() => {
                            el.classList.add('visible');
                        }, delay);

                        observer.unobserve(el);
                    }
                });
            },
            { threshold, rootMargin }
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [threshold, rootMargin]);
}

// Component wrapper for reveal animations
interface RevealProps {
    children: React.ReactNode;
    delay?: number;
    blur?: boolean;
    className?: string;
}

export function Reveal({ children, delay = 0, blur = false, className = '' }: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            el.classList.add('visible');
                        }, delay);
                        observer.unobserve(el);
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [delay]);

    const baseClass = blur ? 'reveal-blur' : 'reveal';

    return (
        <div ref={ref} className={`${baseClass} ${className}`
        }>
            {children}
        </div>
    );
}

// Simple parallax hook for hero and large images
export function useParallax(speed: number = 0.3): RefObject<HTMLDivElement | null> {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        let ticking = false;

        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const rect = el.getBoundingClientRect();
                    const windowHeight = window.innerHeight;

                    // Only apply when element is visible
                    if (rect.top < windowHeight && rect.bottom > 0) {
                        const scrolled = (windowHeight - rect.top) * speed * 0.1;
                        el.style.transform = `translateY(${scrolled}px)`;
                    }

                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [speed]);

    return ref;
}
