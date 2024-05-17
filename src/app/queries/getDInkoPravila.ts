export const getDinkoPravilaQuery = `query NewQuery {
  allPravilaPrivatnosti {
    edges {
      node {
        id
        pravilaPrivatnostiFields {
          pravilaPrivatnostiEngleski
          pravilaPrivatnostiHrvatski
        }
      }
    }
  }
}`;
