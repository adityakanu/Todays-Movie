import { ChangeEvent, FormEvent, useState } from "react";

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
    const [query, setQuery] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        onSearch(query);
    };

    return (
        <form className="flex items-center w-screen max-w-3xl" onSubmit={handleSubmit}>
            <label htmlFor="search-input">Search:</label>
            <input
                type="text"
                id="search-input"
                className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500" 
                value={query}
                onChange={handleChange}
            />
            <button type="submit" className="ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Search</button>
        </form>
    );
};

export default SearchBar;