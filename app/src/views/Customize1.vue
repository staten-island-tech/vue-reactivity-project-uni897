<template>
    <div>
        <Duck width="100px" height="100px" class="duck" :skincolor="skinColor"></Duck>
        <button> <RouterLink to="/">Back</RouterLink> </button>
        <choice v-for="color in colors" :key="color.name" :color="color" @select="changeColor"/>
    </div>
</template>

<script setup>
import choice from "@/components/choice.vue"
import Duck from "@/components/duck.vue"
import { players, updateColor } from "@/state/players.js"
import { ref } from "vue"
import { RouterLink } from "vue-router"

const skinColor = ref("#FFE67B")
skinColor.value = players[0].color

function changeColor(color){
    skinColor.value = color.color
    updateColor(1, color.color)
    console.log(players[0])
}
const colors = [
    {name: "Red", color: "#ff0000"},
    {name: "Green", color: "#008000"},
    {name: "Blue", color: "#0000ff"},
    {name: "Yellow", color: "#FFE67B"}, //default color
    {name: "Lime", color: "#bfff00"},
    {name: "Purple", color: "#800080"},
    {name: "Indigo", color: "#6f00fe"},
    {name: "Salmon", color: "#fa8072"},
    {name: "Orange", color: "#ffa500"},
    {name: "Sky Blue", color: "#87cefa"},
]
</script>

<style scoped>

</style>