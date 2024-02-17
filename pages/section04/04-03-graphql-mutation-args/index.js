import {useMutation, gql} from '@apollo/client';

const graphqlsetting = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [myFunc] = useMutation(graphqlsetting);

  const onClickSubmit = async () => {
    const data = await myFunc({
      variables: {
        writer: '가마신',
        title: '3스날',
        contents: '3스날입니다.',
      },
    });
    console.log(data);
  };
  return (
    <div>
      <button onClick={onClickSubmit}>GraphQl-API 요청하기</button>
    </div>
  );
}
