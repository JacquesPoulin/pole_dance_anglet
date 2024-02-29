// >> LISTE DES PHOTOS

const galleryList = [
  {
    id: 1,
    imgSource: "../images/danse/IMG-20221124-WA0008.jpg",
    alt: "Image de sonia Kerkeni-Professeur de pole dance et de Pilates",
    galleyStyle: "gallery__image",
  },
  {
    id: 2,
    imgSource: "../images/portrait/IMG-20221124-WA0015.jpg",
    alt: "Image de sonia Kerkeni-Professeur de pole dance et de Pilates",
    galleyStyle: "gallery__image",
  },
  {
    id: 3,
    imgSource: "../images/danse/IMG-20221124-WA0016.jpg",
    alt: "Image de sonia Kerkeni-Professeur de pole dance et de Pilates",
    galleyStyle: "gallery__image",
  },
  {
    id: 4,
    imgSource: "../images/portrait/IMG-20221124-WA0018.jpg",
    alt: "Image de sonia Kerkeni-Professeur de pole dance et de Pilates",
    galleyStyle: "gallery__image",
  },
  {
    id: 5,
    imgSource: "../images/bar/IMG-20221124-WA0004.jpg",
    alt: "Image de sonia Kerkeni-Professeur de pole dance et de Pilates",
    galleyStyle: "gallery__image",
  },
  {
    id: 6,
    imgSource: "../images/danse/IMG-20221124-WA0019.jpg",
    alt: "Image de sonia Kerkeni-Professeur de pole dance et de Pilates",
    galleyStyle: "gallery__image",
  },
  {
    id: 7,
    imgSource: "../images/portrait/IMG-20221124-WA0014.jpg",
    alt: "Image de sonia Kerkeni-Professeur de pole dance et de Pilates",
    galleyStyle: "gallery__image",
  },
  {
    id: 8,
    imgSource: "../images/bar/IMG-20221124-WA0010.jpg",
    alt: "Image de sonia Kerkeni-Professeur de pole dance et de Pilates",
    galleyStyle: "gallery__image",
  },
  {
    id: 9,
    imgSource: "../images/bar/IMG-20221124-WA0024.jpg",
    alt: "Image de sonia Kerkeni-Professeur de pole dance et de Pilates",
    galleyStyle: "gallery__image",
  },
  {
    id: 10,
    imgSource: "/images/bar/IMG-20221124-WA0005.jpg",
    alt: "Image de sonia Kerkeni-Professeur de pole dance et de Pilates",
    galleyStyle: "gallery__image",
  },
  {
    id: 11,
    imgSource: "/images/bar/IMG-20230102-WA0034.jpg",
    alt: "Image de sonia Kerkeni-Professeur de pole dance et de Pilates",
    galleyStyle: "gallery__image",
  },
  {
    id: 12,
    imgSource: "/images/danse/IMG-20221124-WA0022.jpg",
    alt: "Image de sonia Kerkeni-Professeur de pole dance et de Pilates",
    galleyStyle: "gallery__image",
  },
  {
    id: 13,
    imgSource: "/images/bar/IMG-20221124-WA0007.jpg",
    alt: "Image de sonia Kerkeni-Professeur de pole dance et de Pilates",
    galleyStyle: "gallery__image",
  },
  {
    id: 14,
    imgSource: "/images/bar/IMG-20230102-WA0033.jpg",
    alt: "Image de sonia Kerkeni-Professeur de pole dance et de Pilates",
    galleyStyle: "gallery__image",
  },
  {
    id: 15,
    imgSource: "/images/bar/IMG-20230102-WA0025.jpg",
    alt: "Image de sonia Kerkeni-Professeur de pole dance et de Pilates",
    galleyStyle: "gallery__image",
  },
  {
    id: 16,
    imgSource: "/images/danse/IMG-20221124-WA0023.jpg",
    alt: "Image de sonia Kerkeni-Professeur de pole dance et de Pilates",
    galleyStyle: "gallery__image",
  },
  {
    id: 17,
    imgSource: "/images/danse/IMG-20221124-WA0001.jpg",
    alt: "Image de sonia Kerkeni-Professeur de pole dance et de Pilates",
    galleyStyle: "gallery__image",
  },
  {
    id: 18,
    imgSource: "/images/portrait/IMG-20230102-WA0029.jpg",
    alt: "Image de sonia Kerkeni-Professeur de pole dance et de Pilates",
    galleyStyle: "gallery__image",
  },
  {
    id: 19,
    imgSource: "/images/portrait/IMG-20221124-WA0006.jpg",
    alt: "Image de sonia Kerkeni-Professeur de pole dance et de Pilates",
    galleyStyle: "gallery__image",
  },
  {
    id: 20,
    imgSource: "/images/bar/IMG-20221124-WA0002.jpg",
    alt: "Image de sonia Kerkeni-Professeur de pole dance et de Pilates",
    galleyStyle: "gallery__image",
  },
  {
    id: 21,
    imgSource: "/images/bar/IMG-20230102-WA0031.jpg",
    alt: "Image de sonia Kerkeni-Professeur de pole dance et de Pilates",
    galleyStyle: "gallery__image",
  },
  {
    id: 22,
    imgSource: "/images/bar/IMG-20230102-WA0026.jpg",
    alt: "Image de sonia Kerkeni-Professeur de pole dance et de Pilates",
    galleyStyle: "gallery__image",
  },
  {
    id: 23,
    imgSource: "/images/bar/IMG-20221124-WA0012.jpg",
    alt: "Image de sonia Kerkeni-Professeur de pole dance et de Pilates",
    galleyStyle: "gallery__image",
  },
  {
    id: 24,
    imgSource: "/images/bar/IMG-20230102-WA0032.jpg",
    alt: "Image de sonia Kerkeni-Professeur de pole dance et de Pilates",
    galleyStyle: "gallery__image",
  },
  {
    id: 25,
    imgSource: "/images/bar/IMG-20221124-WA0005.jpg",
    alt: "Image de sonia Kerkeni-Professeur de pole dance et de Pilates",
    galleyStyle: "gallery__image",
  },
  {
    id: 26,
    imgSource: "/images/danse/IMG-20221124-WA0011.jpg",
    alt: "Image de sonia Kerkeni-Professeur de pole dance et de Pilates",
    galleyStyle: "gallery__image",
  },
  {
    id: 27,
    imgSource: "/images/portrait/IMG-20221124-WA0000.jpg",
    alt: "Image de sonia Kerkeni-Professeur de pole dance et de Pilates",
    galleyStyle: "gallery__image",
  },
  {
    id: 28,
    imgSource: "/images/danse/IMG-20221124-WA0017.jpg",
    alt: "Image de sonia Kerkeni-Professeur de pole dance et de Pilates",
    galleyStyle: "gallery__image",
  },
];

export default galleryList;
