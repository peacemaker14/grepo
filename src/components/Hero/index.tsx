"use client";

import { useState } from "react";

import UserSearch, { User } from "@src/components/UserSearch";

import styles from "./Hero.module.css";

const Hero = () => {
  const [selected, setSelected] = useState<User | null>(null);
  const [query, setQuery] = useState("");

  return (
    <section className={styles.hero}>
      <h1>Discover GitHub Projects</h1>
      <p>
        Search for a username, explore their projects, and read detailed README,
        all in one place.
      </p>
      <UserSearch
        selected={selected}
        onChange={setSelected}
        query={query}
        onQueryChange={setQuery}
      />
    </section>
  );
};

export default Hero;
