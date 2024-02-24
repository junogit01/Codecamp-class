export interface IProfile {
  name: string;
  age: number;
  school: string;
  hobby?: string;
}

// 1. Partial 타입
type aaa = Partial<IProfile>;
// 얘는 모든 타입에 ?을 붙여줌

// 2. Required 타입
type bbb = Required<IProfile>;
// 얘는 모든 타입에 ?을 떼어줌

// 3. Pick 타입
type ccc = Pick<IProfile, "name" | "age">;
// 얘는 뒤에 적힌 것들만 타입으로 가져온다.

// 4.Omit 타입
type ddd = Omit<IProfile, "school">;
// 얘는 특정 속성을 빼준다.

// 5. Record 타입
type eee = "철수" | "영희" | "훈이"; // Union타입
let child: eee = "맹구"; // eee 타입안에 있는 값만 대입할 수 있음
let child2: string = "철구";

type fff = Record<eee, IProfile>;

// 6. 객체의 key들로 Union타입 만들기
type ggg = keyof IProfile; // "name" | "age" | "school" | "hobby"
let myprofile: ggg = "hobby";

// 7. type과 interface의 차이  =>  interface는 선언병합 가능, type은 선언 이후 변경 안됨
export interface = IProfile {
    candy: number // 선언병합으로 추가 됨
}

let profile: IProfile = {
    candy: 10
}

let profile2: aaa = {
    
}