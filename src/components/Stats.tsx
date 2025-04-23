import { motion } from "motion/react";
import { AnimateNumber } from "motion-plus/react";
import { ColorText } from "@/app/constants";
import { useState } from "react";

type FormatOptions = Omit<Intl.NumberFormatOptions, "notation"> & {
  notation?: Exclude<
    Intl.NumberFormatOptions["notation"],
    "scientific" | "engineering"
  >;
};

export type Stat = {
  /** The stat number and its formatting */
  stat: {
    /** The small text that renders above the number line (use VERY sparingly) */
    first?: string;
    /** Symbols that prefix the number on the AnimateNumber line */
    before?: string;
    /** The number that renders and animates up from 0 on the AnimateNumber line */
    number: number;
    /** Symbols that suffix the number on the AnimateNumber line */
    after?: string;
    /** The formatting options for the number */
    format?: FormatOptions;
  };
  /** The main body text for the stat that renders below the number line. May include HTML */
  text: string;
};

export default function Stats(props: {
  stats: Stat[];
  styles: { readonly [key: string]: string };
}) {
  const { stats, styles } = props;
  const counts = stats.map((entry) => {
    /* eslint-disable-next-line react-hooks/rules-of-hooks */
    const [viewed, setViewed] = useState(false);
    return { number: entry.stat.number, viewed, setViewed };
  });

  return (
    <div className={styles.stats}>
      {stats.map((entry, i) => (
        <motion.div
          key={i}
          className={styles.stat}
          onViewportEnter={() => {
            counts[i].setViewed(true);
          }}
          viewport={{
            once: true,
            // wait for halfway through the viewport
            amount: "some",
            margin: "0px 0px -20% 0px",
          }}
        >
          {entry.stat.first && (
            <p className={`${styles.statFirst} gray`}>
              {ColorText(entry.stat.first)}
            </p>
          )}
          <h3 className={styles.statNumber}>
            <AnimateNumber
              className={styles.number}
              format={{ ...entry.stat.format, numberingSystem: "latn" }}
              prefix={entry.stat.before}
              suffix={entry.stat.after}
              transition={{
                duration: 0.75,
              }}
            >
              {counts[i].viewed ? counts[i].number : 0}
            </AnimateNumber>
          </h3>
          <motion.p
            className={styles.statText}
            initial={{
              opacity: 0.25,
              scale: 0.9,
            }}
            animate={counts[i].viewed ? { opacity: 1, scale: 1 } : {}}
            transition={{
              opacity: {
                delay: 0.1 * (i + 1),
                duration: 0.5,
              },
              scale: {
                type: "easeOut",
                delay: 0.1 * (i + 1),
                duration: 0.5,
              },
            }}
          >
            {ColorText(entry.text, true, true)}
          </motion.p>
        </motion.div>
      ))}
      <style>{`.number-section-pre, .number-section-post {font-size: var(--decor-size); color: var(--foreground); align-items: center;}`}</style>
    </div>
  );
}
