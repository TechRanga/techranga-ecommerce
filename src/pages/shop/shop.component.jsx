import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchCollectionAsync} from '../../redux/shop/shop.actions';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

class ShopPage extends React.Component {

    componentDidMount(){
        const {fetchCollectionAsync} = this.props;
        fetchCollectionAsync();
    };

    render(){
        const {match} = this.props;
        return(
            <div className='shope-page'>
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
            </div>
        )};
};

const mapDispatchToProps = dispatch => (
    {
        fetchCollectionAsync:()=>dispatch(fetchCollectionAsync())
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