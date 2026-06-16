import FlipCard from "./FlipCard";

const cards = [
  {
    title: "Happy Father’s Day",
    message: "Thanks for always being there for me.",
  },
  {
    title: "Best Dad Ever",
    message: "You taught me strength, patience, and kindness.",
    image: "/photos/dad1.jpg",
  },
  {
    title: "Thank You",
    message: "For every sacrifice you made that I didn’t see.",
  },
  {
    title: "My Hero",
    message: "You inspire me every day.",
    image: "/photos/dad2.jpg",
  },
];

export default function CardGrid() {
  return (
    <div className="min-h-screen bg-[#DBE2EF] p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {cards.map((card, index) => (
          <FlipCard
            key={index}
            title={card.title}
            message={card.message}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
}
