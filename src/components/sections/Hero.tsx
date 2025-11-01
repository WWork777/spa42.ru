"use client";
import Image from "next/image";
import styles from "@styles/Hero.module.css";
import { useState } from "react";
import { title } from "process";
import { Subtitles } from "lucide-react";
import ModalTaxi from "../modalTaxi/modalTaxi";

interface Props {
  title?: string;
  subTitle?: string;
  fon: string;
}

export default function Hero({ title, subTitle, fon }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <section className={styles.hero} id="home">
        <div className={styles.media}>
          <Image className={styles.heder_logo} src={fon} alt="" fill priority />
          <div className={styles.vignette} />
        </div>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>
              {/* Открываем новый <span className={styles.pink}>салон</span>{" "}
            эротического массажа в Кемерово */}
              {title}
            </h1>
            <p className={styles.subtitle}>
              {/* Большая вечеринка 18+, шоу‑программа, DJ и welcome‑бар. */}
              {subTitle}
            </p>
            <div className={styles.actions}>
              <button
                onClick={() => setIsModalOpen(true)}
                className={styles.cta}
              >
                Записаться
              </button>
            </div>
          </div>
        </div>
      </section>
      <ModalTaxi isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
