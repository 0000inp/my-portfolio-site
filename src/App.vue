<script setup>
import HelloWorld from './components/HelloWorld.vue'
import ProfileCard from './components/ProfileCard.vue';
</script>

<!-- bg-[url('./assets/testbg.webp')] -->
 
<template>
  <div
  :class="true ? 'flex flex-col xl:flex-row min-h-screen bg-[#161616]' : 'flex flex-col xl:flex-col min-h-screen bg-blue-700'" 
  class="flex flex-col xl:flex-row min-h-screen bg-[url('./assets/testbg.webp')] transition-all duration-1000 items-center xl:items-stretch ">
    <div class=" w-1/6 flex flex-col justify-between min-w-[300px] max-w-[800px] ml-8">
      <div class=" sticky top-0">
          <div class="rounded-3xl border-solid border-gray-800 border bg-[#161616] p-5 mt-10" :style="{transform: `translateY(${profileMoveToPos}px)`, transition: `transform ${profileMoveDurationSec}s ease-in-out`,}">
          <div class="absolute -inset-px bg-gradient-to-r from-[#0e0e0e] via-[#0e0e0e] to-[#0e0e0e] rounded-xl blur-lg -z-20 translate-y-5"></div>
          <img src="./assets/snowing.gif" alt="" class="profileBackground absolute inset-0 w-full h-full object-cover rounded-3xl -z-10 opacity-40" />
          <header class="mb-10">
            <div class="flex justify-center mb-4">
              <img src="./assets/profilephoto.JPG" alt="Profile" class="profile-photo rounded-full size-36 drop-shadow-2xl shadow-2xl shadow-teal-950" />
            </div>
            <h1 class="text-2xl font-sans font-bold mb-2 text-center">Nopparuj Inpikul</h1>
            <h2 class="text-gray-300 text-xl font-mono font-bold mb-2 text-center">Game Developer</h2>
          </header>
          <a href="mailto:nopparuj.inpikul@gmail.com" class="text-gray-hover-white text-xs">nopparuj.inpikul@gmail.com</a>
          <div class="mt-0">
            <div class="flex flex-row space-x-2">
              <a href="https://www.facebook.com/nopparujinpikul/" target="_blank" class="text-gray-hover-white"> F </a>
              <a href="https://www.facebook.com/nopparujinpikul/" target="_blank" class="text-gray-hover-white"> I </a>
              <a href="https://www.facebook.com/nopparujinpikul/" target="_blank" class="text-gray-hover-white"> G </a>
              <a href="https://www.facebook.com/nopparujinpikul/" target="_blank" class="text-gray-hover-white"> L </a>
            </div>
          </div>
          <div class="mt-2">
            <div class="flex flex-row space-x-3">
              <a href="https://www.facebook.com/nopparujinpikul/" target="_blank" class="text-gray-hover-white hover-border p-1"> Resume </a>
              <a href="https://www.facebook.com/nopparujinpikul/" target="_blank" class="text-gray-hover-white hover-border p-1"> CV </a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    <div class="absolute -inset-px bg-gradient-to-r from-[#ffffff] via-[#ffffff] to-[#ffffff] rounded-xl blur-lg -z-20 translate-y-5"></div>
    <div class="bg-green-700 w-4/6 xl:ml-[5%] w-full min-h-screen min-w-[500px] max-w-[700px] pt-[5%]">
      <main class="bg-green-400">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam corporis atque cupiditate enim, praesentium magnam incidunt, eaque ratione soluta vitae fuga vero ab accusamus? In tenetur eius consequuntur id expedita.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam corporis atque cupiditate enim, praesentium magnam incidunt, eaque ratione soluta vitae fuga vero ab accusamus? In tenetur eius consequuntur id expedita.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam corporis atque cupiditate enim, praesentium magnam incidunt, eaque ratione soluta vitae fuga vero ab accusamus? In tenetur eius consequuntur id expedita.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam corporis atque cupiditate enim, praesentium magnam incidunt, eaque ratione soluta vitae fuga vero ab accusamus? In tenetur eius consequuntur id expedita.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam corporis atque cupiditate enim, praesentium magnam incidunt, eaque ratione soluta vitae fuga vero ab accusamus? In tenetur eius consequuntur id expedita.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam corporis atque cupiditate enim, praesentium magnam incidunt, eaque ratione soluta vitae fuga vero ab accusamus? In tenetur eius consequuntur id expedita.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam corporis atque cupiditate enim, praesentium magnam incidunt, eaque ratione soluta vitae fuga vero ab accusamus? In tenetur eius consequuntur id expedita.</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam corporis atque cupiditate enim, praesentium magnam incidunt, eaque ratione soluta vitae fuga vero ab accusamus? In tenetur eius consequuntur id expedita.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam corporis atque cupiditate enim, praesentium magnam incidunt, eaque ratione soluta vitae fuga vero ab accusamus? In tenetur eius consequuntur id expedita.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam corporis atque cupiditate enim, praesentium magnam incidunt, eaque ratione soluta vitae fuga vero ab accusamus? In tenetur eius consequuntur id expedita.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam corporis atque cupiditate enim, praesentium magnam incidunt, eaque ratione soluta vitae fuga vero ab accusamus? In tenetur eius consequuntur id expedita.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam corporis atque cupiditate enim, praesentium magnam incidunt, eaque ratione soluta vitae fuga vero ab accusamus? In tenetur eius consequuntur id expedita.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam corporis atque cupiditate enim, praesentium magnam incidunt, eaque ratione soluta vitae fuga vero ab accusamus? In tenetur eius consequuntur id expedita.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam corporis atque cupiditate enim, praesentium magnam incidunt, eaque ratione soluta vitae fuga vero ab accusamus? In tenetur eius consequuntur id expedita.</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam corporis atque cupiditate enim, praesentium magnam incidunt, eaque ratione soluta vitae fuga vero ab accusamus? In tenetur eius consequuntur id expedita.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam corporis atque cupiditate enim, praesentium magnam incidunt, eaque ratione soluta vitae fuga vero ab accusamus? In tenetur eius consequuntur id expedita.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam corporis atque cupiditate enim, praesentium magnam incidunt, eaque ratione soluta vitae fuga vero ab accusamus? In tenetur eius consequuntur id expedita.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam corporis atque cupiditate enim, praesentium magnam incidunt, eaque ratione soluta vitae fuga vero ab accusamus? In tenetur eius consequuntur id expedita.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam corporis atque cupiditate enim, praesentium magnam incidunt, eaque ratione soluta vitae fuga vero ab accusamus? In tenetur eius consequuntur id expedita.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam corporis atque cupiditate enim, praesentium magnam incidunt, eaque ratione soluta vitae fuga vero ab accusamus? In tenetur eius consequuntur id expedita.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam corporis atque cupiditate enim, praesentium magnam incidunt, eaque ratione soluta vitae fuga vero ab accusamus? In tenetur eius consequuntur id expedita.</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam corporis atque cupiditate enim, praesentium magnam incidunt, eaque ratione soluta vitae fuga vero ab accusamus? In tenetur eius consequuntur id expedita.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam corporis atque cupiditate enim, praesentium magnam incidunt, eaque ratione soluta vitae fuga vero ab accusamus? In tenetur eius consequuntur id expedita.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam corporis atque cupiditate enim, praesentium magnam incidunt, eaque ratione soluta vitae fuga vero ab accusamus? In tenetur eius consequuntur id expedita.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam corporis atque cupiditate enim, praesentium magnam incidunt, eaque ratione soluta vitae fuga vero ab accusamus? In tenetur eius consequuntur id expedita.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam corporis atque cupiditate enim, praesentium magnam incidunt, eaque ratione soluta vitae fuga vero ab accusamus? In tenetur eius consequuntur id expedita.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam corporis atque cupiditate enim, praesentium magnam incidunt, eaque ratione soluta vitae fuga vero ab accusamus? In tenetur eius consequuntur id expedita.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam corporis atque cupiditate enim, praesentium magnam incidunt, eaque ratione soluta vitae fuga vero ab accusamus? In tenetur eius consequuntur id expedita.</p>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      scrolledPassTreshold: false,
      scrollTimeout: null,
      lastScrollTop: 0,
      profileMoveToPos: 0,
      profileMoveDurationSec: 1.0,
    };
  },
  methods: {
    handleScroll() {
      this.scrolledPassTreshold = window.scrollY > 20;

      clearTimeout(this.scrollTimeout);

      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > this.lastScrollTop) { //scroll down
        this.profileMoveToPos = -5;
        this.profileMoveDurationSec = 0.5;
      } else if (scrollTop < this.lastScrollTop) { //scroll up
        this.profileMoveToPos = 5;
        this.profileMoveDurationSec = 0.5;
      }

      this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

      this.scrollTimeout = setTimeout(() => { //stop scroll
        this.profileMoveToPos = 0;
        this.profileMoveDurationSec = 1.0;
      }, 200);
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>



<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}


</style>
