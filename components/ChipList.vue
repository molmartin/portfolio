<template>
  <div class="flex flex-wrap gap-4">
    <div
      v-for="chip in chips"
      :key="chip"
      class="bg-green-800 text-white px-4 py-1 rounded-full text-sm"
    >
      {{ chip }}
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  chips: string[]
}>()
</script>
