import Head from 'next/head'
import Header from '../components/Header'
import MovieResults from '../components/MovieResults'
import Nav from '../components/Nav'
import requests from '../utils/requests'

export default function Home( props ) {
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    {/* Header */}
    <Header />

    {/* Nav*/}
    <Nav />

    {/* Thumbnails */}
    <MovieResults movies={props.movies} />
    </div>
  )
}

// Doing Server Side Rendering with fetching data from server before serving the page to client 
export async function getServerSideProps(context) {
  const genre = await context.query.genre

  // Calling the API with BASE_URL + query genre value
  const moviesData = await fetch(
    `https://api.themoviedb.org/3${requests[genre]?.url || 
    requests.fetchTrending?.url}`).then((res) => res.json())
  
  return {
    props: {
      movies: moviesData.results,
    }
  }

}