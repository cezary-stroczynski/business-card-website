<template lang="html">
  <v-tabs-items
  v-model="tab">
    <v-tab-item>
      <about-tab>
      </about-tab>
    </v-tab-item>
    <v-tab-item>
      <skills-tab>
      </skills-tab>
    </v-tab-item>
    <v-tab-item>
      <contact-tab>
      </contact-tab>
    </v-tab-item>
  </v-tabs-items>
</template>

<script>
import AboutTab from '@/components/AboutTab.vue'
import SkillsTab from '@/components/SkillsTab.vue'
import ContactTab from '@/components/ContactTab.vue'

export default {
  components: {
    AboutTab,
    SkillsTab,
    ContactTab,
  },
  computed: {
    tab() {
      return this.$store.state.tab
    }
  }
}
</script>
