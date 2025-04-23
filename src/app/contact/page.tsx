"use client";
import { motion } from "motion/react";
import { contact } from "@/app/constants";
import centerStyles from "@/components/CenterHeader.module.scss";
import styles from "./page.module.scss";
export default function ContactPage() {
  return (
    <div className={`${centerStyles.wrapper} ${styles.wrapper}`}>
      <div className={centerStyles.container}>
        <h2 className={centerStyles.header}>Contact Us</h2>
        <p className={centerStyles.text}>
          If you have any questions or feedback, feel free to reach out! Our
          team is always happy to help—use the button below to send us an email!
        </p>
        <motion.a
          href={`mailto:${contact.email}?subject=${encodeURIComponent(
            contact.subject
          )}`}
          target="_blank"
          initial={{
            opacity: 0,
            scaleX: 2,
            scaleY: 0.2,
          }}
          animate={{
            opacity: 1,
            scaleX: 1,
            scaleY: 1,
            x: 0,
            y: 0,
            boxShadow: "0px 0px 0 var(--accent)",
          }}
          whileHover={{
            x: 2,
            y: -2,
            boxShadow: "-4px 6px 0 var(--accent)",
          }}
          whileTap={{
            x: 0,
            y: 0,
            boxShadow: "0px 0px 0 var(--accent)",
            borderColor: "var(--accent)",
            color: "var(--accent)",
            scale: 0.95,
          }}
          transition={{
            duration: 0.15,
            ease: [0.4, 0, 0.2, 1],

            opacity: {
              type: "spring",
              stiffness: 100,
              damping: 20,
              duration: 0.2,
            },
          }}
          className={styles.contact}
        >
          Email the Team
        </motion.a>
      </div>
    </div>
  );
}
