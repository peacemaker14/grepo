"use client";

import { useState } from "react";

import Link from "next/link";
import { useParams } from "next/navigation";

import { ArrowLeft, Loader } from "lucide-react";

import Pagination from "@src/components/Pagination";
import ProjectCard from "@src/components/ProjectCard";
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

  const { data: projects, pagination } = projectsData || {
    data: [],
    pagination: {},
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
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        nextPage={pagination.next}
        prevPage={pagination.prev}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default ProjectsPage;
