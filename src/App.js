import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import {selectCurrentUser} from './redux/user/user.selector';
import {checkUserSession} from './redux/user/user.actions';
class App extends React.Component {
  

  componentDidMount(){
    const {checkUserSession}=this.props;
    checkUserSession();
  }

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

}


const mapStateToProps = state =>(
  {
    currentUser:selectCurrentUser(state)
  }
);

const mapDispatchToProps = dispatch =>(
  {
    checkUserSession:()=>dispatch(checkUserSession())
  }
)

export default connect(mapStateToProps,mapDispatchToProps)(App);
