import {useRouter} from 'next/router';

export default function StaticRoutingBoardPage() {
  const router = useRouter();

  const onClickPageMove1 = () => {
    router.push('/section05/05-03-static-routing-board-query-moved/1');
  };
  const onClickPageMove2 = () => {
    router.push('/section05/05-03-static-routing-board-query-moved/2');
  };
  const onClickPageMove3 = () => {
    router.push('/section05/05-03-static-routing-board-query-moved/3');
  };
  return (
    <div>
      <button onClick={onClickPageMove1}>1번 게시글 이동하기</button>
      <button onClick={onClickPageMove2}>2번 게시글 이동하기</button>
      <button onClick={onClickPageMove3}>3번 게시글 이동하기</button>
    </div>
  );
}
