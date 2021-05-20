<template>
  <v-row class="align-center allheight" no-gutters>
    <v-col cols="12" md="7" :class="$vuetify.breakpoint.smAndDown ? '' : 'ml-16'">
      <v-row
        no-gutters
        class="text-md-h1 text-h2 font-weight-bold"
        :class="$vuetify.breakpoint.smAndDown ? 'ml-3' : ''"
      >
        Maca
      </v-row>
      <v-row
        no-gutters
        class="text-md-h1 text-h2 font-weight-bold"
        :class="$vuetify.breakpoint.smAndDown ? 'mt-1' : ''"
      >
        <v-col cols="2" md="1" />
        Hernández
      </v-row>
      <v-row
        no-gutters
        class="text-md-h2 text-h4 text-center pl-2"
        :class="$vuetify.breakpoint.smAndDown ? 'mt-2' : 'mt-10'"
      >
        Bogotá a través del lente
      </v-row>
      <v-row
        no-gutters
        class="d-flex"
        :class="$vuetify.breakpoint.smAndDown ? 'mt-4' : 'mt-16 pt-10 ml-16 mr-16 pr-16'"
      >
        <but text="Linkedin" destination="https://www.linkedin.com/in/mar%C3%ADa-camila-hern%C3%A1ndez-lastra-252635186/" class="mx-auto" />
        <but text="Instagram" destination="https://www.instagram.com/macahernandez14/" class="mx-auto" />
      </v-row>
    </v-col>
    <v-spacer v-show="$vuetify.breakpoint.smAndDown" />
    <v-col v-s cols="12" md="4">
      <v-img
        class="mt-4 border"
        src="maca.png"
        :class="$vuetify.breakpoint.smAndDown ? 'mx-16' : ''"
      />
    </v-col>
    <v-spacer v-show="$vuetify.breakpoint.smAndDown" />
    <v-col cols="0" md="1" />
  </v-row>
</template>

<script>
import but from '~/components/but'
export default {
  components: { but }
}
</script>

<style scoped>
  .allheight {
    height: 100vh;
  }
  .border {
    border: 2px black solid;
  }
</style>
