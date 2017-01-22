import React from 'react';
import Artist from '../components/Artist';
import Album from '../components/Album';
import Player from '../components/Player';
import Search from './search';
import {Grid, Row, Col} from 'react-bootstrap';
require('../../scss/style.scss');

const App = () => (
    <div>
        <Grid>
            <h2>Spotify app searcher</h2>
            <Row className="show-grid">
                <Col xs={12} sm={6} md={8} lg={8}><Search /></Col>
                <Col xs={12} sm={6} md={4} lg={4}><Player /></Col>
            </Row>
            <hr />
            <Row className="show-grid">
                <Col xs={12} sm={12} md={12} lg={12}><Artist /></Col>
                <Col xs={12} sm={12} md={12} lg={12}><Album /></Col>
            </Row>
        </Grid>
    </div>
);
export default App;
