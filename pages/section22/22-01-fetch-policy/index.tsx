import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../src/commons/types/generated/types";
import { useState } from "react";
import FetchPolicyExample from "../../../src/components/units/22-fetch-policy";
import { Router, useRouter } from "next/router";
const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingBoardMovedPage(): JSX.Element {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardArgs>(
    FETCH_BOARDS
  );

  // 1. 새로운 컴포넌트 등장시에도 글로벌 스테이트 값이 유지되는지??
  const onClickIsOpen = (): void => {
    //
    setIsOpen(!isOpen);
  };

  const onClickMoved = (): void => {
    router.push("/section22/22-01-fetch-policy-moved");
  };
  return (
    <div onClick={onClickIsOpen}>
      1. 버튼을 클릭하면 새로운 컴포넌트가 나타난다.
      <button>버튼 클릭하면 새로운 컴포넌트 등장</button>
      {isOpen && <FetchPolicyExample />}
      ------------------------------------- 스테이트 값이 유지되는지??
      <button onClick={onClickMoved}>이동하기</button>
    </div>
  );
}
