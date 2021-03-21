<template>
  <div>
    <v-overlay opacity="0.8" :value="overlay" />
    <v-img
      v-if="overlayImage != undefined"
      v-show="overlay"
      contain
      :src="'https://admin.macahernandez.co' + overlayImage.url"
      :lazy-src="'https://admin.macahernandez.co' + overlayImage.formats.thumbnail.url"
      :alt="overlayImage.alternativeText"
      class="border overlay-image"
    />
    <v-btn
      v-show="overlay"
      x-large
      class="overlay-button"
      fab
      color="accent"
      @click="$store.commit('changeOverlayState')"
    >
      <v-icon>
        mdi-close
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
  export default {
    name: 'OverlayPicture',
    computed: {
      overlay () {
        return this.$store.getters.getOverlayState
      },
      overlayImage () {
        return this.$store.getters.getOverlayImage
      }
    }
  }
</script>

<style scoped>
  .overlay-image{
    position: fixed;
    z-index: 6;
    margin-right: auto;
    margin-left: auto;
    top: 5%;
    bottom: 5%;
  }
  .overlay-button{
    position: fixed;
    z-index: 6;
    right: 2%;
    top: 2%;
  }
</style>
