"use client";
import LanguageSwitcher from "@/components/LanguageSwitcher";
// import Intro from "../components/Intro";
// import { useState } from "react";
import About from "../components/About";
// import CardItem from "../components/CardItem";
// import InputForm from "../components/InputForm";
import Projects from "../components/Projects";
import { RevealBento } from "../components/RevealBento";
import ChatBubble from "../components/ui/Chatbubble";
import Statistic from "../components/ui/Statistic";
// import SwapTheme from "../components/ui/SwapTheme";
// import type { MessageData } from "../data/types";
// import { TypographyBlockquote } from "../components/TypographyBlockquote";

export default function Home() {
  // const [entries, setEntries] = useState<MessageData[]>([]);

  // const handleNewEntry = (entry: MessageData) => {
  //   setEntries((prev) => [...prev, entry]);
  // };

  return (
    <>
      <section id="home">
        {/* <Intro /> */}
        {/* <SwapTheme /> */}
        <LanguageSwitcher />
        <RevealBento />
        <About />
      </section>

      <section id="projects">
        <Projects />
        {/* <TypographyBlockquote /> */}
      </section>

      <section>
        <ChatBubble />
      </section>

      <section className="mt-9">
        <Statistic />
      </section>

      {/* <section id="form">
        <InputForm onSubmit={handleNewEntry} />
      </section> */}
      {/* 
      <section id="cards">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {entries.map((e, idx) => (
            <CardItem key={idx} data={e} />
          ))}
        </div>
      </section> */}
    </>
  );
}
