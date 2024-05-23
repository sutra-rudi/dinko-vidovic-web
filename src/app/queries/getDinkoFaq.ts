export const getDinkoFaqQuery = `query NewQuery {
  allFaq {
    edges {
      node {
        faqFields {
          faqEn
          faqHr
          heroImage {
            node {
              sizes
              sourceUrl
            }
          }
        }
      }
    }
  }
}`;
