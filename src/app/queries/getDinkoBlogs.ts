export const getAllBlogsQuery = `query NewQuery {
  allVidovicBlog {
    edges {
      node {
        id
        slug
        title
        vidovicBlogId
        dinkoBlog {
          datumBlog
          fieldGroupName
          hrvatskiJezik {
            blogTekstHr
            fieldGroupName
            kratkiTekstZaKarticuBlogaDo200ZnakovaHr
            nASLOVHR
            uvodnikHr
          }
          engleskiJezik {
            blogTekstEng
            fieldGroupName
            kratkiTekstZaKarticuEn
            naslovEng
            uvodnikEng
          }
          seoTekstovi {
            fieldGroupName
            seoTekstEng
            seoTekstHr
          }
          slikaHeroBlog {
            node {
              id
              sizes
              sourceUrl
            }
          }
          slikaThumbBlog {
            node {
              id
              sizes
              sourceUrl
            }
          }
        }
      }
    }
  }
}`;
