import { useState } from "react";

export default function ClickableViewer({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-72">
      <img
        src={images[currentIndex]}
        alt="current"
        onClick={handleClick}
        className="w-full h-full object-cover cursor-pointer transition-all duration-300 hover:shadow-2xl focus:outline-none shadow-md rounded-md"
      />
    </div>
  );
}
