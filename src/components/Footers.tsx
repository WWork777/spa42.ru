// src/components/Footer.tsx
import styles from "@styles/Footers.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          <div className={styles.logo}>
            <Link href="#home">
              <Image
                src="/images/logo.svg"
                alt="Логотип"
                width={64}
                height={64}
              />
            </Link>
          </div>

          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li>
                <Link href="/masters">Мастера</Link>
              </li>
              <li>
                <Link href="/programs">Программы</Link>
              </li>
              <li>
                <Link href="/about">О нас</Link>
              </li>
              <li>
                <Link href="/contacts">Контакты</Link>
              </li>
            </ul>
          </nav>

          <div className={styles.contact}>
            <a href="tel:+7 (983) 210-34-33" className={styles.phone}>
              +7 (983) 210-34-33
            </a>
            <div className={styles.socialIcons}>
              <Link
                href="https://api.whatsapp.com/send/?phone=79844480789&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/footer/wa.svg"
                  alt="WhatsApp"
                  width={20}
                  height={20}
                />
              </Link>
              <Link
                href="https://t.me/an020825"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/footer/tg.svg"
                  alt="Telegram"
                  width={50}
                  height={50}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.tagsContainer}>
          <div className={styles.tags}>
            <span className={styles.tag}>
              <Image
                src="/images/footers/24.svg"
                alt="Круглосуточно"
                width={16}
                height={16}
              />
              Круглосуточно
            </span>
            <span className={styles.tag}>
              <Image
                src="/images/footers/18.svg"
                alt="Строго 18+"
                width={16}
                height={16}
              />
              Строго 18+
            </span>
            <span className={styles.tag}>
              <Image
                src="/images/footers/NSFW.svg"
                alt="Без интима"
                width={16}
                height={16}
              />
              Без интима
            </span>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © 2025 - Салон не оказывает услуг интимного характера!
          </p>
          <a href="/privacy" className={styles.privacy}>
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
}
