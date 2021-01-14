<template lang="html">
  <v-col
  cols="auto"
  class="text-uppercase text-caption grey--text cursor-pointer"
  @click="polish = !polish">
    <span :class="{ 'black--text' : !polish }">en</span>/<span :class="{ 'black--text' : polish }">pl</span>
  </v-col>
</template>


<script>
export default {
  computed: {
    polish: {
      get() {
        return this.$store.state.polish
      },
      set(value) {
        this.$store.commit('polish', value)
      }
    }
  }
}
</script>
