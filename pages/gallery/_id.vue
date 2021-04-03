<template>
  <v-row no-gutters class="black--text">
    <OverlayPicture />
    <BackButton />
    <v-col>
      <v-img
        v-if="gallery.Main_picture != undefined"
        :height="$vuetify.breakpoint.smAndDown ? '' : '80vh'"
        :src="$vuetify.breakpoint.smAndDown ? gallery.Main_picture.formats.large.url : gallery.Main_picture.url"
        :lazy-src="gallery.Main_picture.formats.thumbnail.url"
        :alt="gallery.Main_picture.alternativeText"
      />

      <v-card
        color="primary"
        :height="$vuetify.breakpoint.smAndDown ? '' : '20vh'"
      >
        <v-card-title class="text-center black--text text-md-h2 text-h6 font-weight-bold mt-6">
          <v-spacer />
          {{ gallery.Title }}
          <v-spacer />
        </v-card-title>
        <v-card-subtitle
          class="text-center black--text text-md-h4 text-subtitle-1 font-weight-medium"
          :class="$vuetify.breakpoint.smAndDown ? '' : 'mt-2'"
        >
          <v-spacer />
          {{ gallery.Subtitle }}
          <v-spacer />
        </v-card-subtitle>
      </v-card>
      <v-divider class="accent divider-width mx-auto" />
      <v-row no-gutters :class="$vuetify.breakpoint.smAndDown ? '' : 'mb-16'">
        <v-spacer />
        <v-col cols="11" md="9">
          <v-card
            color="primary"
          >
            <v-card-text
              class="pre-formatted text-center black--text text-md-h6 text-body1 font-weight-regular text-justify"
              :class="$vuetify.breakpoint.smAndDown ? 'pt-0' : 'mt-6'"
            >
              {{ gallery.Text }}
            </v-card-text>
          </v-card>
        </v-col>
        <v-spacer />
      </v-row>
      <v-card class="primary mb-8">
        <v-card-subtitle class="black--text text-center text-h4 text-md-h3 font-weight-bold">
          Galería
        </v-card-subtitle>
      </v-card>
      <v-row no-gutters :class="$vuetify.breakpoint.smAndDown ? '' : 'my-16'">
        <v-col
          v-for="picture in gallery.Pictures"
          :key="picture.id"
          md="4"
          cols="6"
          class="d-flex"
        >
          <Picture :picture="picture" />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
  import Picture from '../../components/gallery/Picture'
  import OverlayPicture from '../../components/gallery/OverlayPicture'
  import BackButton from '../../components/gallery/BackButton'
  export default {
    components: { BackButton, OverlayPicture, Picture },
    data () {
      return {
        gallery: {}
      }
    },
    async mounted () {
      this.gallery = await this.$strapi.$galleries.findOne(this.$route.params.id)
      console.log(this.gallery.Text)
    }
  }
</script>

<style scoped>
  .divider-width {
    width: 40vw;
  }
  .pre-formatted {
    white-space: pre-line;
  }
</style>
