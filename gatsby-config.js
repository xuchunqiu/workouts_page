/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
module.exports = {
  pathPrefix: '',
  siteMetadata: {
    siteTitle: 'Workouts Map',
    siteUrl: 'https://biking.xuchunqiu.com',
    logo: '  https://avatars.githubusercontent.com/u/57806510?s=400&u=bd479200668eeb5b70614eb8255f27e667bc3838', 
    description: '辣堡每一天',
    keywords: 'workouts, cycling, riding, hiking',
    navLinks: [
      {
        name: 'Blog',
        url: 'https://blog.xuchunqiu.com',
      },
      {
        name: 'About',
        url: 'https://github.com/xuchunqiu/workouts_page/blob/master/README-CN.md',
      },
    ],
  },
  plugins: [
    'gatsby-transformer-json',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',

    {
      resolve: 'gatsby-plugin-vercel',
      options: {
        // (optional) Prints metrics in the console when true
        debug: false,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/static/',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/images/',
      },
    },
    {
      resolve: 'gatsby-alias-imports',
      options: {
        rootFolder: '.',
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        cssLoaderOptions: {
          esModule: false,
          modules: {
            namedExport: false,
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#e1e1e1',
        theme_color: '#e1e1e1',
        display: 'standalone',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
  ],
};
