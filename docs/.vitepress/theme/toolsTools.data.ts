import {createContentLoader} from "vitepress";

export default createContentLoader('tools/*/*.md', {
    transform(data) {
        return data.map((item) => {
            return {
                image: item.frontmatter.image ? item.frontmatter.image : null,
                title: item.frontmatter.title ? item.frontmatter.title : null,
                url: item.url,
                tags: item.frontmatter.tags ? item.frontmatter.tags : [],
                // excerpt: item.frontmatter.excerpt ? item.frontmatter.excerpt : null,
                description: item.frontmatter.description ? item.frontmatter.description : null,
            }
        })
    },
})



