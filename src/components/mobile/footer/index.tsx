import styled from "@emotion/styled";
import React from "react";
import FooterCell from "./cell";

const Footer = () => {
  return (
    <Container>
      <FooterCell
        title="产品功能"
        data={[
          "在线表单",
          "流程引擎",
          "仪表盘",
          "知识库",
          "团队协作",
          "更新日志",
          "网络监测",
        ]}
      ></FooterCell>
      <FooterCell
        title="解决方案"
        data={[
          "离散制造ERP",
          "设备管理与巡检",
          "订单管理_进销存",
          "质量管理",
          "HSE管理",
        ]}
      ></FooterCell>
      <FooterCell
        title="了解我们"
        data={["行业案例", "产品定价", "定制实施", "帮助中心", "企业介绍"]}
      ></FooterCell>
      <FooterCell
        title="联系我们"
        data={[
          "市场合作：marketing@jiandaoyun.com",
          "服务热线：400-111-0890",
          "总裁办24H投诉电话：133 7361 3297",
          "投诉邮箱：tousu@jiandaoyun.com",
        ]}
        tip={{
          index: [1, 3],
          content: [
            "",
            "（工作日：09:00-12:00，13:30-17:30）",
            "",
            "（您对我们的产品、服务有任何不满均可投诉）",
          ],
        }}
      ></FooterCell>
    </Container>
  );
};
const Container = styled.div`
  padding: 25px 5%;
  background: #1d2036;
`;
export default Footer;
