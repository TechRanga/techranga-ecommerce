import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
class Directory extends React.Component {

    constructor(){
        super();
        this.state  = {
            sections:[
                {
                    title:'Hats',
                    imageUrl:'https://1.1bb.co./cvpntL1/hats.png',
                    id:1
                },
                {
                    title:'Jackets',
                    imageUrl:'https://1.1bb.co./px2tCc3/jackets.png',
                    id:2
                },
                {
                    title:'Sneakers',
                    imageUrl:'https://1.1bb.co./0jqHpnp/sneakers.png',
                    id:3
                },
                {
                    title:'Womens',
                    imageUrl:'https://1.1bb.co./GCCdy8t/womens.png',
                    size:'large',
                    id:4
                },
                {
                    title:'Mens',
                    imageUrl:'https://1.1bb.co./R70vBrQ/men.png',
                    size:'large',
                    id:5
                }
            ]
        };
    }

    render(){
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(
                        ({title,imageUrl,id,size}) => (
                            <MenuItem title={title} key={id} imageUrl={imageUrl} size={size}/>
                        )
                    )
                }
            </div>
        )
    }


}

export default Directory;