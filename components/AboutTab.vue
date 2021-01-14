<template lang="html">
  <div class="text-justify max-width_element mx-auto">
    <v-card
    class="rounded-xl my-10"
    elevation="10"
    @click="stopCycle"
    :ripple="false">
      <v-carousel
      v-model="carousel"
      class="rounded-xl"
      :show-arrows="arrows"
      :cycle="cycle"
      :interval="5000">
        <v-carousel-item
        class="secondary">
          <v-img
          src="profile.jpg" 
          class="mx-auto fill-height" 
          max-width="500"></v-img>
        </v-carousel-item>
        <my-inspirations>
        </my-inspirations>
        <learning-phase>
        </learning-phase>
        <about-fundrzme>
        </about-fundrzme>
        <work-with-me>
        </work-with-me>
      </v-carousel>
    </v-card>
  </div>
</template>



<script>
import MyInspirations from '~/components/about/MyInspirations.vue'
import LearningPhase from '~/components/about/LearningPhase.vue'
import AboutFundrzme from '~/components/about/AboutFundrzme.vue'
import WorkWithMe from '~/components/about/WorkWithMe.vue'

export default {
  components: {
    MyInspirations,
    LearningPhase,
    AboutFundrzme,
    WorkWithMe,
  },
  data: () => ({
    carousel: 0,
    cycle: true,
    arrows: false,
  }),
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
    stopCycle() {
      this.cycle = false
      this.arrows = !this.arrows

    }
  }
}
</script>
