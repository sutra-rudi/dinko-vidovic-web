export const getDinkoNovostiQuery = `query NewQuery {
  novosti {
    edges {
      node {
        databaseId
        novosti {
          datumBlog
          engleskiJezik {
            kratkiTekstZaKarticuNovostiDo200ZnakovaEng
            naslovNovostiEng
            novostiTekstEng
          }
          hrvatskiJezik {
            kratkiTekstZaKarticuNovostiDo200ZnakovaHr
            nASLOVNOVOSTIHR
            novostiTekstHr
          }
          seoTekstovi {
            seoNovostiTekstEng
            seoNovostiTekstHr
          }
          slikaHeroBlog {
            node {
              sizes
              sourceUrl
            }
          }
        }
      }
    }
  }
}`;
