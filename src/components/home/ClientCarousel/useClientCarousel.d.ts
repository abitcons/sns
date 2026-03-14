export default function useClientCarousel(containerRef: React.RefObject<HTMLDivElement>): {
    scrollLeft: () => void;
    scrollRight: () => void;
    canScrollLeft: boolean;
    canScrollRight: boolean;
};
