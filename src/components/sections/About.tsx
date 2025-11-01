"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import styles from "@styles/About.module.css";

export default function About() {
  const slides = [
    "/images/about/1.png",
    "/images/about/2.png",
    "/images/about/3.png",
    "/images/about/4.png",
    "/images/about/5.png",
    "/images/about/6.png",
    "/images/about/7.png",
  ];

  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <div className={styles.container_panel}>
          <h2 className={styles.text_m1}>О салоне</h2>
        </div>
        <div className={styles.about_top}>
          <div className={styles.about_top__item}>
            <Image
              src={"/svg/about2.svg"}
              alt="Работа на результат"
              width={50}
              height={50}
            />
            <span>Работа на результат</span>
          </div>
          <div className={styles.about_top__item}>
            <Image
              src={"/svg/about1.svg"}
              alt="Опытные мастера"
              width={50}
              height={50}
            />
            <span>Опытные мастера с большим опытом</span>
          </div>
          <div className={styles.about_top__item}>
            <Image
              src={"/svg/about3.svg"}
              alt="Авторские программы"
              width={50}
              height={50}
            />
            <span>Авторские программы</span>
          </div>
        </div>
        <div className={styles.wrap}>
          <div className={styles.text}>
            <p className={styles.text_m2}>
              В Эдем вы найдете убежище от стресса и суеты. Наши мастера помогут
              вам восстановить силы, обрести внутреннее спокойствие и испытать
              истинное наслаждение от прикосновений.
            </p>
            <p className={styles.text_m2}>
              Вас ожидает изобилие уникальных ритуалов, каждый из которых
              подарит вам восхитительные переживания, манящие вернуться вновь.
            </p>
            <p className={styles.text_m3}>
              Мы рады приветствовать каждого, ждем вас по адресу:
              <br />
              г. Кемерово, ул. Марковцева 10
            </p>

            <div className={styles.features}>
              <div className={styles.feature}>
                <Image
                  src="/images/about/Castle.svg"
                  alt="Конфиденциальность"
                  width={24}
                  height={24}
                />
                <span>Строгое соблюдение конфиденциальности</span>
              </div>
              <div className={styles.feature}>
                <Image
                  src="/images/about/slippers.svg"
                  alt="Тапочки"
                  width={24}
                  height={24}
                />
                <span>
                  Одноразовые гостевые тапочки и душевые принадлежности
                </span>
              </div>
              <div className={styles.feature}>
                <Image
                  src="/images/about/book.svg"
                  alt="Медкнижки"
                  width={24}
                  height={24}
                />
                <span>Обязательное наличие медицинских книжек у персонала</span>
              </div>
              <div className={styles.feature}>
                <Image
                  src="/images/about/taxi.svg"
                  alt="Такси"
                  width={24}
                  height={24}
                />
                <span>Бесплатное такси до салона</span>
              </div>
            </div>
          </div>

          <div className={styles.media}>
            <Swiper
              modules={[Navigation, Autoplay, EffectFade]}
              navigation={{
                nextEl: `.${styles.swiperButtonNext}`,
                prevEl: `.${styles.swiperButtonPrev}`,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              loop={true}
              speed={1000}
              className={styles.swiper}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index} className={styles.swiperSlide}>
                  <div className={styles.imageContainer}>
                    <Image
                      src={slide}
                      alt={`Фото салона ${index + 1}`}
                      fill
                      sizes="(max-width: 900px) 100vw, 560px"
                      style={{ objectFit: "cover" }}
                      priority={index === 0}
                    />
                  </div>
                </SwiperSlide>
              ))}

              <button
                className={`${styles.swiperButtonPrev} ${styles.swiperButton}`}
                aria-label="Предыдущее изображение"
              >
                <Image
                  src="/images/icons/arrow-left-white.svg"
                  alt="Назад"
                  width={24}
                  height={24}
                />
              </button>
              <button
                className={`${styles.swiperButtonNext} ${styles.swiperButton}`}
                aria-label="Следующее изображение"
              >
                <Image
                  src="/images/icons/arrow-right-white.svg"
                  alt="Вперед"
                  width={24}
                  height={24}
                />
              </button>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
