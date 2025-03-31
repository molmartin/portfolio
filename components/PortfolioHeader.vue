<template>
  <header class="bg-green-800 text-white shadow-md">
    <MainContainer>
      <div class="flex px-10 md:px-5 py-6 justify-between">
        <div class="space-y-6">
          <div>
            <h1 class="text-4xl font-bold tracking-wide border-b-4 border-white pb-2 inline-block">
              Martin Mol
            </h1>
            <p class="text-xl mt-2 font-normal">Frontend Developer</p>
          </div>
          <div class="flex flex-wrap gap-6 md:gap-8 mt-2">
            <div class="flex items-center flex-col md:flex-row">
              <Icon name="mdi:email" class="mr-1" />
              <a
                href="mailto:mol1@seznam.cz"
                class="hover:text-green-400 transition-colors duration-300"
                >mol1@seznam.cz</a
              >
            </div>
            <div class="flex items-center">
              <Icon name="mdi:phone" class="mr-1" />
              <a
                href="tel:+420737664469"
                class="hover:text-green-400 transition-colors duration-300"
                >+420 737 664 469</a
              >
            </div>
            <div class="flex items-center">
              <Icon name="mdi:github" class="mr-1" />
              <a
                href="https://github.com/molmartin"
                target="_blank"
                class="hover:text-green-400 transition-colors duration-300"
              >
                github.com/molmartin
              </a>
            </div>
          </div>
        </div>
        <LanguageSwitcher />
      </div>
    </MainContainer>
  </header>
</template>

<script lang="ts" setup></script>
