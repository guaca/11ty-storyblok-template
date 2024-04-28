require('dotenv').config()
const fetchAPI = require("../utils/storyblok");

module.exports = async function getHome () {
  const data = await fetchAPI(`
  {
    PageItem(id: "${process.env.HOME_ID}") {
      content {
        Heading
        Subtitle
        Highlights {
          fullSlug
          name
          content
        }
        SEO
      }
    }
  }  
  `);
  return data?.PageItem;
}