import styles from "@/styles/Vacansy.module.scss";

export default function VacansyAlt() {
  return (
    <section className={styles.vacancyAlt} id="vacansy">
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
                Мастер массажа
              </h3>
              <div className={styles.pills}>
                <span className={styles.pill}>Гибкий график</span>
                <span className={styles.pill}>Премиум-зал</span>
                <span className={styles.pill}>Обучение</span>
              </div>
              <p className={styles.salaryAlt}>от 150 000 ₽</p>
            </header>

            <ul className={styles.features}>
              <li>Премиальные кабинеты; расходники — за счёт салона</li>
              <li>Поток гостей с первого дня и понятные выплаты</li>
              <li>Поддержка администратора на смене и дружная команда</li>
              <li>Стандарты безопасности и уважительное отношение</li>
            </ul>

            <div className={styles.ctaRow}>
              <button
                className={styles.primaryBtn}
                aria-label="Откликнуться на вакансию Мастер массажа"
              >
                Откликнуться
              </button>
              <button className={styles.ghostBtn}>Подробнее</button>
            </div>
          </div>
          <div className={styles.sideMedia} aria-hidden="true">
            <div className={styles.sideGradient} />
          </div>
        </article>

        <article className={styles.cardAlt} aria-labelledby="title-admin">
          <div className={styles.cardGlow} />
          <div className={styles.cardBody}>
            <header className={styles.cardHead}>
              <span className={styles.badge}>Новое открытие</span>
              <h3 id="title-admin" className={styles.titleAlt}>
                Администратор
              </h3>
              <div className={styles.pills}>
                <span className={styles.pill}>Коммуникации</span>
                <span className={styles.pill}>Сервис</span>
                <span className={styles.pill}>Рост</span>
              </div>
              <p className={styles.salaryAlt}>от 90 000 ₽</p>
            </header>

            <ul className={styles.features}>
              <li>Встреча гостей, запись и помощь в выборе программ</li>
              <li>Красивое пространство, дружная команда</li>
              <li>Стабильные смены и прозрачные бонусы за сервис</li>
              <li>Карьерный рост до управляющего</li>
            </ul>

            <div className={styles.ctaRow}>
              <button
                className={styles.primaryBtn}
                aria-label="Откликнуться на вакансию Администратор"
              >
                Откликнуться
              </button>
              <button className={styles.ghostBtn}>Подробнее</button>
            </div>
          </div>
          <div className={styles.sideMedia} aria-hidden="true">
            <div className={styles.sideGradient} />
          </div>
        </article>
      </div>
    </section>
  );
}
