const base = import.meta.env.BASE_URL;
const img = (file) => `${base}img/${encodeURIComponent(file)}`;

export const IMG = {
  logoHorizontal:  img("LOGO HORIZONTAL.png"),
  logoVertical:    img("LOGO VERTICAL.png"),
  cabecera:        img("CABECERA.png"),
  titulo:          img("TITULO.png"),
  coleccion:       img("COLECCION.png"),
  miColeccion:     img("MI COLECCION.png"),

  bookUnicornios:  img("LIBRO UNICORNIOS ADORABLES.png"),
  bookDinosaurios: img("LIBRO DINOSAURIOS.png"),
  bookGranja:      img("LIBRO ANIMALES DE GRANJA.png"),
  bookMonster:     img("LIBRO MONSTER TRUCKS.png"),
  bookVehiculos:   img("LIBRO DE VEHÍCULOS DE TRABAJO.png"),

  pinterest:       img("LOGO PINTEREST.png"),
  instagram:       img("LOGO INSTAGRAM.png"),
  amazon:          img("LOGO AMAZON.png"),
  pinterestBN:     img("LOGO PINTEREST B_N.png"),
  instagramBN:     img("N.png"),
  amazonBN:        img("LOGO AMAZON B_N_2.png"),
};
