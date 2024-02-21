import { RedInput, BlueBtn } from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
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
