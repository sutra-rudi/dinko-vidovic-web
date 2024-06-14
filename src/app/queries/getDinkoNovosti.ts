export const getDinkoNovostiQuery = `query NewQuery {
  allNovosti {
    edges {
      node {
        databaseId
        novostiFields {
          datumNovosti
          engleskiJezik {
            naslov
            sadrzaj
            uvod
          }
          hrvatskiJezik {
            naslov
            sadrzaj
            uvod
          }
          seo {
            seoEn
            seoHr
          }
          slikaHero {
            node {
              srcSet
              sourceUrl
            }
          }
        }
      }
    }
  }
}`;
