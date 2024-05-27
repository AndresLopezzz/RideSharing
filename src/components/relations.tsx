"use client";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import React, { forwardRef, useRef } from "react";
import { FaceIcon, ImageIcon, SunIcon } from "@radix-ui/react-icons";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

export function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex w-full max-w-[500px] items-center justify-center overflow-hidden rounded-lg  bg-background p-10 md:shadow-x3"
      ref={containerRef}
    >
      <div className="flex h-full w-full flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row justify-between">
          {/* Primer círculo con imagen */}
          <Circle ref={div1Ref}>
            <img src="/imgs/logo_cuc.png" alt="" className="h-45 w-4" />
          </Circle>

          {/* Segundo círculo con imagen */}
          <Circle ref={div2Ref}>
            <img src="/imgs/ExclamationTriange.svg" alt="" />
          </Circle>
        </div>
      </div>

      {/* Componente AnimatedBeam para la animación */}
      <AnimatedBeam
        duration={1} // Duración de la animación en segundos
        containerRef={containerRef} // Referencia al contenedor principal
        fromRef={div1Ref} // Referencia al primer círculo
        toRef={div2Ref} // Referencia al segundo círculo
      />
    </div>
  );
}
