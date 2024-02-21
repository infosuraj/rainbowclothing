import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`;

export const ImageContainer = styled.img`
  width: 40%;
`;

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
  color: red;
`;

export const ItemName = styled.span`
  font-size: 12px;
`;
