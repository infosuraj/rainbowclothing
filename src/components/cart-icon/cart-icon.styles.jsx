import styled from "styled-components";

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIconContainer = styled.svg`
  width: 40px;
  height: 40px;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 20px;
  font-weight: bold;
  bottom: 6px;
`;
