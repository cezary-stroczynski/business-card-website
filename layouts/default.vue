<template>
  <v-app>
    <v-app-bar
    class="white"
    app
    hide-on-scroll>
      <v-toolbar-title
      class="white">
        <logo-name>
        </logo-name>
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
import LogoName from '@/components/layout/LogoName.vue'

export default {
  components: {
    AppBarTabs,
    SwitchLanguage,
    LogoName,
  },
  // computed: {
  //   language() {
  //     const polish = this.$store.state.polish
  //     if (polish) {
  //       return 'pl'
  //     } else {
  //       return 'en'
  //     }
  //   },
  // },
}
</script>
