<script setup>
import { ref } from 'vue'
</script>

<template>
  
    <div class="flex justify-between">
      <h2 class="text-3xl font-semibold mb-1">Emergency Call</h2>
      <div class="flex gap-2 mt-2.5">
        <img src="../../assets/logo/unreal-engine.svg" class="w-8 h-8">
        <img src="../../assets/logo/blender.svg" class="w-8 h-8">
      </div>
    </div>
    
    
    <div class="mb-3">
        <a class="text-md opacity-50 text-green-400 hover:text-green-300 hover:opacity-100 transition-all duration-500 inline-flex items-center gap-2" 
        href="https://drive.google.com/file/d/1yimSHRdtJ7BNOStDlCyKC-S4d7NBrVvt/view?usp=sharing" target="_blank"><span class="pi pi-download"> </span>Download (3 GB)</a>
    </div>
    <iframe width="530" height="315" src="https://www.youtube.com/embed/5_IKQ4Efkrc?si=Ly2U_VTnYQxRqPWy&autoplay=1&rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    
    <p class="mt-1">A Bodycam survival horror game.</p>

    <p class="mt-1">I developed this game by my self and I have learned a lot about Unreal Engine 5 and game development in general.</p>
    <h3 class="font-semibold mt-3">Things I've learned and made</h3>
    <ul class="pl-10" style="list-style-type: disc;">
      <li class="opacity-70">Make immersive gameplay mechanic like drag open door</li>
      <li class="opacity-70">Behavior tree and EQS system to create engaging enemy AI</li>
      <li class="opacity-70">Designing enemy and core gameplay mechanic</li>
      <li class="opacity-70">Niagara System to make gun muzzle smoke</li>
      <li class="opacity-70">Basic sound design for enemy, ambience and foley</li>
      <li class="opacity-70">Procedural gun recoil and recoil animation</li>
      <li class="opacity-70">Physic asset hit reaction</li>
      <li class="opacity-70">Inventory system</li>
      <li class="opacity-70">Basic Procedural Content Generation system (PCG) in UE5</li>
    </ul>

    
</template>


<style scoped>

</style>