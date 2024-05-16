export const getDinkoNovostiQuery = `query NewQuery {
  novosti {
    edges {
      node {
        novosti {
          datumBlog
          seoTekstovi {
            seoNovostiTekstEng
            seoNovostiTekstHr
          }
          slikaHeroBlog {
            node {
              id
              sizes
              sourceUrl
            }
          }
          engleskiJezik {
            kratkiTekstZaKarticuNovostiDo200ZnakovaEng
            naslovNovostiEng
            novostiTekstEng
          }
          hrvatskiJezik {
            novostiTekstHr
            nASLOVNOVOSTIHR
            kratkiTekstZaKarticuNovostiDo200ZnakovaHr
          }
        }
      }
    }
  }
}`;
