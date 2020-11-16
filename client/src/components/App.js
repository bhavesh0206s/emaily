import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions'
import Header from './Header';
import Landing from './Landing'
import Dashboard from './Dashboard'
import SurveyNew from '../components/surveys/SurveyNew'
import {ReactComponent as Background1} from "../emaily_background1.svg"
import {ReactComponent as Background2} from "../emaily_background2.svg"
import './app.css'

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {screenWidth: ''};  
  }
  
  componentDidMount(){
    this.props.fetchUser();
    let w = window.innerWidth;
    this.setState({screenWidth: w})
  }

  render() { 
    return ( 
      <div>
         {this.state.screenWidth > 600 && (
            <div style={{position: "fixed", left: 0, zIndex: "-1"}}>
              <Background1/>
            </div>
          )} 
        <BrowserRouter>
          <div style={{width: "100vw", height: "100vh", display: "flex", alignItems: "center", flexDirection: "column"}}>
            <Header/>
            <Route path='/' exact component={Landing} />
            <Route path='/surveys' exact component={Dashboard} />
            <Route path='/surveys/new' component={SurveyNew} />
          </div>
        </BrowserRouter>
        {this.state.screenWidth > 600 && (
          <div style={{position: "fixed", bottom: 0, right: 0, zIndex: "-1"}}>
            <Background2/>
          </div>
        )}
      </div>
    );
  }
}
 
export default connect(null, actions)(App);
