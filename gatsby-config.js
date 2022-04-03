module.exports = {
  siteMetadata: {
    title: `new`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    
      "gatsby-plugin-styled-components",
      {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Questrial`
        ],
        display: 'swap'
      },
    },
  ],
};
