"use client";
import Image from "next/image";
import styles from "@styles/Hero.module.css";
import ModalTaxi from "./modalTaxi/modalTaxi";
import { useState } from "react";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <section className={styles.hero} id="home">
      <div className={styles.media}>
        <Image
          className={styles.heder_logo}
          src="/images/3RBQhvFe3NvUSuzQTZz.png"
          alt=""
          fill
          priority
        />
        <div className={styles.vignette} />
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Эротический массаж для девушек в Кемерово
          </h1>
          <p className={styles.subtitle}>
            Приглашаем мастеров для работы в премиальном пространстве.
            <br />
            Создадим идеальные условия для вас и ваших клиентов.
          </p>
          <div className={styles.actions}>
            <a
              className={styles.cta}
              onClick={toggleModal}
              style={{ cursor: "pointer" }}
            >
              Записаться
            </a>
            {isModalOpen && (
              <ModalTaxi isOpen={isModalOpen} onClose={toggleModal} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
