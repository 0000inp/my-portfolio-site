<script setup>
import { ref, onMounted } from 'vue'
import ProjectDetail from './ProjectDetail/ProjectDetail.vue'

defineProps({
  title: String,
  desc: String,
  media: String,
})

//transition-transform duration-1000 ease-out transform hover:-translate-x-5 hover:scale-100 hover:z-10
//<img class="projectThumbnail w-2/3 h-1/1 object-cover rounded-md relative -mr-24 -z-10" :src="getImageUrl(image)" alt="ProjectThumbnail">
//<video autoplay loop muted class="projectThumbnail w-2/3 h-1/1 object-cover rounded-md relative -mr-24 -z-10" src="../assets/Video/red-sea.mp4" alt="ProjectThumbnail"></video>
</script>

<template>
    <div class="project-card bg-gradient-to-r from-[#212121] via-[#181818] to-[#000000] rounded-xl p-0 flex items-starts gap-4 mb-5 w-3/4 h-36 overflow-hidden cursor-pointer"
    @click="openDetail()"
    >
    <video class="projectThumbnail w-2/3 h-1/1 object-cover rounded-md relative -mr-24 -z-10" :src="getMediaUrl(media)" alt="ProjectThumbnail" autoplay loop muted disablePictureInPicture></video>
        <div class="flex-1 overflow-hidden p-2">
            <h2 class="text-xl font-semibold line-clamp-2 mb-4 tracking-wider">{{ title }}</h2>
            <p class="text-sm opacity-50 break-words">{{ desc }}</p>
        </div>
      </div>
    
    <ProjectDetail :title="title" v-if="showDetail" @close="closeDetail()"/>
    

</template>

<script>
export default {
  name: "ProjectCard",
  components: {
    ProjectDetail,
  },
  data() {
    return {
      showDetail: false,
    };
  },
  methods: {
    openDetail(){
      this.showDetail = true;
      document.body.style.overflow = 'hidden';
    },
    
    closeDetail(){
      this.showDetail = false;
      document.body.style.overflow = '';
    },
  },
};

const getMediaUrl = (media) => {
  return new URL(`../assets/Project/${media}`, import.meta.url).href;
};
</script>



<style scoped>

</style>