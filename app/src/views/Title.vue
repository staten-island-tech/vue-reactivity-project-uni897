<template>
  <h1>Duck Racing</h1>
  <div>
    <button><RouterLink to="/race">Play</RouterLink></button>
    <button><RouterLink to="/player1">Player 1</RouterLink></button>
    <button><RouterLink to="/player2">Player 2</RouterLink></button>
    <Duck width="100px" height="100px" class="p1" :skincolor="players[0].color"></Duck>
    <Duck width="100px" height="100px" class="p2" :skincolor="players[1].color"></Duck>
  </div>
</template>

<script setup>
import Duck from '@/components/duck.vue';
import { players } from "@/state/players.js"
</script>

<style scoped>
h1{
  text-align: center;
}
</style>
