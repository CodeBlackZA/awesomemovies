import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 45px;
`;

export const Title = styled.div`
  margin-bottom: 45px;
  font-size: 24px;
`;

export const Button = styled.a`
  display: flex;
  padding: 8px;
  background-color: ${({theme}) => theme.palette.green};
  text-decoration: none;
  font-size: 24px;
  color: black;
  border-radius: 5px;

  ${({theme}) => `
    @media screen and (max-width: ${theme.widths['4xl']}) {
      width: 80%;
      align-items: center;
      justify-content: center;
    }
  `}
`;