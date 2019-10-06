// @ts-check

const playgroundHastPlugin = require("./src/utils/playgroundHastPlugin")

module.exports = {
  siteMetadata: {
    title: "hpp Portfolio",
    description: "this is description",
    author: "hpp.ricecake@gmail.com",
    url: "https://hpprc.com",
    twitterUsername: "@osaremochi",
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",

    {
      resolve: "gatsby-mdx",
      options: {
        extensions: [".mdx", ".md"],

        // Default layouts are meta wrappers around .mdx pages. Can be useful to
        // share queries across different types of pages.
        defaultLayouts: {
          default: require.resolve("./src/layouts/DefaultLayout.tsx"),
        },

        // MDX AST transformers
        hastPlugins: [playgroundHastPlugin],

        // Imports here are available globally to .mdx files, with the exception
        // of automatically created pages located in /pages. This is a bug in
        // gatsby-mdx. See https://github.com/ChristopherBiscardi/gatsby-mdx/issues/243
        //
        // Also note: For mdx to work in NetlifyCMS, global scope passed in here
        // also be passed into `cms.js`, under the `scope` key.
        //
        globalScope: `
          import { UIComponents } from './src/Theme'
          export default {
            ...UIComponents
          }
        `,

        preloadedMDXScope: `import { UIComponents } from './src/Theme'`,

        // mdPlugins: [],
        // gatsbyRemarkPlugins: [{}],
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.jsx`,
        enableIdentityWidget: false,
        publicPath: "admin",
        htmlTitle: "Admin",
        manualInit: true,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/content/blog/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "mdx",
        path: `${__dirname}/content/mdx/`,
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/content/mdx/`,
      },
    },
    "gatsby-plugin-catch-links",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-typescript",
    "gatsby-plugin-mdx",
  ],
}
