import styled from "@emotion/styled";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Container>
        <Row>
          <Cell w="187">
            <CellTitle>产品功能</CellTitle>
            <span>在线表单</span>
            <span>流程引擎</span>
            <span>仪表盘</span>
            <span>知识库</span>
            <span>团队协作</span>
            <span>更新日志</span>
            <span>网络监测</span>
          </Cell>
          <Cell w="187">
            <CellTitle>解决方案</CellTitle>
            <span>离散制造ERP</span>
            <span>设备管理与巡检</span>
            <span>订单管理_进销存</span>
            <span>质量管理</span>
            <span>HSE管理</span>
          </Cell>
          <Cell w="187">
            <CellTitle>了解我们</CellTitle>
            <span>行业案例</span>
            <span>产品定价</span>
            <span>定制实施</span>
            <span>帮助中心</span>
            <span>企业介绍</span>
          </Cell>
          <Cell w="500">
            <CellTitle>联系我们</CellTitle>
            <span>市场合作：marketing@jiandaoyun.com</span>
            <span>
              服务热线：400-111-0890 <i>（工作日：09:00-12:00，13:30-17:30）</i>
            </span>
            <span>总裁办24H投诉电话：133 7361 3297</span>
            <span>
              投诉邮箱：tousu@jiandaoyun.com
              <i>（您对我们的产品、服务有任何不满均可投诉）</i>
            </span>
            <div>
              <img src="https://blog-assets.jiandaoyun.com/index/outsourcing/2020jdy-fwx.png" />
              <img src="https://blog-assets.jiandaoyun.com/index/outsourcing/2020jdy-fzh.png" />
              <img src="https://blog-assets.jiandaoyun.com/index/outsourcing/2020jdy-fwb.png" />
            </div>
          </Cell>
        </Row>
      </Container>
      <BottomCell>
        <span>苏ICP备18065767号</span>
        <span>
          <img src="https://blog-assets.jiandaoyun.com/index/record_icon.png" />
          苏公网安备 32020502000753号
        </span>
        <span>©2014-2020 帆软软件有限公司 版权所有</span>
      </BottomCell>
    </div>
  );
};
const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  background: #1d2036;
  padding: 50px 120px;
`;
const Row = styled.div`
  box-sizing: border-box;
  width: 1280px;
  padding: 0 120px;
  margin: 0 auto;
  display: flex;
`;
const Cell = styled.div<{
  w: string;
}>`
  display: flex;
  flex-direction: column;
  width: ${(p) => (p.w ? `${p.w}px` : "auto")};
  span {
    font-size: 14px;
    font-weight: 400;
    color: #c3cdda;
    line-height: 40px;
    display: block;
    cursor: pointer;
    :hover {
      color: #eee;
    }
  }
  i {
    color: #91a1b7;
    font-size: 12px;
  }
  img {
    width: 40px;
    margin-right: 20px;
    margin-top: 20px;
  }
`;
const CellTitle = styled.div`
  width: 64px;
  font-size: 16px;
  font-weight: 600;
  color: #91a1b7;
  border-bottom: 1px solid #5e6d82;
  display: inline-block;
  padding-bottom: 20px;
  margin-bottom: 10px;
  position: relative;
  ::after {
    content: "";
    display: block;
    width: 1em;
    height: 1px;
    background: #0db3a6;
    bottom: -1px;
    position: absolute;
  }
`;
const BottomCell = styled.div`
  background: #0d112d;
  line-height: 14px;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 14px;
  span {
    color: #5e6d82;
    padding-right: 10px;
    margin-right: 10px;
    img {
      width: 14px;
      margin-right: 9px;
    }
  }
  span:nth-of-type(1) {
    border-right: 1px solid #5e6d82;
  }
  span:nth-of-type(2) {
    border-right: 1px solid #5e6d82;
  }
`;
export default Footer;
