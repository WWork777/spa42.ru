"use client";

import Slider from "react-slick";
import Image from "next/image";
import styles from "@styles/Programs.module.css";
import { useRef, useState, useEffect } from "react";
import ModalTaxi from "./modalTaxi/modalTaxi";

const programs = [
  {
    title: "Энергия",
    desc: "Совместное принятие душа до и после, лёгкий расслабляющий массаж (спина или ноги), доведени до финала техникой лингам",
    price: "3 500 ₽",
    duration: "60 минут",
    img: "/images/programs/1.jpg",
  },
  {
    title: "Релакс",
    desc: "Совместное принятие душа до и после, лёгкий расслабляющий массаж всего тела, доведение до финала техникой лингам",
    price: "5 500 ₽",
    duration: "90 минут",
    img: "/images/programs/2.jpg",
  },
  {
    title: "Нежность",
    desc: "Душ до и после, классический расслабляющий массаж, боди-тайская техника. Прикосновения к девушке (кроме зоны бикини)",
    price: "6 000 ₽",
    duration: "60 минут",
    img: "/images/programs/3.webp",
  },
  {
    title: "Визирь",
    desc: "Душ до и после, классический расслабляющий массаж, боди-тайская техника, имитация секса и оральных ласк. Прикосновения по всему телу",
    price: "7 000 ₽",
    duration: "60 минут",
    img: "/images/programs/4.jpeg",
  },
  {
    title: "Шейх",
    desc: "Совместное принятие душа до и после, расслабляющий массаж всего тела, боди-тайская техника, имитация интимных ласк, прикосновения по всему телу",
    price: "10 000 ₽",
    duration: "90 минут",
    img: "/images/programs/5.jpg",
  },
  {
    title: "VIP Эфириум",
    desc: "Программа составляется по вашему усмотрению: может содержать классическую часть или быть",
    price: "12 000 ₽",
    duration: "18 000 ₽",
    img: "/images/programs/6.jpg",
  },
  {
    title: "Госпожа",
    desc: "BDSM-программа, обсуждаемая заранее (предпочтения, табу). Сеанс включает всю гамму ощущений",
    price: "11 000 ₽",
    duration: "60 минут",
    img: "/images/programs/7.jpg",
  },
  {
    title: "Фантазия (для пар)",
    desc: "Совместный душ с мастером, веточка сакуры, классический релакс, эротическая часть",
    price: "12 000 ₽",
    duration: "60 минут",
    img: "/images/programs/8.jpg",
  },
  {
    title: "Дюплекс (для пар)",
    desc: "Совместный душ с мастером, классический массаж, боди-тайская техника, доведение до пика",
    price: "15 000 ₽",
    duration: "90 минут",
    img: "/images/programs/9.jpg",
  },
  {
    title: "Нервана (для женщин)",
    desc: "Совместный душ, веточка сакуры, классический релакс, доведение до пика удовольствия техникой йони.",
    price: "6 000 ₽",
    duration: "60 минут",
    img: "/images/programs/10.jpg",
  },
  {
    title: "Фемида (для женщин)",
    desc: "Совместный душ, веточка сакуры, боди-тайская техника, доведение до пика удовольствия техникой йони, Возможность ласк с мастером",
    price: "7 000 ₽",
    duration: "60 минут",
    img: "/images/programs/11.png",
  },
];

export default function Programs() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const sliderRef = useRef<Slider | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth <= 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth <= 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const maxIndex = Math.max(0, programs.length - itemsPerPage);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: itemsPerPage,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (index: number) => setCurrentIndex(index),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handlePrev = () => sliderRef.current?.slickPrev();
  const handleNext = () => sliderRef.current?.slickNext();

  return (
    <section id="programs">
      <div className={styles.container}>
        <div className={styles.container_panel}>
          <h2 className={styles.text_m1}>Наши Программы</h2>
          <div className={styles.arrows}>
            <button onClick={handlePrev} disabled={currentIndex === 0}>
              <Image
                src="/images/icons/arrow-left.svg"
                alt="prev"
                width={24}
                height={24}
              />
            </button>
            <button onClick={handleNext} disabled={currentIndex >= maxIndex}>
              <Image
                src="/images/icons/arrow-right.svg"
                alt="next"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>

        <div className={styles.slider_container}>
          <Slider ref={sliderRef} {...settings} className="custom-slider">
            {programs.map((p, i) => (
              <div key={i} style={{ paddingRight: "20px" }}>
                <article className={`${styles.card} ${styles.item}`}>
                  <div className={styles.cover}>
                    <Image src={p.img} alt={p.title} fill sizes="100vw" />
                  </div>
                  <div className={styles.body}>
                    <h3>{p.title}</h3>
                    <p className={styles.desc}>{p.desc}</p>
                    <div className={styles.meta}>
                      <span className={styles.price}>{p.price}</span>
                      <span className={styles.dot}>|</span>
                      <span className={styles.dur}>{p.duration}</span>
                    </div>
                    <a
                      className={styles.btn}
                      onClick={toggleModal}
                      style={{ cursor: "pointer" }}
                    >
                      Записаться на программу
                    </a>
                  </div>
                </article>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {isModalOpen && <ModalTaxi isOpen={isModalOpen} onClose={toggleModal} />}
    </section>
  );
}
