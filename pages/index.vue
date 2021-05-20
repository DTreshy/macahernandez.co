<template>
  <v-row no-gutters>
    <v-col class="black--text text-h1 font-weight-bold">
      <welcome />
      <subtitle />
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
import subtitle from '../components/index/subtitle'
import galleryTile from '../components/index/galleryTile'
import welcome from '../components/index/welcome'
export default {
  components: { galleryTile, welcome, subtitle },
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
