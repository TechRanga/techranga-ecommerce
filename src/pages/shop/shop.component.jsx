import React,{useEffect} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {startFetchCollection} from '../../redux/shop/shop.actions';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

const ShopPage =({startFetchCollection,match})=> {

    useEffect(
        ()=>startFetchCollection(),
        [startFetchCollection]
      );
  
    return(
        <div className='shope-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
        </div>
    );
};

const mapDispatchToProps = dispatch => (
    {
        startFetchCollection:()=>dispatch(startFetchCollection())
    }
);

export default connect(null,mapDispatchToProps)(ShopPage);


//const {updateCollections} = this.props
//const collectionRef = firestore.collection('collections');
//Observable pattern:
// collectionRef.onSnapshot(
//     async snapshot => {
//        const collectionsMap  = covertCollectionSnapshotToMap(snapshot);
//        updateCollections(collectionsMap);
//        this.setState({loading:false})
//     }
// );

//Promise pattern
// collectionRef.get().then(
//     async snapshot => {
//         const collectionsMap  = covertCollectionSnapshotToMap(snapshot);
//         updateCollections(collectionsMap);
//         this.setState({loading:false})
//      }
// );

//Fetch pattern -> Returns a very nested object containing the data if using NoSQL.
//https://firestore.googleapis.com/v1/projects/techranga-ecommerce-db/databases/(default)/documents/collections
// fetch('https://firestore.googleapis.com/v1/projects/techranga-ecommerce-db/databases/(default)/documents/collections')
// .then(response => response.json())
// .then(collections => console.log(collections));