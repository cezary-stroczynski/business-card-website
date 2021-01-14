<template lang="html">
  <v-carousel-item
  src="backgrounds/crowd.jpg">
    <v-card class="primary my-15" elevation="9">
      <div class="max-width_txt mx-auto">
        <v-container>
          <v-row align="center">
            <v-col cols="auto">
              <v-row class="my-1">
                <v-col>
                  <v-icon large>mdi-file-plus</v-icon>
                </v-col>
              </v-row>
              <v-row class="my-1">
                <v-col>
                  <v-icon large>mdi-cogs</v-icon>
                </v-col>
              </v-row>
              <v-row class="my-1">
                <v-col>
                  <v-icon large>mdi-wrench-outline</v-icon>
                </v-col>
              </v-row>

            </v-col>
            <v-col>
              <div class="my-5 mr-5">
                <a href="https://fundrzme-beta.herokuapp.com/" target="_blank">
                  <span class="text-h6 text-uppercase white primary--text px-2 rounded d-inline-block">
                    Fundrz:<span class="text-lowercase">me</span>
                  </span>
                </a>
                <div class="text-caption text-uppercase mb-5  mt-1 grey--text text--lighten-2">
                  <div>
                    <v-icon>mdi-cube-outline</v-icon>
                    <span class="ml-2">
                      <span v-if="language == 'pl'">
                        technologia blockchain
                      </span>
                      <span v-if="language == 'en'">
                        blockchain-based
                      </span>
                    </span>
                  </div>
                  <div>
                    <v-icon>mdi-account-group-outline</v-icon>
                    <span class="ml-2">
                      <span v-if="language == 'pl'">
                        finansowanie społecznościowe
                      </span>
                      <span v-if="language == 'en'">
                        crowdfunding platform
                      </span>
                    </span>
                  </div>
                </div>

                <div v-if="language == 'pl'">
                  Portal zbudowany jest w oparciu o framework Nuxt.js z
                  API napisanym w Node.js.
                  Oferuje między innymi takie funkcje, jak tworzenie i sprzedaż
                  osobistych monet oraz unikatowych, wirtualnych przedmiotów
                  kolekcjonerskich. Portal obecnie znajduje się w fazie testów,
                  możesz zobaczyć go
                  <a href="https://fundrzme-beta.herokuapp.com/" target="_blank" class="white--text">TUTAJ</a>.
                </div>
                <div v-if="language == 'en'">
                  The portal uses Nuxt.js framework with an API written in Node.js.
                  It offers features such as creation and sale of personal coins
                  and unique virtual collectibles. The portal is currently in the
                  testing phase, you can see it
                  <a href="https://fundrzme-beta.herokuapp.com/" target="_blank" class="white--text">HERE</a>.
                </div>
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
}
</script>
