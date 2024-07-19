import {DefaultTheme} from "vitepress";
import navBar from "./navBar";
import sideBar from "./sideBar";
import social from "../public/social/social";


const themeConfig: DefaultTheme.Config = {
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
}


export default themeConfig