const apiKey = 'd4f7b87d7cedfdfbbb297f46aa3e8779';

export const allMoviesURL = (page = 1) => `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`;

export const movieDetailsURL = (movieId: string) => `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`;

export const imageUrl = (path: string) => `https://www.themoviedb.org/t/p/w220_and_h330_face/${path}`