import styled from "@emotion/styled";

export const RedInput = styled.input`
  border-color: red;
`;

export const BlueBtn = styled.button`
  background-color: ${(props) => (props.mycolor === true ? "yellow" : "red")};
`;
