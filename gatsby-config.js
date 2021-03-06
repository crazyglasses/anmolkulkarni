require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
    siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Anmol Kulkarni`,
    // Default title of the page
    siteTitleAlt: `Anmol Kulkarni's Blog`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Anmol Kulkarni's Blog`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://anmolkulkarni.com`,
    // Used for SEO
    siteDescription: `Anmol Kulkarnis Blog`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `@anmolkulkarni`,
  },

  plugins: [
    {
        resolve: 'gatsby-remark-emojis',
        options: {
          // Deactivate the plugin globally (default: true)
          active : true,
          // Add a custom css class
          class  : 'emoji-icon',
          // In order to avoid pattern mismatch you can specify
          // an escape character which will be prepended to the
          // actual pattern (e.g. `#:poop:`).
          escapeCharacter : '#', // (default: '')
          // Select the size (available size: 16, 24, 32, 64)
          size   : 64,
          // Add custom styles
          styles : {
            display      : 'inline',
            margin       : '0',
            'margin-top' : '1px',
            position     : 'relative',
            top          : '5px',
            width        : '25px'
          }
        }
    },
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/anmolkulkarni3`,
          },
          {
            name: `Instagram`,
            url: `https://www.instagram.com/anmolkulkarni/`,
          },
          {
            name: `Linkedin`,
            url: `https://www.linkedin.com/in/anmolkulkarni/`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Anmol kulkarni's Blog`,
        short_name: `my blog`,
        description: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/banner.jpg`,
            sizes: `192x192`,
            type: `image/jpg`,
          },
          {
            src: `/banner.jpg`,
            sizes: `512x512`,
            type: `image/jpg`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
