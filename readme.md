# excel 的简单 web 表格工具

## 单元格合并、鼠标框选实现思路

- 思路核心：通过数据驱动视图
- 数据格式

```typescript
type Cell = {
  text: string; // 代表文字内容
  rowStart: number; // grid-row-start
  rowEnd: number; // grid-row-end
  colStart: number; // grid-column-start
  colEnd: number; // grid-column-end
  index: number; // for循环的唯一key
  selected: boolean; // 是否被选中
};
```

### 合并框选方式

- 保存鼠标最开始点击到拖拽松开点位信息
- 遍历整个数据，确定两个点位之间的矩阵
- 处于矩阵之内的点位，selected 被标记选中
- 点击合并操作
- 修改第一个点位，其余点位去除，计算公式如下

```typescript
const rowStart = Math.min(selectNode.rowStart, lastNode.rowStart);
const rowEnd = Math.max(selectNode.rowEnd, lastNode.rowEnd);
const colStart = Math.min(selectNode.colStart, lastNode.colStart);
const colEnd = Math.max(selectNode.colEnd, lastNode.colEnd);
```

- 最后根据数据，重新刷新视图
