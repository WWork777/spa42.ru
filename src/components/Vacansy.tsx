"use client";
import styles from "@/styles/Vacansy.module.scss";
import Link from "next/link";
import ModalTaxi from "./modalTaxi/modalTaxi";
import { useState } from "react";
export default function VacansyAlt() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <section className={styles.vacancyAlt} id="vacancy">
      <div className={styles.altHeader}>
        <h2 className={styles.text_m2}>Открой «Эдем» вместе с нами</h2>
        <p className={styles.subtitle}>
          Новый премиальный салон в Кемерове: высокий спрос, прозрачные выплаты
          и команда, которая ценит профессионализм.
        </p>
      </div>

      <div className={styles.cardsAlt}>
        <article className={styles.cardAlt} aria-labelledby="title-massage">
          <div className={styles.cardGlow} />
          <div className={styles.cardBody}>
            <header className={styles.cardHead}>
              <span className={styles.badge}>Новое открытие</span>
              <h3 id="title-massage" className={styles.titleAlt}>
                Мастер эротического массажа
              </h3>
              <div className={styles.pills}>
                <span className={styles.pill}>Гибкий график</span>
                <span className={styles.pill}>Премиум-зал</span>
                <span className={styles.pill}>Обучение</span>
                <span className={styles.pill}>Высокий доход</span>
              </div>
              <p className={styles.salaryAlt}>от 150 000 ₽</p>
            </header>

            <div className={styles.features}>
              <ul className={styles.featuresList}>
                <li>Премиальные кабинеты; расходники — за счёт салона</li>
                <li>Поток гостей с первого дня и понятные выплаты</li>
                <li>Поддержка администратора на смене и дружная команда</li>
                <li>Гарантия анонимности и безопасности</li>
              </ul>
            </div>

            <div className={styles.ctaRow}>
              <button className={styles.primaryBtn} onClick={toggleModal}>
                <p>Откликнуться</p>
              </button>
            </div>
          </div>
          <div className={styles.sideMedia} aria-hidden="true">
            <div className={styles.sideGradient} />
          </div>
        </article>
      </div>
      {isModalOpen && <ModalTaxi isOpen={isModalOpen} onClose={toggleModal} />}
    </section>
  );
}
