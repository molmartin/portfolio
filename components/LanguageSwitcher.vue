<template>
  <section>
    <NuxtLink
      v-for="availableLocale in availableLocales"
      :key="availableLocale"
      class="px-4 py-1 rounded-full text-sm border border-[#00865b] transition-colors cursor-pointer"
      :class="
        availableLocale === locale ? 'bg-[#00865b] text-white' : 'bg-opacity-20 text-[#00865b]'
      "
      @click="setLocale(availableLocale)"
    >
      {{ t(`language.${availableLocale}`) }}
    </NuxtLink>
  </section>
</template>

<script lang="ts" setup>
const { setLocale, availableLocales, locale, t } = useI18n()
//TODO tailwind
</script>
