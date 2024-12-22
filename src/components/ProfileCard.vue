<script setup>
import { ref } from 'vue'

</script>

<template>
  <div class="bg-violet-600 sticky top-0">
    <header class="bg-black p-5 mt-10 rounded-3xl border-solid border-cyan-300 border">
      <div class="flex justify-center mb-4">
        <img src="./assets/profilephoto.JPG" alt="Profile" class="profile-photo rounded-full size-36" />
      </div>
      <h1 class="text-2xl font-sans font-bold mb-2 text-center">Nopparuj Inpikul</h1>
      <h2 class="text-gray-400 text-xl font-mono font-bold mb-2 text-center">Game Developer</h2>
    </header>
  </div>
</template>

<style scoped>
.profile-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
}
</style>
