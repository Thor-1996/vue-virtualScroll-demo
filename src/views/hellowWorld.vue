<template>
  <div>
    <virtual-scroll :list="list2" :rowCount="6" rowHeight="40px">
      <template slot-scope="{ currentList }">
        <div class="list-item" v-for="item in currentList" :key="item">
          {{ item }}
        </div>
      </template>
    </virtual-scroll>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list2: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    };
  },
};
</script>

<style lange="less" scoped>
.list-item {
  height: 40px;
  text-align: center;
}
</style>
