import {useMutation, gql} from '@apollo/client';
import {useState} from 'react';

const CREATE_PRODUCTR = gql`
  mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {
    # 변수의 타입 적는 곳
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      # 실제 전달할 변수 적는 곳
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [createProduct] = useMutation(CREATE_PRODUCTR);

  const onClickSubmit = async () => {
    const data = await createProduct({
      variables: {
        seller: '벤 화이트',
        createProductInput: {
          name: '지슈라',
          detail: '정말 좋아요',
          price: 190000,
        },
      },
    });
    console.log(data);
  };
  return (
    <div>
      <button onClick={onClickSubmit}>GraphQl-API 요청하기</button>
    </div>
  );
}
