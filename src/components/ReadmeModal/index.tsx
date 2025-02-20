import ReactMarkdown from "react-markdown";

import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { X } from "lucide-react";
import rehypeRaw from "rehype-raw";

import styles from "./ReadmeModal.module.css";

interface ReadmeModalProps {
  isOpen: boolean;
  onClose: () => void;
  content?: string;
  isLoading?: boolean;
  error: Error | null;
  repoName: string;
}

const ReadmeModal = ({
  isOpen,
  onClose,
  content,
  isLoading,
  error,
  repoName,
}: ReadmeModalProps) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className={styles.modal}>
      <div className={styles.backdrop} />
      <DialogPanel className={styles.panel}>
        <div className={styles.header}>
          <DialogTitle>{repoName} README</DialogTitle>
          <button onClick={onClose} className={styles.closeButton}>
            <X size={20} />
          </button>
        </div>
        <div className={styles.content}>
          {isLoading && <div>Loading README...</div>}
          {error && <div>Failed to load README</div>}
          {content && (
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              components={{
                img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
                  <img
                    {...props}
                    className={styles.markdownImage}
                    alt={props.alt || ""}
                  />
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          )}
        </div>
      </DialogPanel>
    </Dialog>
  );
};

export default ReadmeModal;
