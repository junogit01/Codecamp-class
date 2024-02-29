import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

interface IApolloSettingProps {
  children: JSX.Element;
}
export default function ApolloSetting(props: IApolloSettingProps) {
  const client = new ApolloClient({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql", // 서버의 URI 주소를 작성
    cache: new InMemoryCache(), // PC 메모리에다가 백엔드에서 받은 데이터를 임시로 저장해 놓는다.
  });
  // prettier-ignore
  return <ApolloProvider client={client}>
    {props.children}
    </ApolloProvider>;
}
