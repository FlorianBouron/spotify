import React, {Component}  from "react";
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';

class Album extends Component {


    renderAlbums() {

        const heightImg = 200,
              widthImg = 200;

        if(this.props.search.albums.items.length==0) {
            return (
                <h4>
                    No albums found.
                </h4>
            );
        } else {
            return this.props.search.albums.items.map((album) => {
                const arrayImageLength = album.images.length;
                let url = "./img/no_cover.png",
                    arrayArtist = [];
                if(arrayImageLength!=0) {
                    url = album.images[1].url;
                }
                album.artists.forEach(function(artist) {
                    arrayArtist.push(artist.name);
                });

                return (
                    <Col key={album.id} xs={12} sm={6} md={3} lg={3}>
                        <h2>
                            {album.name}
                        </h2>
                        <img height={heightImg} width={widthImg} src={url}/>
                        <div>
                            Artist: {arrayArtist.join(', ')}
                        </div>
                        <div>
                            Type: {album.album_type}
                        </div>
                        <h5><a href={album.uri}>Open on Spotify</a> | <a href={album.external_urls.spotify}>External
                            Link</a></h5>
                    </Col>
                );

            });
        }
    }


    render() {
        if (!this.props.search) {

            return (<div id="album-list"></div>);

        } else {

            return (
                <Row id="album-list" className="show-grid">
                    <h2>Albums: </h2>
                    {this.renderAlbums()}
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


export default connect(mapStateToProps)(Album);