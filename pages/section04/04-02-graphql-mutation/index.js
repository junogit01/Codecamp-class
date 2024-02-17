import {useMutation, gql} from '@apollo/client';

const graphqlsetting = gql`
  mutation {
    createBoard(writer: "아스날", title: "사스날", contents: "외데고르") {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [myFunc] = useMutation(graphqlsetting);

  const onClickSubmit = async () => {
    const data = await myFunc();
    console.log(data);
  };
  return (
    <div>
      <button onClick={onClickSubmit}>GraphQl-API 요청하기</button>
    </div>
  );
}
