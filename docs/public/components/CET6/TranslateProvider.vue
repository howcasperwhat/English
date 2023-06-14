<script setup lang='ts'>
import { Component, h, onMounted } from 'vue';
import { useDialog } from 'naive-ui'
import type { WordProps } from '../../types/ArticleProps'
import WordIcon from './WordIcon.vue'
import WordTitle from './WordTitle.vue'
import WordContent from './WordContent.vue'
const dialog = useDialog()
const props = defineProps<{
  words: Array<WordProps>
}>()
const toLowerCase = (string: string) => {
  var ans = ''
  for (const ch of string) {
    if (ch == ' ' || ch == '-')
      ans += ch
    else
      ans += ch.toLowerCase()
  }
  return ans
}
onMounted(() => {
  document.querySelectorAll('strong').forEach((el) => {
    el.onclick = () => {
      const word = props.words.find((word) => word.word === toLowerCase(el.innerText))
      dialog.info({
        icon: () => h(WordIcon as Component, { source: word?.source }),
        title: () => h(WordTitle as Component, { word: word?.word, phonetic: word?.phonetic }),
        content: () => h(WordContent as Component, { word: word }),
      })
    }
  })
})
</script>

<template></template>

<style></style>