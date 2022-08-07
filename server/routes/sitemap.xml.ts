import { serverQueryContent } from '#content/server'
import { SitemapStream, streamToPromise } from 'sitemap'
export default defineEventHandler(async (event) => {
  // Fetch all documents
  const docs = await serverQueryContent(event).find()
  const sitemap = new SitemapStream({
    hostname: 'https://alejandrosuarez.eu'
  })
  // Add URLs to the sitemap

  const sitemapCommon = {
    changefreq: 'daily',
    lastmod: new Date().toISOString(),
    priority: 0.8
  }
  for (const webpage of ["/", "/blog/", "/videochat/", "/es/", "/es/blog/"]) {
    sitemap.write({
      url: webpage,
      ...sitemapCommon
    })
  }

  for (const doc of docs) {
    if (doc.published)
      sitemap.write({
        url: doc._path+"/",
        ...sitemapCommon
      })
  }

  sitemap.end()
  return streamToPromise(sitemap)
}) 