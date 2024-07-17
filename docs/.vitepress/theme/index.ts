import DefaultTheme from 'vitepress/theme'
import './custom.css'


// 将 tag=全部 保存到 localStorage
if (!localStorage.getItem('tag')) {
    localStorage.setItem('tag', '全部')
}


export default DefaultTheme;