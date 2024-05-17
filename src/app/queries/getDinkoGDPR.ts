export const getDinkoGDPR = `query NewQuery {
  allGDPR {
    edges {
      node {
        id
        gdprFields {
          gdprEn
          gdprHr
        }
      }
    }
  }
}`;
