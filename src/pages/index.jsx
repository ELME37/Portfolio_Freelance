import React, {useState} from "react";
import Head from "next/head";

import LayoutDefault from "@/containers/layout";
import PopUp from "@/components/popUp";

import { Main } from "./home.styled";

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
        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main >
        <LayoutDefault>
          <PopUp isVisible={isVisiblePopUp} onClose={closePopUp}>Site internet en cours de développement</PopUp>
        </LayoutDefault>
      </Main>
    </>
  );
}
