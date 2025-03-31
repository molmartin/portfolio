<template>
  <header class="bg-green-800 text-white shadow-md">
    <MainContainer>
      <div class="flex flex-col space-y-6 px-10 md:px-5 py-8">
        <div>
          <h1
            class="text-4xl font-bold tracking-wide border-b-4 border-green-400 pb-2 inline-block"
          >
            Martin Mol
          </h1>
          <p class="text-xl text-green-400 mt-2 font-normal">Frontend Developer</p>
        </div>
        <div class="flex flex-wrap gap-6 md:gap-8 mt-2">
          <div class="flex items-center space-x-2">
            <i class="fas text-green-400"></i>
            <a
              href="mailto:mol1@seznam.cz"
              class="hover:text-green-400 transition-colors duration-300"
              >mol1@seznam.cz</a
            >
          </div>
          <div class="flex items-center space-x-2">
            <i class="fas text-green-400"></i>
            <a href="tel:+420737664469" class="hover:text-green-400 transition-colors duration-300"
              >+420 737 664 469</a
            >
          </div>
          <div class="flex items-center space-x-2">
            <i class="fab text-green-400"></i>
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
    </MainContainer>
    <!-- <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
    </div> -->
  </header>
</template>

<script lang="ts" setup></script>
