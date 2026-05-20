import { useEffect, useRef } from 'react';
import './ScrollStack.css';

export const ScrollStackItem = ({ children, itemClassName = '' }) => (
    <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

const ScrollStack = ({
    children,
    className = '',
    itemStackDistance = 12,
    baseScale = 0.04,
    topOffset = 0, // offset from top to account for sticky headers above
}) => {
    const wrapperRef = useRef(null);

    useEffect(() => {
        const wrapper = wrapperRef.current;
        if (!wrapper) return;

        const cards = Array.from(wrapper.querySelectorAll(':scope > .scroll-stack-card'));
        if (!cards.length) return;

        cards.forEach((card, i) => {
            card.style.position = 'sticky';
            card.style.top = `${topOffset + itemStackDistance * i}px`;
            card.style.zIndex = i + 1;
            card.style.transformOrigin = 'top center';
        });

        const onScroll = () => {
            cards.forEach((card, i) => {
                let cardsAbove = 0;
                for (let j = i + 1; j < cards.length; j++) {
                    const nextRect = cards[j].getBoundingClientRect();
                    const nextStickyTop = topOffset + itemStackDistance * j;
                    if (nextStickyTop - nextRect.top > 10) cardsAbove++;
                }
                const scale = Math.max(1 - cardsAbove * baseScale, 0.75);
                card.style.transform = `scale(${scale})`;
            });
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, [itemStackDistance, baseScale, topOffset, children]);

    return (
        <div ref={wrapperRef} className={`scroll-stack-scroller ${className}`.trim()}>
            {children}
        </div>
    );
};

export default ScrollStack;