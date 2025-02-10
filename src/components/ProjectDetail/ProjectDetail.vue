<script setup>
import { ref } from 'vue'
import { vOnClickOutside } from '@vueuse/components'
import EmergencyCallDetail from './EmergencyCallDetail.vue';
import RedSeaDetail from './RedSeaDetail.vue';
import NightmareLabyrinthDetail from './NightmareLabyrinthDetail.vue';

defineProps({
  title: String,
})

</script>

<template>
    <div class="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex justify-center items-center z-50 ">
        <div class="bg-gray-800 bg-gradient-to-br from-teal-950 to-black p-6 w-3/4 max-w-xl max-h-screen overflow-y-scroll" style="scrollbar-width: none" v-on-click-outside="closeDetail">
          
          <EmergencyCallDetail v-if="title === 'Emergency Call'" @close="closeDetail"></EmergencyCallDetail>
          <RedSeaDetail v-if="title === 'Red Sea'" @close="closeDetail"></RedSeaDetail>
          <NightmareLabyrinthDetail v-if="title === 'Nightmare Labyrinth'" @close="closeDetail"></NightmareLabyrinthDetail>
          
          <button @click="closeDetail" class="mt-6 px-4 py-2 bg-[#321010] text-white rounded">Close</button>
        </div>
    </div>
</template>


<script>
export default {
  name: "ProjectDetail",
  data() {
    return {

    };
  },
  methods: {
    closeDetail() {
      this.$emit('close');
    },
  },
};


</script>

<style scoped>

</style>