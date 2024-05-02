import React, {useState} from "react";
import Head from "next/head";

import LayoutDefault from "@/containers/layout";
import PopUp from "@/components/popUp";
import Header from "@/components/header";
import SectionHome from "@/containers/section_Home";
import SectionAbout from "@/containers/section_About";
import SectionService from "@/containers/section_Service";
import SectionPortfolio from "@/containers/section_Portfolio";
import SectionPrice from "@/containers/section_Price";
import SectionFeedback from "@/containers/section_Feedback";
import SectionContact from "@/containers/section_Contact";
import Footer from "@/components/footer";

import { Main } from "@/assets/styles/main.styled";

export default function Home() {
  const [isVisiblePopUp, setIsVisiblePopUp] = useState (true)

  const closePopUp = () => {
      setIsVisiblePopUp(false);
  };
  return (
    <>
      <Head>
        <title>Mickael TURQUAIS</title>
        <meta name="description" content="Portfolio de Mickael TURQUAIS, développeur d'applications web React.js et Next.js - Freelance" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header/>
      <LayoutDefault>
          <Main>
            <SectionHome/>
            <SectionAbout/>
            <SectionService/>
            <SectionPortfolio/>
            <SectionPrice/>
            <SectionFeedback/>
            <SectionContact/>
            <PopUp isVisible={isVisiblePopUp} onClose={closePopUp}>Site internet en cours de développement</PopUp>
        </Main>
        <Footer/>
      </LayoutDefault>
    </>
  );
}
