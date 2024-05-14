export const getDinkoNovostiQuery = `query NewQuery {
  novosti {
    edges {
      node {
        novosti {
          datumBlog
          fieldGroupName
          seoTekstovi {
            fieldGroupName
            seoNovostiTekstEng
            seoNovostiTekstHr
          }
          slikaHeroBlog {
            node {
              id
            }
          }
          engleskiJezik {
            fieldGroupName
            kratkiTekstZaKarticuNovostiDo200ZnakovaEng
            naslovNovostiEng
            novostiTekstEng
          }
          hrvatskiJezik {
            novostiTekstHr
            nASLOVNOVOSTIHR
            kratkiTekstZaKarticuNovostiDo200ZnakovaHr
            fieldGroupName
          }
        }
      }
    }
  }
}`;
