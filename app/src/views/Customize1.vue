<template>
    <div>
        <choice v-for="color in colors" :key="color" :color="color"/>
    </div>
</template>

<script setup>
import choice from "@/components/choice.vue"

const colors = [
    {name: "Red", color: "#ff0000"},
    {name: "Green", color: "#008000"},
    {name: "Blue", color: "#0000ff"},
    {name: "Yellow", color: "#FFE67B"},//default color
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