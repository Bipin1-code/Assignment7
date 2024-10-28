import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AnimeList.css'

const AnimeList = () => {
    const [animeList, setAnimeList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAnimeList = async () => {
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

        fetchAnimeList();
    }, []);

    const handleViewDetails = (id) => {
        navigate(`/anime/${id}`);
    };

    if (loading) return <div>Loading anime list...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Anime List</h1>
            <div className="anime-list">
                {animeList.map(anime => (
                    <div key={anime.mal_id} className="anime-card">
                        <h2>{anime.title}</h2>
                        <img src={anime.images.jpg.image_url} alt={anime.title} />
                        <button onClick={() => handleViewDetails(anime.mal_id)} className="view-details-button">
                            View Details
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AnimeList;

