<template>
  <div class="flex items-center whitespace-nowrap">
    <Icon :name="icon" class="mr-1" />
    <a
      :href="href"
      :target="external && '_blank'"
      class="hover:text-green-400 transition-colors duration-300"
    >
      {{ text }}
    </a>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  icon: string
  href: string
  text: string
  external?: boolean
}>()
</script>
