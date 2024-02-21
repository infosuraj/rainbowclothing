import styled from "styled-components";

import {BaseButton, InvertedButton, GoogleSignInButton} from '../button/button.styles'

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 550px;
  align-items: center;
  position: relative;

    ${BaseButton},
    ${InvertedButton},
    ${GoogleSignInButton} {
      width: 80%;
      opacity: 0.7;
      position: absolute;
      top: 420px;
      margin-left: 10%;
      left: 0;
      &:hover {
          opacity: 0.85;
          display: flex;
        }
      }
`;

export const ImageContainer = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;
  &:hover {
      opacity: 0.8;
    }
`;

export const FooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
  width: 10%;
`;
