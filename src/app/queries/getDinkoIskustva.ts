export const getDinkoIskustvaQuery = `query NewQuery {
  allIskustvaPacijenata {
    edges {
      node {
        iskustvaPacijenataId
        iskustvaPacijenataInputFields {
          fieldGroupName
          imeIPrezimePacijenta
          linkNaVanjskiLinkSamoUSlucajuDaPostoji
          videoLinkNaYoutube
          slikaTestimonials {
            node {
              id
              description
              sizes
              sourceUrl
            }
          }
          testimonialsHrvatskiJezik {
            tekstTestimoniala
          }
        }
      }
    }
  }
}`;
