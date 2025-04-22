import { ColorText, PageParts } from "@/app/constants";
import styles from "./TeamList.module.scss";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { easeOut } from "motion";
import { useState } from "react";

export interface TeamListProps extends PageParts {
  data: {
    header: string;
    text?: string;
    people: {
      name: string;
      img: string;
      link: string;
      tags: TagData[];
      role?: string;
      bio?: string;
    }[];
  };
}

/**
 * TeamList Component, renders some section overview text with a list of team members.
 *
 * @param {TeamListProps} props - The props for the TeamList component (props.data).
 * @returns {JSX.Element} - The TeamList component.
 */
export default function TeamList(props: TeamListProps) {
  const { header, text, people } = props.data;
  const [openIndex, open] = useState<number | null>(null);
  return (
    <motion.div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.label}>
          <h3 className={styles.header}>{ColorText(header, false)}</h3>
          {text && <p className={styles.text}>{ColorText(text)}</p>}
        </div>
        <motion.hr
          className={styles.separator}
          initial={{
            width: 0,
            opacity: 0,
          }}
          whileInView={{
            width: "80%",
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: [0.4, 0, 0.2, 1],
          }}
          viewport={{ once: true }}
        />
        <motion.div className={styles.cards}>
          {people.map((person, index) => (
            <Person key={index} index={index} person={person} open={open} />
          ))}
        </motion.div>
      </div>
      <AnimatePresence>{openIndex !== null && null}</AnimatePresence>
    </motion.div>
  );
}

function Person(props: {
  index: number;
  person: TeamListProps["data"]["people"][number];
  open: (index: number | null) => void;
}) {
  const { name, img, link, tags, role, bio } = props.person;
  const { index, open } = props;
  return (
    <motion.a
      className={styles.cardWrapper}
      key={index}
      onClick={(e) => {
        open(index);
        e.preventDefault();
      }}
      href={link}
      target="_blank"
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.1 + 0.2,
        ease: [0.4, 0, 0.2, 1],
        y: {
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: index * 0.1 + 0.7,
          duration: 0.2,
        },
      }}
      viewport={{ once: true }}
    >
      <motion.div
        className={styles.card}
        initial={{
          x: 0,
          y: 0,
          boxShadow: "0px 0px 0px var(--accent)",
        }}
        whileHover={{
          x: 3,
          y: -3,
          boxShadow: "-6px 6px 0px var(--accent)",
        }}
        transition={{
          duration: 0.2,
          ease: easeOut,
        }}
      >
        <motion.div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            src={img}
            alt={`${name} profile picture`}
            width={200}
            height={200}
          />
        </motion.div>
        <h4 className={styles.name}>{name}</h4>
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <motion.span
              key={index}
              className={styles.tag}
              style={{
                borderColor: tag.color,
              }}
            >
              {tag.tag}
            </motion.span>
          ))}
        </div>
        {role && <p className={styles.role}>{ColorText(role)}</p>}
        {bio && <p className={styles.bio}>{ColorText(bio)}</p>}
      </motion.div>
    </motion.a>
  );
}

type TagData = {
  tag: string;
  color: string;
};
export class TagCollection {
  tags: Record<string, string>;
  constructor(...tags: [string, string][]) {
    this.tags = {};
    tags.forEach(([tag, color]) => {
      this.tags[tag] = color;
    });
  }
  get(...tags: string[]): TagData[] {
    return tags.map((tag) => {
      return {
        tag,
        color: this.tags[tag],
      };
    });
  }
}
