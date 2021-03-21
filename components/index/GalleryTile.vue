<template>
  <v-hover v-slot=" { hover } ">
    <v-card
      class="transition-ease-in-out"
      color="accent"
      :elevation="hover ? 12 : 4"
      :to="'gallery/' + gallery.id"
    >
      <v-img
        :src="'https://admin.macahernandez.co' + gallery.Main_picture.formats.small.url"
        :lazy-src="'https://admin.macahernandez.co' + gallery.Main_picture.formats.thumbnail.url"
        :alt="'https://admin.macahernandez.co' + gallery.Main_picture.alternativeText"
      />
      <v-expand-transition>
        <v-overlay
          v-if="hover"
          absolute
          color="primary"
          opacity="100"
          class="black--text text-h4"
        >
          ver la galería
        </v-overlay>
      </v-expand-transition>
      <v-card-text class="text-caption">
        {{ published }}
      </v-card-text>
      <v-card-title class="pt-0 text-subtitle-1 text-md-h5">
        {{ gallery.Title }}
      </v-card-title>
    </v-card>
  </v-hover>
</template>

<script>
  export default {
    name: 'GalleryTile',
    props: {
      gallery: {
        type: Object,
        required: true
      }
    },
    data () {
      return {
        published: ''
      }
    },
    mounted () {
      const date = this.gallery.published_at
      this.published = date.slice(8, 10) + '.' + date.slice(5, 7) + '.' + date.slice(0, 4)
    }
  }
</script>

<style scoped>
</style>
