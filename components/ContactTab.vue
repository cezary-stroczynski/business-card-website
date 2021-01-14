<template lang="html">
  <div class="mx-3 mx-md-auto my-15 max-width_element">
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
      <div class="ml-1">

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
            <v-icon>mdi-linkedin</v-icon>
          </v-col>
          <v-col>
            <a href="https://www.linkedin.com/in/cezary-stroczynski/" target="_blank">
              in/cezary-stroczynski
            </a>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="auto">
            <v-icon>mdi-github</v-icon>
          </v-col>
          <v-col>
            <a href="https://github.com/cezary-stroczynski" target="_blank">
              github.com/cezary-stroczynski
            </a>
          </v-col>
        </v-row>
      </div>
    </v-container>

    <v-container class="mt-10">
      <v-row align="center">
        <v-col cols="auto">
          <v-icon large>mdi-file-code-outline</v-icon>
        </v-col>
        <v-col>
          <div class="text-h6">
            Fundrz:me
          </div>
        </v-col>
      </v-row>
      <div class="ml-1">

        <v-row>
          <v-col cols="auto">
            <v-icon>mdi-at</v-icon>
          </v-col>
          <v-col>
            fundrzme@gmail.com
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="auto">
            <v-icon>mdi-link-variant</v-icon>
          </v-col>
          <v-col>
            <a href="https://fundrzme-beta.herokuapp.com" target="_blank">
              fundrzme-beta.herokuapp.com
            </a>
          </v-col>
        </v-row>
      </div>
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
