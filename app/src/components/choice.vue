<template>
    <button @click="clicked" class="color">
        <h3>{{ props.color.name }}</h3>
    </button>
</template>

<script setup>
const props = defineProps({
    color:{
        type:Object,
        required: true,
    },
})
function clicked(){
    console.log(props.color.name)
    console.log(props.color.color)
}
</script>

<style scoped>
.color{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 200px;
    width: 150px;
    border: 3px solid black;
}
</style>