// Client Component - needed for useState to manage image preview
"use client"; // Mark as client component

import Image from "next/image";
import { useState } from "react";
import styles from "./FormUser.module.css";

export default function FormUser({ action, user }) {
  // Local state for image preview
  const [image, setImage] = useState(user?.image);

  return (
    // Form uses Server Action passed as prop
    <form action={action} className={styles.formPost}>
      <label htmlFor="name">Name</label>
      <input
        id="caption"
        name="name"
        type="text"
        aria-label="caption"
        placeholder="Write a caption..."
        defaultValue={user?.name}
      />
      <label htmlFor="title">title</label>
      <input
        id="caption"
        name="title"
        type="text"
        aria-label="caption"
        placeholder="Write a caption..."
        defaultValue={user?.title}
      />
      <label htmlFor="image">Image</label>
      <input
        type="url"
        name="image"
        id="image"
        defaultValue={user?.image}
        aria-label="image"
        placeholder="Paste an image URL"
        onChange={event => setImage(event.target.value)}
      />
      <label htmlFor="image-preview"></label>
      {/* Live image preview */}
      <Image
        id="image-preview"
        className={styles.imagePreview}
        src={image ? image : "https://placehold.co/600x400.webp?text=Paste+image+URL"}
        width={600}
        height={400}
        alt={user?.caption || "Image preview"}
      />
      <div className={styles.btns}>
        <button>{user?.caption ? "Update" : "Create"}</button>
      </div>
    </form>
  );
}
