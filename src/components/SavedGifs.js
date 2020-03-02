import React, { Component } from 'react'
import { SavedGifCard } from './Styles'
import { connect } from 'react-redux'
import { getSavedGifs } from '../actions/gifs'

class SavedGifs extends Component {

    render() {
        const savedGifAndCaptionList = this.props.savedGifs.map(savedGif => {
            return savedGif.captions.map(caption => {
                return (
                    <SavedGifCard className="saved-zoom" key={savedGif.id + caption.id}>
                        <img style={{ width: "150px" }} src={savedGif.gif_url} alt={savedGif.gif_id + caption.id} />
                        <h2 style={{ fontSize: "15px" }}>{caption.text}</h2>
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
        } else if (this.props.savedGifs.length === 0) {
            return (
                <>
                    <h3>No saved gifs yet</h3>
                    <img src={"https://media.giphy.com/media/Az1CJ2MEjmsp2/giphy.gif"} alt={"Tumbleweed gif"} />
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