<template>
    <div class="route"><RouterLink to="/">Back</RouterLink></div>
    <div class="customize">
        <Duck width="200px" height="200px" class="p1" :skincolor="players[1].color"></Duck>
        <div class="choices">
            <choice v-for="color in colors" :key="color.name" :item="color" @select="updateStats(2, color.color)"/>
        </div>
    </div>
</template>

<script setup>
import choice from "@/components/choice.vue"
import Duck from "@/components/duck.vue"
import { players, updateStats } from "@/state/players.js"

const colors = [
    {name: "Default", color: "#FFE67B", text: "#000"},
    {name: "Red", color: "#ff0000", text: "#000"},
    {name: "Green", color: "#008000", text: "#fff"},
    {name: "Blue", color: "#0000ff", text: "#fff"},
    {name: "Lime", color: "#bfff00", text: "#000"},
    {name: "Purple", color: "#800080", text: "#fff"},
    {name: "Indigo", color: "#6f00fe", text: "#fff"},
    {name: "Salmon", color: "#fa8072", text: "#000"},
    {name: "Orange", color: "#ffa500", text: "#000"},
    {name: "Sky Blue", color: "#87cefa", text: "#000"},
    {name: "Black", color: "#000", text: "#fff"},
]
</script>

<style scoped>
.customize{
    justify-content: center;
    flex-direction: row;
    display: flex;
    gap: 100px;
    padding-top: 10%;
}
.choices{
    display: grid;
    grid-template-columns: 100px 100px 100px;
    gap: 10px;
    float: right;
}
.route{
  background-color: lightpink;
  padding: 10px;
  border-radius: 25px;
  border: 5px solid black;
  text-align: center;
  font-size: larger;
}
</style>