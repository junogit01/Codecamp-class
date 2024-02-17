import axios from 'axios';

export default function RestGetPage() {
  const onClickAsync = () => {
    const data = axios.get('https://koreanjson.com/posts/1');
    console.log(data);
  };
  const onClicksync = async () => {
    const data = await axios.get('https://koreanjson.com/posts/1');
    console.log(data);
    console.log(data.data.title);
  };
  return (
    <div>
      <button onClick={onClickAsync}>RESTAPI 비동기</button>
      <button onClick={onClicksync}>RESTAPI 동기</button>
    </div>
  );
}
