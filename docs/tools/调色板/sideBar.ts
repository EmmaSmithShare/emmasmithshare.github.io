import {DefaultTheme} from "vitepress";


const colorSideBar: DefaultTheme.SidebarItem = {
    text: '调色板',
    collapsed: true,
    items: [
        {text:'ColorSpace', link:'/tools/调色板/ColorSpace'},
        {text:'Colors', link:'/tools/调色板/Colors'},
        {text:'HappyHues', link:'/tools/调色板/HappyHues'},
    ]
}

export default colorSideBar