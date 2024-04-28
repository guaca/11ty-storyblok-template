require('dotenv').config()
module.exports = function (eleventyConfig) {
  // Add the .env domain as GlobalData to use in SEO meta data
  eleventyConfig.addGlobalData("domain", process.env.DOMAIN );
  // Add the current year ad GlobalData to use in the footer 
  eleventyConfig.addGlobalData("year", new Date().getFullYear())
  // Filter articles by Author slug
  eleventyConfig.addFilter("filterArticlesByAuthor", function(articles, authorFullSlug) {
    const filteredArticles = articles.filter(article => {
      return article.content.Author.fullSlug === authorFullSlug;
    });
    // Sort the filtered articles by PublicationDate in descending order
    filteredArticles.sort((a, b) => {
      return new Date(b.content.PublicationDate) - new Date(a.content.PublicationDate);
    });
    return filteredArticles;
  });
  
  // Filter articles by Category slug
  eleventyConfig.addFilter("filterArticlesByCategory", function(articles, categoryFullSlug) {
    const filteredArticles = articles.filter(article => {
      return article.content.Category.fullSlug === categoryFullSlug;
    });
    // Sort the filtered articles by PublicationDate in descending order
    filteredArticles.sort((a, b) => {
      return new Date(b.content.PublicationDate) - new Date(a.content.PublicationDate);
    });
    return filteredArticles;
  });

  // Sort the authors  by name: 
  eleventyConfig.addFilter("sortAuthorsByName", function(authors) {
    return authors.sort((a, b) => a.content.Name.localeCompare(b.content.Name));
  });

  // Pass Trhough Copy
  eleventyConfig.addPassthroughCopy({
    "./src/public/": "/",
  });

  return {
    dir: {
      input: 'src'
    },
  };
};  

