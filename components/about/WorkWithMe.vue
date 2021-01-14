<template lang="html">
  <v-carousel-item
  src="backgrounds/work.jpg">
    <v-card class="primary my-15" elevation="9">
      <div class="max-width_txt mx-auto">
        <v-container>
          <v-row align="center">
            <v-col cols="auto">
              <v-row class="my-1">
                <v-col>
                  <v-icon large>mdi-card-account-details-outline</v-icon>
                </v-col>
              </v-row>
              <v-row class="my-1">
                <v-col>
                  <v-icon large>mdi-handshake-outline</v-icon>
                </v-col>
              </v-row>
            </v-col>
            <v-col>
              <div v-if="language == 'pl'">
                Jeżeli zainteresował Cię mój portal
                <a href="https://fundrzme-beta.herokuapp.com/" target="_blank" class="white--text">Fundrz:me</a>
                 i chciałbyś się zaangażować
                w jego rozwój, lub szukasz pracownika i uważasz że świetnie
                sprawdziłbym się w tej roli,
                <span
                class="black--text text-uppercase cursor-pointer"
                @click="goToContact">
                  kliknij tutaj
                </span>
                aby uzyskać więcej informacji.
              </div>
              <div v-if="language == 'en'">
                If you find my
                <a href="https://fundrzme-beta.herokuapp.com/" target="_blank" class="white--text">Fundrz:me</a>
                crowdfunding portal interesting and you would
                like to get involved in its development, or you are looking for
                an employee and you think that I would be perfect fit for the role
                <span
                class="black--text text-uppercase cursor-pointer z-index-1000"
                @click="goToContact">
                  click here
                </span>
                for more information.
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-card>
  </v-carousel-item>
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
  methods: {
    goToContact() {
      this.$store.commit('tab', 2)
    },
  }
}
</script>
