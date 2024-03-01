export default function Child1(props: any) {
  function onClickCountUp() {
    props.setCount((prev: number) => prev + 1);
  }

  return (
    <div>
      <div>자식1{props.count}</div>
      <button onClick={onClickCountUp}>카운트 올리기</button>
    </div>
  );
}
