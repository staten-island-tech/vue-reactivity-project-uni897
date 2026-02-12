<template>
  <h1>Duck Racing</h1>
  <div>
    <RouterLink to="/player1">yogurt</RouterLink>
    <button>Play</button>
    <button><RouterLink to="/player1">Player 1</RouterLink></button>
    <button><RouterLink to="/player2">Player 2</RouterLink></button>
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
