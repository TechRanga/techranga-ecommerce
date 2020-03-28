import React from 'react';
import './collection.styles.scss';
import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shop.selector';

import CollectionItem from '../../components/collection-item/collection-item.component';

import {
    CollectionPageContainer,
    CollectionTitle,
    CollectionItemsContainer
  } from './collection.styled';

const CollectionPage = ({collection}) => {
    const {title,items} = collection;
    return(
        <CollectionPageContainer>
            <CollectionTitle>{title}</CollectionTitle>
            <CollectionItemsContainer>
            {items.map(item => (
                <CollectionItem key={item.id} item={item} />
            ))}
            </CollectionItemsContainer>
        </CollectionPageContainer>
    )
};


const mapStateToProps = (state,ownProps) => (
    {
        collection:selectCollection(ownProps.match.params.collectionId)(state)
    }
)
export default connect(mapStateToProps)(CollectionPage);

