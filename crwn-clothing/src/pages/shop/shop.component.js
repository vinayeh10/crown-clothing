import React, { Component } from 'react';
import SHOP_DATA from './shop.data';
import './shop.styles.scss'
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class SHOP extends Component {

    constructor() {
        super();

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
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

export default SHOP;