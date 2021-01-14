<template lang="html">
  <div class="mx-3 mx-md-auto my-15 max-width">
    <div v-if="language == 'en'">
      <div class="text-uppercase mb-3 text-body-1">
        programming languages:
      </div>
      <ul>
        <li>JavaScript</li>
        <li>SQL (postgreSQL and MySQL)</li>
        <li>Solidity (Ethereum smart contract language)</li>
        <li>CSS/SCSS/SASS</li>
        <li>HTML</li>
        <li>EJS</li>
        <li>PHP (basics)</li>
      </ul>
      <div class="mt-10 mb-3 text-uppercase text-body-1">
        frameworks and libraries:
      </div>
      <ul>
        <li>Vue.js / Nuxt.js</li>
        <li>Vuetify</li>
        <li>Node.js</li>
        <li>Web3.js</li>
        <li>Express.js</li>
        <li>jQuery</li>
        <li>Webpack</li>
      </ul>
      <div class="mt-10 mb-3 text-uppercase text-body-1">
        other skills:
      </div>
      <ul>
        <li>Building full-stack applications with REST API</li>
        <li>English at C1 level</li>
        <li>GIT</li>
        <li>Bash/Unix</li>
      </ul>
      <div class="mt-10 text-uppercase text-body-1">
        education:
      </div>
      <v-container>
        <v-row>
          <v-col cols="auto">
            2009 - 2014
          </v-col>
          <v-col>
            <v-row no-gutters class="mb-1">
              <v-col>
                Poznan University of Medical Sciences
              </v-col>
            </v-row>
            <v-row no-gutters class="text-body-2">
              <v-col>
                Subject: Physiotherapy
              </v-col>
            </v-row>
            <v-row no-gutters class="text-body-2">
              <v-col>
                Degree: master
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div v-if="language == 'pl'">
      <div class="text-uppercase mb-3">
        języki programowania:
      </div>
      <ul>
        <li>JavaScript</li>
        <li>SQL (postgreSQL i MySQL)</li>
        <li>Solidity (język smart-kontraktów Ethereum)</li>
        <li>CSS/SCSS/SASS</li>
        <li>HTML</li>
        <li>EJS</li>
        <li>PHP (podstawy)</li>
      </ul>
      <div class="mt-10 mb-3 text-uppercase text-body-1">
        frameworki i biblioteki:
      </div>
      <ul>
        <li>Vue.js / Nuxt.js</li>
        <li>Vuetify</li>
        <li>Node.js</li>
        <li>Web3.js</li>
        <li>Express.js</li>
        <li>jQuery</li>
        <li>Webpack</li>
      </ul>
      <div class="mt-10 mb-3 text-uppercase text-body-1">
        pozostałe umiejętności:
      </div>
      <ul>
        <li>Budowanie aplikacji full-stack z REST API</li>
        <li>Angielski na poziomie C1</li>
        <li>GIT</li>
        <li>Bash/Unix</li>
      </ul>
      <div class="mt-10 text-uppercase text-body-1">
        edukacja:
      </div>
      <v-container>
        <v-row>
          <v-col cols="auto">
            2009 - 2014
          </v-col>
          <v-col>
            <v-row no-gutters class="mb-1">
              <v-col>
                Uniwersytet Medyczny w Poznaniu
              </v-col>
            </v-row>
            <v-row no-gutters class="text-body-2">
              <v-col>
                Kierunek: Fizjoterapia
              </v-col>
            </v-row>
            <v-row no-gutters class="text-body-2">
              <v-col>
                Uzyskany tytuł: magister
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<style lang="css" scoped>
ul {
  margin-left: 6px;
}
</style>

<script>
export default {
  computed: {
    language() {
      const polish = this.$store.state.polish
      if (polish) {
        return 'pl'
      } else {
        return 'en'
      }
    },
  },
}
</script>
