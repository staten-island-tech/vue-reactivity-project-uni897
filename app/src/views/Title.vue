<template>
  <h1>Duck Racing</h1>
  <div>
    <button>Play</button>
    <button>Customize Player 1</button>
    <button>Customize Player 2</button>
    <Duck width="100px" height="100px" class="duck" :skincolor="skinColor"></Duck>
    <button @click="changeColor">Change</button>
  </div>
</template>

<script setup>
import Duck from '@/components/duck.vue';
import { ref } from 'vue';
const toggled = ref(false)
const skinColor = ref("#FFC0CB")

function changeColor(){
  if(!toggled.value){
    skinColor.value = "#FF0000"
    toggled.value = true
  }else{
    skinColor.value = "#FFC0CB"
    toggled.value = false
  }
}
</script>

<style scoped>
h1{
  text-align: center;
}
</style>
