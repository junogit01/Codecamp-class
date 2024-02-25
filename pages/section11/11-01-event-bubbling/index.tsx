import { gql, useQuery } from "@apollo/client";
import { MouseEvent } from "react";
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

export default function StaticRoutingBoardMovedPage() {
  const { data } = useQuery(FETCH_BOARDS);
  console.log(data?.fetchBoards);

  const onClickAlert = (event: MouseEvent<HTMLDivElement>) => {
    alert(event?.currentTarget.id + "님이 작성한 글입니다.");
  };

  // const qqq = () => {
  //   alert("클릭 타이틀");
  // };
  return (
    <div>
      {data?.fetchBoards.map((el: any) => (
        <div key={el.id} id={el.writer} onClick={onClickAlert}>
          <span>
            <input type="checkbox" />
          </span>
          <span style={{ margin: "10px" }}>{el.number}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
    </div>
  );
}
