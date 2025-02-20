import { ChevronLeft, ChevronRight } from "lucide-react";

import styles from "./Pagination.module.css";

interface PaginationProps {
  currentPage: number;
  nextPage?: number;
  prevPage?: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ nextPage, prevPage, onPageChange }: PaginationProps) => {
  if (!nextPage && !prevPage) return null;

  return (
    <div className={styles.pagination}>
      <button
        onClick={() => prevPage && onPageChange(prevPage)}
        disabled={!prevPage}
        className={styles.pageButton}
        aria-label="Previous page"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => nextPage && onPageChange(nextPage)}
        disabled={!nextPage}
        className={styles.pageButton}
        aria-label="Next page"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default Pagination;
