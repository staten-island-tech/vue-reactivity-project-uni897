<template>
    <div>
        <button> <RouterLink to="/">Back</RouterLink> </button>
        <h1 class="timer">{{ min }}:{{ sec }}:{{ milisec }}</h1>
        <button @click="click">Start</button>
        <Duck :pos="pos1" width="100px" height="100px" class="p1" :skincolor="players[0].color"></Duck>
        <Duck :pos="pos2" width="100px" height="100px" class="p2" :skincolor="players[1].color"></Duck>
        <h2 v-if="pos1 >= 1200">Player 1 wins!</h2>
        <h2 v-if="pos2 >= 1200">Player 2 wins!</h2>
    </div>
</template>

<script setup>
import { players } from '@/state/players.js'
import Duck from '@/components/duck.vue'
import { ref, onMounted, onUnmounted } from 'vue'
//time

const milisec = ref(999)
const sec = ref(4)
const min = ref(0)
let repeat = null
let toggled = false

function click(){
    if(!toggled){
        repeat = setInterval(countdown, 10)
        toggled = true
    }
}

function countdown(){
    milisec.value -= 10
    if(milisec.value <= 0){
        milisec.value = 999
        sec.value --
    }
    if(sec.value <= 0 && milisec.value <= 11){
        start()
    }
}
function increment(){
    milisec.value += 10
    if(milisec.value >= 1000){
        milisec.value = 0
        sec.value ++
    }
    if(sec.value >= 60){
        sec.value = 0
        min.value ++
    }
}
function start(){
    pause()
    milisec.value = 0
    sec.value = 0
    min.value = 0
    repeat = setInterval(increment, 10)
    step = 10
}
function pause(){
    clearInterval(repeat)
}



//movement
const pos1 = ref(0)
const pos2 = ref(0)
let d = false
let arr = false

let step = 0

function keyPress(e) {
  if(e.key === 'd' && !d){
    pos1.value += step
    d = true
  }
  if(e.key === 'ArrowRight' && !arr){
    pos2.value += step
    arr = true
  }
}

function keyUp(e){
    if(pos1.value >= 1200 || pos2.value >= 1200){
        pause()
    }
    if(e.key === 'd' && !(pos1.value >= 1200 || pos2.value >= 1200)){
        d = false
    }
    if(e.key === 'ArrowRight' && !(pos1.value >= 1200 || pos2.value >= 1200)){
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
button{
  background-color: lightpink;
  padding: 10px;
  border-radius: 25px;
  border: 5px solid black;
  text-align: center;
  font-size: larger;
  cursor: pointer;
}
.timer{
    text-align: center;
}
</style>