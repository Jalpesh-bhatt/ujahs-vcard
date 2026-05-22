"use server";

import { prisma } from "@/lib/prisma";

export async function createCard(formData: FormData) {
  const name = formData.get("name") as string;

  const card = await prisma.card.create({
    data: {
      name,
      designation: formData.get("designation") as string,
      company: formData.get("company") as string,
      mobile: formData.get("mobile") as string,
      email: formData.get("email") as string,
      whatsapp: formData.get("whatsapp") as string,
      website: formData.get("website") as string,
      bio: formData.get("bio") as string,
      slug: name.toLowerCase().replace(/\s+/g, "-"),
    },
  });

  return card;
}