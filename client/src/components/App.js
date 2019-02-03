import React,{ Component } from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

/*const Header=()=><h2>header</h2>*/
import Header from './Header';
import Footer from './Footer';

const Dashboard=()=><h2>dashboard</h2>
const Surveynew=()=><h2>survey</h2>
const Landing=()=><h2>landing</h2>
/*const Footer=()=><h2>footer</h2>*/


class App extends Component {

  componentDidMount(){
    this.props.fetchUser();
  }

  render() {
  return (

      <div>
      <BrowserRouter>
       <div>
         <Header/>
         <div className="container"><Route exact path="/"  component={Landing}></Route></div>
        <div className="container"><Route  path="/survey"  component={Surveynew}></Route></div>
        <Footer/>
       </div>
      </BrowserRouter>
      </div>

  );
};
};

/*export default App;*/
export default connect(null,actions)(App);