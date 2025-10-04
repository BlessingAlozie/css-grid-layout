<template>
  <RouterView />
  <GridAutoFlow />
  <Autofit_Minmax />
   <Max_Column />

</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import GridAutoFlow from './components/GridAutoFlow.vue'
import Autofit_Minmax from './components/Autofit_Minmax.vue'
import Max_Column from './components/Max_Column.vue'


export default {
  components: {
    GridAutoFlow,
    Autofit_Minmax,
    Max_Column,
  },
}
</script>

<style scoped></style>
