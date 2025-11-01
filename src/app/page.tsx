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
  title: "Спа-салон в Кемерово | ЭДЕМ | Уход за телом и релакс для женщин",
  description:
    "💆‍♀️ Премиальный спа-салон для женщин в Кемерово. Процедуры для тела, массажи, ритуалы красоты и релакса. Профессиональный уход в уютной атмосфере. Запишитесь на сеанс гармонии и восстановления.",
  keywords:
    "спа салон Кемерово, спа процедуры для женщин, массаж в спа салоне, уход за телом, релакс процедуры, ритуалы красоты, спа программы, уютный спа салон, премиум спа, восстановление организма",
  alternates: {
    canonical: `https://spa42.ru/`,
  },
  openGraph: {
    title: `Спа-салон в Кемерово | ЭДЕМ | Уход за телом и релакс`,
    description: `Премиальный спа-салон для женщин в Кемерово. Процедуры для тела, массажи и ритуалы красоты в уютной атмосфере`,
    url: `https://spa42.ru/`,
    type: "website",
    images: [
      {
        url: `/og/main.jpg`,
        width: 1200,
        height: 630,
        alt: `Премиальный спа-салон ЭДЕМ для женщин в Кемерово`,
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
        <meta name="author" content="Спа-салон ЭДЕМ, Кемерово" />
        <meta name="geo.region" content="RU-KEM" />
        <meta name="geo.placename" content="Кемерово" />
        <meta name="theme-color" content="#A8D8EA" />
        <meta name="classification" content="Spa and Wellness" />
      </Head>
      <main>
        <Hero
          title="Спа-салон в Кемерово гармония тела и души"
          subTitle="ЭДЕМ"
          fon="/hero/heromass3.jpg"
        />

        <About />
        {/* <Quiz /> */}
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
