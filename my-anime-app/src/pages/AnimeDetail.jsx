import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './AnimeDetail.module.css';

const AnimeDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate(); 
    const [anime, setAnime] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchAnimeDetail = async () => {
            const apiUrl = `https://api.jikan.moe/v4/anime/${id}`;
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
                const data = await response.json();
                setAnime(data.data);
            } catch (error) {
                setError('Failed to fetch anime details.');
            } finally {
                setLoading(false);
            }
        };

        fetchAnimeDetail();
    }, [id]);

    const handleClose = () => {
        navigate(-1);
    };

    if (loading) return <div>Loading anime details...</div>;
    if (error) return <div>{error}</div>;
    if (!anime) return null;

    return (
        <div className={styles.animeDetail}>
            <button className={styles.closeButton} onClick={handleClose}>Close</button>
            <h1>{anime.title}</h1>
            <img src={anime.images.jpg.image_url} alt={anime.title} />
            <p>{anime.synopsis}</p>
            <p><strong>Score:</strong> {anime.score}</p>
            <p><strong>Genres:</strong> {anime.genres.map(genre => genre.name).join(', ')}</p>
            <a href={anime.url} target="_blank" rel="noopener noreferrer">More Info</a>
        </div>
    );
};

export default AnimeDetail;
