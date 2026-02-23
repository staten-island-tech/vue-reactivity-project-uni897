<template>
  <h1>Duck Racing</h1>
  <div>
    <button>Play</button>
    <button><RouterLink to="/player1">Player 1</RouterLink></button>
    <button><RouterLink to="/player2">Player 2</RouterLink></button>
    <Duck width="100px" height="100px" class="duck" :skincolor="skinColor"></Duck>
    <button @click="changeColor">Change</button>
  </div>
</template>

<script setup>
import Duck from '@/components/duck.vue';
import { players, updateColor } from "@/state/players.js"
import { ref } from 'vue';

const skinColor = ref("#FFE67B")
skinColor.value = players[0].color
</script>

<style scoped>
h1{
  text-align: center;
}
</style>
