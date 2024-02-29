import prisma from "@/lib/prisma";
import { getUsers } from "@/lib/getUsers";
import CreateUser from "@/components/create-user";

export default async function Home() {
  const users = await getUsers().finally(
    async () => await prisma.$disconnect()
  );

  return (
    <>
      <p>Create</p>
      <CreateUser />
      {users.length
        ? users.map((user) => <p key={user.id}>{user.name}</p>)
        : undefined}
    </>
  );
}
