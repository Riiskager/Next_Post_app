import UserCard from "@/components/Usercard";
import Link from "next/link";
import styles from "../posts/page.module.css";

// Server Component
export default async function Home() {
  const url = `${process.env.NEXT_PUBLIC_FB_DB_URL}/users.json`;
  const response = await fetch(url);
  const dataObject = await response.json();

  const user = Object.keys(dataObject).map(key => ({
    id: key,
    ...dataObject[key]
  })); // Convert object to array
  console.log(user);

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <section className={styles.grid}>
          {user.map(user => (
            <Link href={`/users/${user.id}`} key={user.id}>
              <UserCard user={user} />
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
