"use client";
import { useState } from "react";
import Header from "@/components/Header";
import MenuMobile from "@/components/MenuMobile";
import AboutMe from "@/components/AboutMe";
import Beginning from "@/components/Home";
import Projects from "@/components/Projects";
import Contacts from "@/components/Contacts";

export default function Home() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  return (
    <main>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Header setMenuIsVisible={setMenuIsVisible} />
      <Beginning />
      <AboutMe />
      <Projects />
      <Contacts />
    </main>
  );
}
