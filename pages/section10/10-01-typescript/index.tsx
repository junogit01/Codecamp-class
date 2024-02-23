export default function TypeScriptPage() {
  // 타입추론 : 처음 대입된 값의 타입을 자동적으로 적용시켜 주는 것
  let aaa = "안녕하세요";
  aaa = 3; // aaa는 "안녕하세요"에 의해 string 타입이 자동으로 추론되어 적용되었는데 3이라는 number 타입의 값을 대입하려 했기에 오류가난다.

  // 타입명시 : 대입할 값의 타입을 명시하는 것
  let bbb: String = "반갑습니다.";
  bbb = 10; // bbb는 string 타입인데 10이라는 number 타입의 값을 대입하려해서 오류가난다.

  // 타입명시가 필요한 상황
  let ccc: number | String = 1000;
  ccc = "1000원";

  // 숫자타입
  let ddd: number = 10;
  ddd = "철수"; // ddd는 number 타입만이 가능한데 string 타입의 값을 대입하려해서 오류가 난다.

  // 불린타입 (참, 불)
  let eee: boolean = true;
  eee = false;
  eee = "false"; // 얘는 true로 작동 그래서 오류가 나온다.

  //  배열타입
  let fff: number[] = [10, 20, 30, 40, 50];
  let ggg: String[] = ["철수", "영이", "미애", 10]; // 10은 number타입이나 나머지는 string 타입이기에 오류가 난다.
  let hhh: (string | number)[] = ["철수", "훈이", 10]; // 타입을 추론해서 어떤 타입 사용하는지 알아보기

  // 타입명에 I를 붙이는 것은 통상적인 관례이다. 회사마다 네이밍을 하는 것엔 차이가 있으니 컨벤션 확인을 해야한다.
  interface IProfile {
    name: string;
    age: number | string;
    school: string;
    hobby?: string;
  }
  // 객체 타입
  //
  const profile: IProfile = {
    name: "철수",
    age: 8,
    school: "다람쥐",
  };

  profile.name = "훈이";
  profile.age = "8살";
  profile.hobby = "수영"; // 애는 처음 선언때 타입이 없기에 사용하지 못함

  // 함수타입
  function add(x: number, y: number, unit: string): string {
    return x + y + unit;
  }

  const result = add(100, 200, "원"); // 결과의 return 타입도 예측가능

  // 화살표 함수
  const add2 = (x: number, y: number, unit: string): string => {
    return x + y + unit;
  };

  const result2 = add2(100, 200, "원"); // 결과의 return 타입도 예측가능

  return <></>;
}
