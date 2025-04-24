import React, { useState } from "react";
import { motion } from "motion/react"; //
import styles from "./FileList.module.scss";
import { ColorText, PageParts } from "@/app/constants";
import { easeOut } from "motion";
import Image from "next/image";

interface FileItem {
  path: string;
  title: string;
  description: string;
}

export interface FileListProps extends PageParts {
  data: {
    files: FileItem[];
  };
}

/**
 * A component that displays a list of files as animated, clickable cards.
 * Each card shows a thumbnail and description, linking to a PDF file.
 *
 * @param {FileListProps} props - The props for the FileList component (props.data).
 * @returns {JSX.Element} - The FileList component.
 */
export default function FileList(props: FileListProps) {
  const { files } = props.data;
  return (
    <motion.div
      className={styles.wrapper}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      viewport={{ once: true, amount: "some", margin: "0px 0px -20px 0px" }}
    >
      <motion.div className={styles.container}>
        {files.map((file, index) => (
          <FileCard key={file.path} file={file} index={index} />
        ))}
      </motion.div>
    </motion.div>
  );
}

interface FileCardProps {
  file: FileItem;
  index: number;
}

function FileCard({ file, index }: FileCardProps) {
  const pdfPath = `${file.path}.pdf`;
  const thumbnailPath = `${file.path}.jpg`;
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.a
      href={pdfPath}
      target="_blank"
      download={`${file.title}.pdf`}
      rel="noopener noreferrer"
      className={styles.cardWrapper}
      aria-label={`Open file: ${file.description}`}
      animate="initial"
      whileInView={loaded ? "animate" : "initial"}
      variants={{
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.4, 0, 0.2, 1],
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className={styles.card}
        initial={{ x: 0, y: 0, boxShadow: "0px 0px 0px var(--accent)" }}
        whileHover={{
          x: 3,
          y: -3,
          boxShadow: "-6px 6px 0px var(--accent)",
        }}
        whileTap={{
          scale: 0.975,
          borderColor: "var(--accent)",
          x: 0,
          y: 0,
          boxShadow: "0px 0px 0px var(--accent)",
        }}
        transition={{ duration: 0.2, ease: easeOut }}
      >
        <motion.div
          className={styles.cardThumbnailWrapper}
          animate={loaded ? "animate" : "initial"}
          variants={{
            initial: { opacity: 0, scale: 0.9 },
            animate: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src={thumbnailPath}
            onLoad={() => setLoaded(true)}
            alt={`Thumbnail for "${file.title}"`}
            className={styles.cardThumbnail}
            width={200}
            height={260}
          />
        </motion.div>
        <div className={styles.cardText}>
          <h2 className={styles.cardTitle}>{ColorText(file.title, false)}</h2>
          <p className={styles.cardDescription}>
            {ColorText(file.description, true, true)}
          </p>
        </div>
      </motion.div>
    </motion.a>
  );
}
