import React, { Component } from 'react'
import StaffHeader from './StaffHeader';
import StaffItemPanel from './StaffItemPanel';
import StaffFooter from './StaffFooter';
import StaffDetail from './StaffDetail';
import { Layout, Icon} from 'antd';
import ResizeBox from './ResizeBox';

const { Header, Sider, Content } = Layout
export default class StaffSystem extends Component {
  render() {
    const Data = [

    ]
    const Detail = []
    return (
      <div>
        <Layout>
          <Header>
            <h3 style={{
              color: 'white'
            }}> HUMAN RESOURCE MANAGEMENT </h3>
          </Header>
          <StaffHeader></StaffHeader>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            <StaffItemPanel
            items = {Data}
            ></StaffItemPanel>
          </Content>
          {/* <ResizeBox>
            <StaffFooter ></StaffFooter>
          </ResizeBox> */}
        </Layout>
              
        
        
        {/* <StaffDetail
        staffDetail = {Detail}
        ></StaffDetail> */}
      </div>
    )
  }
}
