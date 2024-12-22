<script setup>
import HelloWorld from './components/HelloWorld.vue'
import ProfileCard from './components/ProfileCard.vue';
</script>

<!-- <template>
  <div
  :class="true ? 'flex flex-col xl:flex-row min-h-screen bg-blue-700' : 'flex flex-col xl:flex-col min-h-screen bg-blue-700'" 
  class="flex flex-col xl:flex-row min-h-screen bg-blue-700 transition-all duration-1000 items-center xl:items-stretch">
    <div class="bg-red-700 w-1/6 flex flex-col justify-between min-w-[300px] max-w-[800px] ml-8">
      <div class="bg-violet-600 sticky top-0">
        <header class="bg-black p-5 mt-10 rounded-3xl border-solid border-cyan-300 border">
          <div class="flex justify-center mb-4">
            <img src="./assets/profilephoto.JPG" alt="Profile" class="profile-photo rounded-full size-36" />
          </div>
          <h1 class="text-2xl font-sans font-bold mb-2 text-center">Nopparuj Inpikul</h1>
          <h2 class="text-gray-400 text-xl font-mono font-bold mb-2 text-center">Game Developer</h2>
        </header>
      </div>
    </div>
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
</template> -->

<template>
  <div
  :class="true ? 'flex flex-col xl:flex-row min-h-screen bg-[#161616]' : 'flex flex-col xl:flex-col min-h-screen bg-blue-700'" 
  class="flex flex-col xl:flex-row min-h-screen bg-[#161616] transition-all duration-1000 items-center xl:items-stretch ">
    <div class="bg-[#161616] w-1/6 flex flex-col justify-between min-w-[300px] max-w-[800px] ml-8">
      <div class="bg-[#161616] sticky top-0">
        <div class="rounded-3xl border-solid border-gray-800 border bg-[#161616] p-5 mt-10 ">
          <div class="bg-orange-500 border rounded-md">ASDS</div>
          <header class="mb-10">
            <div class="flex justify-center mb-4">
              <img src="./assets/profilephoto.JPG" alt="Profile" class="profile-photo rounded-full size-36" />
            </div>
            <h1 class="text-2xl font-sans font-bold mb-2 text-center">Nopparuj Inpikul</h1>
            <h2 class="text-gray-400 text-xl font-mono font-bold mb-2 text-center">Game Developer</h2>
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
      isScrolled: false,
    };
  },
  methods: {
    handleScroll() {
      // Check if the scroll position is greater than 500px
      this.isScrolled = window.scrollY > 10;
    },
  },
  mounted() {
    // Attach the scroll event listener when the component is mounted
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    // Remove the scroll event listener when the component is destroyed
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
