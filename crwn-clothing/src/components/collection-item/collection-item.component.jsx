import React from 'react';
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { addCartItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({item, addCartItem}) => {
    const {id, price, name, imageUrl} = item;
    return (
        <div className='collection-item'>
            <div className='image' 
                style={{backgroundImage: `url(${imageUrl})`}}
            />
            <div className='collection-footer'>
                <div className="name">
                    {name}
                </div>
                <div className="price">
                    {price}
                </div>
            </div>
            <CustomButton inverted onClick={() => addCartItem(item)}>Add To Cart</CustomButton>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addCartItem: item => dispatch(addCartItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);