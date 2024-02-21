import styled from "styled-components";

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 1px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: #3D3B40;
  color: #EFECEC;
  text-transform: uppercase;
  font-family: 'adelle-condensed', serif;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #EFECEC;
    color: #3D3B40;
    border: 1px solid #3D3B40;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #525CEB;
  color: #EFECEC;

  &:hover {
    background-color: #4149af;
    border: none;
`;

export const InvertedButton = styled(BaseButton)`
  background-color: #EFECEC;
  color: #3D3B40;
  border: 1px solid #3D3B40;

  &:hover {
    background-color: #3D3B40;
    color: #EFECEC;
    border: none;
  }
`;
