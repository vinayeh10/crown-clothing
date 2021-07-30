import React, { Component } from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selector';

class Directory extends Component {

    constructor(props) {
        super(props);
          
    }

    render() {
      const {sections} = this.props; 
        return (
            <div className="directory-menu"> 
                {
                  sections.map(({title, id, imageUrl, linkUrl, size}) => <MenuItem title={title} key={id} imageUrl={imageUrl} linkUrl={linkUrl} size={size} /> )
                }
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);