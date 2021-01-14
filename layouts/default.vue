<template>
  <v-app>
    <v-app-bar
    class="white"
    app
    hide-on-scroll>
      <v-toolbar-title
      class="white text-overline grey--text text--darken-1">
        Cezary Stroczyński
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

<script>
import AppBarTabs from '@/components/layout/AppBarTabs.vue'
import SwitchLanguage from '@/components/layout/SwitchLanguage.vue'

export default {
  components: {
    AppBarTabs,
    SwitchLanguage,
  }
}
</script>
