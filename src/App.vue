<template>


  <RouterView />
   <Index />

</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Index  from './components/Index.vue';

export default{
  components:{
    Index,
   
  }
}
</script>

<style scoped>
</style>
