import {useState, useEffect, useCallback} from 'react'
import { useParams } from 'react-router-dom';
import { Movie } from '../../utils/types';
import * as S from './styles';
import { movieDetailsURL, imageUrl } from '../../utils/constants';
import { getColor } from '../../utils/helpers';

const MovieDetails = () => {
  const {id} = useParams() as {id: string};
  const [movie, setMovie] = useState<Movie>();
  const [loading, setLoading] = useState(true);
  
  const getData = useCallback(async () => {
    const req = await fetch(movieDetailsURL(id));
    const res = await req.json();
    setMovie(res);
    setLoading(false);
  }, [id])
  
  useEffect(() => {
    getData()
  }, [id, getData])
  const date = !movie ? new Date() : new Date(movie.release_date);
  return (
    <S.Container>
      {movie && !loading && (
        <>
          <S.MovieImage src={imageUrl(movie.poster_path)}/>
          <S.MovieContents>
            <MovieDetail title={movie.title} year={date.getFullYear()} content="Ahh!! its got that new movie smell" />
            <Rating rating={movie.vote_average / 10 * 100}/>
            <MovieDetail title="Overview" content={movie.overview} />
            <MovieDetail title="Genres" content={movie.genres.map((genre) => genre.name).join(", ")} />
          </S.MovieContents>
        </>
      )}
      {loading && (
        <div style={{
          padding: 64,
          textAlign: 'center',
        }}>Loading data...</div>
      )}
    </S.Container>
  )
}

const Rating = ({rating}:{rating: number}) => {
  return (
    <div style={{
      background: getColor(rating),
      padding: '4px 8px',
      marginBottom: 16,
    }}>Rating {Math.round(rating)}</div>
  )
}

interface MovieDetailProps {
  title: string;
  year?: number; 
  content?: string;
}

const MovieDetail = ({
  content,
  title,
  year
}: MovieDetailProps) => {
  return (
    <S.MovieDetail>
      <S.MovieDetailTitle hasUnderline={!!year}>
        <h2>{title}</h2>
        {year && <h3>({year})</h3>}
      </S.MovieDetailTitle>
      {content && <S.MovieDetailContent>{content}</S.MovieDetailContent>}
    </S.MovieDetail>
  )
}

export default MovieDetails;
