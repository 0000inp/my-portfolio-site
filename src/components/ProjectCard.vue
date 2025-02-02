<script setup>
import { ref } from 'vue'

defineProps({
  title: String,
  desc: String,
  image: String,
})

</script>

<template>
    <div class="bg-gradient-to-r from-[#212121] via-[#181818] to-[#000000] rounded-xl p-0 flex items-starts gap-4 mb-5 w-3/4 h-36
    overflow-hidden transition-transform duration-1000 ease-out transform hover:-translate-x-5 hover:scale-100 hover:z-10
    ">
        <img class="projectThumbnail w-2/3 h-1/1 object-cover rounded-md relative -mr-24 -z-10" :src="getImageUrl(image)" alt="ProjectThumbnail">
        <div class="flex-1 overflow-hidden p-2">
            <h2 class="text-xl font-semibold line-clamp-2 mb-4 tracking-wider">{{ title }}</h2>
            <p class="text-sm opacity-50 break-words" >{{ desc }}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: "ProjectCard",
  data() {
    return {
      
    };
  },
  methods: {
    
  },
};

const getImageUrl = (image) => {
  return new URL(`../assets/${image}`, import.meta.url).href;
};
</script>



<style scoped>

</style>