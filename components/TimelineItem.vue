<template>
  <div class="mb-8 relative pl-8">
    <!-- Timeline dot -->
    <div class="absolute top-2 left-0 w-3 h-3 rounded-full bg-green-800" />

    <!-- Timeline line (except for last item) -->
    <div v-if="!isLast" class="absolute top-4 left-[5px] w-0.5 h-full bg-green-800" />

    <div class="flex flex-col md:flex-row md:justify-between mb-1">
      <div>
        <div class="font-bold text-lg text-green-800">{{ title }}</div>
        <div class="font-medium">{{ subtitle }}</div>
      </div>
      <div class="text-sm text-gray-500 md:text-right mt-1 md:mt-0">
        {{ date }}
      </div>
    </div>

    <div class="text-gray-700 pt-1">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  title: string
  subtitle: string
  date: string
  isLast?: boolean
}

defineProps<Props>()
</script>
