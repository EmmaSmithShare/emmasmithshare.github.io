import {createContentLoader} from "vitepress";

export default createContentLoader('tools/*/*.md', {
    transform(data) {
        return data.map((item) => {
            return {
                title: item.frontmatter.title ? item.frontmatter.title : null,
                url: item.url,
                tags: item.frontmatter.tags ? item.frontmatter.tags : [],
                excerpt: item.frontmatter.excerpt ? item.frontmatter.excerpt : null,
            }
        })
    },
})



