import BoardWirteUI from "./BoardWriter.presenter";

export default function BoardWirte(props: any): JSX.Element {
  return (
    <div>
      <BoardWirteUI isEdit={props.isEdit} />
    </div>
  );
}
