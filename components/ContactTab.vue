<template lang="html">
  <div class="mx-3 mx-md-auto my-15 max-width">
    <v-container>
      <v-row align="center">
        <v-col cols="auto">
          <v-icon large>mdi-account-circle-outline</v-icon>
        </v-col>
        <v-col>
          <div class="text-h6">
            Cezary Stroczyński
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="auto">
          <v-icon>mdi-map-marker</v-icon>
        </v-col>
        <v-col>
          <div v-if="language == 'en'">
            Poznań, Poland
          </div>
          <div v-if="language == 'pl'">
            Poznań, Polska
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="auto">
          <v-icon>mdi-at</v-icon>
        </v-col>
        <v-col>
          cezary.stroczynski@gmail.com
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="auto">
          <v-icon>mdi-web</v-icon>
        </v-col>
        <v-col>
          <a href="https://fundrzme-beta.herokuapp.com" target="_blank">
            fundrzme-beta.herokuapp.com
          </a>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="auto">
          <v-icon>mdi-linkedin</v-icon>
        </v-col>
        <v-col>
          <a href="https://www.linkedin.com/in/cezary-stroczynski/" target="_blank">
            /in/cezary-stroczynski
          </a>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

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
