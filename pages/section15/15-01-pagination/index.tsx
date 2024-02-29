import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../src/commons/types/generated/types";
import { MouseEvent } from "react";
const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingBoardMovedPage(): JSX.Element {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardArgs
  >(FETCH_BOARDS);
  console.log(data?.fetchBoards);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    refetch({ page: Number(event.currentTarget.id) });
  };

  //   const onClickPage1 = async (
  //     event: MouseEvent<HTMLSpanElement>
  //   ): Promise<void> => {
  //     await refetch({ page: Number(event.currentTarget.id) });
  //   };

  //   const onClickPage2 = async (): Promise<void> => {
  //     await refetch({ page: Number(event.currentTarget.id) });
  //   };

  //   const onClickPage3 = async (): Promise<void> => {
  //     await refetch({ page: Number(event.currentTarget.id) });
  //   };
  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.contents}</span>
        </div>
      ))}
      {/* <span id="1" onClick={onClickPage}>
        <button>1</button>
      </span>
      <span id="2" onClick={onClickPage}>
        <button>2</button>
      </span>
      <span id="3" onClick={onClickPage}>
        <button>3</button>
      </span> */}
      {new Array(10).fill(1).map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          <button>{index + 1}</button>
        </span>
      ))}

      {/* {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          <button>{index + 1}</button>
        </span>
      ))}

      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((el, index) => (
        <span key={el} id={String(el)} onClick={onClickPage}>
          <button>{el}</button>
        </span>
      ))} */}
    </div>
  );
}
