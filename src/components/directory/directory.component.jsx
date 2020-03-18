import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
//import DIRECTORY_DATA from './directory.data';

import {connect} from 'react-redux';
import {selectDirectorySections} from '../../redux/directory/directory.selector';
import {createStructuredSelector} from 'reselect';
const Directory = ({sections}) =>(
    
    <div className='directory-menu'>
        {
            this.state.sections.map(
                ({id,...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps}/>
                )
            )
        }
    </div>
)

const mapStateToProps = createStructuredSelector(
    {
        sections:selectDirectorySections
    }
);
    

export default connect(mapStateToProps)(Directory);