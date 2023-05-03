import FondoBannerLight from '../../assets/img/vecteezy.jpg'
import FondoBannerDark from '../../assets/img/banner-bg.webp'
import astronaut from '../../assets/img/astronaut.svg'
import astronaut2 from '../../assets/img/header-img.svg'

import {
    fondoclaro,
    contenidoClaro,
    contenidoClaroNav,
    textoClaro,
    fondoOscuro,
    contenidoOscuro,
    contenidoOscuroNav,
    textoOscuro,
    textoClaroLogo,
    textoOscuroLogo,
    fondoClaroFooter,
    fondoOscuroFooter,
    fondoClaroContact,
    fondoOscuroContact,
} from "./variables";

export const themeLigth = {
    fondo: fondoclaro,
    contenido: contenidoClaro,
    contenidoNav: contenidoClaroNav,
    texto: textoClaro,
    banner: FondoBannerLight,/* 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',fondoClaro */
    filter: 'invert(0%) sepia(0%) saturate(7500%) hue-rotate(338deg) brightness(106%) contrast(109%)',
    icons: 'brightness(0) saturate(100%) invert(0%) sepia(7%) saturate(98%) hue-rotate(346deg) brightness(95%) contrast(86%)',
    imagenBanner: astronaut,
    textoLogo: textoClaroLogo,
    fondoFooter: fondoClaroFooter,
    fondoContact: fondoClaroContact,
}
export const themeDark = {
    fondo: fondoOscuro,
    contenido: contenidoOscuro,
    contenidoNav: contenidoOscuroNav,
    texto: textoOscuro,
    banner: FondoBannerDark,
    filter: 'brightness(0) saturate(100%) invert(0%) sepia(7%) saturate(98%) hue-rotate(346deg) brightness(95%) contrast(86%)',
    icons: '',
    imagenBanner: astronaut2,
    textoLogo: textoOscuroLogo,
    fondoFooter: fondoOscuroFooter,
    fondoContact: fondoOscuroContact
}
