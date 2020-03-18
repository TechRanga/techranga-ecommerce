import React from 'react';
import {withRouter} from 'react-router-dom';
import './menu-item.styles.scss';


//style={{backgroundImage: "url(" + Background + ")"}}
const MenuItem = ({title,imageUrl,size, history,linkUrl,match}) => {
    let styles = {
        backgroundImage: `url(${imageUrl})`
        
    }
    return (
        <div className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
            <div className='background-image' style={styles}/>
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
};

export default withRouter(MenuItem);