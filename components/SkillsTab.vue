<template lang="html">
  <v-card class="mx-3 mx-md-auto my-15 max-width_txt white pa-10 rounded-lg">
    <div>
      <div class="mb-10">
        <div class="text-uppercase mb-3 grey--text text--darken-1 text-body-1">
          <span v-if="language == 'en'">
            programming languages
          </span>
          <span v-if="language == 'pl'">
            języki programowania
          </span>
        </div>
        <div class="ml-3">
          JavaScript <b>/</b>
          Solidity <b>/</b>
          SQL <b>/</b>
          CSS/SCSS <b>/</b>
          HTML5
        </div>
      </div>
      <div class="mb-10">
        <div class="mb-3 text-uppercase grey--text text--darken-1 text-body-1">
          <span v-if="language == 'en'">
            technologies
          </span>
          <span v-if="language == 'pl'">
            technologie
          </span>
        </div>
        <div class="ml-3">
          Vue.js <b>/</b>
          Nuxt.js <b>/</b>
          Vuetify.js
          <br>
          Node.js <b>/</b>
          Express.js <b>/</b>
          postgreSQL
          <br>
          Web3.js <b>/</b>
          Geth
          <br>
          Webpack
          <br>
          jQuery
        </div>
      </div>
      <div class="mb-10">
        <div class="mb-3 text-uppercase grey--text text--darken-1 text-body-1">
          <span v-if="language == 'en'">
            other
          </span>
          <span v-if="language == 'pl'">
            pozostałe
          </span>
        </div>
        <ul>
          <li>
            <span v-if="language == 'en'">
              building Full-Stack web applications
            </span>
            <span v-if="language == 'pl'">
              budowanie aplikacji webowych Full-Stack
            </span>
          </li>
          <li>
            <span v-if="language == 'en'">
              building RESTful APIs
            </span>
            <span v-if="language == 'pl'">
              budowanie API w standardzie RESTful
            </span>
          </li>
          <li>
            <span v-if="language == 'en'">
              english at C1 level
            </span>
            <span v-if="language == 'pl'">
              angielski na poziomie C1
            </span>
          </li>
          <li>GIT</li>
          <li>bash/Unix</li>
        </ul>
      </div>
      <div>

        <div class="mb-3 text-uppercase grey--text text--darken-1 text-body-1">
          <span v-if="language == 'en'">
            education
          </span>
          <span v-if="language == 'pl'">
            edukacja
          </span>
        </div>
        <v-container>
          <v-row>
            <v-col class="text-uppercase text-body-2">
              <span v-if="language == 'en'">
                master's degree in physiotherapy
              </span>
              <span v-if="language == 'pl'">
                magister fizjoterapii
              </span>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="grey--text">
              <span v-if="language == 'en'">
                Poznan University of Medical Sciences
              </span>
              <span v-if="language == 'pl'">
                Uniwersytet Medyczny w Poznaniu
              </span>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col class="grey--text text-caption">
              2009 - 2014
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </v-card>
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
