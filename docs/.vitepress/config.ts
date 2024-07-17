import {defineConfig} from "vitepress";
// 点击图片放大
// 参考：https://zichin.com/blog/1.VitePress/3.%E6%80%8E%E4%B9%88%E7%BB%99%20vitepress%20%E6%B7%BB%E5%8A%A0%E7%82%B9%E5%87%BB%E5%9B%BE%E7%89%87%E6%94%BE%E5%A4%A7%E9%A2%84%E8%A7%88%E5%8A%9F%E8%83%BD.html
import mdItCustomAttrs from "markdown-it-custom-attrs";
import social from "../public/social/social";
import navBar from "./navBar";
import sideBar from "./sideBar";


export default defineConfig({
    title: '一〇四〇七〇',
    lang: 'zh-CN',

    themeConfig: {
        siteTitle: '一〇四〇七〇',
        logo: {
            light: '/logo/logo_light.svg',
            dark: '/logo/logo_dark.svg',
            alt: '一〇四〇七〇'
        },
        footer: {
            copyright: `Copyright ${new Date().getFullYear()} <a href="/">一〇四〇七〇.</a> All Rights Reserved`
        },
        // navbar
        nav: navBar,
        // sidebar
        sidebar: sideBar,

        // 其他配置
        outline: {
            label: '目录',
            level: [2, 4]
        },
        langMenuLabel: '菜单',
        sidebarMenuLabel: '菜单',
        lastUpdated: {
            text: '更新时间'
        },
        darkModeSwitchLabel: '夜间模式',
        darkModeSwitchTitle: '切换到夜间模式',
        lightModeSwitchTitle: '切换到白天模式',
        returnToTopLabel: '返回顶部',
        notFound: {
            title: '糟糕！这个宝箱什么都没！',
            quote: '我们认为这些真理是不言而喻的：人人生而平等，造物主赋予他们某些不可剥夺的权利，其中包括生命权、自由权和追求幸福的权利。',
            linkLabel: '返回首页',
            linkText: '🏡 返回首页'
        },
        socialLinks: [
            {
                icon: {svg: social.x},
                link: 'https://x.com/104070Share'
            },
            // {
            //     icon: {svg: social.github},
            //     link: 'https://github.com'
            // },
            {
                icon: {svg: social.telegram},
                link: 'https://t.me/share104070'
            }
        ],
        docFooter: {
            prev: '上一个宝箱',
            next: '下一个宝箱'
        },
        search: {
            provider: 'local',
            options: {
                translations: {
                    button: {
                        buttonText: '搜索宝箱',
                    },
                    modal: {
                        noResultsText: '没找到宝箱...',
                        resetButtonTitle: '清除内容',
                        displayDetails: '显示模式',
                        backButtonTitle: '返回',
                        footer: {
                            navigateText: '选择宝箱',
                            selectText: '打开宝箱',
                            closeText: '关闭搜索'
                        }
                    }
                }
            }
        },
        externalLinkIcon: true,
    },

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
    head:[
        [
            "link",
            {
                rel:"icon",
                href:"/logo/logo_light.svg"
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
        ]
    ]
})