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
            <HeaderLink icon="mdi:email" href="mailto:mol1@seznam.cz" text="mol1@seznam.cz" />
            <!-- <HeaderLink icon="mdi:phone" href="tel:+420737664469" text="+420 737 664 469" /> -->
            <HeaderLink
              icon="mdi:linkedin"
              href="https://www.linkedin.com/in/martin-mol-9bb9b04b/"
              text="Linkedin"
              external
            />
            <HeaderLink
              icon="mdi:github"
              href="https://github.com/molmartin"
              text="github.com/molmartin"
              external
            />
          </div>
        </div>
        <LanguageSwitcher />
      </div>
    </MainContainer>
  </header>
</template>
