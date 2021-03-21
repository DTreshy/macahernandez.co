<template>
  <v-row
    no-gutters
    class="text-body-1 text-md-h4 text-justify"
    :class="$vuetify.breakpoint.smAndDown ? 'pt-6' : 'pa-16'"
  >
    <v-spacer />
    <v-col cols="10" md="8">
      {{ text }}
      <br>
      <br>
      {{ text2 }}
    </v-col>
    <v-spacer />
  </v-row>
</template>

<script>
  export default {
    name: 'Subtitle',
    data () {
      return {
        text: 'Bogotá es una ciudad que siempre ha estado narrada desde un mismo lugar de enunciación y desde un mismo discurso hegemónico dictado por unas dinámicas capitalistas que favorecen la persistencia de la exclusión, la invisibilización y la segregación social. Son muchos los lugares, escenarios y barrios de esta ciudad que han quedado perdidos entre la estigmatización, los imaginarios sociales y los prejuicios latentes a nivel social.',
        text2: 'Se vuelve relevante eliminar los vacíos socio culturales y sociopolíticos de los escenarios populares, no solamente desde el territorio físico, sino también desde la concepción del territorio simbólico y por tanto, su misma gente, hallando en la imagen, la fotografía documental y el lente, un aliado para relatar lo que allí sucede. '
      }
    }
  }
</script>

<style scoped>
</style>
