<template>
  <h1>Duck Racing</h1>
  <div class="container">
    <RouterLink class="route" to="/race">Play</RouterLink>
    <div class="duck">
      <RouterLink class="route" to="/player1">Player 1</RouterLink>
      <Duck width="80px" height="80px" class="p1" :skincolor="players[0].color"></Duck>
    </div>
    <div class="duck">
      <RouterLink class="route" to="/player2">Player 2</RouterLink>
      <Duck width="80px" height="80px" class="p1" :skincolor="players[1].color"></Duck>
    </div>
  </div>
</template>

<script setup> 
import Duck from '@/components/duck.vue';
import { players } from '@/state/players.js'
</script>

<style scoped>

h1{
  text-align: center;
  font-size: 70px;
}
.container{
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 50px;
  font-size: 50px;
  padding-top: 100px;
}
.route{
  background-color: lightpink;
  padding: 10px;
  border-radius: 25px;
  border: 5px solid black;
}
.duck{
  display: flex;
  flex-direction: row;
}

</style>
