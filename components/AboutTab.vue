<template lang="html">
  <div class="mx-auto my-15 text-justify max-width">
    <v-container>
      <v-row>
        <v-col align="center">
          <v-img src="/profile.jpg" class="profile-picture rounded-lg mb-15"></v-img>
        </v-col>
      </v-row>
      <v-row no-gutters class="my-2 mr-7">
        <v-col cols="auto" class="px-4">
          <v-icon large>mdi-head-lightbulb-outline</v-icon>
        </v-col>
        <v-col>
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
        </v-col>
      </v-row>
      <v-row no-gutters class="my-2 mr-7">
        <v-col cols="auto" class="px-4">
          <v-icon large>mdi-book-open-page-variant-outline</v-icon>
        </v-col>
        <v-col>
          <div v-if="language == 'pl'">
            Na początku 2017 roku zacząłem uczyć się programowania. Korzystając
            z materiałów online udało mi się opanować takie języki, jak
            JavaScript i Solidity. Trzy lata później stworzyłem portal
            crowdfundingowy
            <a href="https://fundrzme-beta.herokuapp.com/">Fundrz:me</a>
            wykorzystujący technologię smart contract sieci
            <a href="https://ethereum.org/">Ethereum</a>.
          </div>
          <div v-if="language == 'en'">
            I started learning programming at the beginning of 2017 and by using
            online resources, I mastered languages such as
            JavaScript and Solidity. Three years later I created a crowdfunding
            portal
            <a href="https://fundrzme-beta.herokuapp.com/">Fundrz:me</a>
            that uses smart-contract technology of the
            <a href="https://ethereum.org/">Ethereum</a> network.
          </div>
        </v-col>
      </v-row>
      <v-row no-gutters class="my-2 mr-7">
        <v-col cols="auto" class="px-4">
          <v-icon large>mdi-cog</v-icon>
        </v-col>
        <v-col>
          <div v-if="language == 'pl'">
            Portal zbudowany jest przy pomocy Nuxt.js z API napisanym w Node.js.
            Oferuje między innymi takie funkcje, jak tworzenie i sprzedaż
            osobistych monet oraz unikatowych, wirtualnych przedmiotów
            kolekcjonerskich. Portal obecnie znajduje się w fazie testów,
            możesz zobaczyć go
            <a href="https://fundrzme-beta.herokuapp.com/">TUTAJ</a>.
          </div>
          <div v-if="language == 'en'">
            The portal uses Nuxt.js framework with an API written in Node.js.
            It offers features such as creation and sale of personal coins
            and unique virtual collectibles. The portal is currently in the
            testing phase, you can see it
            <a href="https://fundrzme-beta.herokuapp.com/">HERE</a>.
          </div>
        </v-col>
      </v-row>
      <v-row no-gutters class="my-2 mr-7">
        <v-col cols="auto" class="px-4">
          <v-icon large>mdi-handshake-outline</v-icon>
        </v-col>
        <v-col>
          <div v-if="language == 'pl'">
            Jeżeli zainteresował Cię mój portal i chciałbyś się zaangażować
            w jego rozwój, lub szukasz pracownika i uważasz że świetnie
            sprawdziłbym się w tej roli,
            <span
            class="black--text text-uppercase cursor-pointer"
            @click="goToContact">
              kliknij tutaj.
            </span>
          </div>
          <div v-if="language == 'en'">
            If you find my crowdfunding portal interesting and you would
            like to get involved in its development, or you are looking for
            an employee and you think that I would be perfect fit for the role
            <span
            class="black--text text-uppercase cursor-pointer"
            @click="goToContact">
              click here.
            </span>
          </div>
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
  methods: {
    goToContact() {
      this.$store.commit('tab', 2)
    }
  }
}
</script>
