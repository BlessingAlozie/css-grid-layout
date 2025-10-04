<template>
  <RouterView />
  <GridAutoFlow />
  <Autofit_Minmax />

</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import GridAutoFlow from './components/GridAutoFlow.vue'
import Autofit_Minmax from './components/Autofit_Minmax.vue'


export default {
  components: {
    GridAutoFlow,
    Autofit_Minmax,

  },
}
</script>

<style scoped></style>
