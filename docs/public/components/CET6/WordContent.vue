<script setup lang='ts'>
import { WordProps } from '../../types/ArticleProps';
const props = defineProps<{
  word: WordProps
}>()
function highlightWord(sentence: string): string {
  return sentence.replace(new RegExp('' + props.word.word, 'g'), `<span c="$word-yellow" text-w-6>${props.word.word}</span>`)
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
        <span c="$word-blue" v-text="item" />
      </li>
    </ol>
  </div>
</template>

<style scoped></style>