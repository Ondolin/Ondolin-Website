<template>
  <div class="bg-background-dark rounded-lg p-3 text-white">
    <div class="font-bold text-2xl">{{title}}</div>
    <g-image :src="imageSrc" />
  </div>
</template>
<script>
  export default {
    props: ["title", "imageSrc"]
  }
</script>
