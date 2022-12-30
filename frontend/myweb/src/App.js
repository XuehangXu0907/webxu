import React from 'react';
import { Layout } from 'antd';
import './App.css';
const { Header, Footer, Content } = Layout;

const App: React.FC = () => (
  <>
    <Layout>
      <Header align='center'>
      </Header>
      
      <Content align='center'>
        <h1>Xuehang Xu</h1>
        <p> CS Master’s Student at Stevens Institute of Technology </p>
        <p> 2+ years of experience with full stack development </p>
        <p> Seeking 2023 full-time SWE positions </p>
        </Content>
      <Footer align='center'>
        <h2>
          Contact Method
        </h2>
        {/*make a new page*/}
        <h4>Resume : <a target="_blank">Xuehang's Resume</a></h4>
        <h4>Email :  Xuehang.hl@gmail</h4>
        <h4>Github : <a href="https://github.com/XuehangXu0907" target="_blank">XuehangXu0907</a> </h4>
        <h4>LinkedIn : <a href="https://www.linkedin.com/in/xuehang-xu/" target="_blank">Xuehang-Xu</a></h4>
        </Footer>
    </Layout>
  </>
);

export default App;