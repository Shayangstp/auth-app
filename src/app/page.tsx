import { redirect } from "next/navigation";

//main page
export default function Home() {
  redirect("/dashboard");
}
