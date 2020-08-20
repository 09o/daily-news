<template>
  <div class="news-wrapper">
    <div class="news-img" :style="{'background-image': 'url('+newItem[0].images[0]+')'}">
      <div class="new-tilte">{{ newItem[0].title }}</div>
      <div class="blur-wrapper"></div>
      <div class="imgSource">{{ newItem[0].imageSource }}</div>
    </div>
    <div class="news-content">
      <div class="author">
        作者 / {{ newItem[0].author }}
      </div>
      <div class="article-content">
        <p 
        v-for="(article, index) in newItem[0].content" 
        :key="index"
        v-html="article">
      </p>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    computed: {
      ...mapState(['baseData', 'newItem']),
    }
  }
</script>

<style>
  .news-wrapper {
    width: 100%;
    height: 100%;
    background: #fff;
  }

  .news-img {
    width: 100%;
    height: 25rem;
    background-position: center;
    background-size: cover;
    position: relative;
    overflow: hidden;
  }

  .new-tilte {
    position: absolute;
    /* width: 80%; */
    /* text-align: center; */
    left: 2rem;
    right: 2rem;
    bottom: 3rem;
    font-size: 2rem;
    color: #fff;
    z-index: 3;
  }

  .blur-wrapper {
    left: -3rem;
    bottom: -2rem;
    position: absolute;
    width: 200%;
    height: 10rem;
    background: rgba(0, 0, 0, .6);
    filter: blur(2rem);
    z-index: 2;
  }

  .imgSource {
    position: absolute;
    right: 10px;
    bottom: 10px;
    color: #fff;
    line-height: 12px;
    font-size: 10px;
    opacity: .5;
    z-index: 4;
  }

  .news-content {
    padding: 2rem;
    /* background: #fff; */
  }

  .author {
    font-size: 1.4rem;
    color: #999;
  }

  .article-content {
    padding: 3rem 0;
    font-size: 1.7rem;
    line-height: 1.8;
    color: #444;
  }

  .article-content p {
    margin-bottom: 1.5rem;
  }

  .article-content img {
    display: block;
    max-width: 100%;
    -webkit-filter: brightness(.95);
    filter: brightness(.95);
  }
</style>