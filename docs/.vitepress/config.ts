import {defineConfig} from "vitepress";
import twitterCard from "./theme/twitterCard";
// 点击图片放大
// 参考：https://zichin.com/blog/1.VitePress/3.%E6%80%8E%E4%B9%88%E7%BB%99%20vitepress%20%E6%B7%BB%E5%8A%A0%E7%82%B9%E5%87%BB%E5%9B%BE%E7%89%87%E6%94%BE%E5%A4%A7%E9%A2%84%E8%A7%88%E5%8A%9F%E8%83%BD.html
import mdItCustomAttrs from "markdown-it-custom-attrs";
import themeConfig from "./themeConfig";


export default defineConfig({
    title: '一〇四〇七〇',
    description: '一个专注于分享互联网软件、图片和工具的资源平台。发现、学习、分享，让每一次访问都充满惊喜。',
    lang: 'zh-CN',
    themeConfig,
    vite: {
        server: {
            host: '0.0.0.0'
        }
    },
    markdown: {
        lineNumbers: true,
        codeCopyButtonTitle: '复制代码',
        /*
        * vitepress 用 markdown-it 进行渲染
        * 如果要为 table 增加一个父节点，只能这么写
        * config -> markdown-it 扩展
        *           .use 使用插件
        * */
        config(md) {
            md.use((md) => {
                md.renderer.rules.table_open = function (tokens, idx, options, env, self) {
                    return '<div class="table_p">\n<table>';
                };

                md.renderer.rules.table_close = function (tokens, idx, options, env, self) {
                    return '</table>\n</div>';
                };
            }).use(mdItCustomAttrs, "image", {
                "data-fancybox": "gallery",
            });
        },
    },
    head: [
        [
            "script",
            {
                defer: '',
                src: 'https://cloud.umami.is/script.js',
                "data-website-id": "eafaf19d-09b6-4795-a25c-574481e0114a",
            }
        ],
        [
            "link",
            {
                rel: "icon",
                href: "/logo/logo_light.svg"
            }
        ],
        [
            "link",
            {
                rel: "stylesheet",
                href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css",
            },
        ],
        [
            "script",
            {
                src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js",
            },
        ],
        [
            "meta",
            {
                name:'google-site-verification',
                content:'liPLWRUFewbdty-fo1ydNaVsaPuHAxV3uu9IP536Ujk'
            }
        ]
    ],

    transformPageData(pageData, ctx) {
        twitterCard(pageData, ctx);
    },
})