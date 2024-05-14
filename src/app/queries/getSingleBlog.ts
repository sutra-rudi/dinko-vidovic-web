export const getSingleBlogQuery = (id: string) => {
  return `query NewQuery {
  vidovicBlog(id: "${id}", idType: DATABASE_ID) {
    dinkoBlog {
      datumBlog
      fieldGroupName
      engleskiJezik {
        blogTekstEng
        fieldGroupName
        naslovEng
        uvodnikEng
        kratkiTekstZaKarticuEn
      }
      hrvatskiJezik {
        blogTekstHr
        fieldGroupName
        kratkiTekstZaKarticuBlogaDo200ZnakovaHr
        nASLOVHR
        uvodnikHr
      }
      slikaHeroBlog {
        node {
          sizes
          sourceUrl
        }
      }
      seoTekstovi {
        fieldGroupName
        seoTekstEng
        seoTekstHr
      }
      slikaThumbBlog {
        node {
          sizes
          sourceUrl
        }
      }
    }
  }
}`;
};
