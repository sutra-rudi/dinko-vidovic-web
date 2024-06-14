export const getDinkoStatsQuery = `query NewQuery {
  allStatistike {
    edges {
      node {
        id
        statistikeFields {
          statistika {
            naslovStatistikeEn
            naslovStatistikeHr
            vrijednostStatistikeEn
            vrijednostStatistikeHr
          }
        }
      }
    }
  }
}`;
