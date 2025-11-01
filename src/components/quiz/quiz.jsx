"use client";
import { useState, useEffect } from "react";
import styles from "./quiz.module.scss";
import Image from "next/image";

export default function Quiz() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    experience: "",
    schedule: "",
    age: "",
    hours: 8,
    income: 8000,
    name: "",
    telegram: "@",
  });
  const [isAnimating, setIsAnimating] = useState(false);

  const questions = [
    {
      title: "На какой доход рассчитываешь?",
      type: "income",
      name: "hours",
      label: "Сколько часов в неделю готов работать?",
      placeholder: "Часы в неделю",
    },
    {
      title: "Есть ли опыт в эротическом массаже?",
      type: "radio",
      name: "experience",
      options: [
        {
          value: "Да, есть опыт работы",
          label: "Да, есть опыт работы",
        },
        {
          value: "Нет, но есть массажные навыки",
          label: "Нет, но есть массажные навыки",
        },
        {
          value: "Нет опыта, но хочу научиться",
          label: "Нет опыта, но хочу научиться",
        },
      ],
    },
    {
      title: "Какой график работы предпочтительнее?",
      type: "radio",
      name: "schedule",
      options: [
        { value: "Полный рабочий день", label: "Полный рабочий день" },
        { value: "Гибкий график", label: "Гибкий график" },
        { value: "Выходные дни", label: "Выходные дни" },
      ],
    },
    {
      title: "Сколько вам лет?",
      type: "age",
      name: "age",
      options: [
        { value: "18-25", label: "18-25 лет" },
        { value: "26-35", label: "26-35 лет" },
        { value: "36+", label: "36 лет и старше" },
      ],
    },
  ];

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setStep((prev) => prev + 1);
      setIsAnimating(false);
    }, 300);
  };

  const handleBack = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setStep((prev) => prev - 1);
      setIsAnimating(false);
    }, 300);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "hours" ? +value : value,
      income: name === "hours" ? +value * 1000 : prev.income,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsAnimating(true);

    try {
      await fetch("/api/sendQuiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (typeof ym !== "undefined") {
        ym(99528524, "reachGoal", "Quiz");
      }

      setTimeout(() => {
        setStep(questions.length + 2);
        setIsAnimating(false);
      }, 300);
    } catch (error) {
      console.error("Ошибка при отправке:", error);
      setIsAnimating(false);
    }
  };

  const renderQuestion = () => {
    const question = questions[step - 1];

    return (
      <div
        className={`${styles.question} ${
          isAnimating ? styles.fadeOut : styles.fadeIn
        }`}
      >
        <div className={styles.progress}>
          <div
            className={styles.progressBar}
            style={{ width: `${(step / (questions.length + 1)) * 100}%` }}
          ></div>
          <span>
            Шаг {step} из {questions.length + 1}
          </span>
        </div>

        <h2>{question.title}</h2>

        {question.type === "radio" && (
          <div className={styles.options}>
            {question.options.map((option, index) => (
              <label
                key={index}
                className={`${styles.option} ${
                  formData[question.name] === option.value ? styles.active : ""
                }`}
              >
                <input
                  type="radio"
                  name={question.name}
                  value={option.value}
                  checked={formData[question.name] === option.value}
                  onChange={handleChange}
                />
                {option.label}
              </label>
            ))}
          </div>
        )}

        {question.type === "age" && (
          <div className={styles.options}>
            {question.options.map((option, index) => (
              <label
                key={index}
                className={`${styles.option} ${
                  formData[question.name] === option.value ? styles.active : ""
                }`}
              >
                <input
                  type="radio"
                  name={question.name}
                  value={option.value}
                  checked={formData[question.name] === option.value}
                  onChange={handleChange}
                />
                {option.label}
              </label>
            ))}
          </div>
        )}

        {question.type === "income" && (
          <>
            <label>{question.label}</label>
            <div className={styles.rangeContainer}>
              <input
                type="range"
                name={question.name}
                min="0"
                max="40"
                value={formData[question.name]}
                onChange={handleChange}
                className={styles.rangeInput}
              />
              <div className={styles.rangeValues}>
                <span>0</span>
                <span className={styles.selectedValue}>
                  {formData.hours} часов
                </span>
                <span>40</span>
              </div>
            </div>
            <div className={styles.incomePreview}>
              Примерный доход: <span>{formData.hours * 1000} ₽</span> в неделю
            </div>
          </>
        )}

        <div className={styles.navigation}>
          <button
            onClick={handleBack}
            className={styles.backButton}
            disabled={step === 1}
          >
            Назад
          </button>
          <button
            onClick={handleNext}
            className={styles.nextButton}
            disabled={
              (step === 1 && formData.hours === 0) ||
              (step === 2 && !formData.experience) ||
              (step === 3 && !formData.schedule) ||
              (step === 4 && !formData.age)
            }
          >
            {step === questions.length ? "Продолжить" : "Далее"}
          </button>
        </div>
      </div>
    );
  };

  const renderFinalForm = () => (
    <form
      onSubmit={handleSubmit}
      className={`${styles.finalForm} ${
        isAnimating ? styles.fadeOut : styles.fadeIn
      }`}
    >
      <div className={styles.progress}>
        <div className={styles.progressBar} style={{ width: `100%` }}></div>
        <span>
          Шаг {questions.length + 1} из {questions.length + 1}
        </span>
      </div>

      <h2 className={styles.formTitle}>Заполните контактные данные</h2>
      <p className={styles.formDescription}>
        Мы свяжемся с вами в ближайшее время для обсуждения деталей
      </p>

      <div className={styles.inputGroup}>
        <label>Ваше имя</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Как к вам обращаться?"
          required
        />
      </div>

      <div className={styles.inputGroup}>
        <label>Telegram</label>
        <input
          type="text"
          name="telegram"
          value={formData.telegram}
          onChange={handleChange}
          placeholder="@username"
          required
        />
      </div>

      <div className={styles.navigation}>
        <button
          type="button"
          onClick={handleBack}
          className={styles.backButton}
        >
          Назад
        </button>
        <button type="submit" className={styles.submitButton}>
          Отправить заявку
        </button>
      </div>
    </form>
  );

  const renderSuccess = () => (
    <div className={styles.successScreen}>
      <div className={styles.checkmark}>✓</div>
      <h2 className={styles.successTitle}>Заявка отправлена!</h2>
      <p className={styles.successText}>
        Мы свяжемся с вами в Telegram в течение 24 часов для обсуждения деталей
        сотрудничества
      </p>
    </div>
  );

  return (
    <>
      <div className={styles.welcome}>
        <h1 className={styles.welcomeTitle}>
          Стань мастером эротического массажа в "Эдеме"
        </h1>
        <div className={styles.container}>
          {step <= questions.length && renderQuestion()}
          {step === questions.length + 1 && renderFinalForm()}
          {step === questions.length + 2 && renderSuccess()}
        </div>
      </div>
    </>
  );
}
