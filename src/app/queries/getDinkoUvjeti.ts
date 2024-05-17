export const getDinkoUvjetiQuery = `query NewQuery {
  allUvjetiKoristenja {
    edges {
      node {
        id
        uvjetiKoristenjaFields {
          uvjetiKoristenjaEngleski
          uvjetiKoristenjaHrvatski
        }
      }
    }
  }
}`;
