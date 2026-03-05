<template>
    <button @click="emit('select', item)" class="choice" :style="{ backgroundColor: item.color, color: item.text }">
        <h3>{{ item.name }}</h3>
    </button>
</template>

<script setup>
defineProps({
    item:{
        type: Object,
        required: true,
    },
})
const emit = defineEmits(["select"])
</script>

<style scoped>
.choice{
    height: 100px;
    width: 100px;
    border-radius: 100%;
    border: 5px solid black;
}
</style>