import { useState } from "react";

export default function CounterLetDocumentPage(): JSX.Element {
  const [count, setCount] = useState(0);

  function onClickCountUp(): void {
    // 1. 화살표 함수
    // setCount((prev) => prev + 1);

    // 2. 함수 선언식
    // setCount(function (prev) {
    //   // 로직 추가 가능
    //   // if, for문 사용 가능
    //   return prev + 1;
    // });

    // 3. 매개변수 바꾸기
    setCount((asd) => asd + 1); // 이렇게 이름 아무렇게 설정해도 사용가능
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={onClickCountUp}>UP</button>
    </div>
  );
}
