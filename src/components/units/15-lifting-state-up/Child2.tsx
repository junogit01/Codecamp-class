export default function Child2(props: any) {
  return (
    <div>
      <div>자식2{props.count}</div>
      <button onClick={props.onClickCount}>카운트 올리기</button>
    </div>
  );
}
