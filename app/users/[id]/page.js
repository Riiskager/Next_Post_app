import UserCard from "@/components/Usercard";
import DeletePostButton from "@/components/DeletePostButton";
import Link from "next/link";
import { redirect } from "next/navigation";
import styles from "./page.module.css";

export default async function UserPage({ params }) {
  const { id } = await params;
  const url = `${process.env.NEXT_PUBLIC_FB_DB_URL}/users/${id}.json`;
  const response = await fetch(url);
  const user = await response.json();
  console.log({user})
  
  // Server Action to handle post deletion
  async function deleteUser() {
    "use server"; // Mark as server action - runs on server only
    const response = await fetch(url, {
      method: "DELETE"
    });
    if (response.ok) {
      redirect("/users");
    }
  }

  return (
    <main className={styles.userPage}>
      <div className={styles.container}>
        <h1>{user.name}</h1>
        <div className={styles.userCard}>
          <UserCard user={user} />
        </div>
        <div className={styles.btns}>
          <DeletePostButton deleteAction={deleteUser} />
          <Link href={`/users/${id}/update`}>
            <button className={styles.btnUpdate}>Update user</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
