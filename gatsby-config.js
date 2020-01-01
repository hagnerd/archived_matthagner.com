module.exports = {
  siteMetadata: {
    siteTitle: 'Matt Hagner',
    siteTitleAlt: 'Matt Hagner - Blog',
    siteHeadline: 'Matt Hagner - Blog',
    siteDescription: 'The chronicles of my journey to become a better engineer',
    siteUrl: 'https://matthagner.com',
    siteLanguage: 'en',
    author: 'Matt Hagner',
    externalLinks: [
      {
        name: 'Twitter',
        url: 'twitter.com/_hagnerd',
      },
      {
        name: 'Github',
        url: 'https://github.com/hagnerd',
      },
    ],
  },
  plugins: [
    {
      resolve: '@lekoarts/gatsby-theme-minimal-blog',
      options: {
        postsPath: 'src/posts',
        pagesPath: 'src/pages',
      },
    },
  ],
}
