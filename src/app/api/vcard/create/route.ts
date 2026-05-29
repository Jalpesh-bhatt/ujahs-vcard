// src/app/api/vcard/create/route.ts
import { prisma } from "@/lib/prisma"

export async function POST(req: Request) {
  const body = await req.json()

  const vcard = await prisma.vCard.create({
    data: {
      name: body.name,
      designation: body.designation,
      company: body.company,
      phone: body.phone,
      email: body.email,
      website: body.website,
      bio: body.bio,
      userId: body.userId
    }
  })

  return Response.json(vcard)
}