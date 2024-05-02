import {Cormorant_Garamond, Quicksand, Roboto} from "next/font/google"

export const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: '400',
  variable: '--cormorant-garamond',

})

export const quicksand = Quicksand({
  subsets: ['latin'],
  weight: '400',
  variable: '--quicksand',
})

export const roboto = Roboto({
  subsets: ['latin'],
  weight: '700',
  variable: '--roboto',
})


  //<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Quicksand:wght@300..700&display=swap" rel="stylesheet"></link>