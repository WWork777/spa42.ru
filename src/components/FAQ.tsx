"use client";
import { useState } from "react";
import styles from "@styles/FAQ.module.css";

type Item = { q: string; a: string };
const items: Item[] = [
  {
    q: "Где находится вход?",
    a: "Вход находится в доме по адресу: ул. Марковцева 10 (4 крыльцо со стороны дороги).",
  },
  {
    q: "Как можно выбрать мастера?",
    a: "На сайте в разделе “Мастера”, у нашего администратора в любом мессенджере по номеру телефона: +7 (983) 210-34-33 или вы можете сразу прийти к нам в салон, где мы проводим живой показ, чтобы вы могли определиться с выбором.",
  },
  {
    q: "Возможен ли выезд мастера?",
    a: "Нет, наши мастера работают исключительно в салоне.",
  },
  {
    q: "Можно ли узнать график работы определённого мастера?",
    a: "Позвонить или написать нашему администратору по номеру телефона: +7 (983) 210-34-33 и уточнить всю информацию.",
  },
  {
    q: "Что нужно взять с собой для посещения салона?",
    a: "В салоне есть всё необходимое для комфорта и удобства наших гостей.",
  },
  {
    q: "Какие существуют запреты в общении с мастером?",
    a: "Если гость начнет принуждать мастера массажа к интиму, использовать ненормативную лексику или применять физическую силу, сеанс будет моментально прекращен.",
  },
  {
    q: "Как можно запланировать визит на определённое время?",
    a: "Запись на программу происходит за 15-30 минут. Если Вы желаете провести в нашем салоне мероприятие (День рождения, мальчишник, корпоратив), необходимо связаться с нашим администратором по номеру телефона: +7 (983) 210-34-33, чтобы согласовать дату, время и мастеров.",
  },
];

function Row({ item, index }: { item: Item; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.item}>
      <button
        className={styles.head}
        aria-expanded={open}
        aria-controls={`faq-${index}`}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{item.q}</span>
        <span className={styles.icon} aria-hidden>
          {open ? "×" : "+"}
        </span>
      </button>
      <div id={`faq-${index}`} className={styles.body} data-open={open}>
        <p>{item.a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.container_panel}>
          <h2 className={styles.text_m1}>Вопросы и ответы</h2>
        </div>
        <div className={styles.list}>
          {items.map((it, i) => (
            <Row key={i} item={it} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
