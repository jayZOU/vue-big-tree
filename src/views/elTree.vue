<template>
  <div>
    <div class="main">
      <el-tree :data="tree"></el-tree>
    </div>
    <p class="label">节点总数:{{ flattenTree.length }}</p>
  </div>
</template>

<script>
import treeTools from "../mixins/treeTools";
export default {
  mixins: [treeTools]
};
</script>
