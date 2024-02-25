import { gql, useQuery } from "@apollo/client";
import { MouseEvent } from "react";
import Checkbox from "./checkbox";
const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

export default function StopPropagationPage() {
  const { data } = useQuery(FETCH_BOARDS);
  console.log(data?.fetchBoards);

  const onClickAlert = (event: MouseEvent<HTMLDivElement>) => {
    alert(event?.currentTarget.id + "님이 작성한 글입니다.");
  };

  const qqq1 = () => {
    alert("1번 클릭");
  };

  const qqq4 = (event) => {
    event.stopPropagation();
    alert("4번 클릭");
  };
  return (
    <div>
      {data?.fetchBoards.map((el: any) => (
        <div id={el.writer} onClick={qqq1}>
          <Checkbox />
          <span style={{ margin: "10px" }} onClick={qqq4}>
            {el.number}
          </span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
    </div>
  );
}
