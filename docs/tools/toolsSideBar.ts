import {DefaultTheme} from "vitepress";


const toolsSideBar: DefaultTheme.SidebarItem[] = [
    {text: '筛选', link: '/tools/index'},
    {
        text: '孤品',
        items: [
            { text:'emoji查询', link:'/tools/孤品/emoji'}
        ]
    }
]


export default toolsSideBar