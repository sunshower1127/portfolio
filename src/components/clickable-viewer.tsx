import clsx from "clsx";
import { useState } from "react";

export default function ClickableViewer({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(-1);

  const handleClick = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-72">
      {currentIndex === -1 && (
        <p className="absolute top-1/2 w-full text-center text-3xl -z-10 text-zinc-600 font-serif">Click!</p>
      )}
      <img
        src={images[currentIndex === -1 ? 0 : currentIndex]}
        alt="current"
        onClick={handleClick}
        className={clsx(
          "w-full h-full object-cover cursor-pointer transition-all duration-300 hover:shadow-2xl focus:outline-none shadow-md rounded-md",
          { "opacity-60 blur-sm": currentIndex === -1 }
        )}
      />
    </div>
  );
}
