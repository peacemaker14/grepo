import FeaturedProjects from "@src/components/FeaturedProjects";
import Hero from "@src/components/Hero";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <FeaturedProjects />
    </main>
  );
}
