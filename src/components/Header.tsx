"use client";

import styles from "@styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.heder_logo}>
        <Image src="/images/logo.svg" alt="Логотип" fill priority />
      </Link>
      <div className={styles.container}>
        <div className={styles.row}>
          <Link href="/" className={styles.heder_logo_mobile}>
            <Image src="/images/logo.svg" alt="Логотип" fill priority />
          </Link>
          <nav className={styles.nav}>
            <Link href="/masters" onClick={closeMenu}>
              Мастера
            </Link>
            <Link href="/programs" onClick={closeMenu}>
              Программы
            </Link>
            <Link href="/about" onClick={closeMenu}>
              О нас
            </Link>
            <Link href="/contacts" onClick={closeMenu}>
              Контакты
            </Link>
          </nav>
          <div className={styles.contacts}>
            <a className={styles.phone} href="tel:+7 (984) 448-07-89">
              +7 (984) 448-07-89
            </a>
            <Link
              href="https://t.me/+79844480789"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.social}
            >
              <Image
                src="/images/telegramm.svg"
                alt="Telegram"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href="https://api.whatsapp.com/send/?phone=79844480789&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.social}
            >
              <Image
                src="/images/whatsapp.svg"
                alt="WhatsApp"
                width={24}
                height={24}
              />
            </Link>
          </div>
          <button
            className={`${styles.mobile_menu_btn} ${
              isMenuOpen ? styles.open : ""
            }`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className={`${styles.mobile_menu} ${styles.open}`}>
          <button
            className={`${styles.mobile_menu_btn} ${styles.open}`}
            onClick={closeMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={styles.mobile_socials}>
            <Link
              href="https://t.me/+79844480789"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.social}
            >
              <Image
                src="/images/telegramm.svg"
                alt="Telegram"
                width={32}
                height={32}
              />
            </Link>
            <Link
              href="https://api.whatsapp.com/send/?phone=79844480789&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.social}
            >
              <Image
                src="/images/whatsapp.svg"
                alt="WhatsApp"
                width={32}
                height={32}
              />
            </Link>
          </div>

          <nav className={styles.nav}>
            <Link href="/masters" onClick={closeMenu}>
              Мастера
            </Link>
            <Link href="/programs" onClick={closeMenu}>
              Программы
            </Link>

            <Link href="/about" onClick={closeMenu}>
              О нас
            </Link>
            <Link href="/contacts" onClick={closeMenu}>
              Контакты
            </Link>
          </nav>

          <div className={styles.contacts}>
            <a className={styles.phone} href="tel:+7 (984) 448-07-89">
              +7 (984) 448-07-89
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
