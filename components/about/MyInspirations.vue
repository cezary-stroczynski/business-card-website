<template lang="html">
  <v-carousel-item
  src="backgrounds/blockchain.jpg">
    <v-card class="primary my-15" elevation="9">
      <div class="max-width_txt mx-auto">
        <v-container>
          <v-row align="center">
            <v-col cols="auto">
              <v-row class="my-1">
                <v-col>
                  <v-icon large>mdi-bitcoin</v-icon>
                </v-col>
              </v-row>
              <v-row class="my-1">
                <v-col>
                  <v-icon large>mdi-ethereum</v-icon>
                </v-col>
              </v-row>
              <v-row class="my-1">
                <v-col>
                  <v-icon large>mdi-head-lightbulb-outline</v-icon>
                </v-col>
              </v-row>
            </v-col>
            <v-col>
              <div class="my-5 mr-5">
                <div v-if="language == 'pl'">
                  Moje zainteresowanie fin-techiem było motywacją do rozwinięcia
                  wiedzy na temat takich projektów, jak Bitcoin, Ethereum i Ripple.
                  Możliwości i potencjał jaki drzemie w tych projektach, a także
                  rosnące zainteresowanie technologią blockchain na świecie sprawiły,
                  że postanowiłem być częścią tej rewolucji.
                </div>
                <div v-if="language == 'en'">
                  My interest in fin-tech has been my motivation to develop knowledge
                  about projects such as Bitcoin, Ethereum and Ripple. The potential
                  of these projects and the opportunities they provided, as well as
                  the growing interest in the blockchain technology in the world, made
                  me decide to be a part of this revolution.
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
