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
  firstColumnWidth?: number; // Percentage width for text column (0-100) - DEPRECATED, use textWidth instead
  textWidth?: number; // Percentage width for text column (0-100)
  imageWidth?: number; // Percentage width for image column (0-100)
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
  firstColumnWidth,
  textWidth,
  imageWidth,
  className = "",
}: Bloc2ColumnsProps) {
  // Calculate widths based on what's provided
  let finalTextWidth = 50;
  let finalImageWidth = 50;

  if (imageWidth !== undefined) {
    finalImageWidth = imageWidth;
    finalTextWidth = 100 - imageWidth;
  } else if (textWidth !== undefined) {
    finalTextWidth = textWidth;
    finalImageWidth = 100 - textWidth;
  } else if (firstColumnWidth !== undefined) {
    // Backward compatibility
    finalTextWidth = firstColumnWidth;
    finalImageWidth = 100 - firstColumnWidth;
  }

  const uniqueId = Math.random().toString(36).substring(7);

  return (
    <div
      className={`md:py-12 ${className}`}
      style={{
        backgroundColor,
      }}
    >
      <div
        className="px-4 lg:px-8 mx-auto"
        style={{
          maxWidth: maxWidth,
        }}
      >
        <style dangerouslySetInnerHTML={{
          __html: `
            @media (min-width: 768px) {
              .bloc2col-image-${uniqueId} {
                width: ${finalImageWidth}% !important;
                max-width: ${finalImageWidth}%;
              }
              .bloc2col-text-${uniqueId} {
                width: ${finalTextWidth}% !important;
                max-width: ${finalTextWidth}%;
              }
            }
          `
        }} />
        <div className="flex flex-col md:flex-row md:gap-8 items-center -mx-4 md:mx-0">
          {/* Image Column - Always first on mobile */}
          <div
            className={`bloc2col-image-${uniqueId} relative w-full aspect-square order-1 ${
              imagePosition === "left" ? "md:order-1" : "md:order-2"
            }`}
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
            className={`bloc2col-text-${uniqueId} w-full px-4 py-8 md:px-0 md:py-0 order-2 ${
              imagePosition === "left" ? "md:order-2" : "md:order-1"
            }`}
            style={{
              color: textColor,
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
