<script setup lang="ts">
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
  import HeaderNav from '@/components/HeaderNav.vue';
  import { RouterView } from 'vue-router';
import NavHeader from './components/NavHeader.vue';
import Footer from '@/components/Footer.vue';
  </script>
  
  <template>
    <NavHeader/>
    <RouterView/>
    <Footer />
  </template>
  
  <style>  
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }


  </style>
  