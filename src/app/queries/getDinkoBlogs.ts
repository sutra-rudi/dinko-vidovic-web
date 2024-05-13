export const getAllBlogsQuery = `query NewQuery {
  allVidovicBlog {
    edges {
      node {
        id
        dinkoBlog {
          datumBlog
          fieldGroupName
          engleskiJezik {
            blogTekstENG
            fieldGroupName
            naslovEng
            uvodnikEng
          }
          hrvatskiJezik {
            blogTekstHR
            fieldGroupName
            kratkiTekstZaKarticuNovostiDo200ZnakovaHR
            nASLOVHR
            tekstNovostiHR
            uvodnikHR
          }
          seoTekstovi {
            fieldGroupName
            seoTekstEng
            seoTekstHr
          }
          slikaHeroBlog {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
}`;
