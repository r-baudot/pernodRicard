import Image from "next/image";
import { ReactNode } from "react";

interface Bloc2ColumnsProps {
  children: ReactNode;
  imageSrc: string;
  imageAlt?: string;
  backgroundColor?: string;
  textColor?: string;
  maxWidth?: string;
  imagePosition?: "left" | "right";
  firstColumnWidth?: number; // Percentage width for first column (0-100)
  className?: string;
}

export function Bloc2Columns({
  children,
  imageSrc,
  imageAlt = "Image",
  backgroundColor = "#f5f5f5",
  textColor = "#000000",
  maxWidth,
  imagePosition = "right",
  firstColumnWidth = 50,
  className = "",
}: Bloc2ColumnsProps) {
  const secondColumnWidth = 100 - firstColumnWidth;

  return (
    <div
      className={`md:py-12 md:px-4 lg:px-8 ${className}`}
      style={{
        backgroundColor,
      }}
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: maxWidth,
        }}
      >
        <div className="flex flex-col md:flex-row md:gap-8 items-center">
          {/* Image Column - Always first on mobile */}
          <div
            className={`relative w-full aspect-square order-1 ${
              imagePosition === "left" ? "md:order-1" : "md:order-2"
            }`}
            style={{
              width: `${secondColumnWidth}%`,
            }}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover md:rounded-lg"
            />
          </div>

          {/* Text Column - Always second on mobile */}
          <div
            className={`w-full px-4 py-8 md:px-0 md:py-0 order-2 ${
              imagePosition === "left" ? "md:order-2" : "md:order-1"
            }`}
            style={{
              color: textColor,
              width: `${firstColumnWidth}%`,
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
