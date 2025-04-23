import { ColorText, PageParts } from "@/app/constants";
import styles from "./TeamList.module.scss";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { easeOut } from "motion";
import { useState } from "react";

type PersonData = {
  name: string;
  img: string;
  link: string;
  tags: TagData[];
  role?: string;
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

  const openPerson = (index: number) => setOpenIndex(index);
  const closePerson = () => setOpenIndex(null);

  return (
    <motion.div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.label}>
          <h3 className={styles.header}>{ColorText(header, false)}</h3>
          {text && <p className={styles.text}>{ColorText(text)}</p>}
        </div>
        <motion.hr
          className={styles.separator}
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "80%", opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
        />
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
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

function Tag({ tag }: { tag: TagData }) {
  return (
    <motion.button
      className={styles.tag}
      style={{ borderColor: tag.color }}
      onClick={(e) => {
        tag.setActive(!tag.active);
        console.log(tag.tag, tag.active);
        e.stopPropagation();
      }}
    >
      {tag.tag}
    </motion.button>
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
                  <Tag key={tagIndex} tag={tag} />
                ))}
              </div>
            </motion.div>
            <motion.div
              className={styles.overlayDetails}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              {role && <p className={styles.role}>{ColorText(role)}</p>}
              {bio && <p className={styles.bio}>{ColorText(bio)}</p>}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export type TagData = {
  tag: string;
  color: string;
  active: boolean;
  setActive: (value: boolean) => void;
};
export class TagCollection {
  tags: Record<string, string>;
  active: Record<string, [boolean, (value: boolean) => void]>;
  constructor(...tags: [string, string][]) {
    this.tags = {};
    this.active = {};
    tags.forEach(([tag, color]) => {
      this.tags[tag] = color;
      this.active[tag] = useState(false);
    });
  }
  get(...tags: string[]): TagData[] {
    return tags.map((tag) => {
      if (!this.tags[tag]) {
        console.warn(`Tag "${tag}" not found in collection.`);
        return {
          tag,
          color: "var(--foreground)",
          setActive: () => {},
          active: false,
        };
      }
      return {
        tag,
        color: this.tags[tag],
        active: this.active[tag][0],
        setActive: this.active[tag][1],
      };
    });
  }
  toggle(tag: string) {
    if (this.tags[tag]) {
      if (!this.active[tag] || Object.values(this.active).some(([v]) => v)) {
        this.active[tag][1](!this.active[tag][0]);
      }
    } else {
      console.warn(`Toggled tag "${tag}" not found in collection.`);
    }
  }
  filtered(): boolean {
    return Object.keys(this.tags).some((tag) => !this.active[tag][0]);
  }
}
