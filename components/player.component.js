import React from 'react';

import ClassNames from 'classnames';

class Player extends React.Component {
    render() {
        const playPauseClass = ClassNames({
            'icon icon-play': this.props.playStatus == 'PLAYING' ? false : true,
            'icon icon-pause': this.props.playStatus == 'PLAYING' ? true : false
        });

        return(
            <div className="player">

                <div className="player__backward">
                    <button onClick={this.props.backward}><span className="icon icon-fast-backward"></span></button>
                </div>
                <div className="player__main">
                    <button onClick={this.props.togglePlay}><span className={playPauseClass}></span></button>
                    <button class="btn btn-default" onClick={this.props.stop}><span className="icon icon-stop"></span></button>
                    <button onClick={this.props.random}><span className="icon icon-shuffle"></span></button>
                </div>
                <div className="player__forward">
                    <button onClick={this.props.forward}><span className="icon icon-fast-forward"></span></button>
                </div>
            </div>
        )
    }
}

export default Player
