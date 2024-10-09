<template>
  <div class="loader-center m-0 p-0 text-white d-flex justify-content-center align-items-center">
    <div class="loader-ring"></div>
    <span>loading...</span>
  </div>
</template>

<script>
</script>

<style scoped>
span {
  color: #737373;
  font-size: 20px;
  text-transform: uppercase;
  font-family: montserrat;
  letter-spacing: 1px;
  line-height: 200px;
  animation: text 2s ease-in-out infinite;
}

@keyframes text {
  50% {
    color: black;
  }
}

.loader-center {
  min-height: 100vh;
}

.loader-ring {
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  animation: ring 2s linear infinite;
}

@keyframes ring {
  0% {
    transform: rotate(0deg);
    box-shadow: 1px 5px 2px red;
  }

  33% {
    transform: rotate(120deg);
    box-shadow: 1px 5px 2px green;
  }

  66% {
    transform: rotate(240deg);
    box-shadow: 1px 5px 2px blue;
  }

  100% {
    transform: rotate(360deg);
    box-shadow: 1px 5px 2px red;
  }
}

.loader-ring::before {
  position: absolute;
  content: '';
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  box-shadow: 0 0 5px rgba(255, 255, 255, .3);
}
</style>