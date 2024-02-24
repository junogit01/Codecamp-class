import { RedInput, BlueBtn } from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <div>
      <div>
        <div>{props.isEdit ? "수정" : "등록"}하기</div>
        작성자:{" "}
        <RedInput
          type="text"
          onChange={props.onChangeWriter}
          defaultValue={props.data?.fetchBoard.writer}
        ></RedInput>
        제목:{" "}
        <RedInput
          type="text"
          onChange={props.onChangeTitle}
          defaultValue={props.data?.fetchBoard.title}
        ></RedInput>
        내용:{" "}
        <RedInput
          type="text"
          onChange={props.onChangeContents}
          defaultValue={props.data?.fetchBoard.contents}
        ></RedInput>
      </div>

      <BlueBtn
        onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
      >
        {props.isEdit ? "수정" : "등록"}하기
      </BlueBtn>
    </div>
  );
}
