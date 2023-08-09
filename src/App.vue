<template>
  <div id="app">
    <Code></Code>
  </div>
</template>

<script>
import Code from "./components/xiaochengxu.vue";
export default {
  name: "App",
  data() {
    return {
      data: null
    };
  },
  methods: {
    id(data) {
      this.data = data;
    }
  },
  components: {
    Code
  },
  mounted() {
    this.$bus.$on("inps", this.id);
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
