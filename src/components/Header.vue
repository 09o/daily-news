<template>
  <div class="header-wrapper">
    <!-- 顶部导航栏 -->
    <nav class="cov-nav">
      <div class="logo gradient-text">
        日报放送
      </div>
      <div class="nav-list">
        <div class="nav-tab" @click="navRoute($event, '')">首页</div>
        <div class="nav-tab" @click="navRoute($event, 'themes')">主题日报</div>
        <div class="nav-tab" @click="navRoute($event, 'about')">关于</div>
      </div>
      <!-- 选项被选定时的效果 -->
      <div class="nav-rail">
        <span class="nav-moving" :style="covNav.moving"></span>
      </div>
    </nav>
    <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#252e39" fill-opacity="1"
        d="M0,256L60,245.3C120,235,240,213,360,202.7C480,192,600,192,720,213.3C840,235,960,277,1080,272C1200,267,1320,213,1380,186.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z">
      </path>
    </svg>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        covNav: {
          navMap: {},
          currentX: 0,
          moving: {
            width: '8px',
            transform: 'translateX(0px)'
          }
        }
      }
    },
    mounted() {
      this.initNav()
    },
    methods: {
      navRoute(e, path) {
        this.touchNav(e, () => {
          // 解决重复点击导航报错
          if (this.$route.path === '/' + path) return
          this.$router.push('/' + path)
        })
      },
      // 初始化导航项选定状态点
      initNav() {
        // 获取导航栏距离屏幕左边的距离与第一个选项的宽度
        let xLeft = document.querySelector('.nav-list').offsetLeft
        let tabLeft = document.querySelectorAll('.nav-tab')[0].clientWidth
        let x = xLeft + tabLeft * 0.47
        this.covNav.moving = {
          width: '8px',
          transform: `translateX(${x}px)`
        }
      },
      moving(w, x) {
        this.covNav.currentX = x
        this.covNav.moving = {
          width: w + 'px',
          transform: `translateX(${x - w}px)`
        }
      },
      touchNav(e, after) {
        let xLeft = document.querySelector('.nav-list').offsetLeft
        // 获取父节点信息 如果没有就返回当前节点
        let parent = e.target.parentNode || e.path[1]
        let count = 0
        // 遍历子节点
        for (let node of parent.getElementsByClassName('nav-tab')) {
          if (node === e.target) {
            break
          }
          count++
        }
        // 状态点的x距离
        let x = xLeft + e.target.clientWidth * (count + 0.47)

        // 状态点的切换动画
        this.moving(e.target.clientWidth * 0.8 + x * 0.05, x + e.target.clientWidth * 0.5 + x * 0.05)

        this.$nextTick(() => {
          setTimeout(() => {
            this.covNav.moving = {
              width: '8px',
              transform: `translateX(${x}px)`
            }
            after()
          }, 100)
        })
      }
    }
  }
</script>

<style>
  .header-wrapper {
    width: 100%;
  }

  .cov-nav {
    display: flex;
    position: fixed;
    justify-content: space-between;
    align-items: center;
    height: 6rem;
    width: 100%;
    background: #252e39;
    top: 0;
    left: 0;
    z-index: 99;
    font-size: 1.5rem;
    color: #fff;
    padding-left: 2rem;
  }

  .logo {
    position: relative;
    font-size: 2rem;
    font-weight: 600;
    opacity: .3;
    overflow: hidden;
    white-space: nowrap;
  }

  .nav-list {
    display: flex;
  }

  .nav-tab {
    height: 6rem;
    line-height: 6rem;
    cursor: pointer;
    min-width: 8rem;
    text-align: center;
  }

  .nav-rail {
    position: absolute;
    right: 0;
    height: 4px;
    width: 100%;
    bottom: 1rem;
    /* background-color: #182128; */
  }

  .nav-moving {
    position: absolute;
    background-color: #4cfffe;
    height: 8px;
    width: 1rem;
    border-radius: 4px;
    transition: .3s ease-out;
    margin-top: -2px;
  }

  .wave {
    position: absolute;
    left: 0;
    top: 1.5rem;
    z-index: -1;
  }
</style>