import { ColorText, PageParts } from "@/app/constants";
import styles from "./TeamList.module.scss";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { easeOut } from "motion";
import { useMemo, useState } from "react";
import { AnimateText } from "motion-plus/react";

type PersonData = {
  /** The person's name */
  name: string;
  /** Profile picture image path */
  img: string;
  /** Outlink for the person */
  link?: string;
  /** Tag objects to show on their profile */
  tags: TagData[];
  /** Optional role paragraph. May include HTML */
  role?: string;
  /** Optional bio paragraph. May include HTML */
  bio?: string;
};

export interface TeamListProps extends PageParts {
  data: {
    header: string;
    text?: string;
    people: PersonData[];
  };
}

/**
 * TeamList Component, renders some section overview text with a list of team members.
 * Clicking a member opens an overlay with more details.
 *
 * @param {TeamListProps} props - The props for the TeamList component (props.data).
 * @returns {JSX.Element} - The TeamList component.
 */
export default function TeamList(props: TeamListProps) {
  const { header, text, people } = props.data;

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const closePerson = () => setOpenIndex(null);
  const openPerson = (index: number | null) => {
    setOpenIndex(index);
  };

  return (
    <motion.div
      className={styles.wrapper}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: [0.4, 0, 0.2, 1],
      }}
      viewport={{ once: true, amount: "some", margin: "0px 0px -20% 0px" }}
    >
      <div className={styles.container}>
        <div className={styles.label}>
          <h3 className={styles.header}>{ColorText(header, false)}</h3>
          {text && <p className={styles.text}>{ColorText(text)}</p>}
        </div>
        <motion.ul className={styles.cards}>
          {people.map((person, index) => (
            <Person
              key={person.name + index}
              id={person.name + index}
              index={index}
              person={person}
              open={openPerson}
            />
          ))}
        </motion.ul>
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <PersonOverlay
            key={`overlay-${openIndex}-${header}`}
            id={people[openIndex].name + openIndex}
            person={people[openIndex]}
            close={closePerson}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

interface PersonProps {
  index: number;
  id: string;
  person: PersonData;
  open: (index: number) => void;
}

function Person({ index, person, open, id }: PersonProps) {
  const { name, img, tags } = person;

  return (
    <motion.li
      className={styles.cardWrapper}
      onClick={() => open(index)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          open(index);
        } else if (e.key === "Escape") {
          open(null);
        }
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1 + 0.1,
        ease: [0.4, 0, 0.2, 1],
        y: {
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: index * 0.05 + 0.5,
          duration: 0.2,
        },
        scale: {
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: index * 0.1 + 0.7,
          duration: 0.2,
        },
      }}
      viewport={{ once: true, amount: 0.2 }}
      style={{ cursor: "pointer" }}
    >
      <motion.div
        className={styles.card}
        layoutId={`person-card-${id}`}
        initial={{ x: 0, y: 0, boxShadow: "0px 0px 0px var(--accent)" }}
        whileHover={{
          x: 3,
          y: -3,
          boxShadow: "-6px 6px 0px var(--accent)",
        }}
        whileTap={{
          scale: 0.95,
          borderColor: "var(--accent)",
          x: 0,
          y: 0,
          boxShadow: "0px 0px 0px var(--accent)",
        }}
        transition={{ duration: 0.2, ease: easeOut }}
      >
        <motion.div
          className={styles.imageWrapper}
          layoutId={`person-image-wrapper-${id}`}
        >
          <motion.div layoutId={`person-image-${id}`}>
            <Image
              className={styles.image}
              src={img}
              alt={`${name} profile picture`}
              width={200}
              height={200}
              priority={index < 3}
            />
          </motion.div>
        </motion.div>
        <motion.div
          className={styles.titleContainer}
          layoutId={`person-title-container-${id}`}
          layout="position"
        >
          <h4 className={styles.name}>{name}</h4>
          <div className={styles.tags}>
            {tags.map((tag, tagIndex) => (
              <Tag key={tagIndex} tag={tag} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.li>
  );
}

function Tag({ tag, long = false }: { tag: TagData; long?: boolean }) {
  return (
    <motion.span
      className={styles.tag}
      style={{ borderColor: tag.color }}
      title={tag.title}
    >
      <AnimateText>{long ? tag.title : tag.tag}</AnimateText>
    </motion.span>
  );
}

interface PersonOverlayProps {
  person: PersonData;
  id: string;
  close: () => void;
}

function PersonOverlay({ person, close, id }: PersonOverlayProps) {
  const { name, img, tags, role, bio } = person;

  return (
    <>
      <motion.div
        className={styles.overlayBackground}
        onClick={close}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      />

      <div className={styles.overlayContainer} onClick={close}>
        <div className={styles.overlayCardWrapper}>
          <motion.div
            className={styles.overlayCard}
            layoutId={`person-card-${id}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.overlayCardContents}>
              <motion.div
                className={styles.imageWrapper}
                layoutId={`person-image-wrapper-${id}`}
              >
                <motion.div layoutId={`person-image-${id}`}>
                  <Image
                    className={styles.image}
                    src={img}
                    alt={`${name} profile picture`}
                    width={200}
                    height={200}
                  />
                </motion.div>
              </motion.div>
              <motion.div
                className={styles.titleContainer}
                layoutId={`person-title-container-${id}`}
                layout="position"
              >
                <h4 className={styles.name}>{name}</h4>
                <div className={styles.tags}>
                  {tags.map((tag, tagIndex) => (
                    <Tag key={tagIndex} tag={tag} long={true} />
                  ))}
                </div>
              </motion.div>
              <motion.div
                className={styles.overlayDetails}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, duration: 0.3, ease: easeOut }}
              >
                {role && (
                  <p className={styles.role}>{ColorText(role, true, true)}</p>
                )}
                {bio && (
                  <p className={styles.bio}>{ColorText(bio, true, true)}</p>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export type TagData = {
  tag: string;
  color: string;
  title: string;
};
export class TagCollection {
  tags: Record<string, { color: string; title: string }>;
  constructor(...tags: [string, string, string?][]) {
    this.tags = {};
    tags.forEach(([tag, color, title = tag]) => {
      this.tags[tag] = { color, title };
    });
  }
  get(...tags: string[]): TagData[] {
    return tags.map((tag) => {
      if (!this.tags[tag]) {
        console.warn(`Tag "${tag}" not found in collection.`);
        return {
          tag,
          color: "var(--foreground)",
          title: tag,
        };
      }
      return {
        tag,
        ...this.tags[tag],
      };
    });
  }
}
