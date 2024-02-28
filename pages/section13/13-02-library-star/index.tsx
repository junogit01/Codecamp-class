import React, { useState } from 'react';
import { Rate } from 'antd';


export default function App():JSX.Element {
  const [value, setValue] = useState(3);

  // 1단계 방식
//   const onChangeStar = (value:number):void => {
//     setValue(value);
//   }

// 2단계 방식
// const onChangeStar = (value:number):any => setValue(value);

// 3단계


  return (
      // <Rate onChange={onChangeStar} value={value} /> // 1단계
      // <Rate onChange={onChangeStar} value={value} /> // 2단계
      // <Rate onChange={(value:number):any => setValue(value)} value={value} /> // 3단계
      <Rate onChange={setValue} value={value} /> // 4단계
  );
};
