<template>
  <svg class="w-screen mt-16 h-screen fixed top-0 left-0 bg-white -z-10 block" width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <defs></defs>
    <path id="waveAnimationPath" d=""/>
  </svg>
</template>
<script>
 import "../..//plugins/gsap.min.js";
 import {wavify} from "wavify";

  export default {
    mounted() {
      window.myWave = wavify( document.querySelector('#waveAnimationPath'), {
        height: 60,
        bones: 3,
        amplitude: 60,
        color: '#2E294E',
        speed: .125
      })
    }
  }
</script>
