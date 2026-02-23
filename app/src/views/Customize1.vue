<template>
    <div>
        <button> <RouterLink to="/">Back</RouterLink> </button>
        <Duck width="100px" height="100px" class="p1" :skincolor="players[0].color"></Duck>
        <choice v-for="color in colors" :key="color.name" :item="color" @select="updateStats(1, color.color)"/>
    </div>
</template>

<script setup>
import choice from "@/components/choice.vue"
import Duck from "@/components/duck.vue"
import { players, updateStats } from "@/state/players.js"

const colors = [
    {name: "Default", color: "#FFE67B"},
    {name: "Red", color: "#ff0000"},
    {name: "Green", color: "#008000"},
    {name: "Blue", color: "#0000ff"},
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