<template>
  <header class="bg-[#d4e5e1]">
    <MainContainer>
      <div class="flex items-center gap-8 flex-col md:flex-row py-10">
        <div
          class="w-[150px] h-[150px] md:w-[120px] md:h-[120px] rounded-full bg-[#afb8b5] flex items-center justify-center overflow-hidden border-3 border-white"
        >
          <img src="~/assets/img/profile.jpg" alt="Martin Mol" class="w-full h-full object-cover" />
        </div>
        <div class="text-center md:text-left">
          <h1 class="text-3xl md:text-2xl mb-1 text-[#00865b]">
            {{ t('header.title') }}
          </h1>
          <p>{{ t('header.job') }}</p>
          <p>
            <a :href="'mailto:' + t('header.email')" class="text-[#00865b] hover:no-underline">{{
              t('header.email')
            }}</a>
            |
            <a :href="'tel:' + t('header.phone')" class="text-[#00865b] hover:no-underline">{{
              t('header.phone')
            }}</a>
          </p>
          <p>{{ t('header.address') }}</p>

          <LanguageSwitcher class="flex gap-2 mt-5" />
        </div>
      </div>
    </MainContainer>
  </header>
</template>

<script lang="ts" setup>
const { t } = useI18n()
</script>
