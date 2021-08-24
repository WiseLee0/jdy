import styled from "@emotion/styled";
import React, { useState } from "react";
import { themeColor } from "../../../common/style";
import Scheme from "../scheme";

export default function Scene() {
  return (
    <Container>
      <TitleH2>零代码搭建灵活易用，满足个性化管理需求</TitleH2>
      <Line theme={false} size={18} mb={20} color="#3d464d">
        在线表单
      </Line>
      <Line theme={false} mb={1}>
        简单拖拽即可创建表单，发布填写链接、即可快速
      </Line>
      <Line theme={false}>回收数据。常用于信息收集。</Line>
      <img src="https://blog-assets.jiandaoyun.com/index/outsourcing/2020jdy-gn01.png" />
      <Line theme mb={40}>
        查看详情 &gt;&gt;
      </Line>

      <Line theme={false} size={18} mb={20} color="#3d464d">
        流程引擎
      </Line>
      <Line theme={false} mb={1}>
        根据团队业务，灵活设计流程流转规则。
      </Line>
      <Line theme={false}>常用于财务审批、申请申报等。</Line>
      <img src="https://blog-assets.jiandaoyun.com/index/outsourcing/2020jdy-gn02.png" />
      <Line theme mb={40}>
        查看详情 &gt;&gt;
      </Line>

      <Line theme={false} size={18} mb={20} color="#3d464d">
        仪表盘
      </Line>
      <Line theme={false} mb={1}>
        将收集来的数据进行统计、分析、对比。
      </Line>
      <Line theme={false}>常用于分析业绩趋势、财务状况等。</Line>
      <img src="https://blog-assets.jiandaoyun.com/index/outsourcing/2020jdy-gn03.png" />
      <Line theme mb={40}>
        查看详情 &gt;&gt;
      </Line>

      <Line theme={false} size={18} mb={20} color="#3d464d">
        知识库
      </Line>
      <Line theme={false} mb={1}>
        在线创建文档并分享给公司员工。
      </Line>
      <Line theme={false}>常用于公布规章制度、分享工作经验等。</Line>
      <img src="https://blog-assets.jiandaoyun.com/index/outsourcing/2020jdy-gn04.png" />
      <Line theme mb={40}>
        查看详情 &gt;&gt;
      </Line>

      <Line theme={false} size={18} mb={20} color="#3d464d">
        团队协作
      </Line>
      <Line theme={false} mb={1}>
        团队成员通过钉钉/微信，可以在电脑/手机上
      </Line>
      <Line theme={false}>接收消息、处理工作。</Line>
      <img src="https://blog-assets.jiandaoyun.com/index/outsourcing/2020jdy-gn05.png" />
      <Line theme mb={40}>
        查看详情 &gt;&gt;
      </Line>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 90%;
    margin-bottom: 10px;
  }
`;
const TitleH2 = styled.div<{
  mt?: number;
}>`
  font-size: 18px;
  font-weight: 600;
  margin: 50px 0 20px 0;
  margin-top: ${(props) => (props.mt ? `${props.mt}px` : "50px")};
`;
const Line = styled.span<{
  theme?: boolean;
  size?: number;
  mb?: number;
  color?: string;
}>`
  color: ${(props) => {
    if (props.theme) return themeColor;
    if (props.color) return props.color;
    return "#5e6d82";
  }};
  font-size: ${(props) => (props.size ? `${props.size}px` : "14px")};
  margin-bottom: ${(props) => (props.mb ? `${props.mb}px` : "10px")};
`;
