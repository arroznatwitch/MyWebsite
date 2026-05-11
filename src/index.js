import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles.css';

import TwitchPreview from './TwitchPreview';
import MenuHome from './MenuHome';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TwitchPreview />); 

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <>
//         <MenuHome />
//         <Footer />
//     </>
// );