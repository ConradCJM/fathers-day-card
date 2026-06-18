"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface FlipCardProps {
  title: string;
  message: string;
  image?: string;
  onFlip?: () => void; //notify parent
}

export default function FlipCard({ title, message, image, onFlip }: FlipCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasFlippedOnce, setHasFlippedOnce] = useState(false);

  const handleFlip = () => {
    //notify parent ONLY the first time this card flips
    if (!hasFlippedOnce && onFlip) {
      onFlip();
      setHasFlippedOnce(true);
    }

    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      className="relative w-80 h-56 cursor-pointer"
      onClick={handleFlip}
      animate={{ rotateY: isOpen ? 180 : 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* FRONT COVER */}
      <div
        className="absolute inset-0 bg-[#F9F7F7] rounded-xl shadow-xl ring-2 ring-[#3F72AF] flex flex-col justify-center items-center text-center p-4"
        style={{ backfaceVisibility: "hidden" }}
      >
        <h1 className="text-2xl font-bold text-[#112D4E]">{title}</h1>
        <p className="text-sm mt-2 text-[#112D4E]">Tap to Flip</p>
      </div>

      {/* INSIDE */}
      <div
        className="absolute inset-0 bg-[#F9F7F7] rounded-xl shadow-xl ring-2 ring-[#3F72AF] flex flex-col justify-center items-center text-center p-4"
        style={{
          backfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
        }}
      >
        {image && (
          <div className="mb-3">
            <Image
              src={image}
              alt="Card image"
              width={140}
              height={140}
              className="rounded-lg shadow"
            />
          </div>
        )}

        <p className="text-sm text-[#112D4E]">{message}</p>
      </div>
    </motion.div>
  );
}
