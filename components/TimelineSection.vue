<template>
  <section class="mb-10">
    <h2 class="text-2xl mb-5 pb-2 border-b-2 border-[#939f9c] text-green-800">
      {{ t(titleKey) }}
    </h2>

    <div class="relative">
      <TimelineItem
        v-for="item in sections"
        :key="item.subtitle"
        :title="item.title"
        :subtitle="item.subtitle"
        :date="item.date"
      >
        <p>
          {{ item.description }}
        </p>
      </TimelineItem>
    </div>
  </section>
</template>

<script lang="ts" setup>
const { t, tm } = useI18n()

const props = defineProps<{
  titleKey: string
  sectionKey: string
}>()

type CVSection = {
  title: string
  subtitle: string
  date: string
  description: string
}

const sections: CVSection[] = tm(props.sectionKey)
</script>
