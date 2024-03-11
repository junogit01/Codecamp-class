import { useEffect } from "react";
import { isEditState } from "../../../src/commons/stores";
import BoardWirte from "../../../src/components/units/22-global-state/BoardWriter.container";

import { useRecoilState } from "recoil";
export default function GlobalStateWithRecoilPage(): JSX.Element {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  useEffect(() => {
    setIsEdit(true);
  }, []);
  return (
    <div>
      <BoardWirte />
    </div>
  );
}
