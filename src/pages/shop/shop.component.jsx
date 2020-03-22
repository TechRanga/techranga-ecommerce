import React from 'react';
import {Route} from 'react-router-dom';
import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import {connect} from 'react-redux';
import {firestore,covertCollectionSnapshotToMap} from '../../firebase/firebase.utils';
import {updateCollections} from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

    state ={loading:true};

    unsubscribeFromSnapshot = null;

    componentDidMount(){
        const {updateCollections} = this.props
        const collectionRef = firestore.collection('collections');
        //Observable pattern:
        // collectionRef.onSnapshot(
        //     async snapshot => {
        //        const collectionsMap  = covertCollectionSnapshotToMap(snapshot);
        //        updateCollections(collectionsMap);
        //        this.setState({loading:false})
        //     }
        // );

        //Promise pattern
        collectionRef.get().then(
            async snapshot => {
                const collectionsMap  = covertCollectionSnapshotToMap(snapshot);
                updateCollections(collectionsMap);
                this.setState({loading:false})
             }
        );

        //Fetch pattern -> Returns a very nested object containing the data if using NoSQL.
        //https://firestore.googleapis.com/v1/projects/techranga-ecommerce-db/databases/(default)/documents/collections
        // fetch('https://firestore.googleapis.com/v1/projects/techranga-ecommerce-db/databases/(default)/documents/collections')
        // .then(response => response.json())
        // .then(collections => console.log(collections));
    };

    render(){
        const {match} = this.props;
        const {loading} = this.state;
        return(
            <div className='shope-page'>
                <Route exact path={`${match.path}`} render={(props)=><CollectionOverviewWithSpinner isLoading={loading} {...props}/>} />
                <Route path={`${match.path}/:collectionId`} render={(props)=><CollectionPageWithSpinner isLoading={loading} {...props}/>} />
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