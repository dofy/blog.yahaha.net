import { siteConfig } from './lib/site-config'

// https://7-rocket.notion.site/blog-yahaha-net-86887ee4e6dd43b694726bd74b2a6d5e

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '86887ee4e6dd43b694726bd74b2a6d5e',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: '7-Blog # yahaha.net',
  domain: 'blog.yahaha.net',
  author: 'Seven Yu',

  // open graph metadata (optional)
  description: "Seven Yu's Blog",

  // social usernames (optional)
  twitter: 'dofy',
  github: 'dofy',
  linkedin: 'sevenyu',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }

  pageUrlOverrides: {
    '/About': 'c497a6e09e594c6ea4db6ba34319242c'
  },

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: 'c497a6e09e594c6ea4db6ba34319242c'
    }
    // {
    //   title: 'Contact',
    //   pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
    // }
  ]
})
