"use client";

import { useState } from "react";

import Link from "next/link";
import { useParams } from "next/navigation";

import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Code,
  GitFork,
  Loader,
  Star,
} from "lucide-react";

import Card from "@src/components/Card";
import MetadataItem from "@src/components/MetadataItem";
import { useGithubUserProjects } from "@src/hooks/useGithubUserProjects";

import styles from "./ProjectsPage.module.css";

const ITEMS_PER_PAGE = 9;

const ProjectsPage = () => {
  const { username } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: projectsData,
    isLoading,
    error,
  } = useGithubUserProjects(username as string, currentPage, ITEMS_PER_PAGE);

  if (isLoading)
    return (
      <div className={styles.loading}>
        <Loader className={styles.loadingIcon} />
      </div>
    );
  if (error) return <div className={styles.error}>Error loading projects</div>;

  const { data: projects, totalPages } = projectsData || {
    data: [],
    totalPages: 0,
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/" className={styles.backButton}>
          <ArrowLeft size={16} />
          Back to Homepage
        </Link>
        <div className={styles.headerContent}>
          <h1>{username}&apos;s Projects</h1>
          <p className={styles.subtitle}>
            Showing {projects?.length} public repositories
          </p>
        </div>
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

      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button
            onClick={() => setCurrentPage((p) => p - 1)}
            disabled={currentPage === 1}
            className={styles.pageButton}
            aria-label="Previous page"
          >
            <ChevronLeft size={20} />
          </button>
          <span className={styles.pageInfo}>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => p + 1)}
            disabled={currentPage === totalPages}
            className={styles.pageButton}
            aria-label="Next page"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
