
import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <h1>About This Application</h1>
            <p>
                Welcome to the Anime Finder! This application allows users to search for their favorite anime titles, explore detailed information about each anime, and discover new series.
            </p>
            <h2>Features</h2>
            <ul>
                <li>Search for anime by title</li>
                <li>View detailed information about each anime, including synopsis, genres, and ratings</li>
                <li>Responsive design for a seamless experience on any device</li>
                <li>Regular updates with the latest anime releases</li>
            </ul>
            <h2>How It Works</h2>
            <p>
                This application fetches data from the Jikan API, which provides access to a wealth of information about anime and manga. Users can search for titles, view details, and explore a variety of genres.
            </p>
            <h2>Contact Us</h2>
            <p>
                If you have any questions, feedback, or suggestions, feel free to reach out at <a href="mailto:support@animefinder.com">support@animefinder.com</a>.
            </p>
        </div>
    );
};

export default About;

