import { gql, useMutation } from "@apollo/client";
import type { ChangeEvent } from "react";
import { useRef, useState } from "react";
import type {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../src/commons/types/generated/types";
import { checkValidationFile } from "../../../src/commons/library/validationFile";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const graphqlsetting = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function ImageUploadPage(): JSX.Element {
  const [imageUrl, setImageUrl] = useState("");
  const fileRef = useRef<HTMLInputElement>();
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const onChangeFile = async (
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = event.target.files?.[0]; // 배열로 들어오는 이유 : <input type="file" multiple/> 일 때 여러개 드래그해서 파일 선택 가능하기에
    const isValid = checkValidationFile(file);
    if (!isValid) {
      return;
    }

    const result = await uploadFile({
      variables: {
        file,
      },
    });
    setImageUrl(result.data?.uploadFile.url ?? "");
    console.log(imageUrl);
  };

  const onClickImage = (): void => {
    fileRef.current?.click();
  };

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [myFunc] = useMutation(graphqlsetting);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>): void => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>): void => {
    setContents(event.target.value);
  };

  const onClickSubmit = async (): Promise<void> => {
    const data = await myFunc({
      variables: {
        createBoardInput: {
          writer,
          title,
          contents,
          images: [imageUrl],
        },
      },
    });
    console.log(data);
  };
  // 업로드 되지 않음 아폴로세팅 다시 보기

  return (
    <div>
      작성자: <input type="text" onChange={onChangeWriter}></input>
      제목: <input type="text" onChange={onChangeTitle}></input>
      내용: <input type="text" onChange={onChangeContents}></input>
      <div
        style={{ width: "50px", height: "50px", backgroundColor: "gray" }}
        onClick={onClickImage}
      >
        이미지 선택
      </div>
      <input
        style={{ display: "none" }}
        type="file"
        onChange={onChangeFile}
        ref={fileRef}
        accept="image/jpeg, image/png" // jpeg, png만 선택하게 한다.
      />
      <img src={`https://storage.googleapis.com/${imageUrl}`} />
      <button onClick={onClickSubmit}>GraphQl-API 요청하기</button>
    </div>
  );
}
