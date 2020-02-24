import React, { Component } from 'react'
import { SavedGifCard } from './Styles'
import { connect } from 'react-redux'
import { getSavedGifs } from '../actions/gifs'

class SavedGifs extends Component {

    render() {
        const savedGifAndCaptionList = this.props.savedGifs.map(savedGif => {
            return savedGif.captions.map(caption => {
                return (
                    <SavedGifCard className="saved-zoom" key={savedGif.id}>
                        <img src={savedGif.url} alt={savedGif.id} />
                        <h2>{caption.text}</h2>
                    </SavedGifCard>
                )
            })
        })

        if (this.props.loading) {
            return (
                <>
                    <h3>Loading gifs...</h3>
                    <img src={"https://i.giphy.com/media/j37uIbtLm9atRzOtpR/giphy.webp"} alt={"Loading gifs..."} />
                </>
            )
        } else {
            return (
                <div>
                    <h1 className="header">Everyone's favorite gifs</h1>
                    {savedGifAndCaptionList}
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return ({
        savedGifs: state.gifs.savedGifs,
        loading: state.gifs.loading
    })
}

export default connect(mapStateToProps, { getSavedGifs })(SavedGifs)