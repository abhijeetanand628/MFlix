export const TMDB_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    } 
}

export cosnt fetchMovies = async({query} : {query: string}) => {

    // ENDPT CHANGE KRO SO YA TO SEARCHED MOVIE AAYE AGAR HO TO YA TO LATEST POPULAR ONES
    const endpoint = query
    ? `${TMDB_CONFIG.BASE_URL}/serach/movie?query=${encodeURIComponent(query)}`
    : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

    const response = await fetch(endpoint, {
        method: 'GET',
        headers: TMDB_CONFIG.headers,
    });

    if(!response.ok) {
        throw new Error('Failed to fetch movies', response.statusText);
    }

    const data = await response.json();

    return data.results;
}

// /discover/movie
