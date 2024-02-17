import {useRouter} from 'next/router';

export default function StaticRoutingPage() {
  const router = useRouter();

  const onClickPageMove = () => {
    router.push('/section05/05-01-static-routing-moved');
  };
  return (
    <div>
      <button onClick={onClickPageMove}>페이지 이동하기</button>
    </div>
  );
}
