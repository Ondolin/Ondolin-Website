<template>
  <div>
    <!--<NavBar />
    <WaveAnimation />-->

    <ProjectCard title="Test" class="m-4 w-1/4"/>
  </div>
</template>
<script>
  import ProjectCard from "../components/ProjectCard";
  import WaveAnimation from "../components/WaveAnimation";
  import NavBar from "../components/NavBar";

  export default {
    components: { ProjectCard, WaveAnimation, NavBar  }
  }
</script>
