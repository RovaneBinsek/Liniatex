<template>
    <div class="page mt-12 inline">
        <div v-for="(page, index) in pages" class="container-work" :class="{'last' : index == pages.length-1 }">
            
            <Transition :name="!(index%2) ? 'left-fade' : 'right-fade' ">
                <div v-show="page.isVisible" class="zascita" :class="{'left':!(index%2), 'right': index%2}" :style="{ backgroundImage: 'url(' + page.image + ')'}" :ref="(el) => { page.element = el as HTMLElement}">        
                </div>
            </Transition>
            <Transition name="fade-in">
                <div  v-show="page.isVisible" class="text-outer" >
                    <p class="visible-text leading-tight lg:text-3xl text-l pt-12 md:pt-12 lg:pt-13">
                        {{page.text}} 
                    </p>
                    <div class="text" :style="{backgroundImage: 'url(' + logo + ')'}">

                        <div >
                            <p class="lg:text-3xl leading-tight text-l my-3 md:my-4 lg:my-6">
                                {{page.text}}
                            </p>
                        </div>
                    </div>
                </div>

            </Transition>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { onMounted, onUnmounted, reactive,  } from 'vue';

    import Zascita1 from '@/assets/Zascita1.webp'
    import Zascita2 from '@/assets/Zascita2_flipped.webp'
    import Zascita3 from '@/assets/Zascita3_flipped.webp'
    import Zascita4 from '@/assets/Zascita4.webp'
    import Zascita5 from '@/assets/Zascita5_flipped.webp'
    import Zascita6 from '@/assets/Zascita6.webp'
    import Zascita7 from '@/assets/Zascita7.webp'
    import logo from '@/assets/logo_padding.png'

    const pages = reactive([{
        image: Zascita1,
        isVisible: false,
        element: document.createElement('div') as HTMLElement,
        text: "PONUJAMO ŠIROK NABOR DELOVNE ZAŠČITE",
    },{
        image: Zascita2,
        isVisible: false,
        element: document.createElement('div') as HTMLElement,
        text: "NAŠA OBLAČILA NADRGAJUJEMO IN IZPOPOLNJUJEMO ŽE 32 LET",
    },{
        image: Zascita7,
        isVisible: false,
        element: document.createElement('div') as HTMLElement,
        text: "PRI IZDELAVI UPORABLJAMO KVALITETNE MATERIALE, KI NAŠIM IZDELKOM ZAGOTAVLJAJO DOLGO ŽIVLJENSKO DOBO",
    },{
        image: Zascita3,
        isVisible: false,
        element: document.createElement('div') as HTMLElement,
        text: "NAŠI IZDELKI UPORABNIKU ZAGOTAVLJAJO UDOBNO UPORABO",
    },{
        image: Zascita4,
        isVisible: false,
        element: document.createElement('div') as HTMLElement,
        text: "VSA OBLAČILA SO PO NAROČILU PRILAGODLJIVA TAKO PO FUNKCIJI KOT IZGLEDU",
    },{
        image: Zascita5,
        isVisible: false,
        element: document.createElement('div') as HTMLElement,
        text: "V SODELOVANJU Z VAMI PRIPRAVIMO CELOSTNO PODOBO KOLEKCIJE IN JO PRILAGODIMO RAZLIČNIM DELOVNIM RAZMERAM",
    },{
        image: Zascita6,
        isVisible: false,
        element: document.createElement('div') as HTMLElement,
        text: "Z NAŠIMI OBLAČILI BO PODOBA VAŠIH ZAPOSLENIH CELOSTNA IN PROFESIONALNA",
    }])

    onMounted( async () => { 
            checkVisible();
            window.addEventListener("scroll", handleScroll, { passive: true })
            window.document.getElementById("app")!.style.overflowX = "hidden";
            window.document.getElementById("app")!.style.overflowY = "hidden";
        })

    onUnmounted(() => {
        window.removeEventListener("scroll", handleScroll)
            window.document.getElementById("app")!.style.overflowX = '';
            window.document.getElementById("app")!.style.overflowY = '';
    })
    const handleScroll = () => {
        checkVisible();
    }

    const checkVisible = () => {
        let height = window.innerHeight;
        pages.forEach((p) => {
            p.isVisible = (height/2) > p.element.parentElement!.getBoundingClientRect().top
        })
    }

</script>

<style lang="scss" scoped>
.container-work{
    height: 100vh;
    margin-bottom: -50vh;
    padding-top: 30px;

    &.last{
        margin-bottom: -10vh;
    }

    
.zascita{
    height: 80vh;
    background-size: contain;
    background-repeat: no-repeat;
    z-index: -1;
    position: relative;

    @media ( max-width: 900px){
        
        &.left{
            background-position: 92% 20%;
    
        }
    
        &.right{
            background-position: 10% 20%;
        }
    }
    @media ( min-width: 900px) and ( max-width: 1400px){
        
        &.left{
            background-position: 82% 20%;

        }

        &.right{
            background-position: 20% 20%;
        }
    }
    @media ( min-width: 1400px){
        
        &.left{
            background-position: 75% 20%;

        }

        &.right{
            background-position: 30% 20%;
        }
    }
    
    
}
    .text-outer{
                        
        .visible-text{
            visibility: visible;
            position: absolute;
            width: 80%;
            left: 10%;
            z-index: 3;
        }
        .text{
            margin-top: -60vh;
            background-size: 200px;
            padding-top: 24px;
            z-index: -3;
            position: relative;
            background-repeat-y: no-repeat;
            div{
                width: 100%;
                border-bottom: solid 2px var(--base-color);
                border-top: solid 2px var(--base-color);
                position: relative;
                z-index: -10;
            }
            p{
                color: var(--light-color);           
                position: relative;
                display: flow-root;        
                visibility: hidden;
                margin-top: 25px;
                margin-bottom: 25px;
                width: 80%;
                left: 10%;
                z-index: -10;
            }
        }
    }
}
.logo{
    height: 100vh;
    min-height: -webkit-fill-available;
    max-width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50%;
}


.fade-in-leave-active,
.left-fade-leave-active,
.left-fade-enter-active,
.right-fade-leave-active,
.right-fade-enter-active{
  transition: all 1.8s ease-out;
} 

.left-fade-enter-from,
.left-fade-leave-to{
    opacity:0;    
    transform: translateX(-70%) 
}
.right-fade-enter-from,
.right-fade-leave-to{
    transform: translateX(70%);
}


.fade-in-enter-active{
    transition: all 0.1s;

}
.fade-in-enter-to{
    opacity: 1;
}

.fade-in-enter-from,
.fade-in-leave-to{
    opacity:0;
}



</style>