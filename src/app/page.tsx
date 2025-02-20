import Image from "next/image";
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
          <div className={styles.searchBar}>
            <input type="text" placeholder="Enter a GitHub username..." />
            <button type="submit">Search</button>
          </div>
        </section>

        <section className={styles.featured}>
          <h2>Featured Projects</h2>
          <div className={styles.projectGrid}>
            {/* TODO: Use data from github API */}
            <div className={styles.projectCard}>
              <h3>Project Name</h3>
              <p>Project description goes here</p>
            </div>
            <div className={styles.projectCard}>
              <h3>Project Name</h3>
              <p>Project description goes here</p>
            </div>
            <div className={styles.projectCard}>
              <h3>Project Name</h3>
              <p>Project description goes here</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
