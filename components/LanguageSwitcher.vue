<template>
  <section>
    <NuxtLink
      v-for="availableLocale in availableLocales"
      :key="availableLocale"
      :to="switchLocalePath(availableLocale)"
      :class="[
        'cursor-pointer hover:grayscale-0 transition duration-200 ml-2',
        {
          grayscale: availableLocale !== locale,
        },
      ]"
    >
      <Icon v-if="availableLocale === 'cs'" name="circle-flags:cz" size="2em" />
      <Icon v-else name="circle-flags:en" size="2em" />
    </NuxtLink>
  </section>
</template>

<script lang="ts" setup>
const { locale, availableLocales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>
