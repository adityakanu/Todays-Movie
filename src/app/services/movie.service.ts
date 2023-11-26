import axios from 'axios';


const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const baseUrl = 'https://api.themoviedb.org/3';


const client = axios.create({
    baseURL: baseUrl,
    params: {
        api_key: apiKey
    }
});

export const searchMovies = async(query: string) => {
    try{
        const response = await client.get('/search/movie', {
        params: {
            query,
        }});
        if(response.data && response.data.results) {
            return response.data.results;
        }
        else {
            console.error("Could not fetch movies");
        }
    } catch(error) {
        console.error("server error ig");
        console.log(error);
        return [];
    }
}