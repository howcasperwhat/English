import DefaultTheme from 'vitepress/theme'
import './scroll-bar.css'
import './image.css'
import './progress.css'
import './custom.css'
import 'uno.css'
import NProgress from 'nprogress'
NProgress.configure({ showSpinner: false })

export default {
  ...DefaultTheme,
  enhanceApp({ router }) {
    if (typeof window === 'undefined') return
    router.onBeforeRouteChange = () => {
      NProgress.start()
    }
    router.onAfterRouteChanged = () => {
      NProgress.done()
    }
  }
}