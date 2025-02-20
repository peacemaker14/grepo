import { Code, GitFork, Star } from "lucide-react";

import Card from "@src/components/Card";
import MetadataItem from "@src/components/MetadataItem";

type ProjectCardProps = {
  id: number;
  name: string;
  description: string;
  htmlUrl: string;
  stargazersCount: number;
  forksCount: number;
  language?: string;
};

const ProjectCard = ({
  name,
  description,
  htmlUrl,
  stargazersCount,
  forksCount,
  language,
}: ProjectCardProps) => (
  <Card
    title={name}
    description={description || "No description available"}
    link={{
      href: htmlUrl,
      label: "View on GitHub →",
    }}
  >
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
    {language && (
      <MetadataItem
        icon={<Code size={16} />}
        value={language}
        label="language"
      />
    )}
  </Card>
);

export default ProjectCard;
