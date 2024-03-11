import { useRecoilState } from "recoil";
import { isEditState } from "../../../commons/stores";

export default function BoardWirteUI(): JSX.Element {
  const [isEdit, setIsEdi] = useRecoilState(isEditState);
  return <div>{isEdit === true ? "수정하기" : "등록하기"}</div>;
}
