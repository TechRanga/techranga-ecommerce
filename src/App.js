import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions'
import {selectCurrentUser} from './redux/user/user.selector';

class App extends React.Component {
  

  unsubscripeFromAuth = null;

  componentDidMount(){
   const {setCurrentUser} = this.props;
   this.unsubscripeFromAuth = auth.onAuthStateChanged(
    async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot =>{
            setCurrentUser({
                  id:snapShot.id,
                  ...snapShot.data()
                });
          }
        )
      }
      setCurrentUser(userAuth);
    }
    );
  };

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/checkout' component={CheckoutPage}/>
          <Route exact path='/signIn' render={()=>this.props.currentUser?(<Redirect to='/'/>):(<SignInAndSignUpPage/>)}/>
        </Switch>
      </div>
    );
  };

  componentWillUnmount(){
    this.unsubscripeFromAuth();//Unsubscripe oauth 
  };  
}

const mapDispatchToProps = dispatch =>(
  {
    setCurrentUser: user=>dispatch(setCurrentUser(user))
  }
);

const mapStateToProps = state =>(
  {
    currentUser:selectCurrentUser(state)
  }
);

export default connect(mapStateToProps,mapDispatchToProps)(App);
