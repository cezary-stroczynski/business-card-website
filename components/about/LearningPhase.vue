<template lang="html">
  <v-carousel-item
  src="backgrounds/code.png">
    <v-card class="primary my-15" elevation="9">
      <div class="max-width_txt mx-auto">
        <v-container>
          <v-row align="center">
            <v-col cols="auto">
              <v-row class="my-1">
                <v-col>
                  <v-icon large>mdi-language-javascript</v-icon>
                </v-col>
              </v-row>
              <v-row class="my-1">
                <v-col>
                  <v-icon large>mdi-code-braces</v-icon>
                </v-col>
              </v-row>
              <v-row class="my-1">
                <v-col>
                  <v-icon large>mdi-book-open-page-variant-outline</v-icon>
                </v-col>
              </v-row>

            </v-col>
            <v-col>
              <div class="my-5 mr-5">
                <div v-if="language == 'pl'">
                  Na początku 2017 roku zacząłem uczyć się programowania. Korzystając
                  z materiałów online udało mi się opanować takie języki, jak
                  JavaScript i Solidity. Trzy lata później stworzyłem portal
                  crowdfundingowy
                  <a href="https://fundrzme-beta.herokuapp.com/" target="_blank" class="white--text">Fundrz:me</a>
                  wykorzystujący technologię smart-contract sieci
                  <a href="https://ethereum.org/" target="_blank" class="white--text">Ethereum</a>.
                </div>
                <div v-if="language == 'en'">
                  I started learning programming at the beginning of 2017 and by using
                  online resources, I mastered languages such as
                  JavaScript and Solidity. Three years later I created a crowdfunding
                  portal
                  <a href="https://fundrzme-beta.herokuapp.com/" target="_blank" class="white--text">Fundrz:me</a>
                  that uses smart-contract technology of the
                  <a href="https://ethereum.org/" target="_blank" class="white--text">Ethereum</a> network.
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
