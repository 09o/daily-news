<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  export default {
    computed: {
      ...mapState(['date', 'baseData'])
    },
    methods: {
      ...mapMutations(['updateCurrentDate', 'updateData', 'updateThemes']),
      
    },
    async created() {
      let res = await this.$get('/api/db.json')
      this.updateCurrentDate(res.date)
      this.updateData(res.stories)
      this.updateThemes(res.themes)
    },
  }
</script>

<style scoped>

</style>