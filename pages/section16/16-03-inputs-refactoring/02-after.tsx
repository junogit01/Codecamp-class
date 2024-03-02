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
  const [myFunc] = useMutation(graphqlsetting);
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  const onClickSubmit = async () => {
    const data = await myFunc({
      variables: {
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(data);
  };
  return (
    <div>
      <div>
        작성자: <input type="text" onChange={onChangeWriter}></input>
        제목: <input type="text" onChange={onChangeTitle}></input>
        내용: <input type="text" onChange={onChangeContents}></input>
      </div>

      <button onClick={onClickSubmit}>GraphQl-API 요청하기</button>
    </div>
  );
}
