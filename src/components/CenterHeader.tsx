import { PageParts, ColorText } from "@/app/constants";
import { motion } from "motion/react";
import styles from "./CenterHeader.module.scss";

export interface CenterHeaderProps extends PageParts {
  data:
    | {
        header: string;
        text?: string;
      }
    | {
        header?: string;
        text: string;
      };
}

/**
 * TeamList Component, renders some section overview text with a list of team members.
 *
 * @param {CenterHeaderProps} props - The props for the CenterHeader component (props.data).
 * @returns {JSX.Element} - The CenterHeader component.
 */
export default function CenterHeader(props: CenterHeaderProps) {
  const { header, text } = props.data;
  return (
    <motion.div className={styles.wrapper}>
      <div className={styles.container}>
        {header && (
          <h2 className={styles.header}>{ColorText(header, false)}</h2>
        )}
        {text && <p className={styles.text}>{ColorText(text, false)}</p>}
      </div>
    </motion.div>
  );
}
