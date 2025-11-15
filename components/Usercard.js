import Image from "next/image";
import styles from "./Usercard.module.css";

export default function UserCard({ user }) {
  return (
    <article className={styles.userCard}>
      {/* Async Server Component inside */}
      <Image src={user.image} alt={user.name} className={styles.userCardImage} width={500} height={500} />
      <h3>{user.name}</h3>
      <h3>{user.title}</h3>
    </article>
  );
}