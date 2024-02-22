"use server";
import prisma from "@/lib/prisma";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

async function withPrisma<T>(
  action: (prisma: PrismaClient["user"]) => Promise<T>
): Promise<T> {
  try {
    return await action(prisma.user);
  } finally {
    revalidatePath("/");
    await prisma.$disconnect();
  }
}

export async function createUser(formData: FormData) {
  if (!formData) return;

  const age = Number(formData.get("age"));

  await withPrisma(async (user) => {
    await user.create({
      data: {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        age: age,
        isLocal: false,
        role: "BASIC",
        preferences: {},
      },
    });
  });
}

export async function updateUser(formData: FormData) {
  if (!formData) return;

  await withPrisma(async (user) => {
    await user.update({
      where: {
        id: Number(formData.get("id")),
      },
      data: {
        name: formData.get("name") as string,
      },
    });
  });
}

export async function deleteUser(id: number) {
  await withPrisma(async (user) => {
    await user.delete({
      where: {
        id: Number(id),
      },
    });
  });
}

export async function deleteAll() {
  await withPrisma(async (user) => {
    await user.deleteMany();
  });
}
