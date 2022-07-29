import { serverQueryContent } from '#content/server'
import { SitemapStream, streamToPromise } from 'sitemap'
export default defineEventHandler(async (event) => {
  // Fetch all documents
  const docs = await serverQueryContent(event).find()
  const sitemap = new SitemapStream({
    hostname: 'https://alejandrosuarez.eu'
  })
  // Add URLs to the sitemap
  for (const webpage of ["/", "/blog", "/videochat", "/es", "/es/blog"]) {
    sitemap.write({
      url: webpage,
      changefreq: 'monthly'
    })
  }

  for (const doc of docs) {
    if (doc.published)
      sitemap.write({
        url: doc._path,
        changefreq: 'monthly'
      })
  }

  sitemap.end()
  return streamToPromise(sitemap)
}) 