<template>
  <div class="loader grid-center w-full min-h-screen">
      <img src="/images/loader-screen.svg">
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .loader {
        background: #5893C5;
        height: 100% !important;
    }
    img {
        animation: movenft 5s infinite;
    }
    @keyframes movenft {
        0% {
            transform: translateY(40px);
        }
        50% {
            transform: translateY(60px);
            transform: translateY(-70px);
        }
        100% {
            transform: translateY(20px);

        }
    }
</style>