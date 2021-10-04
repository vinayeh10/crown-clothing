import React, { Component } from 'react';
import './shop.styles.scss';
import CollectionOverView from '../../components/collection-overview/collection-overview.component';
import { withRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Collection from '../collection/collection.component';

class SHOP extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {match} = this.props;
        return (
            <div>
                <Route exact path={`${match.path}`} component={CollectionOverView}></Route>
                <Route path={`${match.path}/:collectionId`} component={Collection} />
            </div>
        );
    }
}

export default withRouter(SHOP);