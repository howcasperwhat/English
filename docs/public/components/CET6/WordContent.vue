<script setup lang='ts'>
import { WordProps } from '../../types/ArticleProps';
const props = defineProps<{
  word: WordProps
}>()
function highlightWord(sentence: string): string {
  const patten = new RegExp('' + props.word.word, 'gi')
  const value = sentence.match(patten)
  if (!value) return sentence
  return sentence.replace(patten, `<span c="$word-yellow" text-w-6>$&</span>`)
}
</script>

<template>
  <div children-p-l-4>
    <ul p-l-0>
      <li v-for="item, key in props.word.ch" text="4" children-p-r-1>
        <span c="$word-green" text-w-6 v-text="key" />
        <span v-html="item.join('；')" />
      </li>
    </ul>
    <ol c-gray list-decimal>
      <li v-for="item, key in props.word.sentence" text="4" children-p-r-1>
        <span v-html="highlightWord(key.toString())" />
        <br />
        <span v-text="item" />
      </li>
    </ol>
  </div>
</template>

<style scoped></style>