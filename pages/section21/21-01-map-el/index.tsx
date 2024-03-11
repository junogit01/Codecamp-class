export default function MapElPage(): JSX.Element {
  // 1. 기본 방법
  ["철수", "영희", "훈이"].forEach((element, index) => {
    console.log("element : ", element);
    console.log("index : ", index);
  });

  console.log("-------------------");

  // 2. 매개변수 변경한 방법
  ["철수", "영희", "훈이"].forEach((asdf, qwer) => {
    console.log("element : ", asdf);
    console.log("index : ", qwer);
  });

  console.log("-------------------");
  console.log("3. 함수선언식 방법");
  // 3. 함수선언식 방법
  ["철수", "영희", "훈이"].forEach(function (asdf, qwer) {
    console.log("element : ", asdf);
    console.log("index : ", qwer);
  });

  console.log("-------------------");
  console.log("4. el과 index 바꾸기");
  // 4. el과 index 바꾸기
  ["철수", "영희", "훈이"].forEach((index, el) => {
    console.log("element : ", el);
    console.log("index : ", index);
  });
  return <></>;
}
