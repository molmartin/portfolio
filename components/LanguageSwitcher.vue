<template>
  <section class="flex gap-2">
    <NuxtLink
      v-for="availableLocale in availableLocales"
      :key="availableLocale"
      class="cursor-pointer"
      :class="[
        'cursor-pointer',
        {
          grayscale: availableLocale !== locale,
        },
      ]"
      @click="setLocale(availableLocale)"
    >
      <Icon v-if="availableLocale === 'cs'" name="circle-flags:cz" size="2em" />
      <Icon v-else name="circle-flags:en" size="2em" />
    </NuxtLink>
  </section>
</template>

<script lang="ts" setup>
const { setLocale, availableLocales, locale } = useI18n()
</script>
