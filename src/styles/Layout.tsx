import styled from 'styled-components';

export const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  ${({theme}) => `
    padding-top: 42px;

    @media screen and (min-width: ${theme.widths['4xl']}) {
      padding-top: 75px;
    }
  `}
`;