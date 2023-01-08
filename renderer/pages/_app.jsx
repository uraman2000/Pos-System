import { Layout } from "antd";
import "antd/dist/antd.css";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import styled from "styled-components";
import LogIn from "../components/LogIn";
import SideNav from "../components/sideNav";
import store from "../store/store";
const { Header, Footer, Sider, Content } = Layout;

const CustomContent = styled(Content)`
  border-radius: 20px;
  background: white;
  padding: 2%;
  margin: 2%;
  box-shadow: 10px 10px 32px 1px rgba(0, 0, 0, 0.68);
  -webkit-box-shadow: 10px 10px 32px 1px rgba(0, 0, 0, 0.68);
  -moz-box-shadow: 10px 10px 32px 1px rgba(0, 0, 0, 0.68);
  overflow: hidden;
`;

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState("");
  useEffect(() => {
    // Perform localStorage action

    setUser(localStorage.getItem("User"));
  }, []);

  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {user == null && (
        <>
          <LogIn></LogIn>
        </>
      )}
      {user !== null && (
        <Layout style={{ height: "100vh" }}>
          <SideNav></SideNav>
          <CustomContent>
            <Provider store={store}>
              <Component {...pageProps} />
            </Provider>
          </CustomContent>
        </Layout>
      )}
    </React.Fragment>
  );
}

export default MyApp;
