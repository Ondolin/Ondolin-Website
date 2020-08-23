<template>
  <div class="absolute top-0 right-0 flex flex-row m-4">
    <div v-for="item in items" class="ml-4">
      <g-link :to="item.toLowerCase()">{{item}}</g-link>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        items: ["Projects", "Papers"]
      }
    }
  }
</script>
x
