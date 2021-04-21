<template>
  <div>
    <virtual-scroll :list="list2" :rowCount="7" rowHeight="40px">
      <template slot-scope="{ currentList }">
        <div class="list-item" v-for="item in currentList" :key="item">{{ item }}</div>
      </template>
    </virtual-scroll>
    <!-- <video :src="src" controls></video> -->
  </div>
</template>

<script>

export default {
  data() {
    const list2 = [];
    for (let i = 0; i < 10000; i++) {
      list2.push(i + 1);
    }
    return {
      list2,
      src:
        "https://as.qunliao.info/2021/04/05/91394d66b52fab353ff7777c21510c9c51m9FN_q4.mp4"
    };
  },
  // mounted() {
  //   var m3u8ToMp4 = require("m3u8-to-mp4");
  //   var converter = new m3u8ToMp4();

  //   (async function() {
  //     await converter
  //       .setInputFile("http://localhost:8081/sejie.m3u8")
  //       .setOutputFile("dummy.mp4")
  //       .start();

  //     console.log("File converted");
  //   })();

  //   // axios
  //   //   .get("/api/sejie.m3u8", {
  //   //     responseType: "blob"
  //   //   })
  //   //   .then(res => {
  //   //     console.log(res);
  //   //     var blob = new Blob([res]);
  //   //     var url = URL.createObjectURL(blob);

  //   //     setTimeout(() => {
  //   //       // this.src = url;
  //   //     }, 5000);

  //   //     console.log(url);
  //   //   });
  // }
};
</script>

<style lange="less" scoped>
.list-item {
  height: 40px;
  text-align: center;
}
</style>
