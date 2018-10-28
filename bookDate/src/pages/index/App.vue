<template>
  <div class='wrapper' id='app'>
      <TopBar></TopBar>
      <router-view/>
  </div>
</template>

<script>
// import { mapState, mapMutations } from 'vuex';
// import Api from '@/api';
import TopBar from '@/components/business/TopBar'

// import '@/styles/index.scss';
import '@/styles/init.css';
import '@/assets/bootstrap/css/bootstrap.min.css';

export default {
  name: 'App',
  data() {
    return {};
  },
  components: {
    TopBar //顶部导航
  },
  computed: {},
  created() {
    this.$nextTick(function() {});
  },
  mounted() {},
  methods: {}
};
</script>

<style lang='scss'>
html {

}

.wrapper {
  background: #f3f4f5;
}

.content {
}
</style>
