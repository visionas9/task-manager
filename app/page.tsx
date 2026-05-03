import { redirect } from "next/navigation";
import { formattedDate } from "./lib/utils";

export default function Home() {
  const id = formattedDate();

  return redirect(`/task/${id}`);
}
