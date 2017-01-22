import React, {Component}  from "react";
import {connect} from 'react-redux';
import ReactAudioPlayer from 'react-audio-player';
import {Row, Col} from 'react-bootstrap';

class AudioPlayer extends Component {

    renderTracks() {

        const heightImg = 100,
              widthImg = 100;

        if(this.props.search.tracks.items.length==0) {
            return (
                <h4>
                    No tracks found.
                </h4>
            );
        } else {

            const track = this.props.search.tracks.items[0],
                arrayImageLength = track.album.images.length;

            let arrayArtist = [];
            track.album.artists.forEach(function(artist) {
                arrayArtist.push(artist.name);
            });

            if(arrayImageLength==0) {
                return (
                        <ReactAudioPlayer
                            src={track.preview_url}
                        />
                );
            } else {
                return (
                    <Row className="show-grid">
                        <Col xs={3} sm={3} md={3} lg={3}>
                            <img height={heightImg} width={widthImg} src={track.album.images[0].url}/>
                        </Col>
                        <Col xs={9} sm={9} md={9} lg={9}>
                            <h5>
                                {track.name}
                            </h5>
                            <h6>
                                By {arrayArtist.join(', ')}
                            </h6>
                            <ReactAudioPlayer
                                src={track.preview_url}
                            />
                        </Col>
                    </Row>
                );
            }

        }
    }

    render() {

        if (!this.props.search) {

            return (<div id="player"></div>);

        } else {

            return (
                <Row id="player" className="show-grid">
                    <h4>The most popular song from your search</h4>
                    {this.renderTracks()}
                </Row>
            );

        }
    }
}


function mapStateToProps(state) {
    return {
        search: state.search
    };
}


export default connect(mapStateToProps)(AudioPlayer);
