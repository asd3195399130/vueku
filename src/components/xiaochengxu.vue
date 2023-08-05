<template>
  <div class="Code">
    <h2>{{ mesag }}</h2>
    <div id="con">
      <div id="int">
        <label class="lav">
          <svg
            t="1691145521421"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2356"
            width="16"
            height="16"
          >
            <path
              d="M421.925926 170.666667c33.943704 0 66.844444 6.637037 97.754074 19.721481 29.961481 12.61037 56.794074 30.814815 79.834074 53.854815s41.244444 49.967407 53.854815 79.834074C666.548148 355.081481 673.185185 387.982222 673.185185 421.925926s-6.637037 66.844444-19.721481 97.754074c-12.61037 29.961481-30.814815 56.794074-53.854815 79.834074s-49.967407 41.244444-79.834074 53.854815C488.77037 666.548148 455.86963 673.185185 421.925926 673.185185s-66.844444-6.637037-97.754074-19.721481c-29.961481-12.61037-56.794074-30.814815-79.834074-53.854815-23.134815-23.134815-41.244444-49.967407-53.854815-79.834074C177.303704 488.77037 170.666667 455.86963 170.666667 421.925926s6.637037-66.844444 19.721481-97.754074c12.61037-29.961481 30.814815-56.794074 53.854815-79.834074 23.134815-23.134815 49.967407-41.244444 79.834074-53.854815C355.081481 177.303704 387.982222 170.666667 421.925926 170.666667m0-42.666667c-162.322963 0-293.925926 131.602963-293.925926 293.925926s131.602963 293.925926 293.925926 293.925926 293.925926-131.602963 293.925926-293.925926-131.602963-293.925926-293.925926-293.925926zM874.951111 896.284444c-5.499259 0-10.903704-2.085926-15.075555-6.257777L614.968889 645.12c-8.343704-8.343704-8.343704-21.807407 0-30.151111s21.807407-8.343704 30.151111 0l244.906667 244.906667c8.343704 8.343704 8.343704 21.807407 0 30.151111a21.333333 21.333333 0 0 1-15.075556 6.257777z"
              p-id="2357"
            />
          </svg>
        </label>
        <input type="text" class="inp" placeholder="搜索" />
      </div>
      <div class="heafer">
        <div class="her">
          <i>
            <svg
              t="1691147238135"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="6074"
              width="25"
              height="25"
            >
              <path
                d="M500.849778 1001.756444C224.369778 1001.756444 0 777.329778 0 500.849778 0 224.369778 224.369778 0 500.849778 0s500.906667 224.369778 500.906666 500.849778-224.426667 500.906667-500.906666 500.906666z m0-945.664C256.455111 56.092444 56.092444 256.455111 56.092444 500.849778c0 244.451556 200.362667 444.814222 444.757334 444.814222 244.451556 0 444.814222-200.362667 444.814222-444.814222 0-244.394667-200.362667-444.757333-444.814222-444.757334z"
                fill="#A0A3AC"
                p-id="6075"
              />
              <path
                d="M208.384 861.468444l-48.128-20.024888c16.042667-36.067556 60.131556-56.092444 112.241778-80.099556 52.053333-24.064 112.184889-52.110222 112.184889-84.195556v-44.032c-16.042667-16.042667-48.071111-48.128-52.110223-96.142222-16.042667-12.060444-40.049778-40.106667-40.049777-76.174222 0-20.024889 7.964444-36.067556 15.985777-48.071111-3.982222-24.064-11.946667-68.152889-11.946666-104.220445 0-116.167111 80.099556-188.302222 204.288-188.302222 36.067556 0 80.156444 7.964444 104.220444 36.067556 56.092444 7.964444 100.124444 76.117333 100.124445 156.273778 0 48.071111-7.964444 92.16-15.985778 112.184888 3.982222 8.021333 12.003556 24.064 12.003555 40.049778 0 40.106667-20.024889 64.113778-36.067555 76.174222-3.982222 48.071111-32.028444 80.099556-48.071111 92.16v44.032c0 28.103111 52.110222 48.128 100.124444 64.113778 56.149333 20.081778 116.224 44.088889 132.266667 92.16l-48.071111 20.081778c-7.964444-24.064-56.092444-44.088889-100.124445-60.131556-64.170667-24.064-136.305778-52.110222-136.305777-116.224v-76.117333l12.060444-7.964444s36.067556-24.064 36.067556-72.135111v-20.081778l15.985777-7.964445c3.982222 0 20.024889-12.060444 20.024889-36.067555 0-8.021333-3.982222-16.042667-7.964444-20.081778l-12.060445-11.946667 3.982223-16.099555s16.042667-48.071111 16.042666-108.145778c0-52.110222-28.046222-100.181333-60.074666-100.181333h-16.042667l-7.964445-12.060445c-4.039111-7.964444-32.085333-20.024889-64.170666-20.024889-92.16 0-148.252444 52.110222-148.252445 136.248889 0 40.049778 12.060444 104.163556 16.042667 104.163556l3.982222 16.042666-15.985778 16.042667s-8.021333 7.964444-8.021333 20.024889c0 16.042667 20.024889 36.067556 28.046222 40.049778l12.003556 8.021333v12.060445c0 44.032 40.106667 72.078222 40.106667 72.078222l11.946666 8.021333v76.117333c0 68.152889-76.060444 104.220444-144.213333 136.248889-36.067556 16.042667-80.156444 36.067556-88.177778 48.071111z"
                fill="#A0A3AC"
                p-id="6076"
              />
            </svg>
          </i>
          <span id="sp1">微信用户</span>
          <span id="sp2">体验卡今日到期</span>
        </div>
        <div class="her-right">{{cou}}</div>
        <div class="her-img">
          <img src="../assets/0ff41bd5ad6eddc448be31f537dbb6fd52663366.webp" />
        </div>
        <div class="type">
          书
          架
        </div>
        <span id="icfo">
          <svg
            t="1691150720070"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="8767"
            width="16"
            height="16"
          >
            <path
              d="M645.239391 514.577475l-10.21959 10.215977L379.176039 268.873829l10.21959-10.215977z"
              p-id="8768"
              fill="#e6e6e6"
            />
            <path
              d="M643.38621 516.932785l-251.588309 247.285895-10.127473-10.304482 251.588309-247.284088z"
              p-id="8769"
              fill="#e6e6e6"
            />
          </svg>
        </span>
      </div>
      <div class="cen">
        <div id="my">
          <ul>
            <li
              v-for="(item,index) in title"
              :class="n==index ? 'active':''"
              @click="inln(index)"
              :key="index"
            >{{item.name}}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="box" v-for="(item,index) in title[n].activer" :key="index">
      <div id="box-i">
        <img :src="item.src" />
        <h3>{{item.name}}</h3>
        <span id="boc">{{item.text}}</span>
        <span id="boc1">|</span>
        <span id="boc2">推荐值 {{item.val}}%</span>
        <p>大家都在读</p>
      </div>
      <div id></div>
    </div>
    <ClassFily v-if="show"></ClassFily>
    <NoTe v-if="shat"></NoTe>
    <NoPe v-if="chat"></NoPe>
    <ProJect v-if="pot"></ProJect>
    <!-- 底部 -->
    <div class="footer">
      <div class="footer-left">
        <label>
          <svg
            t="1691160643839"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3345"
            width="16"
            height="16"
          >
            <path
              d="M1003.746 414.274V303.757c-3.07-80.841-86.98-84.934-86.98-84.934l-42.98 1.023s65.492-86.98-13.303-142.24C704.941-15.513 520.746 202.45 520.746 202.45l-2.047 736.78h332.575c91.074-1.023 92.097-78.794 92.097-78.794V522.745c-1.023-18.42-6.14-29.676-6.14-29.676 70.608-19.443 66.515-78.795 66.515-78.795z m-201.64-302.387c56.283 18.931 30.188 58.329 30.188 58.329s-1.535 16.884-35.815 49.118H583.63S698.24 91.933 802.107 111.887z m81.354 422.114V861.46s-3.07 25.583-34.281 24.56H549.862V497.161h307.503s28.141 4.093 26.095 36.84z m60.375-115.634s-7.163 25.583-29.676 23.537H549.35l-0.511-166.8h367.878s23.536 2.559 27.118 27.63v115.633z"
              p-id="3346"
            />
            <path
              d="M104.328 493.068s-5.117 11.256-6.14 29.676v337.69s1.023 77.772 92.097 78.795H522.86l-2.047-736.78S336.618-15.515 181.076 77.605c-78.795 55.259-13.303 142.24-13.303 142.24l-42.98-1.023s-83.91 4.093-86.98 84.934v110.517s-4.094 59.352 66.515 78.795z m353.6-273.735H245.08c-34.28-32.234-35.815-49.118-35.815-49.118s-26.095-39.398 30.187-58.329c103.866-19.954 218.476 107.447 218.476 107.447zM184.194 497.161h307.503v388.856H192.38c-31.21 1.024-34.28-24.559-34.28-24.559V534c-2.047-32.746 26.094-36.839 26.094-36.839z m-86.47-194.428c3.582-25.071 27.118-27.63 27.118-27.63H492.72l-0.511 166.8H127.4c-22.513 2.046-29.676-23.537-29.676-23.537V302.733z"
              p-id="3347"
            />
          </svg>
        </label>
        <p>福利</p>
      </div>
      <div class="items">
        <label>
          <svg
            t="1691161033935"
            class="icon"
            viewBox="0 0 1185 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="11538"
            width="16"
            height="16"
          >
            <path
              d="M188.631579 53.894737h215.578947a161.684211 161.684211 0 0 1 161.684211 161.68421v743.316211a41.930105 41.930105 0 0 1-59.284211 38.157474l-27.378526-12.449685A161.684211 161.684211 0 0 0 412.294737 970.105263H188.631579a161.684211 161.684211 0 0 1-161.684211-161.68421V215.578947a161.684211 161.684211 0 0 1 161.684211-161.68421zM781.473684 53.894737h215.578948a161.684211 161.684211 0 0 1 161.68421 161.68421v592.842106a161.684211 161.684211 0 0 1-161.68421 161.68421h-223.663158a161.684211 161.684211 0 0 0-66.937263 14.497684l-27.378527 12.449685a41.930105 41.930105 0 0 1-59.28421-38.157474V215.578947a161.684211 161.684211 0 0 1 161.68421-161.68421z"
              fill="#45BBFF"
              p-id="11539"
            />
          </svg>
        </label>
        <p>书城</p>
      </div>
      <div class="hear">
        <label>
          <svg
            t="1691161326573"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="25774"
            width="16"
            height="16"
          >
            <path
              d="M511.956001 0a46.540246 46.540246 0 0 1 45.796258 38.163382l0.743988 8.376864v930.81492a46.540246 46.540246 0 0 1-92.336504 8.376864l-0.744988-8.377864V46.540246A46.540246 46.540246 0 0 1 511.956001 0z m232.70323 186.162984a46.540246 46.540246 0 0 1 45.796258 38.163382l0.743988 8.376864v558.487952a46.540246 46.540246 0 0 1-92.336504 8.377864l-0.743988-8.377864V232.70323a46.540246 46.540246 0 0 1 46.540246-46.540246z m-465.40646 0a46.540246 46.540246 0 0 1 45.795258 38.163382l0.744988 8.376864v558.487952a46.540246 46.540246 0 0 1-92.336504 8.377864l-0.744988-8.377864V232.70323a46.540246 46.540246 0 0 1 46.541246-46.540246zM977.362461 325.784722a46.540246 46.540246 0 0 1 45.796258 38.163382l0.744988 8.376864v279.245476a46.540246 46.540246 0 0 1-92.337504 8.376864l-0.743988-8.377864V372.324968a46.540246 46.540246 0 0 1 46.540246-46.540246z m-930.81392 0a46.540246 46.540246 0 0 1 45.796258 38.163382l0.744988 8.376864v279.245476a46.540246 46.540246 0 0 1-92.336504 8.376864L0.008295 651.569444V372.324968a46.540246 46.540246 0 0 1 46.540246-46.540246z"
              fill="#06A7FF"
              p-id="25775"
            />
          </svg>
        </label>
        <p>听书</p>
      </div>
    </div>
  </div>
</template>

<script>
import ClassFily from "./ClassFily";
import NoTe from "./note";
import NoPe from "./three";
import ProJect from "./si";

export default {
  name: "CoDe",
  components: {
    ClassFily,
    NoTe,
    NoPe,
    ProJect
  },
  data() {
    return {
      mesag: "微信读书",
      cou: "反馈",
      show: false,
      shat: false,
      chat: false,
      pot: false,
      n: 0,
      title: [
        {
          name: "推荐",
          activer: [
            {
              name: "蒋延黻中国近代史",
              src:
                "https://img11.360buyimg.com/n7/jfs/t1/136993/15/33516/26020/64a026dbFc15c84d2/78aa4ddda432f5ea.jpg",
              text: "蒋延黻",
              val: 89.2,
              status: false
            },
            {
              name: "长安的荔枝",
              src:
                "https://img11.360buyimg.com/n7/jfs/t1/208501/19/26770/99840/634788b9E0a958869/cd838b992f2b457c.jpg",
              text: "马伯庸",
              val: 95.5,
              status: false
            },
            {
              name: "明朝那些事儿（全集）",
              src:
                "https://img10.360buyimg.com/n7/jfs/t1/203968/25/26378/37469/630f6cd3E0327943d/1aab4425ead04159.jpg",
              text: "当年明月",
              val: 92.4,
              status: false
            },
            {
              name: "认知觉醒：开启自我改变的原动力",
              src:
                "https://img14.360buyimg.com/n1/s200x200_jfs/t1/163877/21/33567/114048/63cd0cd4Ffb828313/728366190ed423f6.jpg",
              text: "周岭",
              val: 91.3,
              status: false
            },
            {
              name: '被讨厌的勇气："自我启发之父" 阿...',
              src:
                "https://img12.360buyimg.com/n2/jfs/t1/134449/29/2111/758477/5ee4a4a7E8dfd2406/8c131986666c5857.png",
              text: "岸见一郎  古贺史键",
              val: 87.0,
              status: false
            },
            {
              name: "长相思1：如初见（杨紫 张晚意 邓为...）",
              src:
                "https://img2.baidu.com/it/u=2158547380,36417308&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
              text: "桐华",
              val: 88.3,
              status: false
            },
            {
              name: "活着",
              src:
                "https://img0.baidu.com/it/u=1612570785,3218208120&fm=253&fmt=auto&app=138&f=JPG?w=350&h=350",
              text: "余华",
              val: 91.9,
              status: false
            },
            {
              name: "三体（全集）",
              src:
                "https://img0.baidu.com/it/u=2790198235,744767316&fm=253&fmt=auto&app=138&f=JPEG?w=438&h=626",
              text: "刘慈欣",
              val: 93.4,
              status: false
            },
            {
              name: "斗破苍穹",
              src:
                "http://localhost:8080/vueku/img/0ff41bd5ad6eddc448be31f537dbb6fd52663366.a4986b80.webp",
              text: "天蚕土豆",
              val: 93.6,
              status: false
            },
            {
              name: "法医秦明：白卷",
              src:
                "https://img1.baidu.com/it/u=4007619982,2760698250&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
              text: "法医秦明",
              val: 89.8,
              status: false
            }
          ]
        },
        {
          name: "分类",
          activers: [
            {
              name: "张三"
            }
          ]
        },
        {
          name: "排行",
          activer: ""
        },
        {
          name: "文学艺术",
          activer: []
        },
        {
          name: "哲学社科",
          activer: []
        }
      ]
    };
  },
  methods: {
    inln(index) {
      console.log(index);
      this.n = index;
    }
  },
  watch: {
    n() {
      this.show = false;
      this.shat = false;
      this.chat = false;
      this.pot = false;
      if (this.n == 1) {
        this.show = true;
      }
      if (this.n == 2) {
        this.shat = true;
      }
      if (this.n == 3) {
        this.chat = true;
      }
      if (this.n == 4) {
        this.pot = true;
      }
    }
  },
  created() {},
  mounted() {
    console.log(this.title);
  }
};
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
#con {
  width: 380px;
  height: 306px;
  background: #ffffff;
  position: relative;
  position: sticky;
  top: 0;
  z-index: 99999;
}
.footer {
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 390px;
  height: 50px;
  background: rgb(240, 234, 234);
  z-index: 9999;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.box {
  width: 380px;
  background: #c6def7;
  position: relative;
  margin-top: 17px;
}
#box-i {
  width: 100%;
  height: 150px;
}
#box-i p {
  position: absolute;
  top: 87px;
  left: 97px;
  font-size: 12px;
  font-weight: 100;
  color: #4d4d4e;
}
#boc {
  position: absolute;
  top: 63px;
  left: 97px;
  font-size: 13px;
  font-weight: 200;
  color: #4d4d4e;
}
#boc1 {
  position: absolute;
  top: 66px;
  left: 150px;
  font-size: 15px;
  font-weight: 200;
  color: #4d4d4e;
}
#boc2 {
  position: absolute;
  top: 63px;
  left: 162px;
  font-size: 15px;
  font-weight: 200;
  color: #4d4d4e;
}
#box-i h3 {
  position: absolute;
  top: 35px;
  left: 97px;
  font-size: 18px;
  font-weight: 500;
  color: #4d4d4e;
}
#box-i img {
  width: 80px;
  height: 120px;
  position: absolute;
  top: 15px;
  left: 5px;
}

ul {
  width: 380px;
  background: #ffffff;
  list-style: none;
  display: flex;
  justify-content: space-evenly;

  z-index: 9999;
}
ul li {
  height: 40px;
  color: #ccc;
  font-size: 20px;
  font-family: "楷体";
  font-weight: 600;
  line-height: 40px;
}
.active {
  color: blue;
}
#icfo {
  position: absolute;
  right: 0;
  top: 118px;
}

.cen {
  width: 380px;
  height: 17px;
}
.lav {
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 1px solid black;
  border: none;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  line-height: 46px;
  vertical-align: middle;
  background-color: #c6def7;
}
.type {
  position: absolute;
  right: 15px;
  top: 105px;
  width: 16px;
  height: 50px;
  color: #fff;
}
.heafer {
  width: 380px;
  height: 200px;
  background: #aeafb3;
  border-radius: 30px;
  padding: auto;
  position: relative;
  position: sticky;
  top: 0;
  z-index: -999;
}
.her-img {
  position: absolute;
  top: 70px;
  left: 17px;
  width: 80px;
  height: 100px;
}
.her-img img {
  width: 80px;
  height: 100px;
}
.her-right {
  width: 50px;
  height: 30px;
  background: red;
  position: absolute;
  right: 2px;
  top: 24px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  color: #fff;
  font-size: 10px;
  font-weight: 100;
  line-height: 30px;
}
#sp1 {
  position: absolute;
  top: 0;
  left: 50px;
  color: #fff;
  font-size: 15px;
  font-weight: 900;
}
#sp2 {
  position: absolute;
  top: 0;
  left: 120px;
  color: #ccc;
  font-size: 10px;
  font-weight: 400;
}
i {
  display: inline-block;
  width: 25px;
  height: 25px;
  position: absolute;
  line-height: 16px;
  border-radius: 50%;
  top: 4px;
  left: 15px;
  background: #ffffff;
}
.her {
  width: 70%;
  height: 30px;
  //   border: 1px solid white;
  line-height: 30px;
  margin-top: 15px;
  position: absolute;
  top: 15px;
  left: 0;
}
.Code {
  width: 100%;
  height: 100%;
}

#int {
  margin: 20px auto;
}
.inp {
  width: 263px;
  height: 40px;
  // border: 1px solid red;

  border: none;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  vertical-align: middle;
  background-color: #c6def7;
  outline: none;
}
</style>