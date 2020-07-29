const path = require(`path`);

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {}
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: 'jamesh.net'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`)
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: path.join(__dirname, `src`, `data`)
      }
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`
  ],
  siteMetadata: {
    title: 'James Hunt',
    // eslint-disable-next-line
    description:
      'James Hunt: Senior Frontend Developer working at Zone Digital. This site is James Hunts portfolio of current and past projects.'
  }
};
