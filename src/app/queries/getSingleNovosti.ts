export const getSingleNovostiQuery = (id: string) => {
  return `query NewQuery {
  news(id: "${id}", idType: DATABASE_ID) {
    id
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
}`;
};
