<script setup>
import HelloWorld from './components/HelloWorld.vue'
import ProfileCard from './components/ProfileCard.vue';
import ProjectCard from './components/ProjectCard.vue';

</script>

<!-- bg-[url('./assets/testbg.webp')] -->

<template>
	<div
	:class="true ? 'flex flex-col xl:flex-row min-h-screen bg-[#161616]' : 'flex flex-col xl:flex-col min-h-screen bg-blue-700'" 
	class="flex flex-col xl:flex-row min-h-screen bg-[url('./assets/1364036.jpeg')] bg-no-repeat bg-cover bg-center bg-fixed transition-all duration-1000 items-center xl:items-stretch ">
	<ProfileCard></ProfileCard>
	<div class="xl:ml-[5%] w-full min-h-screen min-w-[500px] max-w-[700px] pt-[3%] pb-[3%] ">
		<main class="bg-[#2c2c2c] bg-opacity-50 p-5 rounded-3xl ">
			<iframe class="w-full h-[350px] rounded-3xl"
			src="https://www.youtube.com/embed/_KTVzdQTn6c?si=Jb6M70SIg44cBElY&autoplay=1&rel=0" 
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
			referrerpolicy="strict-origin-when-cross-origin" 
			allowfullscreen>
			</iframe>

			<hr class="w-56 h-0.5 mx-auto my-5 bg-gray-100 border-0 md:my-10 dark:bg-gray-700">
			
			<h1 class="text-center text-4xl mb-5 font-mono font-bold tracking-widest">Projects</h1>

			<div class="flex flex-col items-center mb-10 ">
				<ProjectCard media="emergency-call-preview.mov" title="Emergency Call" desc="Bodycam horror game I solo-developed as a personal project to study Unreal Engine 5"></ProjectCard>
				<ProjectCard media="red-sea-preview.mov" title="Red Sea" desc="Submarine horror game made by team of 2 people as a graduation project using Unreal Engine 5"></ProjectCard>
				<ProjectCard media="nightmare-labyrinth-preview.mov" title="Nightmare Labyrinth" desc="Maze horror game made by team of 3 people as a game development course project using Godot 3"></ProjectCard>
				<!--<a class="text-xl text-white opacity-50 hover:opacity-100 hover:text-white transition-all duration-500"> < More > </a>-->
			</div>
		</main>
	</div>
	</div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      
    };
  },
  methods: {
    
  },
};
</script>



<style scoped>


</style>
