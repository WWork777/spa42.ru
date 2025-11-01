"use client";
import styles from "@styles/Contacts.module.css";
import { useState } from "react";
import ModalTaxi from "../modalTaxi/modalTaxi";

export default function Contacts() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <section id="contacts" className={styles.container}>
        <div className={styles.content}>
          <h2>Контакты</h2>
          <div className={styles.contacts}>
            <div className={styles.contactsItem}>
              <p className={styles.contactsTitle}>Адрес</p>
              <p className={styles.address}>г. Кемерово, ул. Марковцева</p>
            </div>
            <div className={styles.contactsItem}>
              <p className={styles.contactsTitle}>Телефон</p>
              <p className={styles.address}>+7 (983) 210-34-33</p>
            </div>
            <div className={styles.contactsItem}>
              <p className={styles.contactsTitle}>Мессенджеры</p>
              <div className={styles.icons}>
                <a
                  href="https://api.whatsapp.com/send/?phone=79844480789&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.iconLink}
                >
                  <img src="/svg/wa.svg" alt="WhatsApp" className={styles.wa} />
                </a>
                <a
                  href="https://t.me/an020825"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.iconLink}
                >
                  <img src="/svg/tg.svg" alt="Telegram" className={styles.wa} />
                </a>
              </div>
            </div>
          </div>
          <button className={styles.ctaButton}>
            <span onClick={() => setIsModalOpen(true)}>Записаться</span>
          </button>
        </div>
        <div className={styles.mapContainer}>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Aed8baaf6596d519fa011173d2fbc246d5918d1ca94f79ed101898fe60d774e3a&amp;source=constructor"
            width="500"
            height="400"
            frameBorder="0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Карта расположения салона"
          ></iframe>
        </div>
      </section>
      <ModalTaxi isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
