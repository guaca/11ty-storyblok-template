const fetchAPI = require("../utils/storyblok.js");

module.exports = async function getCategories () {
  const data = await fetchAPI(`
  {
    CategoryItems {
      items {
        full_slug
        content {
          Category
          SEO
        }
      }
    }
  }
  `);
  return data?.CategoryItems.items;
}