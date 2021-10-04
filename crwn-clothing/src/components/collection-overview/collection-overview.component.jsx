import React from 'react';
import './collection-overview.styles.scss';
import { connect } from 'react-redux';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { createStructuredSelector } from 'reselect';
import { selectShopCollections } from '../../redux/shop/shop.selector';

const CollectionOverView = ({collections}) => {
    return (
        <div className='collection-overview'>
        {
            collections.map(({id, ...otherCollectionData}) => (
                <CollectionPreview key={id} {...otherCollectionData} />
            ))
        }            
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
})

export default connect(mapStateToProps)(CollectionOverView);