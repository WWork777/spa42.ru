"use client";
import styles from "./modalTaxi.module.scss";
import { motion } from "framer-motion";
import { useState } from "react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import Link from "next/link";

const TELEGRAM_BOT_TOKEN = "8023354314:AAEGy1Jlysq2DgvD6vAtcaN3Y4qzqBFPNB0";
const TELEGRAM_CHAT_ID = "-1002757088472";
const TELEGRAM_SECOND_CHAT_ID = "-4870144150";

export default function ModalTaxi({ isOpen, onClose }) {
  const [phone, setPhone] = useState("");
  const [tg, setTg] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handlePhoneChange = (value) => {
    setPhone(value);
    if (error) setError("");
  };

  const handleTgChange = (e) => {
    setTg(e.target.value);
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!phone && !tg) {
      setError("Укажите номер телефона или Telegram");
      return;
    }

    if (phone) {
      const phoneNumberObj = parsePhoneNumberFromString("+" + phone);
      if (!phoneNumberObj || !phoneNumberObj.isValid()) {
        setError("Некорректный номер телефона");
        return;
      }
    }

    try {
      setLoading(true);
      setError("");

      const message = `📞 Новая заявка (Эдем):\n\n${
        phone ? `☎️ Телефон: +${phone}\n` : ""
      }${tg ? `💬 Telegram: @${tg.replace("@", "")}` : ""}`;

      console.log("🔄 Отправка заявки:", { phone, tg });

      // Отправка в первый канал
      const response1 = await fetch("/api/telegram-proxi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: "Markdown",
        }),
      });

      const result1 = await response1.json();
      console.log("📤 Результат отправки в канал 1:", result1);

      // Отправка во второй канал
      const response2 = await fetch("/api/telegram-proxi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_SECOND_CHAT_ID,
          text: message,
          parse_mode: "Markdown",
        }),
      });

      const result2 = await response2.json();
      console.log("📤 Результат отправки в канал 2:", result2);

      if (!response1.ok || !response2.ok) {
        throw new Error("Ошибка отправки в один из каналов");
      }

      console.log("✅ Заявка отправлена в оба канала");

      // Сброс формы
      setPhone("");
      setTg("");
      onClose();
    } catch (err) {
      console.error("❌ Ошибка при отправке:", err);
      setError("Ошибка отправки. Попробуйте позже.");
    } finally {
      setLoading(false);
    }
  };

  // Кнопка активна, если заполнено хотя бы одно поле
  // и если указан телефон, то он должен быть валидным
  const isSubmitDisabled =
    loading ||
    (!phone && !tg) ||
    (phone && !parsePhoneNumberFromString("+" + phone)?.isValid());

  return (
    <div className={styles.modalOverlay}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className={styles.modalContent}
      >
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2>Оставьте номер телефона или telegram, и мы вам перезвоним</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.phoneInputContainer}>
            <PhoneInput
              country={"ru"}
              value={phone}
              onChange={handlePhoneChange}
              disableDropdown={true}
              onlyCountries={["ru"]}
              inputStyle={{
                width: "100%",
                fontSize: "20px",
                padding: "10px 20px",
                fontFamily: "inherit",
                paddingLeft: "12px",
              }}
              placeholder="Введите номер телефона"
            />
          </div>
          <p style={{ textAlign: "center" }}>или</p>
          <input
            type="text"
            value={tg}
            onChange={handleTgChange}
            placeholder="Telegram логин"
            className={styles.tgInput}
          />
          {error && <div className={styles.errorMessage}>{error}</div>}
          <button
            type="submit"
            className={styles.submitButton}
            disabled={isSubmitDisabled}
          >
            {loading ? "Отправка..." : "Отправить"}
          </button>
          {/* <div className={styles.links}>
            <Link href={"https://t.me/Ethereumm10"}>
              <img
                src="/svg/contactsLink/tg.svg"
                alt="taxi"
                className={styles.taxiImage}
              />
            </Link>

            <Link href={"https://wa.me/79842103433"}>
              <img
                src="/svg/contactsLink/wa.svg"
                alt="taxi"
                className={styles.taxiImage}
              />
            </Link>

            <Link href={"tel:+7 (983) 210-34-33"}>
              <img
                src="/svg/contactsLink/phone.svg"
                alt="taxi"
                className={styles.taxiImage}
              />
            </Link>
          </div> */}
        </form>
      </motion.div>
    </div>
  );
}
