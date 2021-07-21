import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import { Route, Switch, withRouter } from 'react-router-dom';
import SHOP from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUp from './pages/signin-singup/signin-signup.component';
import { auth } from './firebase/firebase.utils';
import { createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }

    this.unsubScribeAuth = null;
  }

  componentDidMount() {
    const {history} = this.props;
    this.unsubScribeAuth = auth.onAuthStateChanged(async user => {
      const userRef = await createUserProfileDocument(user);
      if(userRef) {
        userRef.onSnapshot(snapshot => {
          this.setState({
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
        this.setState({currentUser: user});
      }
    });
  }

  componentWillUnmount() {
    this.unsubScribeAuth();
  }
  
  render() {

    return (<div className="App">
    <Header currentUser={this.state.currentUser} />
    <Switch>
      <Route exact path="/" component={Homepage}></Route>
      <Route exact path="/shop" component={SHOP}></Route>
      <Route exact path="/signin" component={SignInSignUp}></Route>    
    </Switch>
    </div>)
  }
  
}


export default withRouter(App);
