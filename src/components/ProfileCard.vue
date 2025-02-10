<script setup>
import { ref } from 'vue'
import 'primeicons/primeicons.css'

</script>

<template>
  <div class=" w-1/6 flex flex-col justify-between min-w-[300px] max-w-[800px] ml-8">
      <div class=" sticky top-0">
          <div class="rounded-3xl border-solid border-gray-800 border bg-[#373a2f] p-5 mt-10" :style="{transform: `translateY(${profileMoveToPos}px)`, transition: `transform ${profileMoveDurationSec}s ease-in-out`,}">
          <div class="absolute -inset-px bg-gradient-to-r from-[#0e0e0e] via-[#0e0e0e] to-[#0e0e0e] rounded-xl blur-lg -z-20 translate-y-5"></div>
          <img src="../assets/snowing.gif" alt="" class="profileBackground absolute inset-0 w-full h-full object-cover rounded-3xl -z-10 opacity-40" />
          <header class="mb-10">
            <div class="flex justify-center mb-4">
              <img src="../assets/profilephoto.JPG" alt="Profile" class="profile-photo rounded-full size-36 drop-shadow-2xl shadow-2xl shadow-teal-950" />
            </div>
            <h1 class="text-3xl font-sans font-bold mb-2 text-center">Nopparuj Inpikul</h1>
            <h2 class="text-gray-400 text-xl font-mono font-bold mb-2 text-center opacity-70">Game Programmer</h2>

            <div class="flex justify-center opacity-85">
              <div class="flex gap-2">
                <img src="../assets/logo/unreal-engine.svg" class="w-8 h-8">
                <svg class="mt-0.5" width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="c++">
                <g id="c++_2">
                <path id="Vector" d="M94.7304 29.3213C94.7297 27.6444 94.371 26.1626 93.6458 24.8908C92.9333 23.6402 91.8664 22.5921 90.4353 21.7633C78.6222 14.9519 66.7977 8.16125 54.9885 1.34284C51.8048 -0.495164 48.7179 -0.428157 45.5578 1.43624C40.8559 4.20922 17.3148 17.6964 10.2999 21.7595C7.41097 23.4319 6.00521 25.9914 6.00451 29.3181C6 43.0164 6.00451 56.7143 6 70.4129C6.00069 72.0531 6.34406 73.506 7.0374 74.7587C7.75017 76.0471 8.83201 77.1241 10.2961 77.9715C17.3114 82.0347 40.8555 95.5208 45.5565 98.2945C48.7179 100.16 51.8048 100.227 54.9895 98.3879C66.7991 91.5691 78.6243 84.7789 90.4391 77.9674C91.9032 77.1202 92.985 76.0426 93.6978 74.7552C94.3901 73.5026 94.7342 72.0496 94.7349 70.4091C94.7349 70.4091 94.7349 43.0199 94.7304 29.3213Z" fill="#5C8DBC"/>
                <path id="Vector_2" d="M50.5032 49.7322L7.03735 74.7588C7.75013 76.0473 8.83197 77.1242 10.2961 77.9717C17.3113 82.0349 40.8555 95.521 45.5565 98.2947C48.7179 100.16 51.8048 100.227 54.9895 98.3881C66.7991 91.5693 78.6244 84.779 90.4392 77.9676C91.9033 77.1204 92.9851 76.0427 93.6979 74.7554L50.5032 49.7322Z" fill="#1A4674"/>
                <path id="Vector_3" d="M37.629 57.1453C40.1583 61.5608 44.913 64.5389 50.3673 64.5389C55.8553 64.5389 60.6371 61.5229 63.1536 57.0602L50.5031 49.7322L37.629 57.1453Z" fill="#1A4674"/>
                <path id="Vector_4" d="M94.7303 29.3216C94.7296 27.6447 94.371 26.1629 93.6457 24.8911L50.5032 49.7324L93.6978 74.7556C94.3901 73.503 94.7342 72.05 94.7349 70.4095C94.7349 70.4095 94.7349 43.0202 94.7303 29.3216Z" fill="#1B598E"/>
                <path id="Vector_5" d="M92.3551 51.5208H88.9798V54.8969H85.6037V51.5208H82.2287V48.1459H85.6037V44.7705H88.9798V48.1459H92.3551V51.5208ZM80.0387 51.5208H76.6637V54.8969H73.2883V51.5208H69.913V48.1459H73.2883V44.7705H76.6637V48.1459H80.0387V51.5208Z" fill="white"/>
                <path id="Vector_6" d="M63.1537 57.0604C60.6373 61.5231 55.8554 64.5392 50.3675 64.5392C44.9131 64.5392 40.1584 61.561 37.6291 57.1455C36.3586 54.9298 35.6913 52.4197 35.6939 49.8656C35.6939 41.7619 42.2637 35.1924 50.3675 35.1924C55.7867 35.1924 60.5164 38.1335 63.0582 42.5039L75.8837 35.1185C70.7859 26.3187 61.2685 20.3984 50.3675 20.3984C34.0927 20.3984 20.8999 33.5916 20.8999 49.8656C20.8999 55.2047 22.3202 60.2115 24.8026 64.5301C29.8875 73.3765 39.4321 79.3332 50.3675 79.3332C61.323 79.3332 70.8824 73.3525 75.96 64.4801L63.1537 57.0604Z" fill="white"/>
                </g>
                </g>
                </svg>
                <img src="../assets/logo/blender.svg" class="w-8 h-8">
              </div>
            </div>

          </header>
          <a href="mailto:nopparuj.inpikul@gmail.com" class="text-gray-hover-white text-xs">nopparuj.inpikul@gmail.com</a>
          <div class="mt-3">
            <div class="flex flex-row space-x-2">
              <a href="https://github.com/0000inp" target="_blank" class="text-gray-hover-white pi pi-github" style="font-size: 26px"></a>
              <a href="https://www.facebook.com/nopparujinpikul/" target="_blank" class="text-gray-hover-white pi pi-facebook" style="font-size: 26px"></a>
              <a href="https://www.instagram.com/0000nprj/" target="_blank" class="text-gray-hover-white pi pi-instagram" style="font-size: 26px"></a>
              <!--<a href="https://www.facebook.com/nopparujinpikul/" target="_blank" class="text-gray-hover-white pi pi-linkedin" style="font-size: 26px"></a>-->
            </div>
          </div>
          <div class="mt-2">
            <div class="flex flex-row space-x-3">
              <a href="https://www.canva.com/design/DAGbBqjVWNs/Ul7vNaRa7jXXa_2ykPlp-w/view?utm_content=DAGbBqjVWNs&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha6be16e10b" target="_blank" class="text-gray-hover-white hover-border p-1"> Resume </a>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    <div class="absolute -inset-px bg-gradient-to-r from-[#ffffff] via-[#ffffff] to-[#ffffff] rounded-xl blur-lg -z-20 translate-y-5"></div>
</template>

<script>
export default {
  name: "ProfileCard",
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

