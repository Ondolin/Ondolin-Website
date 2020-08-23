<template>
  <Layout>
    <div class="h-screen w-screen flex justify-center items-center">

      <NavBar />

      <WaveAnimation />

      <div class="lg:w-1/2 m-10 text-white">
        <div>
          <p class="font-light text-3xl block">
            Hi!
            Mein Name ist Marvin Kaiser.
          </p>
          <a href="mailto:contact@marvin-kaiser.eu" class="block font-light mt-4 lg:mt-1">
            Kontaktiere mich unter <span class="font-normal text-accent">contact@marvin-kaiser.eu</span>.
          </a>
        </div>
      </div>

    </div>
  </Layout>
</template>

<script>
  import WaveAnimation from "../components/WaveAnimation";
  import NavBar from "../components/NavBar";

  export default {
    components: {WaveAnimation, NavBar},
    metaInfo: {
      title: "Ondolin"
    }
  }
</script>
