import React from "react";
import { cn } from "@/lib/utils";

const GridEffect = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <div
      style={{
        backgroundImage: `
        linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%),
        linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)
      `,
        backgroundSize: "40px 40px",
        WebkitMaskImage:
          "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
        maskImage:
          "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
      }}
      className={cn("absolute inset-0", className)}
      {...props}
    />
  );
};

export default GridEffect;
