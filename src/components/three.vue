<!--  -->
<template>
  <div class>
    <div class="box" v-for="item in math" :key="item.reading">
      <h4>{{item.id}}</h4>
      <img :src="item.url" alt />
      <h3>{{item.name}}</h3>
      <p>{{item.author}}</p>
      <p>推荐值 {{item.price}}%</p>
      <div class="spol">
        <i>
          <svg
            t="1691498244602"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="6587"
            width="16"
            height="16"
          >
            <path
              d="M512 607.98c-211.19 0-383.94 86.37-383.94 192v96h767.87v-96c0.01-105.63-172.74-192-383.93-192zM347.93 439.78C372.29 521.34 438.24 576 512.3 576c73.7 0 139.32-54.38 163.57-135.55l15.65-52.41c8.05-21.19 12.48-44.17 12.48-68.18 0-106.04-85.96-192-192-192s-192 85.96-192 192c0 24.02 4.42 46.99 12.48 68.18l15.45 51.74z"
              fill="#666666"
              p-id="6588"
            />
          </svg>
        </i>
        <span>{{item.reading}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoPe",
  data() {
    return {
      my: 123,
      math: [
        {
          id: 1,
          name: "厌女(增订本)",
          author: "上野千鹤子",
          url:
            "https://img13.360buyimg.com/n1/s200x200_jfs/t1/92109/4/25230/108701/6438e78eF5db2ec41/d38957e150bfa528.jpg",
          price: 89.1,
          reading: 3522
        },
        {
          id: 2,
          name: "法治的细节",
          author: "罗翔",
          url:
            "https://img14.360buyimg.com/n1/s200x200_jfs/t1/211301/34/23360/150697/62a9bb9bEe782ba22/541af42bd6738ec5.jpg",
          price: 93.9,
          reading: 3422
        },
        {
          id: 3,
          name: "乡土中国",
          author: "费孝通",
          url:
            "https://img13.360buyimg.com/n1/s200x200_jfs/t1/180533/3/34604/143223/64a8fad5F8d66f9df/7858540b46dceaae.jpg",
          price: 85.5,
          reading: 1910
        },
        {
          id: 4,
          name: "始于极限：女性主义往复书简",
          author: "上野千鹤子 铃木凉美",
          url:
            "https://img11.360buyimg.com/n1/s200x200_jfs/t1/170033/27/33439/37372/636e7240E62288cbc/f2092e0bc4f1d9d9.jpg",
          price: 90.6,
          reading: 1827
        },
        {
          id: 5,
          name: "枪炮、病菌与钢铁",
          author: "贾雷德·戴蒙德",
          url:
            "https://img1.baidu.com/it/u=3075387531,971532154&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1691600400&t=947341d3f48000d430ef60a7611ac923",
          price: 87.3,
          reading: 1561
        },
        {
          id: 5,
          name: "快乐上等：女性怎样自在地活(独家首发)",
          author: "上野千鹤子 汤山玲子",
          url:
            "https://img10.360buyimg.com/n7/jfs/t1/219184/4/31887/84293/64857bd0F82e23439/1dc02361f6c2961b.jpg",
          price: 75.0,
          reading: 1243
        },
        {
          id: 6,
          name: "圆圈正义：作为自由前提的信念",
          author: "罗翔",
          url:
            "https://img14.360buyimg.com/n1/s200x200_jfs/t1/49663/4/24214/10188/6422cbc4Ff0f39c90/87b6c4278fad59ea.jpg",
          price: 92.5,
          reading: 1161
        },
        {
          id: 7,
          name: "西游记",
          author: "吴承恩",
          url:
            "https://img13.360buyimg.com/n1/s200x200_jfs/t1/209774/18/26123/106563/6306ce6aE8ee5d955/d26c00d6a13312c5.jpg",
          price: 93.3,
          reading: 4506
        },
        {
          id: 8,
          name: "三国志",
          author: "陈寿",
          url:
            "https://img13.360buyimg.com/n2/jfs/t1/223573/22/5165/97291/62104d82E23e09004/a938cdefb6af5d79.jpg",
          price: 90.2,
          reading: 2306
        },
        {
          id: 9,
          name: "三国演义",
          author: "罗贯中",
          url:
            "https://img10.360buyimg.com/n1/s200x200_jfs/t1/15677/18/18365/74611/6306d007E52c97edb/5c2cabf69ce14522.jpg",
          price: 89.8,
          reading: 3602
        },
        {
          id: 10,
          name: "水浒传",
          author: "施耐庵",
          url:
            "https://img14.360buyimg.com/n1/s200x200_jfs/t1/9895/30/19212/87884/6306cea0Ea590b7dc/b5f756207a9f265f.jpg",
          price: 88.6,
          reading: 2306
        },
        {
          id: 11,
          name: "大学",
          author: "曾子",
          url:
            "https://img14.360buyimg.com/n7/jfs/t1/155816/4/352/222859/5fd700c9E3b4c23ad/635746c21f1f86a2.jpg",
          price: 81.7,
          reading: 3440
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
.spol {
  width: 70px;
  height: 18px;
  background: red;
  position: absolute;
  right: 10px;
  top: 10px;
  line-height: 18px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
.box {
  width: 100%;
  height: 140px;
  line-height: 140px;
  margin-top: 33px;
  position: relative;
}
h4 {
  font-size: 20px;
  font-weight: 600;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 23px;
  text-align: center;
}
i {
  display: inline-block;
  height: 18px;
  font-size: 1px;
  margin-left: 0px;
}
img {
  width: 70px;
  height: 107px;
  margin-right: 206px;
  margin-top: 12px;
}
span {
  display: inline-block;
  height: 18px;
  font-size: 1px;
  margin-left: 12px;
}
.box p:nth-of-type(2) {
  color: rgb(80, 79, 79);
  position: relative;
  top: -156px;
  left: -15px;
  font-size: 16px;
  font-weight: 800;
}
p {
  position: absolute;
  top: 0;
  left: 131px;
  font-size: 14px;
  font-weight: 600;
  font-family: "仿宋";
  color: #acb2ba;
}
h3 {
  width: 200px;
  font-size: 15px;
  font-weight: 600;
  font-family: "宋体";
  position: absolute;
  right: 110px;
  top: -32px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>