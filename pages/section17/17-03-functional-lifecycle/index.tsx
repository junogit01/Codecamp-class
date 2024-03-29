import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function FunctionalCounterPage(): JSX.Element {
  const [count, setCount] = useState(0);
  const router = useRouter();

  // componentDidMount
  useEffect(() => {
    console.log("그려지고 나서 실행");
  }, [count]);
  // componentDidMount(): void {
  //   console.log("그려지고 나서 실행");
  // }

  // componentDidMount + componentDidUpdate
  useEffect(() => {
    console.log("변경되고 나서 실행");
  });
  // componentDidUpdate(): void {
  //   console.log("변경되고 나서 실행");
  // }

  //
  useEffect(() => {
    // componentWillUnmount
    return () => {
      console.log("사라지기 전 실행");
    };
  }, []);
  // componentWillUnmount(): void {
  //   console.log("사라지기 전 실행");
  //   // ex) 채팅방 나가기 API
  // }

  // 1. useEffect 하나로 합치기

  useEffect(() => {
    console.log("그려지고나서 실행");

    return () => {
      console.log("사라지기 전 실행");
    };
  });

  // 2. useEffect의 잘못된 사용법(1. 추가렌더링)
  useEffect(() => {}, [count]);

  const onClickUp = (): void => {
    console.log(count);
    setCount(1);
  };

  const onClickMove = (): void => {
    void router.push("/");
  };
  return (
    <div>
      <div>{count}</div>
      <button onClick={onClickUp}>카운트 증가</button>
      <button onClick={onClickMove}>나가기</button>
    </div>
  );
}
