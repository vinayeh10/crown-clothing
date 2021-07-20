import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import { Route, Switch, withRouter } from 'react-router-dom';
import SHOP from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUp from './pages/signin-singup/signin-signup.component';
import { auth } from './firebase/firebase.utils';

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
    this.unsubScribeAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user}, () => {
        if(this.state.currentUser) {
          history.push('/');
        }
      })
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
