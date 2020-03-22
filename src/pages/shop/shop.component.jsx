import React from 'react';
import {Route} from 'react-router-dom';
import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import {connect} from 'react-redux';
import {firestore,covertCollectionSnapshotToMap} from '../../firebase/firebase.utils';
import {updateCollections} from '../../redux/shop/shop.actions';

class ShopPage extends React.Component {

    unsubscribeFromSnapshot = null;

    componentDidMount(){
        const {updateCollections} = this.props
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(
            async snapshot => {
               const collectionsMap  = covertCollectionSnapshotToMap(snapshot);
               updateCollections(collectionsMap);
            }
        );
    };

    render(){
        const {match} = this.props;
        return(
            <div className='shope-page'>
                <Route exact path={`${match.path}`} component={CollectionOverview} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        )
    }
};

const mapDispatchToProps = dispatch => (
    {
        updateCollections:collectionsMap=>dispatch(updateCollections(collectionsMap))
    }
);



export default connect(null,mapDispatchToProps)(ShopPage);