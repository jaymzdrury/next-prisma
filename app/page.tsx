import prisma from "@/lib/prisma";
import { findManyUsers, findUnqiue, getUsers } from "@/lib/requests";
import CreateUser from "@/components/create-user";
import User from "@/components/user";
import DeleteUsers from "@/components/delete-users";

function Title({ children }: { children: React.ReactNode }) {
  return <p style={{ color: "red" }}>{children}</p>;
}

export default async function Home() {
  const [users, user, manyUsers] = await Promise.all([
    getUsers(),
    findUnqiue(),
    findManyUsers(),
  ]).finally(async () => await prisma.$disconnect());

  return (
    <>
      <Title>Create</Title>
      <CreateUser />
      <Title>Find Many</Title>
      {users.length
        ? users.map((user) => (
            <User key={user.id} id={user.id} name={user.name} />
          ))
        : undefined}
      <Title>Find Many Filter</Title>
      {manyUsers.length
        ? manyUsers.map((user) => <p key={user.name}>{user.name}</p>)
        : undefined}
      <Title>Find Unique</Title>
      {user ? <p>{user.email}</p> : undefined}
      <Title>Delete All</Title>
      <DeleteUsers />
    </>
  );
}
