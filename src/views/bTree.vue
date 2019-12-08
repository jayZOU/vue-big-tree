<template>
  <div class="main">
    <vueBigTree ref="bigTree" :tree="tree" :defaultExpand="false" :option="option">
      <template v-slot="{ item, index }">
        <div>{{ item.label }}</div>
      </template>
    </vueBigTree>
    <div class="btn-group">
      <el-button @click="expandAll" class="btn" type="primary"
        >展开所有</el-button
      >
      <el-button @click="collapseAll" class="btn" type="primary"
        >折叠所有</el-button
      >
    </div>
  </div>
</template>
<style>
.btn-group {
  margin-top: 20px;
}
</style>
<script>
  import vueBigTree from "../components/vueBigTree.vue";
import treeTools from "../mixins/treeTools";

export default {
  mixins: [treeTools],
  data() {
    return {
      option: {
        height: 500, //滚动容器的高度
        itemHeight: 25 // 单个item的高度
      }
    };
  },
  components: {
    vueBigTree
  },
  methods: {
    collapseAll() {
      this.$refs.bigTree.collapseAll();
    },
    expandAll() {
      this.$refs.bigTree.expandAll();
    }
  }
};
</script>
