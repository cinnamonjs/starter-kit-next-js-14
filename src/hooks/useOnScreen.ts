import { RefObject, useState, useEffect } from "react";

/** UseOnScreen: Listen object element is visible on screen */
export function useOnSrceen(ref: RefObject<HTMLElement>, rootMargin: string = "0px") {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        if (ref.current == null) return
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { rootMargin }
        )
        observer.observe(ref.current);
        return () => {
            if (ref.current == null) return
            observer.unobserve(ref.current)
        }
    }, [ref.current, rootMargin]);

    return isVisible
}