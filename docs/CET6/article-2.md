<style scope>
strong, b { color: var(--vp-c-yellow-light); cursor: pointer; }
</style>
<script setup lang='ts'>
import words from '../public/assets/CET6/article-2'
import { useData } from 'vitepress'
import { computed } from 'vue'
import { NDialogProvider, lightTheme, darkTheme } from 'naive-ui'
import { default as NConfigProvider } from 'naive-ui/lib/config-provider/src/ConfigProvider'
import TranslateProvider from '../public/components/CET6/TranslateProvider.vue'
const { isDark } = useData()
const theme = computed(() => isDark.value ? darkTheme : lightTheme)
</script>

# 19 06 1 P3 S1
**Pasta** is no longer off the menu, after a new **review** of studies suggested that the **carbohydrate** can form part of a healthy diet, and even help people lose weight. For years, nutritionists have recommended that pasta be kept to a minimum , to cut calories, prevent fat build-up and stop blood shooting up sugar.  
The low-carbohydrate food **movement** gave birth to such **diets** as the Atkins, Paleo and Keto, which advised swapping foods like **bread**, pasta and potatoes for vegetables, fish and meat. More recently the trend of swapping **spaghetti** for vegetables has been **championed** by clean-eating experts.  
But now a systematic review and analysis of 30 studies by Canadian researchers found that not only does pasta not cause weight gain, but three **meals** a week can help people drop more than half a kilogram over four months. The reviewers found that pasta had been unfairly **demonized** because it had been **lumping** in with other, more fat-promoting carbohydrates.  
“The study found that pasta didn't contribute to weight gain or increase in body fat,” said **lead** author Dr John Sievenpiper.“ In weighing the evidence, we can now say with some confidence that **adverse** effect on body weight **outcomes** when it is **consumed** as part of a pasta does not have an healthy **dietary** pattern.” In fact, analysis actually showed a small weight loss **contrary** to **concerns**. Perhaps pasta can be part of a healthy diet.  
Those **involved** in the **clinical** trials on average ate 33 **servings** of pasta a week instead of other carbohydrates, one serving equaling around half a cup. They lost around half a kilogram over an average follow-up of 12 weeks.

<n-config-provider :theme="theme">
   <n-dialog-provider>
      <translate-provider :words="words" />
   </n-dialog-provider>
</n-config-provider>