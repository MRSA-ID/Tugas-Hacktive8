import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/Blog">blog</Link>
          </li>
          <li>
            <Link href="/user">user</Link>
          </li>
        </ul>
      </header>
      <h1>Welcome Muhammad Ramadhan Sa</h1>;
    </>
  );
}
