import React, {Component}  from "react";
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';

class Artist extends Component {

    renderArtists() {

        const heightImg = 200,
              widthImg = 200;

        if(this.props.search.artists.items.length==0) {
            return (
                <h4>
                    No artists found.
                </h4>
            );
        } else {
            return this.props.search.artists.items.map((artist) => {
                const arrayImageLength = artist.images.length;
                let url = "./img/no_cover.png";
                if(arrayImageLength!=0) {
                    url = artist.images[0].url;
                }
                if(artist.genres.length==0) {
                    return (
                        <Col key={artist.id} xs={12} sm={6} md={3} lg={3}>
                            <h2>
                                {artist.name}
                            </h2>
                            <img height={heightImg} width={widthImg} src={url} />
                            <div>
                                Followers on Spotify: {artist.followers.total}
                            </div>
                            <h5><a href={artist.uri}>Open on Spotify</a> | <a href={artist.external_urls.spotify}>External Link</a></h5>
                        </Col>
                    );
                } else {
                    return (
                        <Col key={artist.id} xs={12} sm={6} md={3} lg={3}>
                            <h2>
                                {artist.name}
                            </h2>
                            <img height={heightImg} width={widthImg} src={url} />
                            <div>
                                Genres: {artist.genres.join(', ')}
                            </div>
                            <div>
                                Followers on Spotify: {artist.followers.total}
                            </div>
                            <h5><a href={artist.uri}>Open on Spotify</a> | <a href={artist.external_urls.spotify}>External Link</a></h5>
                        </Col>
                    );
                }

            });
        }
    }

    render() {
        if (!this.props.search) {

            return (<div id="artist-list"></div>);

        } else {

            return (
                <Row id="artist-list" className="show-grid">
                    <h2>Artists: </h2>
                    {this.renderArtists()}
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


export default connect(mapStateToProps)(Artist);