import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import FAQ from "@/components/sections/FAQ";
import Contacts from "@/components/sections/Contacts";

export const metadata = {
  title:
    "О салоне | Эротический массаж для женщин ЭДЕМ в Кемерово | Наша философия",
  description:
    "✨ Салон эротического массажа для женщин ЭДЕМ в Кемерово. Уникальная философия заботы о женской чувственности. Приватность, безопасность и профессиональный подход.",
  keywords:
    "о салоне эротического массажа для женщин, философия салона ЭДЕМ, безопасность и конфиденциальность, женский релакс Кемерово, история салона, почему выбирают нас, отзывы о салоне",
  alternates: {
    canonical: `https://spa42.ru/about`,
  },
  openGraph: {
    title: `О салоне | Эротический массаж для женщин ЭДЕМ в Кемерово`,
    description: `Уникальная философия заботы о женской чувственности. Приватность и профессиональный подход`,
    url: `https://spa42.ru/about`,
    type: "website",
    images: [
      {
        url: `/hero/about.jpg`,
        width: 1200,
        height: 630,
        alt: `Салон эротического массажа для женщин ЭДЕМ в Кемерово - наша философия`,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return (
    <>
      <Hero
        title="Салон эротического массажа для женщин ЭДЕМ"
        subTitle="Уникальная философия заботы о женской чувственности с 2018 года"
        fon="/hero/about.jpg"
      />
      <About />
      <FAQ />
      <Contacts />
    </>
  );
}
