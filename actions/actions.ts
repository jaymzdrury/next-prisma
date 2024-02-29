"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createUser(formData: FormData) {
  if (!formData) return;

  const age = Number(formData.get("age"));

  await prisma.user.create({
    data: {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      age: age,
      isLocal: false,
      role: "BASIC",
      preferences: {},
    },
  });

  revalidatePath("/");
}
