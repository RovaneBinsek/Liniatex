<template>
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <a v-for="partner in partnerji"  class="col-span-1 partner" :style="{ backgroundImage: 'url(' + partner.icon + ')'}" :href="partner.link">
        </a>
    </div>
</template>

<script setup lang="ts">
import BaseLabel from "@/assets/BaseLabel.webp"
import elliss from "@/assets/elliss.png"
import elvez from "@/assets/elvez.png"
import Milavert from "@/assets/Milavert.png"
import phannatiq from "@/assets/phannatiq.webp"
import connemara from "@/assets/connemara.png"
import kobelder from "@/assets/kobleder.jfif"
import kito from "@/assets/kito.png"


const partnerji = [    
    {
        icon: Milavert,
        link: "https://www.milavert.com/",
    },{
        icon: BaseLabel,
        link: "https://www.thebaselabel.com/en/",
    },{
        icon: elliss,
        link: "https://www.elliss.co.uk/",
    },{
        icon: elvez,
        link: "https://elvez.si/",
    },{
        icon: kito,
        link: "https://www.kitochainitalia.com/",
    },{
        icon: phannatiq,
        link: "https://www.instagram.com/phannatiq/",
    },{
        icon: kobelder,
        link: "https://kobleder.at/en/",
    },{
        icon: connemara,
        link: "https://www.connemara.fashion/",
    },
]       
</script>

<style lang="scss" scoped>

.partner{
    height: 250px;
    width: 250px;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    margin: auto;
    margin-bottom: 50px;
    transition: all .2s ease-in-out;

    &:hover{
        transform: scale(1.1);
    }
}

</style>