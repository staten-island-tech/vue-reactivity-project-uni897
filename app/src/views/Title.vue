<template>
  <h1>Duck Racing</h1>
  <div>
    <RouterLink class="route" to="/race">Play</RouterLink>
    <RouterLink class="route" to="/player1">Player 1</RouterLink>
    <RouterLink class="route" to="/player2">Player 2</RouterLink>
  </div>
</template>

<script setup> </script>

<style scoped>

h1{
  text-align: center;
  font-size: 70px;
}
div{
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  font-size: 50px;
  padding-top: 100px;
}
.route{
  background-color: lightpink;
  padding: 10px;
  border-radius: 25px;
  border: 5px solid black;
}

</style>
