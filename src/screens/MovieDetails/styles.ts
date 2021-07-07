import styled from "styled-components";

export const Container = styled.div`
  padding: 12px 14px;

  ${({theme}) => `
    @media screen and (min-width: ${theme.widths['4xl']}) {
      display: flex;
    } 
  `}
`;

export const MovieImage = styled.img`
  width: 100%;
  ${({theme}) => `
    @media screen and (min-width: ${theme.widths['4xl']}) {
      width: calc(100%/4);
      margin-right: 16px;
    } 
  `}
`;

export const MovieContents = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: column;

  ${({theme}) => `
    @media screen and (min-width: ${theme.widths['4xl']}) {
      width: 50%;
    } 
  `}
`;

export const MovieDetail = styled.div`
  margin-bottom: 16px;
`;

interface MovieDetailTitleProps {
  hasUnderline?: boolean;
}

export const MovieDetailTitle = styled.div<MovieDetailTitleProps>`
  margin-bottom: 8px;;
  h2, h3 {
    display: inline;
  }

  h2 {
    text-decoration: ${({hasUnderline}) => hasUnderline ? 'underline' : ''};
    padding-right: 8px;
  }

  h3 {
    color: gray;
  }
`;

export const MovieDetailContent = styled.span``;