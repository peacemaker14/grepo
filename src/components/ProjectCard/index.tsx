"use client";

import { useState } from "react";

import { Code, FileText, GitFork, Star } from "lucide-react";

import Card from "@src/components/Card";
import MetadataItem from "@src/components/MetadataItem";
import ReadmeModal from "@src/components/ReadmeModal";
import { useGithubRepoReadme } from "@src/hooks/useGithubRepoReadme";

import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  id: number;
  name: string;
  owner: {
    login: string;
  };
  description: string;
  htmlUrl: string;
  stargazersCount: number;
  forksCount: number;
  language?: string;
};

const ProjectCard = ({
  name,
  owner,
  description,
  htmlUrl,
  stargazersCount,
  forksCount,
  language,
}: ProjectCardProps) => {
  const [isReadmeOpen, setIsReadmeOpen] = useState(false);
  const {
    data: readme,
    isLoading,
    error,
  } = useGithubRepoReadme(owner.login, name, isReadmeOpen);

  return (
    <>
      <Card
        title={name}
        description={description || "No description available"}
        link={{
          href: htmlUrl,
          label: "View on GitHub →",
        }}
        actions={
          <button
            onClick={() => setIsReadmeOpen(true)}
            className={styles.readmeButton}
          >
            <FileText size={16} />
            View README
          </button>
        }
      >
        <div className={styles.metadataContainer}>
          <div className={styles.metadataRow}>
            <MetadataItem
              icon={<Star size={16} />}
              value={stargazersCount}
              label="stars"
            />
            <MetadataItem
              icon={<GitFork size={16} />}
              value={forksCount}
              label="forks"
            />
          </div>
          {language && (
            <MetadataItem
              icon={<Code size={16} />}
              value={language}
              label="language"
            />
          )}
        </div>
      </Card>

      <ReadmeModal
        isOpen={isReadmeOpen}
        onClose={() => setIsReadmeOpen(false)}
        content={readme}
        isLoading={isLoading}
        error={error}
        repoName={name}
      />
    </>
  );
};

export default ProjectCard;
