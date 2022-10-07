<template>
    <div class="navbar-fixed-top flex" :class="{'scrolled': isVisible}">
        <router-link to="/">
            <div class="logo ml-2" :style="{backgroundImage: 'url(' + logo + ')'}" >
            </div>
        </router-link>
        <div class="right-2 fixed flex">
            <div class="container-hamburger mr-2 inline-grid" @click="isVisibleBurger = !isVisibleBurger" :class="{ 'change': isVisibleBurger }">
                <div class="bar1 rounded"></div>
                <div class="bar2 rounded"></div>
                <div class="bar3 rounded"></div>
                </div>
                <transition name="nav-side">
                    <div class="menu inline-grid fixed w-full left-0 top-0" v-show="isVisibleBurger">
                    
                    <router-link class=" h-10 inline-flex w-fit" to="/" @click="hide">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 m-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                    </router-link>
                    <router-link class="p-2 px-2 button text-base h-10 border-y-0 m-0 inline-flex w-fit" to="/work"  @click="hide"><p class="">DELOVNA ZAŠČITA</p></router-link>

                </div>
                </transition>
        </div>

    </div>
</template>

<script setup lang="ts">
    import { onMounted, onUnmounted, ref } from 'vue'

    import logo from '@/assets/logo.png'

    const isVisible = ref(false);
    const isVisibleBurger = ref(false);
    
    onMounted( async () => { 
                window.addEventListener("scroll", handleScroll, { passive: true })
            })

    onUnmounted(() => {
        window.removeEventListener("scroll", handleScroll)
    })
    const handleScroll = () => {
        var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if (top > 40)
            isVisible.value = true;
        else 
            isVisible.value = false || isVisibleBurger.value;
	}

    const hide = () => {
        isVisible.value = false;
        isVisibleBurger.value = false;
    }

</script>

<style lang="scss" scoped>
.navbar-fixed-top  {
    top:-70px;
    opacity:0;
    transition-duration: 0.8s;
    height: 40px;
    width: 100%;
    position: fixed;
    background-color: rgba(0, 0, 0, 0);
    z-index: 100;
    padding: 10px;

    &.scrolled{
        opacity: 1;
        top: 0px;
    }
    a{
        border-color: var(--light-color);
        stroke: var(--base-color);
        color: var(--light-color);
    }
    a:hover{
        color: var(--base-color);
        border-color: var(--base-color);
        stroke: var(--base-color);
    }
}

.logo{
    height: 40px;
    width: 200px;
    background-size: 100%;
    background-repeat: no-repeat;
    margin-top: 4px;
    z-index: 11;
    position: absolute;
}


.container-hamburger {
  display: inline-block;
  cursor: pointer;
  z-index: 11;
}

.menu{
    background: var(--base-dark-color);
    z-index:10;
    padding: 20px;
    padding-top: 50px;
}

.bar1, .bar2, .bar3 {
  width: 32px;
  height: 4px;
  background-color: var(--base-color);
  margin: 6px 0;
  transition: 0.4s;
}

.change .bar1 {
  transform: translate(0, 10px) rotate(-45deg);
}

.change .bar2 {opacity: 0;}

.change .bar3 {
  transform: translate(0, -10px) rotate(45deg);
}

.nav-side-enter-active,
.nav-side-leave-active{
    transition: all 0.3s;
}
.nav-side-enter-from,
.nav-side-leave-to{
    margin-top: -300px;
}

</style>