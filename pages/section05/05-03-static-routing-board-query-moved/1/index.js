import {gql, useQuery} from '@apollo/client';

const FETCH_BOARD = gql`
  query {
    fetchBoard(number: 17) {
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingBoardMovedPage() {
  const {data} = useQuery(FETCH_BOARD);
  console.log(data);
  return (
    <div>
      <div>1번 게시글</div>
      <div>작성자 : {data?.fetchBoard.writer}</div>
      <div>제목 : {data?.fetchBoard.title}</div>
      <div>내용 : {data ? data.fetchBoard.contents : '잠시만 기다려주세요'}</div>
    </div>
  );
}
