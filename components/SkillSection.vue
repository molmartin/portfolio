<template>
  <div>
    <h3 class="text-lg text-green-800 mb-2">
      {{ title }}
    </h3>

    <ul>
      <li
        v-for="skill in skillList"
        :key="skill"
        class="mb-2 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#939f9c] before:font-bold"
      >
        {{ skill }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string
  skillList: string[]
}>()
</script>
