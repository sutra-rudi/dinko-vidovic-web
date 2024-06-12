export const getDinkoOperacijeListQuery = `query NewQuery {
  allOperacije(first: 100) {
    edges {
      node {
        operacijeTekstoviPodstranica {
          naslovEng
          naslovHr
          odaberiKategoriju
        }
      }
    }
  }
}`;
