<template>
  <v-hover v-slot="{hover}">
    <v-card tile class="border">
      <v-img
        v-if="picture.formats.large != undefined"
        :src="'https://admin.macahernandez.co' + picture.formats.large.url"
        :lazy-src="'https://admin.macahernandez.co' + picture.formats.thumbnail.url"
        :alt="picture.alternativeText"
        class="border fill-height"
      />
      <v-fade-transition>
        <v-overlay
          v-if="hover"
          absolute
          color="accent"
        >
          <v-btn
            x-large
            @click="$store.commit('changeOverlayState', picture)"
          >
            Mostrar
          </v-btn>
        </v-overlay>
      </v-fade-transition>
    </v-card>
  </v-hover>
</template>

<script>
  export default {
    name: 'Picture',
    props: {
      picture: {
        required: true,
        type: Object
      }
    },
    data () {
      return {
        overlay: false
      }
    }
  }
</script>

<style scoped>
  .border {
    border: white 1px solid;
  }
</style>
