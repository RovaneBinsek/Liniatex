<template>
    <div class="home-page">
        <PageSection :image="image1" >
            <div class="logo" :style="{backgroundImage: 'url(' + logo + ')'}">
            </div>
        
        </PageSection>
        <TextStrip shortText="KDO SMO?" longText="Smo slovensko podjetje, ki se ponaša z 32-letno tradicijo na področju tekstilne obrti. Domačim in tujim naročnikom ponujamo tako izdelavo kot uslugo, kakor končne izdelke za vse vrste delovne in varovalne opreme ter modnih oblačil." />
        <PageSection :image="image2" height="80vh" css="background-right" />
        <TextStrip :inverted="true" short-text="PONUDBA" long-text="Našim strankam se osebno posvetimo in jim z dolgoletnimi izkušnjami pomagamo pri izbiri pravih produktov ki jih prilagodimo njihovim željam in potrebam. Tudi najbolj zahtevni uporabniki od nas odidejo zadovoljni."/>
        <PageSection :image="image3" height="80vh" css="background-right-more" />
       <TextStrip short-text="KVALITETA" long-text="Pri izdelavi uporabljamo kvalitetne materiale in preizkušene tehnike in s tem našim izdelkom zagotavljamo dolgo življenjsko dobo, uporabnikom pa maksimalno udobje. Zavedamo se kako kvalitetna in udobna oblačila prispevajo k dobremu počutju in kvalitetno opravljenemu delu. "/>
       <PageSection :image="image4" height="60vh"/>
       <p class="text-3xl lg:text-6xl lg:pt-28 lg:pb-28 br-solid md:py-8 md:px-20 px-8 py-10 m-auto inline-flex text-center">
            PARTNERJI
        </p>
        <Partners />
    </div>
</template>

<script setup lang="ts">
import Partners from '@/components/Partners.vue';
import PageSection from '@/components/PageSection.vue';
import TextStrip from '@/components/TextStrip.vue';


import image1 from '@/assets/DuskoSaskaBW.jpg'
import image2 from '@/assets/DeloSStrankami.jpg'
import image3 from '@/assets/SivalniStroj.jpg'
import image4 from '@/assets/Fabric.jpg'
import logo from '@/assets/logo.png'

</script>

<style scoped >
    .logo{
        height: 100vh;
        min-height: -webkit-fill-available;
        max-width: 100%;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 50%;
    }
    @media (max-width: 768px) {
        .logo{
            background-size: 80%;
        }
    }
</style>