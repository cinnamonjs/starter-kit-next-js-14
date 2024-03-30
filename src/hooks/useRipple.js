import { useState } from "react";

const useRipple = () => {
  const [ripple, setRipple] = useState({});

  const handleMouseDown = (e) => {
    const target = e.currentTarget.getBoundingClientRect();
    const xPos = e.clientX - target.left;
    const yPos = e.clientY - target.top;
    const size = Math.max(target.width, target.height);
    const rippleX = xPos - size / 2;
    const rippleY = yPos - size / 2;
    const newRipple = { rippleX, rippleY, size };
    setRipple(newRipple);
  };

  const Ripple = ({ opcacity = 0.4, className, children }) => (
    <div
      className="relative overflow-hidden"
      onMouseDown={handleMouseDown}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
      <span
        className={cn(
          "absolute bg-white rounded-full pointer-events-none",
          className
        )}
        style={{
          width: ripple.size,
          height: ripple.size,
          top: ripple.rippleY,
          left: ripple.rippleX,
          transform: "translate(-50%, -50%)",
          opacity: opcacity,
          animation: "ripple-effect 1s ease-out",
        }}
      ></span>
    </div>
  );

  return { Ripple };
};

export default useRipple;
