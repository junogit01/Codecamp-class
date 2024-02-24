import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../../src/commons/types/generated/types";

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
  const qqq: string = "";
  const [writer, setWrite] = useState<string | number>("");

  // const [myFunc] = useMutation<결과타입, 변수타입>(graphqlsetting);
  const [myFunc] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(graphqlsetting);

  const onClickSubmit = async () => {
    const data = await myFunc({
      variables: {
        writer: "가마신",
        title: "3스날",
        contents: "3스날입니다.",
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
