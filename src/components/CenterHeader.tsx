import { PageParts, ColorText } from "@/app/constants";
import { motion } from "motion/react";
import styles from "./CenterHeader.module.scss";

export interface CenterHeaderProps extends PageParts {
  data:
    | {
        /** Header text*/
        header: string;

        /** Optional contents text. May include HTML */
        text?: string;
      }
    | {
        /** Optional header text*/
        header?: string;
        /** Contents text. May include HTML */
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
    <motion.div
      className={styles.wrapper}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      }}
      viewport={{ once: true, amount: "some", margin: "0px 0px -20% 0px" }}
    >
      <div className={styles.container}>
        {header && (
          <h2 className={styles.header}>{ColorText(header, false)}</h2>
        )}
        {text && <p className={styles.text}>{ColorText(text, false, true)}</p>}
      </div>
    </motion.div>
  );
}
