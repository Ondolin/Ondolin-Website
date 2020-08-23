<template>
  <div class="font-display">

    <NavBar />

    <WaveAnimation />

    <slot/>
  </div>
</template>
<script>
  import WaveAnimation from "../components/WaveAnimation";
  import NavBar from "../components/NavBar";

  export default {
    components: { WaveAnimation, NavBar }
  }
</script>
