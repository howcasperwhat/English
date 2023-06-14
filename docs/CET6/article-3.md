<style scope>
strong, b { color: var(--vp-c-yellow-light); cursor: pointer; }
</style>
<script setup lang='ts'>
import words from '../public/assets/CET6/article-3'
import { useData } from 'vitepress'
import { computed } from 'vue'
import { NDialogProvider, lightTheme, darkTheme } from 'naive-ui'
import { default as NConfigProvider } from 'naive-ui/lib/config-provider/src/ConfigProvider'
import TranslateProvider from '../public/components/CET6/TranslateProvider.vue'
const { isDark } = useData()
const theme = computed(() => isDark.value ? darkTheme : lightTheme)
</script>

# 19 06 3 3 C1
When I re-entered the full-time workforce a few years ago after a decade of **solitary** **self-employment**, there was one thing I was looking forward to the most: the opportunity to have work friends once again. It wasn't until I entered the corporate world that I realized, for me at least, being friends with colleagues didn't **emerge** as a priority at all. This is surprising when you consider the **prevailing** emphasis by scholars and trainers and managers on the importance of cultivating close interpersonal relationships at work. So much research has explored the way in which collegial （同事的）ties can help overcome a range of workplace issues affecting productivity and the quality of work output such as team-based conflict, **jealousy**, **undermining**, anger, and more.



Perhaps my expectations of lunches, water-cooler gossip and caring, deep-and-meaningful conversations were a **legacy** of the last time I was in that kind of office environment. Whereas now, as I near the end of my fourth decade, I realize work can be fully functional and entirely fulfilling without needing to be best **mates** with the people sitting next to you.



In an academic analysis just published in the **profoundly-respected** Journal of Management, researchers have looked at the concept of "indifferent relationships". It's a simple term that encapsulates （概括） the fact that relationships at work can reasonably be non-intimate, **inconsequential**, unimportant and even, dare I say it, **disposable** or **substitutable**.



Indifferent relationships are neither positive nor negative. The limited research **conducted** thus far indicates they're especially **dominant** among those who value independence over cooperation, and harmony over **confrontation**. Indifference is also the preferred option among those who are socially lazy. Maintaining relationships over the long term takes effort. For some of us, too much effort.



As noted above, indifferent relationships may not always be the most helpful approach in resolving some of the issues that pop up at work. But there are **nonetheless** **several** **empirically** proven benefits. One of those is efficiency. Less time chatting and socializing means more time working and（产出）.



The other is **self-esteem**. As human beings, we're **primed** to compare ourselves to each other in what is an **anxiety-inducing** phenomenon. Apparently, we look down on **acquaintances** more so than **mends**. Since the **former** is most common among those **inclined** towards indifferent relationships, their **predominance** can **bolster** individuals' sense of self-worth.



**Ego aside**, a third advantage is that the emotional **neutrality** of indifferent relationships has been found to enhance critical evaluation, to strengthen one's focus on task **resolution**, and to gain greater access to valuable information. None of that might be as fun as after-work socializing but, hey, I'll **take it anyway**.

<n-config-provider :theme="theme">
   <n-dialog-provider>
      <translate-provider :words="words" />
   </n-dialog-provider>
</n-config-provider>
