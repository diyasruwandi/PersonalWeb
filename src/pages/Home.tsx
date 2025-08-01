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
import { TextScroll } from "@/components/ui/text-scroll";
import { useTranslation } from "react-i18next";
// import ButtonSketch from "@/components/ui/ButtonSketch";
import SubscriptionCard from "@/components/SubscriptionCard";
import { Feedback } from "@/components/Feedback";
// import GumroadButton from "@/components/ui/GumroadButton";
// import FancyButton from "@/components/ui/ButtonSketch";
// import { TypographyBlockquote } from "../components/TypographyBlockquote";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <section id="home">
        {/* <Intro /> */}
        <LanguageSwitcher />
        <RevealBento />
        <About />
      </section>

      <section id="projects">
        <Projects />
        <TextScroll
          text={t("text.velocity")}
          default_velocity={5}
          className="text-4xl font-bold uppercase text-white "
        />
        {/* <TypographyBlockquote /> */}
      </section>

      <section className="mt-8">
        <ChatBubble />
        
      </section>

      <section className="mt-9">
        {/* <ButtonSketch /> */}
        {/* <GumroadButton /> */}
        <Statistic />
      </section>

      <section className="flex items-center justify-center mt-8">
        <Feedback />
      </section>

      <section className="min-h-[500px] flex items-center justify-center ">
        <SubscriptionCard />
      </section>

    </>
  );
}
