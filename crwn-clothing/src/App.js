import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import SHOP from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUp from './pages/signin-singup/signin-signup.component';
import { auth } from './firebase/firebase.utils';
import { createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import setCurrentUser from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import CheckOut from './pages/checkout/checkout.component';

class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.unsubScribeAuth = null;
  }

  componentDidMount() {
    const {history, setCurrentUser} = this.props;
    this.unsubScribeAuth = auth.onAuthStateChanged(async user => {
      const userRef = await createUserProfileDocument(user);
      if(userRef) {
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          },
          // () => {
          //   // route to homepage once signin is complete
          //   history.push('/');
          // }
          )
        });
      } else {
        setCurrentUser(user);
      }
    });
  }

  componentWillUnmount() {
    this.unsubScribeAuth();
  }
  
  render() {

    return (<div className="App">
    <Header/>
    <Switch>
      <Route exact path="/" component={Homepage}></Route>
      <Route exact path="/shop" component={SHOP}></Route>
      <Route exact path='/checkout' component={CheckOut}></Route>
      <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInSignUp />)}></Route>    
    </Switch>
    </div>)
  }
  
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state)
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(App));
