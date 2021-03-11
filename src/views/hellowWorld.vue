<template>
  <div class="main">
    <div class="list-wrap" @scroll="handleScroll">
      <div ref="scrollyItem" style="float:left"></div>
      <div class="list-item" v-for="item in currentList" :key="item">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const list = [];
    const currentList = [];
    const currentCount = 12;
    for (let i = 0; i < 100; i++) {
      list.push(`第${i + 1}条`);
    }
    for (let i = 0; i < currentCount; i++) {
      currentList.push(`第${i + 1}条`);
    }

    return {
      list,
      currentList,
      currentCount
    };
  },
  methods: {
    handleScroll(e) {
      const { scrollTop, clientHeight, scrollHeight } = e.target;
      console.log(scrollTop);
      console.log(clientHeight);
      console.log(scrollHeight);
      console.log("-----------------------------");
    }
  },
  mounted() {
    const scrollyItem = this.$refs.scrollyItem;
    scrollyItem.style.height = this.list.length * 30 + "px";
  }
};
</script>

<style lang="less" scoped>
.main {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  .list-wrap {
    position: relative;
    margin-top: -100px;
    border: 1px solid rgb(168, 168, 168);
    width: 300px;
    height: 300px;
    overflow: auto;
    .list-item {
      height: 20px;
      margin-bottom: 10px;
      text-align: center;
    }

    .slide {
      position: absolute;
      right: 0;
      width: 12px;
      border-radius: 3px;
      background-color: rgb(193, 193, 193);
    }
  }
}
</style>
