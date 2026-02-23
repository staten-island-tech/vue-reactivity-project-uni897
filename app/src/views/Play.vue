<template>
    <div>
        <button> <RouterLink to="/">Back</RouterLink> </button>
        <Duck :pos="pos1" width="100px" height="100px" class="p1" :skincolor="players[0].color"></Duck>
        <Duck :pos="pos2" width="100px" height="100px" class="p2" :skincolor="players[1].color"></Duck>
        <h2 v-if="pos1 > 1200">Player 1 wins!</h2>
        <h2 v-if="pos2 > 1200">Player 2 wins!</h2>
    </div>
</template>

<script setup>
import { players } from '@/state/players.js'
import Duck from '@/components/duck.vue'
import { ref, onMounted, onUnmounted } from 'vue'

const pos1 = ref(0)
const pos2 = ref(0)
let d = false
let arr = false

const step = 50

function keyPress(e) {
  if(e.key === 'd' && !d){
    pos1.value += step
    d = true
    console.log(d)
  }
  if(e.key === 'ArrowRight' && !arr){
    pos2.value += step
    arr = true
    console.log(arr)
  }
}

function keyUp(e){
    if(e.key === 'd' && !(pos1.value > 1200 || pos2.value > 1200)){
        d = false
    }
    if(e.key === 'ArrowRight' && !(pos1.value > 1200 || pos2.value > 1200)){
        arr = false
    }
}

onMounted(() => {
    window.addEventListener('keydown', keyPress)
    window.addEventListener('keyup', keyUp)
})
onUnmounted(() => {
    window.removeEventListener('keydown', keyPress)
    window.removeEventListener('keyup', keyUp)
})
</script>

<style scoped>

</style>