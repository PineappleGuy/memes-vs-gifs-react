import React from 'react';
import {
    BrowserRouter as Router,
    useHistory
} from 'react-router-dom';
import GifGameCard from './components/GifGameCard'
import MemeGameCard from './components/MemeGameCard'

export default function Home(props) {

    let history = useHistory()

    const redirectToMemeGame = () => {
        history.push('/meme-game')
    }

    const redirectToGifGame = () => {
        history.push('/gif-game')
    }

    return (
        <Router>
            <div>
                <h1 className="header">Memes Vs. Gifs</h1>
                <MemeGameCard handleNav={redirectToMemeGame} />
                <GifGameCard handleNav={redirectToGifGame} />
            </div>
        </Router>
    );
}