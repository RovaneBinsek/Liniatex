<template>
    <div class="text grid grid-cols-3 gap-4 lg:pt-28 lg:pb-28 br-solid md:py-8 md:px-20 px-8 py-10">
        <p class="text-3xl lg:text-6xl col-span-3 md:col-span-1 m-auto" :class="{ 'md:hidden': props.inverted }">
            {{props.shortText}}
        </p>
        <p class="text-xl leading-tight lg:text-3xl lg:px-12  col-span-3  md:col-span-2 pt-0">
            {{props.longText}}
        </p>
        <p v-if="props.inverted" class="text-3xl lg:text-6xl col-span-1 m-auto md:flex hidden">
            {{props.shortText}}
        </p>
    </div>
</template>

<script setup lang="ts">
import SivalniStroj from '@/assets/SivalniStroj.png'

const props = defineProps({
    shortText: String,
    longText: String,
    inverted: Boolean
})
</script>

<style lang="scss" scoped>
.text{
    background-size: 100%;
    background-position: 10%;

}
</style>