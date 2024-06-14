export const getDinkoBiographyQuery = `query NewQuery {
  allBiografija {
    edges {
      node {
        biografijaFields {
          biografijaEn
          biografijaHr
        }
      }
    }
  }
}`;
