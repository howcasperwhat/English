---
title: article-1
lang: zh-CN
---
<style scope>
strong, b { color: var(--vp-c-yellow-light); cursor: pointer; }
</style>
<script setup lang='ts'>
import { useData } from 'vitepress'
import { computed } from 'vue'
import { NDialogProvider, lightTheme, darkTheme } from 'naive-ui'
import { default as NConfigProvider } from 'naive-ui/lib/config-provider/src/ConfigProvider'
import TranslateProvider from '../public/components/CET6/TranslateProvider.vue'
import words from '../public/assets/CET6/article-1'
const { isDark } = useData()
const theme = computed(() => isDark.value ? darkTheme : lightTheme)
</script>

<n-config-provider :theme="theme">
   <n-dialog-provider>
      <translate-provider :words="words" />
   </n-dialog-provider>
</n-config-provider>

# 21 06 2 P3 S1
　　I'm always **baffled** when I walk into a **pharmacy** and see **shelves** **bursting** with various **vitamins** **extracts** and other **supplements**, all promising to accelerate or promote weight loss. **Aisles** of marketing genius **belie** the fact that, **ultimately**, weight loss is dictated by the laws of **arithmetic**. Economist Jessica Irvine wrote a book about how she used math to help her lose more than 18 kilograms. If **calories** taken in are less than calories **expended**, weight shall be lost, and so it is with money.  
　　Despite the abundance of financial products, service and solutions **geared** towards accumulating wealth, it all begins with the same equation: getting ahead financially requires a **reduction** of **spending**, so that income is greater than **expenses**, i was reminded of this again recently listening to an interview with Nicole Haddow the author of *Samshed Avocado*, explaining how she **cracked** the **property** market at 31, it was quite a **feat**, given where she had been two years earlier.  
　　Nicole didn't celebrate her 30th birthday as she had **envisaged**. She was **sobbing** at the dinner table with her parents, with whom she had just moved back in. She had no stable income $12000 in credit-card debt and no plan, but to her **astonishment**, her father, an **accountant** told her that her financial plight wasn't as bad as she thought. He said, on her income, with some changes, she would be able to buy an **investment** unit within two years, which she did.  
　　Nicole admitted she was fortunate, as she was able to live with her parents and **overhaul** her spending and life to get herself on track financially. Creating a gap between her income and spending required a **paradigm** shift and **entailed** sacrifice and commitment but by going into financial lockdown, Nicole gained financial independence.  