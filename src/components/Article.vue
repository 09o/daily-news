<template>
  <div class="item-wrapper">
    <div v-for="data in baseData" :key="data.id">
      <article @click="goView(data.id)" class="list-item">
        <div class="item-preview" :style="{'background-image': 'url('+data.images[0]+')'}"></div>
        <p class="item-title">{{ data.title }}</p>
      </article>
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  export default {
    computed: {
      ...mapState(['baseData']),
    },
    methods: {
      ...mapMutations(['fullContent']),
      goView(id) {
        this.$router.push('/news/' + id)
        this.fullContent(id)
      }
    },
  }
</script>

<style scoped>
  .list-item {
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    background-color: #fff;
    width: 18.5rem;
    padding: 14rem 1rem 1rem 1rem;
    margin: .5rem;
    text-align: left;
    border-radius: .5rem;
    box-shadow: -1px 2px 3px rgba(0, 0, 0, .1);
  }

  .item-preview {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 14rem;
    background-size: cover;
  }

  .item-title {
    font-size: 1.6rem;
    height: 5rem;
    padding: .5rem;
    margin: 0;
    line-height: 1.6;
    overflow: hidden;
  }

  @media all and (max-width: 768px) {
    .list-item {
      width: 100%;
      padding: 1rem 7rem 1rem .5rem;
      box-sizing: border-box;
      margin: .5rem 0;
    }

    .item-preview {
      position: absolute;
      width: 6rem;
      height: 6rem;
      border-radius: .4rem;
      right: .5rem;
      top: .5rem;
      left: inherit;
    }
  }
</style>