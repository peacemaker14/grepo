import { ReactNode } from "react";

import styles from "./Card.module.css";

interface CardProps {
  title: string;
  description: string;
  children?: ReactNode;
  link?: {
    href: string;
    label: string;
  };
  actions?: ReactNode;
}

const Card = ({ title, description, children, link, actions }: CardProps) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {children && <div className={styles.metadata}>{children}</div>}
      <div className={styles.actions}>
        {link && (
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {link.label}
          </a>
        )}
        {actions}
      </div>
    </div>
  );
};

export default Card;
