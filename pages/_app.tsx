import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";
import React from "react";

export default function App({ Component }: AppProps): JSX.Element {
  const client = new ApolloClient({
    uri: "http://practice.codebootcamp.co.kr/graphql", // 서버의 URI 주소를 작성
    cache: new InMemoryCache(), // PC 메모리에다가 백엔드에서 받은 데이터를 임시로 저장해 놓는다.
  });
  return (
    <ApolloProvider client={client}>
      <Component />
    </ApolloProvider>
  );
}
