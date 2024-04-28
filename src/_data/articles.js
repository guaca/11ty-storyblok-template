const fetchAPI = require("../utils/storyblok.js");


module.exports = async function getArticles () {
  const data = await fetchAPI(`
  {
    ArticleItems {
      items {
        full_slug
        content {
          Body
          PublicationDate
          Title
          Author {
            name
            fullSlug
          }
          Category {
            name
            fullSlug
          }
          SEO
        }
      }
    }
  }  
  `);
  return data?.ArticleItems.items;
}