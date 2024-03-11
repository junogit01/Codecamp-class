import { AppProps } from "next/app";
import React from "react";
import Layout from "../src/components/commons/layout";
import ApolloSetting from "../src/components/commons/apollo";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { RecoilRoot } from "recoil";

export default function App({ Component }: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <div>
          <Global styles={globalStyles} />
          <Layout>
            <Component />
          </Layout>
        </div>
      </ApolloSetting>
    </RecoilRoot>
  );
}
