import styled from "styled-components";

export const Container = styled.div`
  ${({theme}) => `
    width: 100%;
    background-color: ${theme.palette.yellow};
    display: flex;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 42px;
    z-index: 1;

    @media screen and (min-width: ${theme.widths['4xl']}) {
      height: 75px;
    }
  `}
`;

export const Title = styled.a`
  display: block;
  text-decoration: none;
  ${({theme}) => `
    background: ${theme.palette.grey};
    color: whitesmoke;
    height: 100%;
    display: flex;
    padding: 8px;
    font-size: 12px;
  
    @media screen and (min-width: ${theme.widths['4xl']}) {
      font-size: 24px;
    }
  `}
`;

export const Navigation = styled.div`
  ${({theme}) => `
    flex: 1;
    display: flex;
    position: relative;

    .menu-button {
      position: absolute;
      right: 0;
      margin-right: 8px;
      height: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      span {
        display: block;
        height: 2px;
        width: 22px;
        background: #555;
        margin-bottom: 3px;
      }
    }

    @media screen and (min-width: ${theme.widths['4xl']}) {
      .menu-button {
        display: none;
      }
    }
  `}
`;

interface NavigationItemsProps {
  isMenuShown: boolean;
}
export const NavigationItems = styled.div<NavigationItemsProps>`
  ${({theme, isMenuShown}) => `
    a {
      text-decoration: none;
    }

    display: ${isMenuShown ? 'flex' : 'none' };

    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    margin-top: 42px;
    background: ${theme.palette.yellow};
    align-items: center;
    padding-top: 24px;
    flex-direction: column;

    a {
      display: flex;
      padding: 12px;
      color: ${theme.palette.grey};
    }

    @media screen and (min-width: ${theme.widths['4xl']}) {
      display: flex;
      align-items: baseline;
      justify-content: center;
      flex-direction: row;
      width: 100%;
      padding-top: 12px;
      margin-top: 0px;
      position: relative;
      a {
        display: flex;
        padding: 0px;
        width: 100px;
        color: ${theme.palette.grey};
        font-size: 20px;
      }
    }
  `}
`;