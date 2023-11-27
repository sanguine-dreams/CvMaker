
import {Layout, theme } from 'antd';
import CV from '../pages/CvHolder';


const { Header, Content, Footer } = Layout;

function LayoutStructure () {
  const {
    token: {},
  } = theme.useToken();

  return (
    <Layout className="layout">
      <Header style={{ display: 'flex', alignItems: 'center'}}>
        <div className="demo-logo" />
        
      </Header>
      <Content style={{ padding: '5%' }}>
    <CV />
      </Content>
      <Footer style={{ textAlign: 'center', bottom: '0' }}>CV Maker by Sanguine.</Footer>
    </Layout>
  );
};

export default LayoutStructure;
