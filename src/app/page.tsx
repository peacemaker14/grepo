import Image from "next/image";

import Card from "@src/components/Card";
import SearchBar from "@src/components/SearchBar";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        {/* TODO: Update the logo */}
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Logo"
          width={120}
          height={25}
          priority
        />
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>Discover GitHub Projects</h1>
          <p>
            Search for a username, explore their projects, and read detailed
            README, all in one place.
          </p>
          <SearchBar />
        </section>

        <section className={styles.featured}>
          <h2>Featured Projects</h2>
          <div className={styles.projectGrid}>
            <Card
              title="Project Name"
              description="Project description goes here"
            />
            <Card
              title="Project Name"
              description="Project description goes here"
            />
            <Card
              title="Project Name"
              description="Project description goes here"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
