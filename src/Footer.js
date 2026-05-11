import React from 'react';
import ReactDOM from 'react-dom/client';
import { FaInstagram, FaYoutube, FaTiktok, FaTwitch } from "react-icons/fa";

import './Footer.css'




function Footer() {
    return (
        <footer className="backgroundFooter">
            <p className="textFooter"></p>
            <div className="iconContainers">
                <a href="https://www.instagram.com/arroznatwitch/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="iconInstagram" size={30} />
                </a>
                <a href="https://www.youtube.com/@arroznatwitch" target="_blank" rel="noopener noreferrer">
                    <FaYoutube className="iconYouTube" size={30} />
                </a>
                <a href="https://www.tiktok.com/@arroznatwitch" target="_blank" rel="noopener noreferrer">
                    <FaTiktok className="iconTikTok" size={30} />
                </a>
                <a href="https://www.twitch.tv/arroznatwitch" target="_blank" rel="noopener noreferrer">
                    <FaTwitch className="iconTwitch" size={30} />
                </a>
            </div>
        </footer>
    );
}

export default Footer;