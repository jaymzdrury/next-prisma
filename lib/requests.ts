import prisma from "./prisma";

export async function getUsers() {
  const users = await prisma.user.findMany({
    select: { name: true, id: true }, // get name and id only
    orderBy: { age: "desc" },
  });
  return users;
}

export async function findManyUsers() {
  const users = await prisma.user.findMany({
    where: { name: { not: "Sally" } },
  });
  return users;
}

export async function findUnqiue() {
  const user = prisma.user.findUnique({
    where: {
      email: "email@email.com",
    },
    select: {
      email: true,
    },
  });
  return user;
}
