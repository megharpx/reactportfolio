module.exports = {
    siteMetadata: {
      // Site URL for when it goes live
      siteUrl: `https://megharpx.github.io/reactporfolio/`,
      // Your Name
      name: 'Meghan Harper',
      // Main Site Title
      title: `Meghan Harper | Full-Stack Developer`,
      // Description that goes under your name in main bio
      description: `more info coming`,
      // Optional: Github account URL
      github: `https://github.com/megharpx`,
      // Optional: LinkedIn account URL
      linkedin: `https://www.linkedin.com/i`,
      // Content of the About Me section
      about: `about me coming`,
      // Optional: List your projects, they must have `name` and `description`. `link` is optional.
      projects: [
        {
            
          name: 'Horiseon',
          description:
            'Website for Horiseon Social Services',
          link: 'https://megharpx.github.io/Horiseon/index.html',
          repoLink: 'https://github.com/megharpx/horiseon',
        },
        {
          name: 'Run Buddy',
          description:
            'Website for Run Buddy Personal training',
          link: 'https://megharpx.github.io/run-buddy/index.html',
          repoLink: 'https://github.com/megharpx/run-buddy',
        },
        {
          name: 'Password generator',
          description:
            'Password Generator',
          link: 'https://megharpx.github.io/Password-generator/Develop/index.html',
          repoLink: 'https://github.com/megharpx/password-generator',
        },
      ],
      // Optional: List your experience, they must have `name` and `description`. `link` is optional.
      experience: [
        {
          name: '--',
          description: 'coming soon',
          link: '--',
        },
        {
          name: '--',
          description: 'coming soon',
          link: '--',
        },
        {
          name: '--',
          description: 'coming soon',
          link: '--',
        },
      ],
      // Optional: List your skills, they must have `name` and `description`.
      skills: [
        {
          name: 'Languages & Frameworks',
          description:
            'JavaScript (ES6+), Golang, Node.js, Express.js, React, Ruby on Rails, PHP',
        },
        {
          name: 'Databases',
          description: 'MongoDB, PostreSQL, MySQL',
        },
        {
          name: 'Other',
          description:
            '---'
        },
      ],
    },
    plugins: [
      `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`,
        },
      },
      {
       resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/content/blog`,
          name: `blog`,
        },
      },
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 590,
                wrapperStyle: `margin: 0 0 30px;`,
              },
            },
            {
              resolve: `gatsby-remark-responsive-iframe`,
              options: {
                wrapperStyle: `margin-bottom: 1.0725rem`,
              },
            },
            `gatsby-remark-prismjs`,
            `gatsby-remark-copy-linked-files`,
            `gatsby-remark-smartypants`,
          ],
        },
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      `gatsby-plugin-postcss`,
      `gatsby-plugin-feed`,
      {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
        },
      },
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `devfolio`,
          short_name: `devfolio`,
          start_url: `/`,
          background_color: `#663399`,
          theme_color: `#663399`, // This color appears on mobile
          display: `minimal-ui`,
          icon: `src/images/icon.png`,
        },
      },
    ],
  };