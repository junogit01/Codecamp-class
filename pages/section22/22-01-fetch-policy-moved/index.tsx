import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../src/commons/types/generated/types";
const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
    }
  }
`;

export default function FetchPolicyMovedPage(): JSX.Element {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardArgs>(
    FETCH_BOARDS
  );

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <span style={{ margin: "10px" }}>{el.contents}</span>
        </div>
      ))}
    </div>
  );
}
