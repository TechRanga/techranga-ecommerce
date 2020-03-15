import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import {auth} from './firebase/firebase.utils';
// const HatsPage=()=>(
//   <div>
//     <h1>HATS</h1>
//   </div>
// );

class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      currentUser:null
    };
  };

  unsubscripeFromAuth = null;

  componentDidMount(){
   this.unsubscripeFromAuth = auth.onAuthStateChanged(
      user=>{this.setState({currentUser:user})}
    );//called when user has signed in/out > This is an open subscription. Which means we are always listening for any change in this state
  };

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signIn' component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  };

  componentWillUnmount(){
    this.unsubscripeFromAuth();//Unsubscripe oauth 
  }
  


}

export default App;
