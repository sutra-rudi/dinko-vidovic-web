export const getDinkoMediaExcerpt = `query NewQuery {
  allIzdvojenoIzMedija {
    edges {
      node {
        izdvojenoIzMedijaFields {
          imeMedija
          naslov
          poveznica
          sadrzaj
          slika {
            node {
              sourceUrl
              sizes
            }
          }
        }
        databaseId
      }
    }
  }
}`;
