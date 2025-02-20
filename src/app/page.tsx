"use client";

import { useState } from "react";

import Card from "@src/components/Card";
import UserSearch, { User } from "@src/components/UserSearch";

import styles from "./page.module.css";

export default function Home() {
  const [selected, setSelected] = useState<User | null>(null);
  const [query, setQuery] = useState("");

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>Discover GitHub Projects</h1>
        <p>
          Search for a username, explore their projects, and read detailed
          README, all in one place.
        </p>
        <UserSearch
          selected={selected}
          onChange={setSelected}
          query={query}
          onQueryChange={setQuery}
        />
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
  );
}
