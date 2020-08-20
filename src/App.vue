<template>
  <div class="container">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './components/Header'
  export default {
    components: {
      Header
    },
  }
</script>

<style>
  html {
    font-size: 62.5%;
    font-family: "Microsoft Yahei", "Hiragino Sans GB", Helvetica, Arial, STHeiti, "WenQuanYi Micro Hei", sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul li {
    list-style: none;
  }

  body {
    background-color: #f5f5f5;
  }

  .container {
    max-width: 80rem;
    margin: 0 auto;
    padding-top: 6rem;
  }

  .gradient-text {
    background-image: -webkit-linear-gradient(left, #9ad5ff, #a8aafe, #ffa6a6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .hidden {
    width: 100%;
    height: 50%;
    position: absolute;
    background: #f5f5f5;
    top: 6rem;
    left: 0;
    z-index: -1;
  }
</style>