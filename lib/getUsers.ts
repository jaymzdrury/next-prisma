import prisma from "./prisma";

export async function getUsers() {
  const users = await prisma.user.findMany({
    select: { name: true, id: true }, // get name and id only
    orderBy: { age: "desc" },
  });
  return users;
}
