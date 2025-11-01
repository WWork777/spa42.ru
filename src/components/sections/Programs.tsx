"use client";

import Slider from "react-slick";
import Image from "next/image";
import styles from "@styles/Programs.module.css";
import { useRef, useState, useEffect } from "react";
import ModalTaxi from "../modalTaxi/modalTaxi";

const programs = [
  {
    title: "Расслабляющий массаж всего тела",
    desc: "",
    price: "5 000 ₽",
    duration: "60 минут",
    img: "/hero/prog1.png",
  },
  {
    title: "Авторская спа-программа Фемида",
    desc: "Совместное принятие душа до и после программы. Массаж всего тела, боди-тайская техника, доведение до пика удовольствия восточной техникой йони.",
    price: "7 000 ₽",
    duration: "60 минут",
    img: "/hero/prog2.webp",
  },
  {
    title: "Авторская спа-программа VIP",
    desc: "Совместное принятие душа до и после программы. Массаж всего тела, боди-тайская техника, доведение до пика удовольствия восточной техникой йони. Джакузи, сауна, шампанское",
    price: "15 000 ₽",
    duration: "120 минут",
    img: "/hero/prog3.webp",
  },
  {
    title: "Авторская программа Фантазия",
    desc: "Совместное принятие душа с мастерами до и после программы. Веточка сакуры, массаж всего тела. Эротическая часть доведение до пика удовольствия восточными техниками лингам и йони",
    price: "12 000 ₽",
    duration: "60 минут",
    img: "/hero/prog4.jpg",
  },
];

export default function Programs() {
  const sliderRef = useRef<Slider | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    <>
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
                        onClick={() => setIsModalOpen(true)}
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
      </section>
      <ModalTaxi isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
