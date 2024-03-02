import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const graphqlsetting = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage(): JSX.Element {
  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  const [myFunc] = useMutation(graphqlsetting);

  const onChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };

  const onClickSubmit = async () => {
    const data = await myFunc({
      variables: {
        ...inputs,
      },
    });
    console.log(data);
  };
  return (
    <div>
      <div>
        작성자: <input type="text" id="writer" onChange={onChange}></input>
        제목: <input type="text" id="title" onChange={onChange}></input>
        내용: <input type="text" id="contents" onChange={onChange}></input>
      </div>

      <button onClick={onClickSubmit}>GraphQl-API 요청하기</button>
    </div>
  );
}
