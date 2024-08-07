import {HeadConfig, PageData, TransformPageContext} from "vitepress";


const twitterCard = (pageData: PageData, ctx: TransformPageContext) => {
    pageData.frontmatter.head ??= []
    const {frontmatter} = pageData
    const {title, description: siteDescription} = ctx.siteConfig.site

    // 构造每页的 Header
    const ogTitle: HeadConfig = ["meta", {
        property: "og:title",
        content: frontmatter.title
    }]
    const ogDescription: HeadConfig = ["meta", {
        property: "og:description",
        content: frontmatter.description || siteDescription
    }]
    const ogImage: HeadConfig = ["meta", {
        property: "og:image",
        content: frontmatter.image || 'https://www.104070.xyz/logo/logo_png.png'
    }]

    const twitterCard: HeadConfig = ["meta", {
        name: 'twitter:card',
        content: 'summary'
    }]
    const twitterSite: HeadConfig = ["meta", {
        name: "twitter:site",
        content: '@104070Share'
    }]
    const twitterCreator: HeadConfig = ["meta", {
        name: "twitter:creator",
        content: '@104070Share'
    }]
    const twitterImage: HeadConfig = ["meta", {
        name: "twitter:image",
        content: frontmatter.image || 'https://www.104070.xyz/logo/logo_png.png'
    }]
    const twitterTitle: HeadConfig = ["meta", {
        name: "twitter:title",
        content: frontmatter.title
    }]
    const twitterDescription: HeadConfig = ["meta", {
        name: "twitter:description",
        content: frontmatter.description || siteDescription
    }]


    pageData.frontmatter.head.push(
        ogTitle, ogDescription, ogImage,
        twitterCard, twitterSite, twitterCreator, twitterTitle, twitterImage, twitterDescription
    )
}

export default twitterCard