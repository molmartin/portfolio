<template>
  <div>
    <PortfolioHeader />
    <MainContainer>
      <main class="p-10 md:p-5">
        <TimelineSection section-key="workExperience" title-key="experience" />
        <TimelineSection section-key="educationDetails" title-key="education" />

        <!-- Skills Section -->
        <section class="mb-10">
          <h2 class="text-2xl text-green-800 mb-5 pb-2 border-b-2 border-[#939f9c]">
            {{ t('skills') }}
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <SkillSection :title="t('technicalSkills')" :skill-list="technicalSkills" />
            <SkillSection :title="t('languages')" :skill-list="tm('languagesList')" />
            <SkillSection :title="t('strengths')" :skill-list="tm('strenghtList')" />
            <SkillSection :title="t('offers')" :skill-list="tm('offerList')" />
          </div>
        </section>

        <!-- Interests Section -->
        <section class="mb-10">
          <h2 class="text-2xl text-green-800 mb-5 pb-2 border-b-2 border-[#939f9c]">
            {{ t('interests') }}
          </h2>

          <ChipList :chips="tm('interestsList')" />
        </section>

        <!-- Other Section -->
        <section class="mb-10">
          <h2 class="text-2xl text-green-800 mb-5 pb-2 border-b-2 border-[#939f9c]">
            {{ t('other') }}
          </h2>

          <div>
            <h3 class="text-lg text-green-800 mb-2">{{ t('driversLicense') }} - B</h3>
          </div>
        </section>
      </main>
    </MainContainer>
  </div>
</template>

<script setup lang="ts">
const { t, tm } = useI18n()

const technicalSkills = [
  'Vue.js (2/3)',
  'React',
  'Quasar',
  'Vite',
  'Vuetify',
  'VS Code + Copilot',
  'ChatGPT, Claude',
]
</script>
