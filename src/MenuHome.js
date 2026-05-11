import React from 'react';
import ReactDOM from 'react-dom/client';


import './styles.css';
import './MenuHome.css';

function MenuHome() {
    return (
        <div className="classButtons">
            <button className='individualButtons'> Sobre mim </button>
            <button className='individualButtons'> Projetos </button>
            <button className='individualButtons'> Contactos </button>
        </div>
    );
}

export default MenuHome;
