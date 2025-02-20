"use client";

import { useParams } from "next/navigation";

import { Code, GitFork, Loader, Star } from "lucide-react";

import Card from "@src/components/Card";
import MetadataItem from "@src/components/MetadataItem";
import { useGithubUserProjects } from "@src/hooks/useGithubUserProjects";

import styles from "./ProjectsPage.module.css";

const ProjectsPage = () => {
  const { username } = useParams();
  const {
    data: projects,
    isLoading,
    error,
  } = useGithubUserProjects(username as string);

  if (isLoading)
    return (
      <div className={styles.loading}>
        <Loader className={styles.loadingIcon} />
      </div>
    );
  if (error) return <div className={styles.error}>Error loading projects</div>;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>{username}&apos;s Projects</h1>
        <p className={styles.subtitle}>
          Showing {projects?.length} public repositories
        </p>
      </header>

      <div className={styles.grid}>
        {projects?.map((project) => (
          <Card
            key={project.id}
            title={project.name}
            description={project.description || "No description available"}
            link={{
              href: project.htmlUrl,
              label: "View on GitHub →",
            }}
          >
            <MetadataItem
              icon={<Star size={16} />}
              value={project.stargazersCount}
              label="stars"
            />
            <MetadataItem
              icon={<GitFork size={16} />}
              value={project.forksCount}
              label="forks"
            />
            {project.language && (
              <MetadataItem
                icon={<Code size={16} />}
                value={project.language}
                label="language"
              />
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
