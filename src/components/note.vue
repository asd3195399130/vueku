<!--  -->
<template>
  <div class>
    <h1>{{mt}}</h1>
    <div class="box" v-for="item in mest" :key="item.id">
      <div class="left">
        <img :src="item.url" alt />
      </div>
      <div class="right">
        <h2>
          <span>{{item.id}}</span>
          {{ item.name }}
        </h2>
        <p>{{item.text}}</p>
      </div>
    </div>
    <button>查看全部</button>
  </div>
</template>

<script>
export default {
  name: "NoTe",
  data() {
    return {
      mt: "top5/飙升榜",
      mest: [
        {
          id: "1",
          name: "让人拍案叫绝中国史（套装共2册）",
          text: "渤海小说",
          url:
            "https://imagev2.xmcdn.com/storages/47d2-audiofreehighqps/0C/38/GMCoOScIQPZgAAO2tQIfqKTJ.jpeg!op_type%3D3%26columns%3D290%26rows%3D290"
        },
        {
          id: "2",
          name: "生活即禅 ，笑看平凡",
          text: "林帝浣",
          url:
            "https://gimg3.baidu.com/topone/src=https%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2Fe850352ac65c10385343535912428413b07eca802356%3Fx-bce-process%3Dimage%2Fresize%2Cm_pad%2Cw_348%2Ch_348%2Ccolor_ffffff&refer=http%3A%2F%2Fwww.baidu.com&app=2011&size=f200,200&n=0&g=0n&er=404&q=75&fmt=auto&maxorilen2heic=2000000?sec=1691427600&t=44c81d9f9cf73ab0c69b63faed733d6c"
        },
        {
          id: "3",
          name: "资本的秘密",
          text: "赫尔南多·德·索托",
          url:
            "https://gimg3.baidu.com/topone/src=https%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2F5ab5c9ea15ce36d39699a0783af33a87e850b1dc%3Fx-bce-process%3Dimage%2Fresize%2Cm_pad%2Cw_348%2Ch_348%2Ccolor_ffffff&refer=http%3A%2F%2Fwww.baidu.com&app=2011&size=f200,200&n=0&g=0n&er=404&q=75&fmt=auto&maxorilen2heic=2000000?sec=1691427600&t=6edf120a0262c42cc05fba221e968681"
        }
      ]
    };
  },
  created() {},
  mounted() {}
};
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
h1 {
  color: red;
  font-family: "楷体";
}
p {
  height: 30px;
  text-align: left;
  margin-left: 74px;
  line-height: 30px;
  margin-top: -17px;
  font-size: 13px;
  font-weight: lighter;
}
h2 {
  font-size: 15px;
  font-weight: 500;
  height: 30px;
  text-align: left;
  margin-left: 60px;
  line-height: 30px;
}
button {
  width: 100%;
  height: 50px;
  margin-top: 15px;
}
.left {
  float: left;
}
.right {
  width: 335px;
  height: 67px;
  margin: auto;
  line-height: 25px;
  padding-top: 2px;
  margin-top: 15px;
}
img {
  width: 60px;
  height: 80px;
  margin-left: 15px;
  margin-top: 10px;
}
.box {
  width: 100%;
  height: 100px;
  background-color: #ccc;
  margin: 0 auto;
}
</style>