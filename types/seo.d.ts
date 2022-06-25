interface SEOProps {
    title?: string;
    lang?: string;
    description?: string;
    location: string;
    publishedAt?: string;
    updatedAt?: string;
    isArticle?: boolean;
    tags?: string[];
    type?: 'WebSite' | 'Series' | 'Article';
    image?: string;
}

interface SocialChannels {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    youtube?: string;
    github?: string;
    twitch?: string;
}

interface SiteMetadata {
    keywords: string[];
    title: string;
    siteUrl: string;
    description: string;
    author: {
        name: string;
        description: string;
        social: SocialChannels;
    };

}