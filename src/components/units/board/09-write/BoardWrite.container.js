import BoardWriteUI from "./BoardWrite.presenter";

import { useMutation } from "@apollo/client";
import { useState } from "react";
import { graphqlsetting, graphqlupdate } from "./BoardWrite.querys";
import { useRouter } from "next/router";

export default function BoardWrite(props) {
  const router = useRouter();
  const [myFunc] = useMutation(graphqlsetting);
  const [updateBoard] = useMutation(graphqlupdate);
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
    router.push(`/section09/09-03-boards/${data.data.createBoard.number}`);
  };

  const onClickUpdate = async () => {
    const data = await updateBoard({
      variables: {
        number: Number(router.query.number),
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    router.push(`/section09/09-03-boards/${data.data.updateBoard.number}`);
  };
  return (
    <div>
      <BoardWriteUI
        isEdit={props.isEdit}
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        onClickSubmit={onClickSubmit}
        onClickUpdate={onClickUpdate}
      />
    </div>
  );
}
