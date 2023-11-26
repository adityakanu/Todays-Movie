
interface MovieCardProps {
    title: string;
    overview: string;
    poster_path: string;
}

const MovieCard = ({title, overview, poster_path}: MovieCardProps) => {
    if (!poster_path) {
        return null; // Skip rendering the component
    }
    const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

    return (
        <div className="bg-white rounded shadow p-4">
            <img className="w-full h-120 rounded mb-4" src={imageUrl} alt="Movie Poster"/>
            <h2 className="text-2xl font-bold mb-2 truncate">{title}</h2>
            <p className="text-sm text-gray-500 line-clamp-3 ">{overview}</p>
        </div>
    )
}

export default MovieCard;