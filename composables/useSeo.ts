import url from "url";

// import { useI18n } from "vue-i18n";
import config from "@/config.json";


export default function({
    title,
    description,
    lang,
    location,
    publishedAt,
    updatedAt,
    isArticle = false,
    tags = [],
    type = `Article`,
    image,

}: SEOProps, site: Partial<SiteMetadata>={})  {
    site = {...config.siteMetadata,...site };

    const metadata = site as SiteMetadata;
    const siteTitle = title ? `${title} - ${metadata.title}` : metadata.title;
    const metaDescription = description
        ? description
        : metadata.description;
    const metaImage = image ? `${metadata.siteUrl}${image}` : null;
    const canonical = url.resolve(metadata.siteUrl, location);

    // lang ? null : lang = String(useI18n().locale);


    const ldJson = {
        "@context": "https://schema.org/",
        "@type": type,
        "author": {
            "@type": "Person",
            "name": metadata.author.name
        },
        ...(tags.length > 0 ? { "keywords": tags.join(`, `) } : {}),
        "headline": siteTitle,
        "url": canonical,
        ...(publishedAt ? { "datePublished": publishedAt } : {}),
        ...(updatedAt ? { "dateModified": updatedAt } : {}),
        ...(metaImage ? {
            "image": {
                "@type": "ImageObject",
                "url": metaImage,
                "width": "1000",
                "height": "520"
            }
        } : {}),
        "publisher": {
            "@type": "Organization",
            "name": metadata.title
        },
        "description": metaDescription,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": metadata.siteUrl
        }
    }

    return useHead({
        htmlAttrs: { lang: lang },
        title: siteTitle,
        meta: [
            {
                name: `description`,
                content: metaDescription,
            },
            {
                property: `og:title`,
                content: siteTitle,
            },
            {
                property: `og:type`,
                content: isArticle ? `article` : `website`,
            },
            {
                property: `og:description`,
                content: metaDescription,
            },
            {
                property: `og:url`,
                content: canonical,
            },
            {
                name: `twitter:label1`,
                content: `Written by`,
            },
            {
                name: `twitter:data1`,
                content: metadata.author.name,
            },
            {
                name: `twitter:card`,
                content: `summary`,
            },
            {
                name: `twitter:creator`,
                content: metadata.author.name,
            },
            {
                name: `twitter:title`,
                content: siteTitle,
            },
            {
                name: `twitter:description`,
                content: metaDescription,
            },
            {
                name: `keywords`,
                content: metadata.keywords.concat(tags).join(', '),
            },
            ...(publishedAt ? [{ name: `article:published_time`, content: publishedAt }] : []),
            ...(updatedAt ? [{ name: `article:modified_time`, content: updatedAt }] : []),
            ...(tags.length > 0 ? [{ name: `twitter:label2`, content: `Filed under`, }, { name: `twitter:data2`, content: tags[0], }] : []),
            ...(metaImage ? [{ property: `og:image`, content: metaImage, }, { name: `twitter:image`, content: metaImage, }] : []),

        ],
        script: [{
            type: `application/ld+json`,
            children: JSON.stringify(ldJson)
        }],
    })
}