export const getSingleNovostiQuery = (id: string) => {
  return `query NewQuery {
  novosti(id: ${id}, idType: DATABASE_ID) {
    novostiFields {
      datumNovosti
      hrvatskiJezik {
        naslov
        sadrzaj
        uvod
      }
      engleskiJezik {
        sadrzaj
        naslov
        uvod
      }
      seo {
        seoEn
        seoHr
      }
      slikaHero {
        node {
          sourceUrl
          srcSet
        }
      }
    }
  }
}`;
};
