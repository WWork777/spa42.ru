"use client";
import styles from "./commonForm.module.scss";
import { useState } from "react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import axios from "axios";
import "./style.css";

const TELEGRAM_BOT_TOKEN = "8023354314:AAEGy1Jlysq2DgvD6vAtcaN3Y4qzqBFPNB0";
const TELEGRAM_CHAT_ID = "-1002757088472";
const TELEGRAM_SECOND_CHAT_ID = "-4870144150";

export default function CommonForm({ commonFormTitle, commonFormText, text }) {
  const [phone, setPhone] = useState("");
  const [tg, setTg] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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

    // Проверяем, что заполнено хотя бы одно поле
    if (!phone && !tg) {
      setError("Укажите номер телефона или Telegram");
      return;
    }

    // Если указан телефон, проверяем его валидность
    if (phone) {
      const phoneNumberObj = parsePhoneNumberFromString("+" + phone);
      if (!phoneNumberObj || !phoneNumberObj.isValid()) {
        setError("Некорректный номер телефона");
        return;
      }
    }

    try {
      setLoading(true);
      const message = `📞 Новая заявка ${text}(Кемерово):\n\n${
        phone ? `☎️ Телефон: +${phone}\n` : ""
      }${tg ? `💬 Telegram: @${tg.replace("@", "")}` : ""}`;

      // Отправка в первый канал
      const response = await fetch("/api/telegram-proxi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: "-1002757088472",
          text: message,
          parse_mode: "Markdown",
        }),
      });

      // Отправка во второй канал
      const responseSecond = await fetch("/api/telegram-proxi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: "-4870144150",
          text: message,
          parse_mode: "Markdown",
        }),
      });
    } catch (err) {
      console.error("Ошибка при отправке в Telegram:", err);
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
    <section className={styles.commonForm} id="commonForm">
      <h2>{commonFormTitle}</h2>
      <div className={styles.commonFormContainer}>
        <div className={styles.commonFormLeft}>
          <h3>{commonFormText}</h3>
          <form className={styles.commonFormForm} onSubmit={handleSubmit}>
            <PhoneInput
              country={"ru"}
              value={phone}
              onChange={handlePhoneChange}
              disableDropdown={true}
              onlyCountries={["ru"]}
              inputStyle={{
                width: "70%",
                fontSize: "1.2rem",
                padding: "1rem",
                fontFamily: "inherit",
                paddingLeft: "12px",
                borderRadius: "20px",
                height: "56px",
                color: "white",
                backgroundColor: "#312A2A",
                border: "2px solid rgba(255, 217, 54, 0.3)",
              }}
              placeholder="Введите номер телефона"
            />
            <h4>Или</h4>
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
          </form>
        </div>
        <div className={styles.commonFormRight}>
          <img src="/hero/hero.jpg" alt="" />
        </div>
      </div>
    </section>
  );
}
