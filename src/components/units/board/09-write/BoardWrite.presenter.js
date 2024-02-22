import { RedInput, BlueBtn } from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  return (
    <div>
      <div>
        <div>{props.isEdit ? "수정" : "등록"}하기</div>
        작성자:{" "}
        <RedInput type="text" onChange={props.onChangeWriter}></RedInput>
        제목: <RedInput type="text" onChange={props.onChangeTitle}></RedInput>
        내용:{" "}
        <RedInput type="text" onChange={props.onChangeContents}></RedInput>
      </div>

      <BlueBtn
        onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
      >
        {props.isEdit ? "수정" : "등록"}하기
      </BlueBtn>
    </div>
  );
}
