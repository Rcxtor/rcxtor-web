
import { useEffect, useRef } from "react";
import "./CustomCursor.css";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!cursor || !dot || !ring) return;

    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    let enabled = finePointer.matches;
    let visible = false;
    let animationFrame;

    const position = {
      targetX: -100,
      targetY: -100,
      ringX: -100,
      ringY: -100,
      initialized: false,
    };

    const enable = () => {
      enabled = finePointer.matches;

      document.documentElement.classList.toggle(
        "custom-cursor-enabled",
        enabled
      );

      if (!enabled) {
        cursor.classList.remove("cursor--visible");
        visible = false;
      }
    };

    const handlePointerMove = (event) => {
      if (!enabled || event.pointerType !== "mouse") return;

      position.targetX = event.clientX;
      position.targetY = event.clientY;

      // Place both elements together on the first movement.
      // Subsequent movements create the trailing effect.
      if (!position.initialized) {
        position.ringX = event.clientX;
        position.ringY = event.clientY;
        position.initialized = true;
      }

      // The white dot follows the pointer immediately.
      dot.style.transform = `translate3d(
        ${position.targetX}px,
        ${position.targetY}px,
        0
      )`;

      if (!visible) {
        visible = true;
        cursor.classList.add("cursor--visible");
      }
    };

    const animate = () => {
      if (enabled && visible && position.initialized) {
        // Lower values produce a longer, smoother trail.
        const easing = reducedMotion.matches ? 1 : 0.06

        position.ringX +=
          (position.targetX - position.ringX) * easing;

        position.ringY +=
          (position.targetY - position.ringY) * easing;

        ring.style.transform = `translate3d(
          ${position.ringX}px,
          ${position.ringY}px,
          0
        )`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    const hideCursor = () => {
      visible = false;
      cursor.classList.remove("cursor--visible");
    };

    const showCursor = () => {
      if (enabled && position.initialized) {
        visible = true;
        cursor.classList.add("cursor--visible");
      }
    };

    enable();
    animate();

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("blur", hideCursor);
    window.addEventListener("focus", showCursor);
    document.addEventListener("mouseleave", hideCursor);
    document.addEventListener("mouseenter", showCursor);
    finePointer.addEventListener("change", enable);

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("blur", hideCursor);
      window.removeEventListener("focus", showCursor);
      document.removeEventListener("mouseleave", hideCursor);
      document.removeEventListener("mouseenter", showCursor);
      finePointer.removeEventListener("change", enable);

      document.documentElement.classList.remove(
        "custom-cursor-enabled"
      );
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      aria-hidden="true"
    >
      <span ref={ringRef} className="cursor-ring" />
      <span ref={dotRef} className="cursor-dot" />
    </div>
  );
}
