# 级联选择器组件 Cascade

- 支持默认值选择，defalutIdx 属性设置默认下标
- cityList 填入数据，类型需要符合以下规范

```typescript
type TNode = {
  name: string;
  value: unknown;
  children?: TNode[];
};
type cityList = TNode[];
```
