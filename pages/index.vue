<template>
  <v-row no-gutters>
    <v-col class="black--text text-h1 font-weight-bold">
      <Welcome />
      <Subtitle />
      <v-row
        no-gutters
        class="py-12"
        :class="$vuetify.breakpoint.smAndDown ? '' : 'px-10'"
      >
        <v-col
          v-for="object in galleries"
          :key="object.published_at"
          class="black--text text-h1 font-weight-bold my-4 px-4"
          cols="12"
          md="4"
        >
          <gallery-tile
            :gallery="object"
          />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
  import Subtitle from '../components/index/Subtitle'
  import GalleryTile from '../components/index/GalleryTile.vue'
  import Welcome from '../components/index/Welcome.vue'
  export default {
    components: { GalleryTile, Welcome, Subtitle },
    data () {
      return {
        galleries: [],
        error: null
      }
    },
    async mounted () {
      try {
        this.galleries = await this.$strapi.$galleries.find()
      } catch (error) {
        this.error = error
      }
    }
  }
</script>

<style>
</style>
