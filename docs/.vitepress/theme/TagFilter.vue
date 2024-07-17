<script setup>
import {data} from './toolsTools.data.ts'
import {ref, watch} from 'vue'
import {useData} from "vitepress";

const {isDark} = useData()

/**
 * 获取 tag
 */
const getTags = (data) => {
    let tags = []
    data.forEach(item => {
        item.tags.forEach(item => {
            if (!tags.includes(item)) {
                tags.push(item)
            }
        })
    })
    tags.unshift('全部')
    return tags
}

const tags = getTags(data)

/**
 * 获取选中 tag 下的文章
 */
const getTagPosts = (tag, posts) => {
    return posts.filter(({tags}) => tags.length > 0 && tags.includes(tag))
}

const posts = ref(data)
const selectedTag = ref()

if (typeof window !== "undefined") {
    const selectedTag = ref(localStorage.getItem('tag'))
}


const filterPosts = (tag) => {
    selectedTag.value = tag
    if (typeof window !== "undefined") {
        localStorage.setItem('tag', tag)
    }
}

/*
* 将 tag 保存到 localStorage 中
* 防止刷新跳回默认
* */
watch(selectedTag, (a) => {
    if (a === '全部') {
        posts.value = data
    } else {
        posts.value = getTagPosts(selectedTag.value, data)
    }
}, {
    immediate: true,
    deep: true
})


</script>

<template>

    <main class="fl_main">
        <h1>筛选工具箱</h1>
        <p style="text-align: center">选择标签以筛选</p>


        <div class="tags">
            <div :class="isDark ? 'tags_dark' : 'tags_light'">
                <div v-for="tag in tags">
                    <div style="cursor: pointer"
                         :class="selectedTag === tag ? 'tag_selected' : 'tag'"
                         @click="filterPosts(tag)">{{ tag }}
                    </div>
                </div>
            </div>
        </div>

        <div class="divider-custom"></div>

        <div class="posts">
            <a v-for="post in posts"
               class="post"
               :class="isDark ? 'post-dark' : 'post-light'"
               :href="post.url">
                <div class="title">{{ post.title }}</div>
                <span class="excerpt">摘要：{{ post.excerpt ? post.excerpt : '暂无摘要...' }}</span>
            </a>
        </div>
    </main>

</template>

<style lang="scss">
.fl_main {
    padding: 30px;
    max-width: 1200px;
    margin: 0 auto;

    h1 {
        letter-spacing: -0.02em;
        margin-bottom: 15px;
        font-size: 32px;
        font-weight: 600;
        text-align: center;
    }

    .tags {
        display: flex;
        gap: 10px;
        margin: 28px 0;

        .tags_light {
            display: flex;
            gap: 15px;
            flex-wrap: wrap;

            .tag {
                background-color: var(--104070-no-select-l);
                padding: 3px 8px;
                border-radius: 8px;
            }

            .tag_selected {
                background-color: var(--104070-selected-l);
                color: #fff;
                padding: 3px 8px;
                border-radius: 8px;
            }
        }

        .tags_dark {
            display: flex;
            gap: 15px;
            flex-wrap: wrap;

            .tag {
                background-color: var(--104070-no-select-d);
                padding: 3px 8px;
                border-radius: 8px;
            }

            .tag_selected {
                background-color: var(--104070-selected-d);
                padding: 3px 8px;
                border-radius: 8px;
            }
        }
    }

    .posts {
        padding: 20px 0;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;

        @media (max-width: 768px) {
            grid-template-columns: 1fr;
        }

        .post {
            display: block;
            //border: .5px solid var(--vp-c-divider);
            border: 1px solid #000;
            border-radius: 8px;
            padding: 15px;

            .title {
                display: block;
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 10px;
            }

            .excerpt {
                color: var(--vp-c-text-3);
                font-size: 14px;
                line-height: 1.4em;

                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                line-clamp: 2;
                -webkit-box-orient: vertical;
            }
        }

        .post-light {
            box-shadow: 0 0 10px rgba(196, 196, 196, 0.5);
        }

        .post-dark {
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }
    }
}
</style>