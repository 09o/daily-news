<template>
  <div class="about-wrapper">
    <div class="hidden"></div>
    <div class="logo-display">
    </div>
    <h1 class="title gradient-text">
      ひ报 (日报放送)
    </h1>
    <p class="version">Version 0.0.1</p>
    <div class="feedback">
      <div class="project-desc">
        <div class="github">
          <span>欢迎去投喂一个Star：</span>
          <a href="https://github.com/09o/daily-news" target="_blank">&lt;(￣︶￣)↗[⭐]</a>
        </div>
        <div class="mail">
          <span>联系我：</span>
          <a href="mailto:okspea@163.com">okspea#163</a>
        </div>
      </div>
      <div class="develop">
        <div class="item item01">
          <span></span>
          <span>2020.08.18 开始该项目</span>
        </div>
        <div class="item item02">
          <span></span>
          <span>2020.08.20 完成该项目</span>
        </div>
        <div class="item item03">
          <span></span>
          <span>...</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  @font-face {
    font-family: 'iconfont';
    /* project id 2015703 */
    src: url('//at.alicdn.com/t/font_2015703_gvu7y2z9jnb.eot');
    src: url('//at.alicdn.com/t/font_2015703_gvu7y2z9jnb.eot?#iefix') format('embedded-opentype'),
      url('//at.alicdn.com/t/font_2015703_gvu7y2z9jnb.woff2') format('woff2'),
      url('//at.alicdn.com/t/font_2015703_gvu7y2z9jnb.woff') format('woff'),
      url('//at.alicdn.com/t/font_2015703_gvu7y2z9jnb.ttf') format('truetype'),
      url('//at.alicdn.com/t/font_2015703_gvu7y2z9jnb.svg#iconfont') format('svg');
  }
  
  .about-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0 0;
  }

  .logo-display {
    width: 200px;
    height: 200px;
    border-radius: 2rem;
    background: url('../assets/logo.png')
  }

  .title {
    margin: 2rem 0 0.5rem;
  }

  .feedback {
    margin: 3rem 0;
    font-size: 1.5rem;
    line-height: 2.5rem;
  }

  .github::before {
    font-family: 'iconfont';
    content: "\e691";
  }

  .mail::before {
    font-family: 'iconfont';
    content: "\e604";
  }

  .feedback a {
    color: #333;
  }

  .develop {
    margin-top: 2rem;
    padding: 2rem 1rem;
    border-left: 2px solid #ececec;
  }

  .item {
    display: flex;
    align-items: center;
    color: #ccc;
    margin: 0 0 1rem;
  }

  .item span:first-child {
    display: block;
    margin-right: 1rem;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #9ad5ff;
  }

  .item02 span:first-child {
    background: #a8aafe;
  }

  .item03 span:first-child {
    background: #ffa6a6;
  }
</style>