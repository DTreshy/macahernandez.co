<template>
  <v-hover v-slot=" { hover } ">
    <v-btn
      :x-large="!$vuetify.breakpoint.smAndDown"
      :small="$vuetify.breakpoint.smAndDown"
      class="back-button transition-ease-in-out"
      fab
      :outlined="hover"
      :elevation="hover ? 16 : 4"
      color="primary"
      to="/"
    >
      <v-icon
        color="accent"
        :x-large="!$vuetify.breakpoint.smAndDown"
      >
        mdi-arrow-left
      </v-icon>
    </v-btn>
  </v-hover>
</template>

<script>
  export default {
    name: 'BackButton'
  }
</script>

<style scoped>
  .back-button{
    position: fixed;
    left: 18px;
    top: 18px;
    z-index: 2;
  }
</style>
