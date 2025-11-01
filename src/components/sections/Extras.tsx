"use client";

import styles from "@styles/Extras.module.css";
import { useState } from "react";

const renderTitle = (title: string) => {
  if (
    title.includes("<br>") ||
    title.includes("<br/>") ||
    title.includes("<br />")
  ) {
    return <span dangerouslySetInnerHTML={{ __html: title }} />;
  }
  return title;
};

const items = [
  {
    title: "Продление удовольствия",
    description: "+30 минут (3000р)",
  },
  {
    title: "Французский поцелуй",
    description: "1000р",
  },
  {
    title: "Стриптиз шоу",
    description: "5 минут (3000р)",
  },
  {
    title: "Цветок лотоса",
    description: "поцелуи в зоне бикини (3500р)",
  },
  {
    title: "Игрушка для удовольствия",
    description: "2000р",
  },
  {
    title: "Фантастическое удовольствие",
    description: "2000р",
  },
  {
    title: "Игра власти",
    description: "Подчинение и доминирование (2000р)",
  },
  {
    title: "Сауна / джакузи",
    description: "3000р",
  },
  {
    title: "Фелляция",
    description: "5000р",
  },
  {
    title: "Белый дождь",
    description: "2000р",
  },
  {
    title: "Выезд мастера на ваше мероприятие",
    description: "2 часа (20000р)",
  },
  {
    title: "Массаж в 4 руки",
    description: "(2 мастера) - 15000р",
  },
];

const ITEMS_PER_PAGE = 3;

export default function Extras() {
  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
  const [activePage, setActivePage] = useState(1);

  const startIndex = (activePage - 1) * ITEMS_PER_PAGE;
  const currentItems = items.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    if (page === activePage) return;
    setActivePage(page);
  };

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.background}></div>

        <h2 className={styles.text_m1}>Дополнительные Услуги</h2>
        <ul className={styles.list}>
          {currentItems.map((item, index) => (
            <li key={startIndex + index} className={styles.card}>
              <h3 className={styles.cardTitle}>{renderTitle(item.title)}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </li>
          ))}
        </ul>

        <div className={styles.steps}>
          {Array.from({ length: totalPages }, (_, i) => {
            const page = i + 1;
            return (
              <span
                key={page}
                className={`${styles.step} ${
                  page === activePage ? styles.active : ""
                }`}
                onClick={() => handlePageChange(page)}
              >
                {page.toString().padStart(2, "0")}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
