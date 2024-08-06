import {DefaultTheme} from "vitepress";
import imgZipSideBar from "./图片压缩/imgZipSideBar";
import imgCupSidebar from "./截图/imgCupSidebar";
import textCardSideBar from "./文字卡片/textCardSideBar";
import colorSideBar from "./调色板/sideBar";
import avatarSidebar from "./头像/avatarSidebar";


const toolsSideBar: DefaultTheme.SidebarItem[] = [
    {text: '筛选', link: '/tools/index'},
    textCardSideBar,
    imgZipSideBar,
    imgCupSidebar,
    colorSideBar,
    avatarSidebar,
    {
        text: '孤品',
        collapsed: true,
        items: [
            {text: 'emoji查询', link: '/tools/孤品/emoji'},
            {text: '截图美化', link: '/tools/孤品/截图美化'},
        ]
    },
]


export default toolsSideBar