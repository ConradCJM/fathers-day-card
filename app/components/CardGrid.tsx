"use client";
import FlipCard from "./FlipCard";

import { useState } from "react";
import confetti from "canvas-confetti";
const cards = [
  {
    title: "Happy Father’s Day",
    message: "Thanks for being the best Dad and always being there for me! -Love CJ ❤️",
    image: "/photos/dad1.jpg",
  },
  {
    title: "Best Dad Ever",
    message: "You’re the best dad! Not because of what you do, but because of who you are.",
    image: "/photos/dad2.jpg",
  },
  {
    title: "Thank You!",
    message: "Thank you for every moment, every effort, and every bit of love you\’ve given me.",
    image: "/photos/dad3.jpg",
  },
];

export default function CardGrid() {
  const [flipped, setFlipped] = useState<boolean[]>([false, false, false]);

  const handleFlip = (index: number) => {
    const updated = [...flipped];
    updated[index] = true;
    setFlipped(updated);

    //when all 3 cards have been flipped at least once
    if (updated.every(Boolean)) {
      fireConfetti();
    }
  };

  const fireConfetti = () => {
    //upward cannon blast
    confetti({
      particleCount: 80,
      angle: 90, //straight up
      spread: 45,
      startVelocity: 60,
      origin: { x: 0.5, y: 1.2 }, //below screen
    });

    //falling confetti after delay
    setTimeout(() => {
      confetti({
        particleCount: 150,
        spread: 120,
        gravity: 0.9,
        origin: { x: 0.5, y: 0 },
      });
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#DBE2EF] p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {cards.map((card, index) => (
          <FlipCard
            key={index}
            title={card.title}
            message={card.message}
            image={card.image}
            onFlip={() => handleFlip(index)}
          />
        ))}
      </div>
    </div>
  );
}
