<template>
  <section class="list-wrapper">
    <div class="list-date">#{{ date }}</div>
    <cov-article></cov-article>
  </section>
</template>

<script>
import covArticle from './Article'
import { mapState } from 'vuex'
export default {
  components: {
    covArticle
  },
  computed: {
    ...mapState(['date', 'baseData']),
  },
}
</script>

<style scoped>
.list-wrapper {
  position: relative;
  padding: 6rem 0.5rem 2rem;
  border-bottom: 1px solid #ececec;
}

.list-date {
  position: absolute;
  font-size: 2rem;
  text-align: center;
  top: 2.5rem;
  left: 1rem;
  color: #b2bac2;
  font-weight: 500;
}
</style>