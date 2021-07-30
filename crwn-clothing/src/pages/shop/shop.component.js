import React, { Component } from 'react';
import SHOP_DATA from './shop.data';
import './shop.styles.scss'
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollections } from '../../redux/shop/shop.selector';

class SHOP extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {collections} = this.props;
        return (
            <div>
                {
                    collections.map(({id, ...otherCollectionData}) => (
                        <CollectionPreview key={id} {...otherCollectionData} />
                    ))
                }
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
})

export default connect(mapStateToProps)(SHOP);