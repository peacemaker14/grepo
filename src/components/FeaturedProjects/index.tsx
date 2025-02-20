"use client";

import { Loader } from "lucide-react";

import ProjectCard from "@src/components/ProjectCard";
import { useGithubUserProjects } from "@src/hooks/useGithubUserProjects";

import styles from "./FeaturedProjects.module.css";

const FeaturedProjects = () => {
  const { data: projectsData, isLoading } = useGithubUserProjects(
    "peacemaker14",
    1,
    3
  );

  if (isLoading) {
    return (
      <section className={styles.featured}>
        <h2>Featured Projects</h2>
        <div className={styles.loading}>
          <Loader className={styles.loadingIcon} />
        </div>
      </section>
    );
  }

  return (
    <section className={styles.featured}>
      <h2>Featured Projects</h2>
      <div className={styles.projectGrid}>
        {projectsData?.data.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
