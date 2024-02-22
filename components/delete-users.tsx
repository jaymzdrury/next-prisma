import { deleteAll } from "@/actions/actions";

export default function DeleteUsers() {
  return (
    <form action={deleteAll}>
      <input type="submit" value="Delete All" />
    </form>
  );
}
