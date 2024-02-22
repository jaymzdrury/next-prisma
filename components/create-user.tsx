import { createUser } from "@/actions/actions";

export default function CreateUser() {
  return (
    <form action={createUser}>
      <label htmlFor="name">Name</label>
      <input name="name" type="text" required />
      <label htmlFor="email">Email</label>
      <input name="email" type="email" required />
      <label htmlFor="age">Age</label>
      <input name="age" type="number" min={18} required />
      <input type="submit" />
    </form>
  );
}
