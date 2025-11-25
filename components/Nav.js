// Client Component - needed for usePathname hook
"use client"; // Mark as client component

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.css";

export default function Nav() {
  // Get current pathname to highlight active link
  const pathname = usePathname();

  return (
    <nav className="flex p-4 bg-gray-800 space-x-10 justify-center">
  <Link href="/" className={`px-5 py-3 rounded-xl
      ${pathname ==='/' ? "bg-[#1a1a1a]":"hover:bg-[#1a1a1a]"}`}>
        Home
      </Link>
      <Link href="/users" className={`px-5 py-3 rounded-xl
      ${pathname ==='/users' ? "bg-[#1a1a1a]" : "hover:bg-[#1a1a1a]"}`}>
        Users
      </Link>
      <Link href="/users/create" className={`px-5 py-3 rounded-xl
      ${pathname ==='/users/create' ? "bg-[#1a1a1a]" : "hover:bg-[#1a1a1a]"}`}>
        New User
      </Link>
      <Link href="/posts" className={`px-5 py-3 rounded-xl
      ${pathname ==='/posts' ? "bg-[#1a1a1a]" : "hover:bg-[#1a1a1a]"}`}>
        Posts
      </Link>
      <Link href="/posts/create" className={`px-5 py-3 rounded-xl
      ${pathname ==='/posts/create' ? "bg-[#1a1a1a]" : "hover:bg-[#1a1a1a]"}`}>
        New Post
      </Link>
    </nav>
  );
}
