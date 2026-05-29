// src/app/api/auth/register/route.ts
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"

export async function POST(req: Request) {
  const { name, email, password } = await req.json()

  const existing = await prisma.user.findUnique({ where: { email } })
  if (existing) {
    return Response.json({ error: "User exists" }, { status: 400 })
  }

  const hashed = await bcrypt.hash(password, 10)

  const user = await prisma.user.create({
    data: { name, email, password: hashed }
  })

  return Response.json({ user })
}