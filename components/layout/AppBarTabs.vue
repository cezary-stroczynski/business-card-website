<template lang="html">
  <v-tabs right class="white" v-model="tab" show-arrows="mobile">
    <v-tab>
      <v-icon class="mr-2">mdi-information-outline</v-icon>
      <span class="text-caption">{{ about }}</span>
    </v-tab>
    <v-tab>
      <v-icon class="mr-2">mdi-hammer-screwdriver</v-icon>
      <span class="text-caption">{{ skills }}</span>
    </v-tab>
    <v-tab>
      <v-icon class="mr-2">mdi-email-outline</v-icon>
      <span class="text-caption">{{ contact }}</span>
    </v-tab>
  </v-tabs>
</template>

<script>
import tabNames from '@/assets/tabNames.json'
export default {
  computed: {
    tab: {
      get() {
        return this.$store.state.tab
      },
      set(value) {
        this.$store.commit('tab', value)
      }
    },
    language() {
      const polish = this.$store.state.polish
      if (polish) {
        return 'pl'
      } else {
        return 'en'
      }
    },
    about() {
      return tabNames.about[this.language]
    },
    skills() {
      return tabNames.skills[this.language]
    },
    contact() {
      return tabNames.contact[this.language]
    },
  }
}
</script>
