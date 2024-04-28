const fetchAPI = require("../utils/storyblok.js");

module.exports = async function getAuthors () {
  const data = await fetchAPI(`
  {
    AuthorItems {
      items {
        full_slug
        content {
          Name
          Bio
          Avatar {
            filename
          }
          SEO
        }
      }
    }
  }
  `);
  return data?.AuthorItems.items;
}