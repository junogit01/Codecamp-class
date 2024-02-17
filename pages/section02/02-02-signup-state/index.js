import {useState} from 'react';

export default function SignupStatePage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('에러가 없습니다.');

  function onChangeEmail(event) {
    setEmail(event.target.value);
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  function onClickSignup(event) {
    // 1. 검증하기
    if (email.includes('@') === false) {
      setEmailError('이메일 형식이 아닙니다. 다시 입력해주세요');
    } else {
      // 2. 백엔드 통신

      // 3. 알람
      alert('회원가입을 축하합니다.');
    }
  }
  return (
    <div>
      이메일:
      <input type="text" onChange={onChangeEmail} />
      <div>{emailError}</div>
      비밀번호:
      <input type="password" onChange={onChangePassword} />
      <button onClick={onClickSignup}>회원가입</button>
    </div>
  );
}
