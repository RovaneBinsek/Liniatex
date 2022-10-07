<template>
    <div>
        <div class="image-section" :style="{ backgroundImage: 'url(' + props.image + ')', height: props.height }"  :class="props.css">
            <slot></slot>

        </div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    image: String,
    height: String,
    css: String
})

</script>

<style scoped>
    .image-section{
        background-attachment: fixed;
        background-size: cover;
        height: 100vh;
        background-position: center;
    }
    .background-right{
        background-position: 60%;

    }
    .background-right-more{
        background-position: 70%;

    }
</style>