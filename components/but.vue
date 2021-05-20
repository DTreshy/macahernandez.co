<template>
  <v-hover v-slot=" { hover } ">
    <v-btn
      class="transition-ease-in-out text-button text-md-h5 rounded-pill"
      color="accent"
      :width="$vuetify.breakpoint.smAndDown ? 135 : 230"
      :height="$vuetify.breakpoint.smAndDown ? 60 : 90"
      :outlined="hover"
      elevation="0"
      :href="destination"
      @click="func"
    >
      {{ text }}
    </v-btn>
  </v-hover>
</template>

<script>
export default {
  props: {
    text: {
      required: true,
      type: String
    },
    func: {
      default () {
        return 0
      },
      type: Function
    },
    destination: {
      default: '',
      type: String
    }
  }
}
</script>

<style scoped>
</style>
