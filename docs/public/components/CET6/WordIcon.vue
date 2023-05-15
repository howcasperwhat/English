<script setup lang='ts'>
const props = defineProps<{
  source: String
}>()
</script>

<template>
  <span text-3 flex="~ items-center justify-center" w-8 select-none>
    {{ props.source }}
  </span>
</template>

<style scoped></style>