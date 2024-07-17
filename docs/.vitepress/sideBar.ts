import {DefaultTheme} from "vitepress";

import toolsSideBar from "../tools/toolsSideBar";
import dockerSideBar from "../docker/dockerSideBar";


const sideBar: DefaultTheme.SidebarMulti = {
    '/tools/': toolsSideBar,
    '/docker/': dockerSideBar
}


export default sideBar