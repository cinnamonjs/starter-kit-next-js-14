import { RefObject, useEffect } from "react";

/**useClickOutside: use for handle click outside object such as dropdown and button toggle */ 
export function useClickOutside(ref: RefObject<HTMLElement>, except: RefObject<HTMLElement> | null, callback: () => void): void {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        except?.current &&
        !except?.current.contains(event.target as Node)
      ) {
        callback();
        return;
      }
      if (ref.current && !ref.current.contains(event.target as Node) && !except) {
        callback();
        return;
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback, except]);
}
