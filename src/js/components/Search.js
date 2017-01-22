import React, {Component}  from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { fetchSearch } from '../actions/search';
import {FormGroup, FormControl} from 'react-bootstrap';

class Search extends Component {

    handleChange(e) {
        const search = e.target.value;
        this.props.fetchSearch(search);
    }

    render() {
        return (
            <FormGroup className="Search" id="custom-search-input">
                <FormControl type="text" onChange={this.handleChange.bind(this)} placeholder="Search" />
            </FormGroup>
        );
    }
}


function mapStateToProps(state) {
    return {
        search: state.search
    };
}


function matchDispatchToProps(dispatch){
    return bindActionCreators({fetchSearch: fetchSearch}, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(Search);