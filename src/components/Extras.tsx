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
    title: "Дополнительная модель",
    description:
      "(возможность добавить еще одну девушку в сеанс) - стоимость программы",
  },
  {
    title: "Эффект распущенных волос",
    description:
      "(мастер меняет прическу для большей естественности и игривости) - 2000 руб",
  },
  {
    title: "Игрушки для удовольствия",
    description: "(использование специализированных аксессуаров) - 3000 руб",
  },
  {
    title: "Продление удовольствия <br/> (+30 минут)",
    description: "(увеличение продолжительности сеанса) - 3000 руб",
  },
  {
    title: "Золотой дождь",
    description: "(услуга специфического характера) - 5000 руб",
  },
  {
    title: "Иллюзия страсти",
    description: "(имитация интимного контакта без проникновения) - 2000 руб",
  },
  {
    title: "Смена ролей",
    description: "(возможность клиента и мастера поменяться ролями) - 1500 руб",
  },
  {
    title: "Фут-фетиш сеанс",
    description: "(акцент на взаимодействие с ногами) - 2000 руб",
  },
  {
    title: "Игра по сценарию",
    description: "(ролевая игра с заранее оговоренным сценарием) - 2000 руб",
  },
  {
    title: "Игра власти",
    description: "(подчинение или доминирование по желанию клиента) - 3000 руб",
  },
  {
    title: "Танец желания",
    description: "(приватный танец вблизи клиента) - 2000 руб",
  },
  {
    title: "Цветок лотоса",
    description: "Поцелуй в зоне бикини - 3000 руб",
  },
  {
    title: "Финальный релакс",
    description: "(дополнительное завершение сеанса) - 1500 руб",
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
