import React, { Component } from 'react'
import { GiphyCard, SaveButton } from '../GiphyStyles'
import { connect } from 'react-redux'
import { SAVE_GIF_WITH_CAPTION } from '../../actionTypes'

class Giphy extends Component {

    renderSaveButton = () => {
        if (this.props.chosenCaption.text) {
            return (
                <SaveButton className="popup" onClick={this.handleClick}>
                    Save
                    <span className="popuptext" id="myPopup">Gif saved!</span>
                </SaveButton>
            )
        }
    }

    handleClick = () => {
        let popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
        this.props.saveGifWithCaption(this.props.giphyURL, this.props.chosenCaption)
    }

    render() {
        // console.log(this.props)
        return (
            <>
                <div className="zoom">
                    <GiphyCard>
                        <img src={this.props.giphyURL} alt={this.props.name} />
                        <h2>{this.props.chosenCaption.text}</h2>
                        {this.renderSaveButton()}
                    </GiphyCard>
                </div>
            </>
        )
    }
}
const mapStateToProps = state => ({
    chosenCaption: state.captions.chosenCaption
})

const mapDispatchToProps = dispatch => ({
    saveGifWithCaption: (gifObj, captionObj) => dispatch({ type: SAVE_GIF_WITH_CAPTION, payload: (gifObj, captionObj) })
})

export default connect(mapStateToProps, mapDispatchToProps)(Giphy)