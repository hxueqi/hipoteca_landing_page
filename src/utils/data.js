import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Website Design",
    projects: 76,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Mobile App Design",
    projects: 63,
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "Brand Identity",
    projects: 47,
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "I will help you with finging a solution and solve your problem, We use process design to create digital products. Besides that also help their business.",
  "We use process design to create digital products. Besides that also help their business",
];

export const workExp = [
  {
    place: "Paso 1",
    role: "Hacemos un primer análisis gratuito",
    detail: "Realizamos un análisis orientativo de la viabilidad de la operación",
 
  },
  {
    place: "Paso 2",
    role: "Presentamos tu solicitud y negociamos con bancos",
    detail: "Gestionamos toda la documentación y la presentamos a los bancos",
  },
  {
    place: "Paso 3",
    role: "Te presentamos varias opciones",
    detail: "Un experto hipotecario te explicará todo para que elijas la mejor hipoteca para ti",
  },
];

export const comments = [
  {
    name: "Fabian",
    post: "Buenas condiciones",
    comment:
      "He conseguido una financiación mayor a la que podia haber accedido por mi cuenta. El gestor me ha acompañado paso a paso desde la tasación hasta el día de la firma",
    img: "./people2.png",
  },
  {
    name: "Marta",
    post: "Estoy encantada con ellos",
    comment:
      "Me ayudaron a encontrar mi hipoteca lo más rápido posible, dándome todas las soluciones y herramientas posibles, sin duda los recomiendo muy profesionales!",
    img: "./people1.png",
  },
  {
    name: "Ien",
    post: "Creative Manager",
    comment:
      "Excelente servicio y profesionalidad. Nos han conseguido mucho mejores condiciones y mayor financiación que nuestro banco de toda la vida. Muy recomendable",
    img: "./people2.png",
  },
  {
    name: "Ien",
    post: "Creative Manager",
    comment:
      "Excelente servicio y profesionalidad. Nos han conseguido mucho mejores condiciones y mayor financiación que nuestro banco de toda la vida. Muy recomendable",
    img: "./people2.png",
  },
  {
    name: "Ien",
    post: "Creative Manager",
    comment:
      "Excelente servicio y profesionalidad. Nos han conseguido mucho mejores condiciones y mayor financiación que nuestro banco de toda la vida. Muy recomendable",
    img: "./people2.png",
  },
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
