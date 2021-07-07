import styled from "styled-components";

export const Container = styled.div`
  padding: 12px 14px;
  ${({theme}) => `
    @media screen and (min-width: ${theme.widths['4xl']}) {
      display: flex;
      flex-wrap: wrap;
      padding-right: 0px;
    }
  `}
`;

export const MovieItems = styled.div`
  ${({theme}) => `
    @media screen and (min-width: ${theme.widths['4xl']}) {
      display: flex;
      flex-wrap: wrap;
    }
  `}
`;

export const MovieItem = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: black;
  ${({theme}) => `
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid black;
    
    img {
      width: 100%;
      height: 60vh;
    }

    span {
      display: block;
      padding: 8px 16px;
    }

    @media screen and (min-width: ${theme.widths['4xl']}) {
      width: calc(100%/4 - 12px);
      margin-right: 12px;
    }
  `}
`;

export const Rating = styled.div`
  width: 50%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  transform: rotate(45deg);
  right: 0;
  margin-top: 25px;
  margin-right: -50px;
`;