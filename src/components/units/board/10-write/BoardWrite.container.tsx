import BoardWriteUI from "./BoardWrite.presenter";

import { useMutation } from "@apollo/client";
import { useState, ChangeEvent } from "react";
import { graphqlsetting, graphqlupdate } from "./BoardWrite.querys";
import { useRouter } from "next/router";

interface IBoardWriteProps {
  isEdit: boolean;
  data?: any;
}
export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();
  const [myFunc] = useMutation(graphqlsetting);
  const [updateBoard] = useMutation(graphqlupdate);
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
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
    router.push(
      `/section10/10-02-typescript-boards/${data.data.createBoard.number}`
    );
  };

  const onClickUpdate = async () => {
    interface IMyvariables {
      number: number;
      writer?: string;
      title?: string;
      contents?: string;
    }
    const myVariables: IMyvariables = {
      number: Number(router.query.number),
    };
    if (writer) {
      myVariables.writer = writer;
    }
    if (title) {
      myVariables.title = title;
    }
    if (contents) {
      myVariables.contents = contents;
    }

    const data = await updateBoard({
      variables: {
        myVariables,
      },
    });
    router.push(
      `/section10/10-02-typescript-boards/${data.data.updateBoard.number}`
    );
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
        data={props.data} // undefined or data 이거나 둘 중 하나(수정에선 data, 등록에선 undefined)
      />
    </div>
  );
}
