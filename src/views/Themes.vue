<template>
  <div class="themes-wrapper">
    <div class="hidden"></div>
    <ul class="themes-list">
      <li class="themes-item" v-for="item in themesData" :key="item.id" @click="themeDetail(item.id)"
        :style="{ 'background-image' : 'url(' + item.image + ')'}">
        <div class="theme-info">
          <div class="title">{{ item.title }}</div>
          <div class="desc">{{ item.desc }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    computed: {
      ...mapState(['themesData'])
    },
    methods: {
      themeDetail(tid) {
        this.$router.push('/theme/' + tid)
      }
    },
  }
</script>

<style scoped>
  .themes-wrapper {
    padding: 1rem 0.5rem 2rem;
  }
  
  .themes-item {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 20rem;
    background-size: cover;
    background-position: bottom;
    margin-bottom: 1.2rem;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: -1px 2px 5px rgba(0, 0, 0, .6);
  }

  .theme-info {
    width: 100%;
    color: #fff;
    text-align: center;
    background: #222e39;
    padding: .5rem 1.5rem 1rem;
  }

  .theme-info .title {
    font-size: 2rem;
  }

  .theme-info .desc {
    font-size: 1.4rem;
  }
</style>