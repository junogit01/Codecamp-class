import { RedInput, BlueBtn } from "./BoardWrite.styles";

interface IProps {
  onChangeWriter: () => void
}
export default function BoardWriteUI(props: IProps) {
  return (
    <div>
      <div>
        <div>this is presenter zone</div>
        작성자:{" "}
        <RedInput type="text" onChange={props.onChangeWriter}></RedInput>
        제목: <RedInput type="text" onChange={props.onChangeTitle}></RedInput>
        내용:{" "}
        <RedInput type="text" onChange={props.onChangeContents}></RedInput>
      </div>

      <BlueBtn onClick={props.onClickSubmit} mycolor={props.isActive}>
        GraphQl-API 요청하기
      </BlueBtn>
    </div>
  );
}
