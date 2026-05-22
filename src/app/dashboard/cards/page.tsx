import { prisma } from "@/lib/prisma";

export default async function CardsPage() {
  const cards = await prisma.card.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        My Cards
      </h1>

      {cards.map((card) => (
        <div
          key={card.id}
          className="border p-4 rounded mb-4"
        >
          <h2>{card.name}</h2>
          <p>{card.company}</p>
        </div>
      ))}
    </div>
  );
}