<template>
  <div class="list-container">
    <cov-article></cov-article>
    <button @click="loadMore" class="more-btn">更多</button>
  </div>
</template>

<script>
  import covArticle from '@/components/Articles'
  import { mapState, mapMutations } from 'vuex'
  export default {
    data() {
      return {
        currentData: []
      }
    },
    components: {
      covArticle
    },
    computed: {
      ...mapState(['date', 'baseData'])
    },
    methods: {
      ...mapMutations(['updateData']),
      loadMore() {
        this.currentData = Array.from(this.baseData)
        let addData = [
          {
            "images": [
              "https://pic3.zhimg.com/v2-22bf4989f1668fcaca3286ecc06a234e.jpg"
            ],
            "type": 0,
            "id": +new Date() + 1,
            "ga_prefix": "052107",
            "title": "大误 · 社畜，就很赛博朋克"
          },
          {
            "images": [
              "https://pic1.zhimg.com/v2-cd460d4800d214ad9cc49cf47147965c.jpg"
            ],
            "type": 0,
            "id": +new Date() + 2,
            "ga_prefix": "052107",
            "title": "瞎扯 · 如何正确地吐槽"
          },
          {
            "images": [
              "https://pic2.zhimg.com/v2-2dd6c7857dbf46586ead45bbd4843165.jpg"
            ],
            "type": 0,
            "id": +new Date() + 3,
            "ga_prefix": "052107",
            "title": "偷拍取得的证据不合法，那法院还用不用？"
          },
          {
            "images": [
              "https://pic3.zhimg.com/v2-0534f22c6502885732def0c90a5e38c2.jpg"
            ],
            "type": 0,
            "id": +new Date() + 4,
            "ga_prefix": "052107",
            "title": "每隔几小时加热一次饭菜，它能永远不馊吗？"
          },
          {
            "images": [
              "https://pic3.zhimg.com/v2-56b59e02776a84a8cf8a4e44f1e29cf6.jpg"
            ],
            "type": 0,
            "id": +new Date() + 5,
            "ga_prefix": "052106",
            "title": "医生怎么知道自己做的手术是否切除干净了？"
          },
          {
            "images": [
              "https://pic3.zhimg.com/v2-2adb353eeed01c0a0383d5ebecd75d56.jpg"
            ],
            "type": 0,
            "id": +new Date() + 6,
            "ga_prefix": "052106",
            "title": "如果蚊子被彻底灭绝，对生物链有什么影响? "
          }]
        this.currentData.push(...addData)
        this.updateData(this.currentData)
      }
    },
  }
</script>

<style scoped>
  .list-container {
    width: 100vw;
    display: flex;
    flex-direction: column;
  }

  .more-btn {
    font-size: 1.5rem;
    padding: 1rem 0;
    width: 80%;
    border: 0;
    outline: none;
    color: #fff;
    background: #252e39;
    margin: 10px auto;
    border-radius: .5rem;
    cursor: pointer;
  }
</style>