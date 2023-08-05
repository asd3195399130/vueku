<!--  -->
<template>
  <div class="Clas">
    <div class="box" v-for="item in moth" :key="item.id">
      <div class="flex">
        <h1>{{item.name}}</h1>
        <p class="center">1.{{item.text}}</p>
        <p class="justify">2.{{item.txt}}</p>
        <p class="justify">3.{{item.tlt}}</p>
      </div>
      <div class="right">
        <img :src="item.url" alt />
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClAs",
  data() {
    return {
      mt: "听听",
      moth: [
        {
          name: "精品小说",
          text: "长相思",
          txt: "剑来",
          tlt: "三体（全集）",
          url:
            "https://img10.360buyimg.com/n7/jfs/t1/67089/26/21187/55686/63004540E0853ffc4/0917146bb2e585bc.jpg"
        },
        {
          name: "历史",
          text: "明朝那些事",
          txt: "唐砖",
          tlt: "神话",
          url:
            "https://img12.360buyimg.com/n7/jfs/t1/71859/15/23974/96933/643e0d0dFcba7e998/37835c3710e28681.jpg"
        },
        {
          name: "文学",
          text: "我与地坛",
          txt: "红楼梦",
          tlt: "平凡的世界",
          url:
            "https://img10.360buyimg.com/n1/s200x200_jfs/t1/219131/12/29869/66766/6470ed0fF750069cd/fb9481c4ca07a2e3.jpg"
        },
        {
          name: "艺术",
          text: "生活蒙太奇",
          txt: "故事：材质、结构、风格和银幕",
          tlt: "新摄影笔记",
          url:
            "https://img11.360buyimg.com/n1/s200x200_jfs/t1/118429/37/38165/254510/647fe047F41a976db/4c995c185ea20f48.jpg"
        },
        {
          name: "人物",
          text: "长相思",
          txt: "邓小平",
          tlt: "李白（全集）",
          url:
            "https://img12.360buyimg.com/n1/s200x200_g10/M00/02/11/rBEQWVEMgZcIAAAAAAO6bYiUTNcAAAf3ANL4-sAA7qF533.jpg"
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.clear {
  clear: both;
}
.box {
  width: 380px;
  height: 222px;
  background: #bbb5ac;
  border-radius: 20px;
  margin-top: 10px;
}
h1 {
  font-size: 21px;
  font-weight: 500;
  padding: 10px 20px;
  color: #fff;
}
.flex {
  float: left;
  width: 40%;
  // height: 190px;
  // border: 1px solid red;
  // border-top-left-radius: 10px;
  // border-bottom-left-radius: 10px;

  line-height: 30px;
  padding: 10px;
  padding-left: 15px;
}
img {
  width: 100%;
  height: 100%;
}
.right {
  float: right;
  width: 150px;
  height: 190px;
  border-top-right-radius: 10px;
  margin: 15px auto;
}
p {
  color: #d8dad9;
  text-overflow: ellipsis;
}
</style>