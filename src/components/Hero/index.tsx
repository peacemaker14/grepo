"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import UserSearch, { User } from "@src/components/UserSearch";
import { useDebounce } from "@src/hooks/useDebounce";

import styles from "./Hero.module.css";

const Hero = () => {
  const router = useRouter();
  const [selected, setSelected] = useState<User | null>(null);
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query);

  const handleUserSelect = (user: User | null) => {
    setSelected(user);
    if (user) {
      router.push(`/projects/${user.login}`);
    }
  };

  return (
    <section className={styles.hero}>
      <h1>Discover GitHub Projects</h1>
      <p>
        Search for a username, explore their projects, and read detailed README,
        all in one place.
      </p>
      <UserSearch
        selected={selected}
        onChange={handleUserSelect}
        query={debouncedQuery}
        onQueryChange={setQuery}
      />
    </section>
  );
};

export default Hero;
