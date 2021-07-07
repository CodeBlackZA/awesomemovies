import { useState } from 'react';
import * as S from './styles';

const NavBar = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  return (
    <S.Container>
      <S.Title href="/">
        Awesome<br/>Movies
      </S.Title>
      <S.Navigation>
        <S.NavigationItems isMenuShown={isMenuShown} className="menu-list">
          <a href="/">Home</a>
          <a href="/movies">Popular Movies</a>
          <a href="/about">About the developer</a>
        </S.NavigationItems>
        <div role="button" onClick={() => {
          setIsMenuShown(!isMenuShown);
        }} className="menu-button">
          <span />
          <span />
          <span />
        </div>
      </S.Navigation>
    </S.Container>
  )
}

export default NavBar;