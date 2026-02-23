<template>
    <button @click="emit('select', item)" class="choice">
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
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 200px;
    width: 150px;
    border: 3px solid black;
}
</style>