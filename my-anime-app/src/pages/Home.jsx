import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
    const [animeList, setAnimeList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    
    useEffect(() => {
        const fetchDefaultAnimeList = async () => {
            const apiUrl = 'https://api.jikan.moe/v4/anime';
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
                const data = await response.json();
                setAnimeList(data.data);
            } catch (error) {
                setError('Failed to fetch anime list.');
            } finally {
                setLoading(false);
            }
        };

        fetchDefaultAnimeList();
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery) return;

        setLoading(true);
        setError('');

        const apiUrl = `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(searchQuery)}`;
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            const data = await response.json();
            setAnimeList(data.data);
        } catch (error) {
            setError('Failed to fetch anime list.');
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div>Loading anime list...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Welcome to Anime List</h1>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search for anime..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            <div className="anime-grid">
                {animeList.length > 0 ? (
                    animeList.map(anime => (
                        <div key={anime.id} className="anime-card">
                            <Link to={`/anime/${anime.id}`}>
                                <img src={anime.images.jpg.image_url} alt={anime.title} />
                                <h2>{anime.title}</h2>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p>No anime found.</p>
                )}
            </div>
        </div>
    );
};

export default Home;
