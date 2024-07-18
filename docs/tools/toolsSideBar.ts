import {DefaultTheme} from "vitepress";
import imgZipSideBar from "./图片压缩/imgZipSideBar";
import textCardSideBar from "./文字卡片/textCardSideBar";


const toolsSideBar: DefaultTheme.SidebarItem[] = [
    {text: '筛选', link: '/tools/index'},
    textCardSideBar,
    imgZipSideBar,
    {
        text: '孤品',
        items: [
            {text: 'emoji查询', link: '/tools/孤品/emoji'}
        ]
    },
]


export default toolsSideBar