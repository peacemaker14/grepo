import { ReactNode } from "react";

import styles from "./MetadataItem.module.css";

interface MetadataItemProps {
  icon?: ReactNode;
  value: string | number;
  label: string;
}

const MetadataItem = ({ icon, value, label }: MetadataItemProps) => (
  <span className={styles.metadataItem}>
    {icon && <span className={styles.icon}>{icon}</span>}
    <span className={styles.value}>{value}</span>
    <span className={styles.label}>{label}</span>
  </span>
);

export default MetadataItem;
