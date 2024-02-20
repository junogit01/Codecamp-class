export default function BoardWriteUI(props) {
  return (
    <div>
      <div>
        작성자: <input type="text" onChange={props.onChangeWriter}></input>
        제목: <input type="text" onChange={props.onChangeTitle}></input>
        내용: <input type="text" onChange={props.onChangeContents}></input>
      </div>

      <button onClick={props.onClickSubmit}>GraphQl-API 요청하기</button>
    </div>
  );
}
