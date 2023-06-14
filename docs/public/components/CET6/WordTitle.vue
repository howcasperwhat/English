<script setup lang='ts'>
import { Phonetic } from '../../types/ArticleProps'
const props = defineProps<{
  word: String
  phonetic: Phonetic
}>()
</script>

<template>
  <div children-p-2 text="4 w-6">
    <span c="$word-yellow">
      {{ props.word }}
    </span>
    <br />
    <span v-if="props.phonetic && props.phonetic.uk" c-gray>
      <span p-r-2>us:</span>
      <span>[ {{ props.phonetic.uk }} ]</span>
    </span>
    <span v-if="props.phonetic && props.phonetic.us" c-gray>
      <span p-r-2>uk:</span>
      <span>[ {{ props.phonetic.us }} ]</span>
    </span>
  </div>
</template>

<style scoped></style>