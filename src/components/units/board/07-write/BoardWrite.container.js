import BoardWriteUI from "./BoardWrite.presenter";

import { useMutation } from "@apollo/client";
import { useState } from "react";
import { graphqlsetting } from "./BoardWrite.querys";

export default function BoardWrite() {
  const [isActive, setIsActive] = useState(false);

  const [myFunc] = useMutation(graphqlsetting);
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    if (event.target.value && title && contents) {
      setIsActive(true);
    }
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (writer && event.target.value && contents) {
      setIsActive(true);
    }
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (writer && title && event.target.value) {
      setIsActive(true);
    }
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
      <div>여기는 container 입니다.</div>
      <BoardWriteUI
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        onClickSubmit={onClickSubmit}
        isActive={isActive}
      />
    </div>
  );
}
