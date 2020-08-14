<template>
  <Layout>
    <div class="h-screen w-screen flex justify-center items-center">

      <!-- fixed wave svg -->
      <div class="fixed top-0 left-0 w-screen bg-white pt-20 lg:pt-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 300" class="w-full"><path fill="#2E294E" fill-opacity="1" d="M0,96L48,122.7C96,149,192,203,288,229.3C384,256,480,256,576,234.7C672,213,768,171,864,165.3C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>

      <!-- content -->

      <NavBar />

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
  import NavBar from "../components/NavBar"

  export default {
    components: ["NavBar"]
  }
</script>