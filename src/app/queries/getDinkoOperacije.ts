export const getDinkoOperacijeQuery = `query NewQuery {
  allOperacije(first: 100) {
    edges {
      node {
        id
        operacijeTekstoviPodstranica {
          naslovEng
          naslovHr
          sadrzajEng
          sadrzajHr
          seoTekstEng
          seoTekstHr
          naslovnaSlikaHeroImage {
            node {
              srcSet
              sourceUrl
            }
          }
          odaberiKategoriju
        }
      }
    }
  }
}`;
