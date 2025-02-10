<script setup>
import { ref } from 'vue'
</script>

<template>

<div class="flex justify-between">
      <h2 class="text-3xl font-semibold mb-1">Nightmare Labyrinth</h2>
      <div class="flex gap-2 mt-2.5">
        <img src="../../assets/logo/godot.svg" class="w-8 h-8">
      </div>
    </div>

    <div class="mb-3">
        <a class="text-md opacity-50 text-green-400 hover:text-green-300 hover:opacity-100 transition-all duration-500 inline-flex items-center gap-2" 
        href="https://b0000m.itch.io/nightmare-labyrinth" target="_blank"><span class="pi pi-download"> </span>Download (749 MB)</a>
    </div>

    <h2 class="font-semibold my-3">Full Playthrough</h2>
    <iframe width="530" height="315" src="https://www.youtube.com/embed/iKSDmOIzbxk?si=H-h7xMXvNgei-srL&autoplay=1&rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    
    <p class="mt-1">A simple maze horror game made by Godot 3 for game development class in my 2nd year of college.</p>
    <h3 class="font-semibold mt-3">Things I've learned and made</h3>
    <ul class="pl-10" style="list-style-type: disc;">
      <li class="opacity-70">Ghost AI patrolling, sight detection, navmesh navigation</li>
      <li class="opacity-70">Immersive player movement, stamina system, hiding mechanic</li>
      <li class="opacity-70">Loading checkpoint</li>
    </ul>
</template>


<style scoped>

</style>