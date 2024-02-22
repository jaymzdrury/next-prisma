import { deleteUser, updateUser } from "@/actions/actions";

export default function User({ id, name }: { id: number; name: string }) {
  return (
    <div style={{ display: "flex" }}>
      <form action={updateUser}>
        <input
          name="id"
          type="text"
          readOnly
          value={id}
          style={{ display: "none" }}
        />
        <input name="name" type="text" placeholder={name} />
        <input type="submit" value="Update" />
      </form>
      <form action={deleteUser.bind(null, id)}>
        <input type="submit" value="Delete" />
      </form>
    </div>
  );
}
