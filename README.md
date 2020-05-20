# vue-big-tree
一个可以用来渲染海量数据的Vue树形组件

## Install
`npm i vue-big-tree --save`

## Use
```html
    <vueBigTree ref="bigTree" :tree="tree" :defaultExpand="true" :option="option">
          <template v-slot="{ item, index }">
            <div>{{ item.label }}</div>
          </template>
        </vueBigTree>
```

## Attributes
| 参数      |    说明 | 类型  | 可选  | 默认值  |
| :-------- | --------:|-------:|-------:| :--: |
| tree  | 数据源 |  Array   |  -   |  -   |
| defaultExpand  | 是否默认展开 |  Boolean   |  true/false   |  false   |
| option  | 虚拟树配置 |  Object   |  -   |  -   |
| timeout  | 滚动节流 |  Number   |  -   |  17  |

### option
| 参数      |    说明 | 类型  | 可选  | 默认值  |
| :-------- | --------:|-------:|-------:| :--: |
| height  | 容器的高度 |  Number   |  -   |  500   |
| itemHeight  | 单个节点的高度 |  Number   |  -   |  25   |

### method
#### 展开所有
`this.$refs.bigTree.collapseAll()`
#### 折叠所有
`this.$refs.bigTree.expandAll()`