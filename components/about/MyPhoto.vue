<template lang="html">
  <v-carousel-item
  class="secondary">
    <v-img
    src="profile.jpg"
    class="mx-auto fill-height"
    max-width="500">
      <div class="text-center text-uppercase black--text header py-3">
        web developer <br>
        smart-contract developer
      </div>
    </v-img>
  </v-carousel-item>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.header {
  font-size: 0.8em;
  background-color: white;
  margin-top: 300px;
  font-weight: bold;
  line-height: 2.2em;
  letter-spacing: 0.125em;
  opacity: 0.5;
}
</style>
