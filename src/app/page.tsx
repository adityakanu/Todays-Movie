import Head from 'next/head'
import MovieSearch from './components/movieSearch'

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Head>
        <title>Todays Movie</title>
        <meta name="description" content="Find the movie you want to watch today" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex flex-col items-center'>
        <h1 className="flex flex-col py-10 text-3xl font-bold text-white items-center">What are you going to watch today?!</h1>
        <MovieSearch />
      </main>
    </div>
  )
}
