import {DefaultTheme} from "vitepress";

const avatarSidebar:DefaultTheme.SidebarItem = {
    text:'头像',
    collapsed:true,
    items:[
        {text:'avatars', link:'/tools/头像/avatars'},
        {text:'vueColorAvatar', link:'/tools/头像/vue-color-avatar'},
        {text:'像素头像生成', link:'/tools/头像/avatarsinpixels'},
    ]
}


export default avatarSidebar