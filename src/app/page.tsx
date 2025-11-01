import Head from "next/head";
import Header from "@components/Header";
import Hero from "@/components/sections/Hero";
import Masters from "@/components/sections/Masters";
import Programs from "@/components/sections/Programs";
import Extras from "@/components/sections/Extras";
import About from "@/components/sections/About";
import Certificates from "@/components/sections/Certificates";
import FAQ from "@/components/sections/FAQ";
import Contacts from "@/components/sections/Contacts";
import Footers from "@/components/Footers";
import Vacansy from "@/components/Vacansy";
import Quiz from "@components/quiz/quiz";

export const metadata = {
  title:
    "Эротический массаж для женщин в Кемерово | Салон ЭДЕМ | Искусство чувственного релакса",
  description:
    "✨ Элитный салон эротического массажа для женщин в Кемерово. Профессиональные мастера, деликатный подход, приватная атмосфера. Раскройте свою чувственность и насладитесь искусством телесного релакса.",
  keywords:
    "эротический массаж для женщин Кемерово, женский эротический массаж, салон массажа для женщин, чувственный массаж, релакс для женщин, интимный массаж, снять стресс, раскрытие чувственности, массаж для пар",
  alternates: {
    canonical: `https://spa42.ru/`,
  },
  openGraph: {
    title: `Эротический массаж для женщин в Кемерово | Салон ЭДЕМ`,
    description: `Искусство чувственного релакса для современных женщин. Профессиональные мастера, приватная атмосфера, эксклюзивные программы`,
    url: `https://spa42.ru/`,
    type: "website",
    images: [
      {
        url: `/og/main.jpg`,
        width: 1200,
        height: 630,
        alt: `Салон эротического массажа для женщин ЭДЕМ в Кемерово`,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <>
      <Head>
        <meta name="language" content="ru" />
        <meta
          name="author"
          content="Салон эротического массажа ЭДЕМ, Кемерово"
        />
        <meta name="geo.region" content="RU-KEM" />
        <meta name="geo.placename" content="Кемерово" />
        <meta name="theme-color" content="#E8B4B8" />
      </Head>
      <main>
        <Hero
          title="Эротический Массаж для девушек в Кемерово"
          subTitle="ЭДЕМ"
          fon="/hero/heromass3.jpg"
        />

        <About />
        <Quiz />
        {/* <Vacansy /> */}
        <Masters />
        <Programs />
        <Extras />

        {/* <Certificates /> */}
        <FAQ />
        <Contacts />
      </main>
    </>
  );
}
