<script setup>
import HelloWorld from './components/HelloWorld.vue'
import ProfileCard from './components/ProfileCard.vue';
import ProjectCard from './components/ProjectCard.vue';
</script>

<!-- bg-[url('./assets/testbg.webp')] -->
 
<template>
	<div
	:class="true ? 'flex flex-col xl:flex-row min-h-screen bg-[#161616]' : 'flex flex-col xl:flex-col min-h-screen bg-blue-700'" 
	class="flex flex-col xl:flex-row min-h-screen bg-[url('./assets/testbg.webp')] transition-all duration-1000 items-center xl:items-stretch ">
	<ProfileCard></ProfileCard>
	<div class=" w-4/6 xl:ml-[5%] w-full min-h-screen min-w-[500px] max-w-[700px] pt-[3%] pb-[3%]">
		<main class="bg-gray-800 p-8 rounded-3xl">
		<h1 class="text-center text-4xl mb-5 font-mono font-bold tracking-widest">Showreel</h1>
		
		<vue-plyr class="">
			<div class="plyr__video-embed" id="player">
			<iframe
				src="https://www.youtube.com/embed/WO2b03Zdu4Q"
				allowfullscreen
				allowtransparency
				allow="autoplay"
			></iframe>
			</div>
		</vue-plyr>

		<hr class="w-56 h-0.5 mx-auto my-5 bg-gray-100 border-0 md:my-10 dark:bg-gray-700">
		
		<h1 class="text-center text-4xl mb-5 font-mono font-bold tracking-widest">Projects</h1>

		<div class="flex flex-col items-center">
			<ProjectCard image="testbg.webp" title="Emergency Call" desc="LoremasdakmkasdpjwaijdmLoremasdakmkasdpjwaijdmAAAAAAAAAAADDDDDDDDDDDDDDFFFFFFFFFFFFFFFFFFFF/"></ProjectCard>
			<ProjectCard image="snowing.gif" title="Red Sea" desc="Loremasdakmkasdpjwaijdm"></ProjectCard>
			<ProjectCard image="profilephoto.JPG" title="Nightmare Labyrynth" desc="Loremasdakmkasdpjwaijdm"></ProjectCard>
		</div>
		
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
