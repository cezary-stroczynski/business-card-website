<template>
  <v-app>
    <v-app-bar
    class="white"
    app
    height="100"
    hide-on-scroll>
      <v-toolbar-title
      class="white">
        <div class="text-overline grey--text text--darken-1 font-weight-bold">
          Cezary Stroczyński
        </div>
        <div class="text-caption grey--text">
          >>>
          <span v-if="language == 'en'">see</span>
          <span v-if="language == 'pl'">zobacz</span>
          <a href="wp.pl" target="_blank">fundrz:me</a>
        </div>
      </v-toolbar-title>
      <v-spacer>
      </v-spacer>
      <switch-language>
      </switch-language>
      <template v-slot:extension>
        <app-bar-tabs>
        </app-bar-tabs>
      </template>
    </v-app-bar>
    <v-main>
      <nuxt class="blue-grey lighten-5" />
    </v-main>
  </v-app>
</template>

<style lang="css" scoped>
a {
  text-decoration: none;
}
</style>


<script>
import AppBarTabs from '@/components/layout/AppBarTabs.vue'
import SwitchLanguage from '@/components/layout/SwitchLanguage.vue'

export default {
  components: {
    AppBarTabs,
    SwitchLanguage,
  },
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
