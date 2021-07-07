import React from 'react'
import * as S from './styles';

const Home = () => {
  return (
    <S.Container>
      <S.Title>
        Welcome to Awesome Movies
      </S.Title>
      <S.Button href="/movies">
        Browse Movies
      </S.Button>
    </S.Container>
  )
}

export default Home
