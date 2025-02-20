import Card from "@src/components/Card";

import styles from "./FeaturedProjects.module.css";

const FeaturedProjects = () => {
  return (
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
  );
};

export default FeaturedProjects;
