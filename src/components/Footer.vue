<template>
    <div class="footer  grid grid-cols-1 md:grid-cols-2">
        <div class="flex  hidden md:flex" >
            <p class="m-auto mt-16">
                © 2022 Liniatex d.o.o.
            </p>
        </div>
        <div class="col-span-1 m-auto flex right-5" >
            <div class=" m-auto">
                <div class="cursor-pointer flex mb-1" href="mailto:liniatex@gmail.com">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>

                    <p class="ml-2">
                        liniatex@gmail.com
                    </p>
                </div>
                <div class="cursor-pointer flex" href="tel:+386 41 371 977">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <p class="ml-2">
                        +386 40 455 080
                    </p>
                </div>
            </div>
        </div>
        <div class="flex md:hidden h-" >
            <p class="m-auto">
                © 2022 Liniatex d.o.o.
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lag="scss" scoped>

.footer{
    height: 150px;
    background-color: var(--base-dark-color);
}
</style>